---
layout: default
title: 07 오픈API
parent: Javascript
grand_parent:
---

# 목차

{: .no_toc}

1. TOC
{:toc}

---
# php 소스 링크
🔗[link]({{'https://www.notion.so/mango2/04-RSS-cc720ee37fb14574a78de16b15b72578'| relative_url}} ){: .anc}


# 국내 오픈 API 사이트

| 링크                                                                    |           설명           |
| ----------------------------------------------------------------------- | :----------------------: | ------------------------------------------------------------------ |
| 🔗[공공데이터포털]({{'https://www.data.go.kr/'                          | relative_url}} ){: .anc} | 행정안정부운영, 자료제일 많음                                      |
| 🔗[문화데이터광장]({{'https://www.culture.go.kr/data/main/main.do#main' | relative_url}} ){: .anc} | 문화체육관광부운영                                                 |
| 🔗[공간정보오픈플랫폼]({{'https://www.vworld.kr/dev/v4api.do'           | relative_url}} ){: .anc} | 국토교통부운영 ,.2D/3D 지도정보, Geocoder(주소를 좌표로 변환) 제공 |
| 🔗[금융감독원]({{'https://opendart.fss.or.kr/'                          | relative_url}} ){: .anc} | 금융감독원 운영 ,사업보고서 정보나 재무정보 조회 제공              |
| 🔗[네이버]({{'https://developers.naver.com/products/intro/plan/plan.md' | relative_url}} ){: .anc} | 네이버 개발자                                                      |
| 🔗[카카오]({{'https://developers.kakao.com/tool'                        | relative_url}} ){: .anc} | 카카오개발자                                                       |
| 🔗[서울시]({{'https://data.seoul.go.kr/together/guide/useGuide.do'      | relative_url}} ){: .anc} | 서울시운영                                                         |
| 🔗[경기도]({{'https://data.gg.go.kr/portal/mainPage.do'                 | relative_url}} ){: .anc} | 경기도운영                                                         |

---

{: .mb-10}

# 사용신청

1. 공공데이터포털 로그인
2. `기상청 단기예보` 조회
   ![]({{'/assets/img/api2.jpg'| relative_url}} )
3. 활용신청 클릭
   ![]({{'/assets/img/api3.jpg'| relative_url}} )

---

{: .mb-10}

# 미리보기

1. 승인후 서비스내역에 들어간다.
   ![]({{'/assets/img/api4.jpg'| relative_url}} )q

2. 서비스 인증 키를 확인후 복사한다.
   ![]({{'/assets/img/api5.jpg'| relative_url}} )

3. 미리보기 실행
   ![]({{'/assets/img/api6.jpg'| relative_url}} )

![]({{'/assets/img/api7.jpg'| relative_url}} )

# 코드설명

상세보기의 javascript 예제 클릭

```javascript
//변수준비
let div = document.querySelector("div")
let date = new Date()
let year = String(date.getFullYear())
let month = String(date.getMonth() + 1).padStart(2, "0")
let day = String(date.getDate()).padStart(2, "0")
let now = year + month + day
let datas, wether

//통신준비
let xhr = new XMLHttpRequest()
//https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=eRJMein3NmELUx%2FLuPHfoRdlohmVIL3MZGIGrRpkWdIm%2FnvpP%2FvML0v%2FvRtEDnylTAkvdh4qD7Iw19Op%2Fqmz8w%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20230205&base_time=0600&nx=55&ny=127
let url =
  "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst" /*URL*/
let queryParams =
  "?" +
  encodeURIComponent("serviceKey") +
  "=" +
  "eRJMein3NmELUx%2FLuPHfoRdlohmVIL3MZGIGrRpkWdIm%2FnvpP%2FvML0v%2FvRtEDnylTAkvdh4qD7Iw19Op%2Fqmz8w%3D%3D" /*Service Key*/
queryParams +=
  "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1") /**/
queryParams +=
  "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("1000") /**/
queryParams +=
  "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("JSON") /**/
queryParams +=
  "&" + encodeURIComponent("base_date") + "=" + encodeURIComponent(now) /**/
queryParams +=
  "&" + encodeURIComponent("base_time") + "=" + encodeURIComponent("0600") /**/
queryParams +=
  "&" + encodeURIComponent("nx") + "=" + encodeURIComponent("55") /**/
queryParams +=
  "&" + encodeURIComponent("ny") + "=" + encodeURIComponent("127") /**/
xhr.open("GET", url + queryParams)

xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    //alert('Status: ' + this.status + 'nHeaders: ' + JSON.stringify(this.getAllResponseHeaders()) + 'nBody: ' + this.responseText);
    datas = this.response.parse(datas)
  }
}
xhr.responseType = "json"
xhr.send("")

function parse(datas) {
  const text = JSON.stringify(datas)
  div.textContent = text
}
/* */
parse()
```

🔗[위도경도변환xml]({{'http://www.kma.go.kr/XML/weather/sfc_web_map.xml'| relative_url}} ){: .anc}

🔗[프론티어변환]({{'https://fronteer.kr/service/kmaxy'| relative_url}} ){: .anc}



---
{: .mb-10}
 
# 작성

오늘날짜 가져오는 스크립트

```js
let date = new Date();
let year = String(date.getFullYear());
let month = String(date.getMonth() + 1).padStart(2, "0")
let day = String(date.getDate()).padStart(2, "0");
let now = year + month + day;
let datas, wether;


const weatherContainer = document.getElementById('container');

let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst';
let queryParams =
  "?" +
  encodeURIComponent("serviceKey") +
  "=" +
  "eRJMein3NmELUx%2FLuPHfoRdlohmVIL3MZGIGrRpkWdIm%2FnvpP%2FvML0v%2FvRtEDnylTAkvdh4qD7Iw19Op%2Fqmz8w%3D%3D" /*Service Key*/
queryParams +=
  "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1") /**/
queryParams +=
  "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("1000") /**/
queryParams +=
  "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("JSON") /**/
queryParams +=
  "&" + encodeURIComponent("base_date") + "=" + encodeURIComponent(now) /**/
queryParams +=
  "&" + encodeURIComponent("base_time") + "=" + encodeURIComponent("0600") /**/
queryParams +=
  "&" + encodeURIComponent("nx") + "=" + encodeURIComponent("55") /**/
queryParams +=
  "&" + encodeURIComponent("ny") + "=" + encodeURIComponent("127") /**/
/**
 * fetch로는 데이터를 바로 사용할 수 없다.
fetch를 사용할 땐 두 단계를 거쳐야 한다. 먼저 올바른 url로 요청을 보내야 하고, 바로 뒤에오는 응답에 대해 json()을 해줘야한다
 * 
 * 
 */


async function getWethers() {
  const res = await fetch(
    `${url}${queryParams}`
  );
  const data = await res.json();
  return data;

}


async function showWethers() {
  const wethers =await getWethers();
  const datas=wethers.response.body.items.item;
  console.log(wethers,datas);
  datas.forEach(data => {
    const WetherEl = document.createElement('div');
    WetherEl.classList.add('wethers');
    WetherEl.innerHTML = `
      <div class="number">측정시간: ${data.baseTime}</div>
      <h2 class="wether-title">카테고리: ${data.category}</h2>
      <p class="wether-body">측정값:${data.obsrValue}</p>
    `;

    weatherContainer.appendChild(postEl);
  });
}

showWeathers();


```

# 응답코드별

{: .new }
>
> 🔑값이 900이상 -900이하일 경우 누락된 값으로 판단
> 🔑초단기실황은 10분단위로 업데이트
>

| category        | 설명         | 
|:-------------|:------------------|
| T1H    | 기온 ℃|
| RN1 | (1시간 강수량 mm)  |
| UUU  |(동서바람성분 m/s) |
| VVV  |(남북바람성분 m/s) |
| REH   |(습도 %) |
| PTY   | (강수형태)  [(초단기)없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4), 빗방울(5), 빗방울/눈날림(6), 눈날림(7) ] <br/>[(단기) 없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4) ]|
| VEC   | (풍향 deg) |
| WSD | (풍속 m/s)  |
| nx,ny  | (관측지즘) |



---
{: .mb-10}
 
# 초단기실황 코드


weather.html
{: .label .label-purple }

```html
...

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
  <title>Document</title>
</head>

<body>

<div id="container">
  <h1>기상청</h1>
  <h2>오늘의날씨</h2>
  <table class="table table-hover">
    <thead>
      <tr>
        <td>날짜</td>
        <td>시간</td>
        <td>조회</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="weather-temp">기온</td>
        <td id="RN1">시간</td>
        <td class="weather-state-text">조회</td>
      </tr>
    </tbody>
  </table>
</div>

...

```

weather.js
{: .label .label-purple }


```js
let date = new Date();
let year = String(date.getFullYear());
let month = String(date.getMonth() + 1).padStart(2, "0")
let day = String(date.getDate()).padStart(2, "0");
let now = year + month + day;
let datas, wether;
const castBox = document.getElementById('container');
let statusText,locText, rainIcon = ['<i class="bi bi-brightness-high-fill"></i>', '<i class="bi bi-brightness-alt-high-fill"></i>', '<i class="bi bi-cloud-sun-fill"></i>', '<i class="bi bi-cloud-drizzle-fill"></i>',];

let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0';
let params = {
  getInfo: ['getUltraSrtNcst', 'getVilageFcst'],//0, 초단기실황, 1 단기예보
  key: 'eRJMein3NmELUx%2FLuPHfoRdlohmVIL3MZGIGrRpkWdIm%2FnvpP%2FvML0v%2FvRtEDnylTAkvdh4qD7Iw19Op%2Fqmz8w%3D%3D',
  pageNo: '1',
  numOfRows: '1000',
  dataType: 'JSON',
  base_date: now,
  base_time: '0600',
  nx: '73',
  ny: '134',
}

async function getcast() {
  const res = await fetch(
    `${url}/${params.getInfo[0]}?serviceKey=${params.key}&pageNo=${params.key}&numOfRows=${params.numOfRows}&dataType=${params.dataType}&base_date=${params.base_date}&base_time=${params.base_time}&nx=${params.nx}&ny=${params.ny}`
  );
  const data = await res.json();
  return data;
}

// Show cast in DOM
async function showcast() {
  const cast = await getcast();
  const datas = cast.response.body.items.item;

  let cast = {
    "baseDate": datas[0].baseDate,
    "rain": datas[0].obsrValue,
    "rainDesc": function () {
      let info = this.rain;
      if (info == 0) {
        statusText = "맑음";
        rainIcon = rainIcon[0];
      } else {
        if (info == 1) {
          statusText = "비";
          rainIcon = rainIcon[1];
        } else if (info == 2) {
          statusText = "비/눈";
          rainIcon = rainIcon[2];
        } else if (info == 3) {
          statusText = "눈";
          rainIcon = rainIcon[3];
        }
      }
    },
    "temperature": datas[3].obsrValue,
    "windSpeed": datas[7].obsrValue,
    "nx": datas[0].nx,
    "ny": datas[0].ny,
    "loc": function () {
      let point = [this.nx, this.ny];
      if (point[0] == 73 && point[1] == 134) {
        return locText = "경기북부/강원";
      }
    }
  };

  cast.rainDesc();
  cast.loc();

  const castEl = document.createElement('table');
  const tr = document.createElement('tr');
  castEl.classList.add('table');
  tr.innerHTML = `
    <td class="number">오늘날짜: ${cast.baseDate}</td>
    <td class="number">지역: ${locText}</td>
    <td class="rain-state">강수형태:${statusText}${rainIcon}</td>
    <td class="temp-state">기온:${cast.temperature}도</td>
    <td class="temp-state">바람:${cast.windSpeed}ms</td>
  `;
  castEl.appendChild(tr);
  castBox.appendChild(castEl);
}

function loc() {
  document.querySelector('#location').addEventListener('change', function (e) {
    const tg = this.value;
    let changeLoc = tg.split(',');
    _nx = changeLoc[0];
    _ny = changeLoc[1];
    console.log(_nx, _ny);
  });

}

showcast();


```


---
{: .mb-10}
 
# 에러유형

| code        | msg          | 내용 |
|:-------------|:------------------|:------|
| 01           | Application Error | 제공기관 서비스 제공 상태가 원할하지 않습니다. 서비스 제공기관의 관리자에게 문의하시기 바랍니다. |
| 02           | DB Error | 제공기관 서비스 제공 상태가 원할하지 않습니다. 서비스 제공기관의 관리자에게 문의하시기 바랍니다. |
| 04           | HTTP Error | 제공기관 서비스 제공 상태가 원할하지 않습니다. 서비스 제공기관의 관리자에게 문의하시기 바랍니다. |
| 05           | service time out | 제공기관 서비스 제공 상태가 원할하지 않습니다. 서비스 제공기관의 관리자에게 문의하시기 바랍니다. |
| 10           | 잘못된 요청 파라미터 에러 | OpenApi 요청시 ServiceKey 파라미터가 없음•OpenAPI 요청 값에서 ServiceKey 파라미터가 누락되었습니다.•OpenAPI 요청 URL을 확인하시기 바랍니다. |
| 11           |필수 요청 파라미터가 없음 | 요청하신 OpenApi의 필수 파라미터가 누락되었습니다.기술문서를 다시 한번 확인하시어 주시기 바랍니다. |
| 12           | 해당 오픈 API 서비스가 없거나 폐기됨 ,OpenApi 호출시 URL이 잘못됨 | •제공기관 관리자에게 폐기된 서비스인지 확인합니다. 폐기된 서비스가 아니면 개발가이드에서 OpenApi 요청 URL을 다시 확인하시기 바랍니다. |
| 20           | 서비스 접근 거부 활용승인이 되지 않은 OpenApi 호출 | •OpenAPI활용신청정보의 승인상태를 확인하시기 바랍니다. •활용신청에 대해 제공기관 담당자가 확인 후 ‘승인’ 이후 부터 사용할 수 있습니다. •신청 후 2~3일이 소요되고 결과는 회원가입 시 등록한 e-mail로 발송합니다|
| 22           | 서비스 요청 제한 횟수 초과 에러 일일 활용건수가 초과함(활용건수 증가 필요) | •OpenAPI 활용신청정보의 서비스 상세기능별 일일트래픽량을 확인하시기 바랍니다.•개발계정의 경우 제공기관에서 정의한 트래픽을 초과하여 활용할 수 없습니다 •운영계정의 경우 변경신청을 통해서 일일트래픽량을 변경할 수 있습니다. |
| 30           |등록되지 않은 서비스 키 잘못된 서비스키를 사용하였거나 서비스키를 URL 인코딩하지 않음 | •OpenAPI 활용신청정보의 발급받은 서비스키를 다시 확인하시기 바랍니다.•서비스키 값이 같다면 서비스키가 URL 인코딩 되었는지 다시 확인하시기 바랍니다. |
| 31           |기한 만료된 서비스 키 OpenApi 사용기간이 만료됨 (활용연장신청 후 사용가능) | •OpenAPI 활용신청정보의 활용기간을 확인합니다.•활용기간이 지난 서비스는 이용할 수 없으며 연장신청을 통해승인받은 후 다시 이용이 가능합니다.|
| 32           |등록되지 않은 도메인명 또는 IP 주소 활용신청한 서버의 IP와 실제 OpenAPI호출한 서버가 다를 경우|•OpenAPI 활용신청정보의 등록된 도메인명이나 IP주소를 다시 확인합니다.
•IP나 도메인의 정보를 변경하기 위해 변경신청을 할 수 있습니다. |

