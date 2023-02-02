https://rubenchoi.tistory.com/entry/Dialogflow-Advanced-01-%EA%B8%B0%EC%83%81%EC%B2%AD-%EB%82%A0%EC%94%A8-API-%EC%97%B0%EB%8F%99

마이페이지 > 오픈API > 개발계정에서 동네예보 조회서비스로 들어갑니다.


활용신청 상세기능정보 > 동네예보조회 > 미리보기 확인
활용신청 상세기능정보 > 동네예보조회 > 미리보기 확인 버튼을 누르면 위와 같이 테스트 화면이 나옵니다.

ServiceKey를 입력하고 날짜를 바꿔서(2015년으로 되어있네요...) 미리보기를 누릅니다. 이때, 서비스키는 마이페이지 > 오픈API > 인증키 발급현황에 있는 것을 복사합니다.


마이페이지 > 오픈API > 서비스키
값을 입력하고 미리보기를 누르면, 아래와 같은 REST API(GET 요청)가 호출됩니다.

 

apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey=당신의서비스키&pageNo=1&numOfRows=10&dataType=XML&base_date=20210429&base_time=0500&nx=1&ny=1

 

파라미터 중 마지막 nx, ny는 날씨를 알고 싶은 지역의 x, y 좌표 정보인데요, 방법은 아래 순서와 같습니다.

GET 요청으로 http://www.kma.go.kr/DFSROOT/POINT/DATA/top.json.txt 응답에서 원하는 시 코드를 가져옵니다.
GET 요청으로 http://www.kma.go.kr/DFSROOT/POINT/DATA/mdl.{시 코드}.json.txt 응답에서원하는 구 코드를 가져옵니다.
GET 요청으로 http://www.kma.go.kr/DFSROOT/POINT/DATA/leaf.{구코드}.json.txt 에서 원하는 지역 위치에 해당하는 좌표 값을 가져와서 nx, ny에 대입합니다.
이 API 호출을 기억했다가 우리 Dialogflow Webhook에서 사용하면 되겠습니다.

이제, 응답을 살펴 봅시다.


날씨 응답 결과
결과는 XML로 오는데요, POP, PTY, REH,...... 무슨 말인지 모르겠는데 이때, 아까 개발계정 상세보기 화면에서 서비스정보 > 참고문서를 엽니다.


우리가 참고할 코드값은 

예보구분

항목값

항목명

단위

압축bit수

동네예보

SKY

하늘상태

코드값

4

TMN

아침 최저기온

℃

10

TMX

낮 최고기온

℃

10

여기서 하늘 상태는

하늘상태

전운량

맑음

0 ～ 5

구름많음

6 ～ 8

흐림

9 ～ 10

이렇게 정리가 돼있네요.

 

한 가지 알아둘 점은, 요청 시 dataType=JSON으로 하면 응답이 XML 형식 대신 JSON으로 옵니다. 저는 개인적으로 JSON으로 코딩하는 것을 선호하기 때문에 JSON으로 진행하겠습니다.


dataType=JSON으로 했을 때 응답
 
Node 코드
이제 지역 정보를 받아 날씨를 리턴해주는 Node.js 코드를 짜봅시다. 지역을 입력 받으면 (없으면 디폴트로 서초구 양재동) Location REST API를 이용하여 위치 좌표 x, y를 받은 후 url을 만들어 Weather REST API를 요청하는 과정입니다.

//Weather API of Korea Meteorlogical Administration 
const http = require('http');

const DEFAULT_PARAM = { city: '서울특별시', area: '서초구', region: '양재1동' }
const SERVICE_KEY = "mef7i3p15XsNxyYygWPIFoIsCs8cCfYdhfAnDuk1dCg9a1AZT%2BOMHmxEvDKGxoDbPOi7WhoVehcgqHYxeD05BQ%3D%3D";

module.exports = class WeatherApiHandler {
    constructor(params = DEFAULT_PARAM) {
        this.params = params;
        this.address = params.city + " " + params.area + " " + params.region;
    }

    requestLocationAPI = (url, key, title) => {
        return new Promise((resolve, reject) => {
            console.log("Request " + title + "s: ", url);
            http.get(url, (res) => {
                try {
                    let json = "";
                    res.on("data", (chunk) => json += chunk);
                    res.on("end", () => {
                        let codes = JSON.parse(json);

                        console.log(title + "s: ", codes);
                        let selected;
                        codes.forEach(item => {
                            if (item.value === key) {
                                selected = item;
                            }
                        });
                        console.log("----found " + title + ": ", selected, "\n\n");
                        resolve(selected);
                    });

                } catch (err) {
                    console.log("ERROR", err);
                    reject(err);
                }
            });
        });
    }

    locationAPI = ({ city, area, region }) => {
        return new Promise((resolve, reject) => {
            let url = "http://www.kma.go.kr/DFSROOT/POINT/DATA/top.json.txt";
            this.requestLocationAPI(url, city, "CityCode").then(
                r => {
                    url = "http://www.kma.go.kr/DFSROOT/POINT/DATA/mdl." + r.code + ".json.txt";
                    r = this.requestLocationAPI(url, area, "AreaCode").then(
                        r => {
                            url = "http://www.kma.go.kr/DFSROOT/POINT/DATA/leaf." + r.code + ".json.txt";
                            r = this.requestLocationAPI(url, region, "RegionCode").then(
                                r => resolve(r)
                            );
                        }
                    );
                }
            );
        });
    }

    getToday = () => {
        var date = new Date();
        var year = date.getFullYear();
        var month = ("0" + (1 + date.getMonth())).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);
        return year + month + day;
    }

    createRequestUrl = (x, y) => {
        return "http://apis.data.go.kr/1360000/VilageFcstInfoService/getVilageFcst?serviceKey="
            + SERVICE_KEY
            + "&pageNo=1&numOfRows=10&dataType=JSON&base_date="
            + this.getToday()
            + "&base_time=0500&nx=" + x + "&ny=" + y;
    }

    createComment = (json) => {
        try {
            let data = json.response.body.items.item;
            console.log("\ncreateComment: ", data.length);
            let info = {}
            for (let i = 0; i < data.length; i++) {
                let item = data[i];
                switch (item.category) {
                    case "SKY":
                        let cloudy = parseInt(item.fcstValue);
                        if (cloudy > 8) {
                            info.sky = '흐림';
                        } else if (cloudy > 5) {
                            info.sky = '구름많음';
                        } else {
                            info.sky = '맑음';
                        }
                        break;
                    case "TMN":
                        info.morning = item.fcstValue;
                        break;
                    case "TMX":
                        info.highest = item.fcstValue;
                        break;
                    default:
                        break;
                }
            }

            let r = this.address + " 지역의 오늘 날씨는 " + info.sky
                + (info.morning ? (". 아침 최저기온은 " + info.morning + (info.highest ? "도이고 " : "도입니다.")) : '')
                + (info.highest ? (" 낮 최고기온은 " + info.highest + "도까지 오르겠습니다.") : '');
            return r;
        } catch (err) {
            console.log(err);
            return "죄송합니다만 오늘은 날씨가 오락가락해서 예보가 어렵네요. 관리자에게 물어보세요."
        }
    }

    weatherAPI = () => {
        return new Promise((resolve, reject) => {
            this.locationAPI(this.params).then(r => {
                const url = this.createRequestUrl(r.x, r.y);
                console.log("weatherAPI() ", url);
                http.get(url, (res) => {
                    var json = "";
                    res.on("data", (chunk) => {
                        json += chunk;
                    });

                    res.on("end", () => {
                        resolve(this.createComment(JSON.parse(json)));
                    });
                });
            });
        });
    }
}
테스트 코드도 만들어 볼까요?

const KMA = require('./KMAHandler.js');
new KMA().weatherAPI().then(r => console.log("\n\n--------RESULT---------", r));
실행해 볼까요?


잘 나오네요. 이전에 다뤘던 날씨 대화를 업데이트해 봅시다.

 
기존 코드 수정
업데이트는 간단합니다. 새로 만든 클래스를 추가하고 newagent-tdyh/functions/index.js를 수정합니다.

const https = require('https');
const WeatherApi = require('./util/KMAHandler.js');

...중략...

function getWeather(agent) {
  console.log("----------------getWeather");
  return new WeatherApi().weatherAPI()
  .then(result => agent.add(result))
  .catch((err) => agent.add(err));
}

...이하 생략...
배포 후 테스트해 봅시다.