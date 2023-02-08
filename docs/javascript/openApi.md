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

# 국내 오픈 API 사이트
| 링크 |설명 | 
| -------- | :------: | 
| 🔗[공공데이터포털]({{'https://www.data.go.kr/'| relative_url}} ){: .anc}  | 행정안정부운영, 자료제일 많음    |
| 🔗[문화데이터광장]({{'https://www.culture.go.kr/data/main/main.do#main'| relative_url}} ){: .anc}  | 문화체육관광부운영 |
| 🔗[공간정보오픈플랫폼]({{'https://www.vworld.kr/dev/v4api.do'| relative_url}} ){: .anc}  | 국토교통부운영 ,.2D/3D 지도정보, Geocoder(주소를 좌표로 변환) 제공 |
| 🔗[금융감독원]({{'https://opendart.fss.or.kr/'| relative_url}} ){: .anc}  | 금융감독원 운영 ,사업보고서 정보나 재무정보 조회 제공 |
| 🔗[네이버]({{'https://developers.naver.com/products/intro/plan/plan.md'| relative_url}} ){: .anc}  | 네이버 개발자 |
| 🔗[카카오]({{'https://developers.kakao.com/tool'| relative_url}} ){: .anc}  | 카카오개발자 |
| 🔗[서울시]({{'https://data.seoul.go.kr/together/guide/useGuide.do'| relative_url}} ){: .anc}  | 서울시운영 |
| 🔗[경기도]({{'https://data.gg.go.kr/portal/mainPage.do'| relative_url}} ){: .anc}  | 경기도운영 |

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
4.
## Inline code

Code can be rendered inline by wrapping it in single back ticks.

<div class="code-example" markdown="1">
Lorem ipsum dolor sit amet, `<inline code snippet>` adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Heading with `<inline code snippet>` in it.
{: .no_toc }
</div>
```markdown
Lorem ipsum dolor sit amet, `<inline code snippet>` adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## Heading with `<inline code snippet>` in it.
```

---

## Syntax highlighted code blocks

Use Jekyll's built-in syntax highlighting with Rouge for code blocks by using three backticks, followed by the language name:

<div class="code-example" markdown="1">
```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
```
</div>
{% highlight markdown %}


