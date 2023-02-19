---
title: event-bubbling
parent: Javascript
layout: post
---

1. TOC
{:toc}
--

[모던자바스크립트](https://ko.javascript.info/bubbling-and-capturing#ref-1350)

### 버블링과 캡쳐링의 그림설명

<img src='{{ "/assets/img/2023-01-15_221.png"| relative_url }}'>

### 01 이벤트 버블링

** 이벤트가 상위 요소로 전파 **

`event.currentTarget` : 이벤트를 등록해 놓은 요소를 반환

`event.target` : 이벤트가 발생한 요소를 반환

### 예제

<script async src="//jsfiddle.net/qwerew0/3qwngLey/91/embed/"></script>

### 설명

three 요소를 클릭하면 상위요소까지 출력된다.
<img src='{{ "/assets/img/2023-01-15_222.png "| relative_url }}'>

### 02 이벤트 캡쳐링

** 이벤트가 하위 요소로 전파 **

### 예제

<script async src="//jsfiddle.net/qwerew0/3qwngLey/93/embed/"></script>

### 03 이벤트 위임

** 이벤트 버블링을 활용함 **
[모던자바스크립트](https://ko.javascript.info/event-delegation)
elem.closest(selector) 메서드는 elem의 상위 요소 중 selector와 일치하는 가장 근접한 조상 요소를 반환합니다.
위 코드에선 이벤트가 발생한 요소부터 시작해 위로 올라가며 가장 가까운 <td> 요소를 찾습니다.
event.target이 <td>안에 있지 않으면 그 즉시 null을 반환하므로 아무 작업도 일어나지 않습니다.
중첩 테이블이 있는 경우 event.target은 현재 테이블 바깥에 있는 <td>가 될 수도 있습니다.
이런 경우를 처리하기 위해 <td>가 팔괘도 안에 있는지를 확인합니다.
이제 진짜 td를 강조해 줍니다.

### 예제

<script async src="//jsfiddle.net/qwerew0/3qwngLey/94/embed/"></script>

### 04 버블링 막기

최초로 이벤트가 발생되는 엘리먼트의 이벤트 핸들러에`event.stopPropagation()`라는 API 를 추가

```javascript
<body onclick="alert(`버블링은 여기까지 도달하지 못합니다.`)">
	<button onclick="event.stopPropagation()">클릭해 주세요.</button>
</body>
```

모든 이벤트 버블링을 멈추고 싶은 경우에는 `event.stopImmediatePropagation()` API 추가

### 05 버블링과 캡쳐링 둘다 막기

` e.stopPropagation()`

### 예제

<script async src="//jsfiddle.net/qwerew0/3qwngLey/93/embed/"></script>
