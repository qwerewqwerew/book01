---
title: 시간표시
date: 2023-01-07
parent: Javascript
layout: post
---

# 01 시간표시하기

## 01-01 `toLocaleTimeString()` : 현지시간으로 표시

> toLocaleTimeString() 메서드는 Date 객체의 날짜의 시간 부분을 지역에 맞는 언어 포맷으로 반환
>
>
{: .block-tip }

문법:
`StringdateStringtoLocaleTimeString([Stringlocales[, Objectoptions]])`

예시:

```javascript
/* 시간을 표시하기 */
var now = new Date();
var display = now.toLocaleTimeString();
console.log(display);
//var time=setInterval(display,1000)
document.write("현재 시각은 " + display);
```

출력:
![](/assets/img/2023-01-08_216.jpg)

---

##  01-02 `Date()`

문법:
`new Date(year, month, date, hours, minutes, seconds, ms)`

+ year는 반드시 네 자리 숫자로 작성
+ month는 0(1월)부터 11(12월) 사이의 숫자로 작성
+ date는 일을 나타내는데, 값이 없는 경우엔 1일로 처리됨
+ hours/minutes/seconds/ms에 값이 없는 경우엔 0으로 처리됨

예제:
```javascript
var today = new Date();
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var milliSecond = today.getMilliseconds();
console.log(`${hour} 시 ${minute}분 ${second} 초 ${milliSecond}`)
```
실행:
![](/assets/img/2023-01-08_217.jpg)



>#### 날짜를 설정할땐
>
> setFullYear(year, [month], [date])<br>
> setMonth(month, [date])<br>
> setDate(date)<br>
> setHours(hour, [min], [sec], [ms])<br>
> setMinutes(min, [sec], [ms])<br>
> setSeconds(sec, [ms])<br>
> setMilliseconds(ms)<br>
> setTime(milliseconds) (1970년 1월 1일 00:00:00 UTC부터 밀리초 이후를 나타내는 날짜를 설정)<br>
> 
{: .block-tip }

>#### 날짜를 얻어올땐
>
> getFullYear(year, [month], [date])<br>
> getMonth(month, [date])<br>
> getDate(date)<br>
> getHours(hour, [min], [sec], [ms])<br>
> getMinutes(min, [sec], [ms])<br>
> getSeconds(sec, [ms])<br>
> getMilliseconds(ms)<br>
> getTime(milliseconds)
> 
{: .block-tip }

>#### 현재 시간을 알려주는 Date.now()
>
>  1970년 1월 1일 0시 0분 0초부터 현재까지의 시간을 밀리초(millisecond) 단위의 정수로 반환
> 
{: .block-tip }
---

## 01-03 RGB 시계

>#### 사용할 이미지
>+ ![](/assets/img/m.png)
>+ ![](/assets/img/clock.png)
>+ ![](/assets/img/h.png) 
{: .block-tip }

#### html
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title>sample5</title>
    <script src="clock(vanilla).js" defer></script>
    <style>
    </style>
</head>
<body>
    <div id="clock">
        <img alt="clock" src="clock.png"/>
        <img alt="hour" src="h.png" class="hour"/>
        <img alt="min" src="m.png" class="min"/>
        <div class="sec"></div>
    </div>
	<div class="digital"></div>
</body>
</html>

```
#### css

```css
*{margin:0;padding:0}
#clock{position:relative;width:300px;height:300px;margin:100px auto 0}
#clock img{position:absolute;top:0;left:0;display:block}
.sec{width:3px;height:140px;transform-origin:50% 100%;position:absolute;right:50%;top:3%}

```
#### js

```javascript
function clock() {
	var today = new Date();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	var milliSecond = today.getMilliseconds();
	if (hour > 11) hour -= 12;
	var degreeOfSecond = second * 6 + (milliSecond * 6) / 1000;
	var degreeOfMinute = minute * 6 + degreeOfSecond / 60;
	var degreeOfHour = hour * 30 + degreeOfMinute / 12;
	var redNeedle = 0;
	var greenNeedle = 0;
	var blueNeedle = 0;
	if (degreeOfSecond < 90) {
		redNeedle = Math.round((255 * degreeOfSecond) / 90);
	} else if (90 <= degreeOfSecond && degreeOfSecond < 180) {
		redNeedle = Math.round(255 - 255 * ((degreeOfSecond - 90) / 90));
		greenNeedle = Math.round((255 * (degreeOfSecond - 90)) / 90);
	} else if (180 <= degreeOfSecond && degreeOfSecond < 270) {
		greenNeedle = Math.round(255 - (255 * (degreeOfSecond - 180)) / 90);
		blueNeedle = Math.round((255 * (degreeOfSecond - 180)) / 90);
	} else {
		blueNeedle = Math.round(255 - (255 * (degreeOfSecond - 270)) / 90);
	}
	var needles = Array.apply(null, document.querySelector("#clock").children);
	needles[1].style.transform = "rotate(" + degreeOfHour + "deg)";
	needles[2].style.transform = "rotate(" + degreeOfMinute + "deg)";
	needles[3].style.transform = "rotate(" + degreeOfSecond + "deg)";
	needles[3].style.backgroundColor = "rgb(" + redNeedle + "," + greenNeedle + "," + blueNeedle + ")";
}
setInterval(clock, 1000 / 60);

```
#### 실행
<img src='{{ "/assets/img/clock_fn.png"| relative_url }}'>
