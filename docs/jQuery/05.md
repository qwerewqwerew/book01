---
title: 05-fullPage
date: 2023-01-07
parent: jQuery
layout: post
---

---

## 01 풀페이지

[풀페이지 공식문서](https://alvarotrigo.com/fullPage/ko/)

<a href='{{ "/assets/img/fullPage.js-2.9.7.zip"| relative_url }}'> 파일다운로드 </a>

---

** `id="fullpage` 를 최상위 요소에 꼭 넣어야 한다 **
1. 3 버전 이후로 유료화 되었으므로 2버전 으로 추가한다.

### html

```html
<header>
	<nav>
		<ul>
			<li data-menuanchor="section1"><a href="#section1">section1</a></li>
			<li data-menuanchor="section2"><a href="#section2">section2</a></li>
			<li data-menuanchor="section3"><a href="#section3">section3</a></li>
			<li data-menuanchor="section4"><a href="#section4">section4</a></li>
			<li data-menuanchor="section5"><a href="#section5">section5</a></li>
		</ul>
	</nav>
</header>
<main id="fullpage">
	<section class="section">
		<h2>section 1</h2>
	</section>
	<section class="section">
		<div class="slide">
			<h3>slide 01</h3>
		</div>
		<div class="slide">
			<h3>slide 02</h3>
		</div>
		<div class="slide">
			<h3>slide 03</h3>
		</div>
	</section>
	<section class="section">
		<h2>section 3</h2>
	</section>
	<section class="section">
		<h2>section 4</h2>
	</section>
	<footer class="section fp-auto-height">
		<h2>footer</h2>
	</footer>
</main>
```
### script

```javascript
$(function () {
	$("#fullpage").fullpage({
		//options here
		anchors: ["section1", "section2", "section3", "section4", "section5"],//앵커
		navigation: true, // 네비게이션
		navigationPosition: "right", //네비게이션 위치
		sectionsColor: ["#ccc", "#bbb", "#ddd", "#eee", "#fff"],//섹션색상
		afterLoad: function (anchorLink, index) { // 섹션이동후 실행 콜백함수
			console.log("현재 섹션 번호는 " + index);
			// if(index == 5){
			//     alert('마지막입니다.');
			// }
		},
		afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) { //슬라이드 실행후 콜백함수
			console.log("현재 슬라이드 번호는" + slideIndex);
		},
	});
});
```
