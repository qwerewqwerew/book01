---
title: 17-Horizontal-Scroll
parent: Javascript
layout: post
---


1. TOC
{:toc}
--

# 01

### HTML

```html
<main>
		<section>
				<h1>Boop</h1>
		</section>
		<section>
				<h1>Boooom</h1>
		</section>
		<section>
				<h1>Boooom</h1>
		</section>
		<section>
				<h1>The End</h1>
		</section>
</main>
```
### HTML

```html
<main>
		<section>
				<h1>Boop</h1>
		</section>
		<section>
				<h1>Boooom</h1>
		</section>
		<section>
				<h1>Boooom</h1>
		</section>
		<section>
				<h1>The End</h1>
		</section>
</main>
```

### css

```css
html,
body {
		margin: 0;
		font-family: sans-serif;
}

main {
		overflow-x: hidden;
		display: flex;
}

.box_wrap {
		max-width: 50vw;
		max-height: 50vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
}

.box {
		width: 100px;
		height: 100px;
		background-color: blueviolet;
}

section {
		min-width: 100vw;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 4em;
}

section:nth-child(even) {
		background-color: teal;
		color: white;
}
```


### js

```js
const scrollContainer = document.querySelector("main");
scrollContainer.addEventListener("wheel", (e) => {
	e.preventDefault();
	//scrollLeft 요소의 수평 스크롤 바 위치를 반환 , e.deltaY 스크롤방향을 반환 (우측:100,좌측:-100)
	//scrollContainer의 수평 스크롤 바 위치에 스크롤 방향을 합하여 가로스크롤양이 가산되며 이동한다.
	let amt = scrollContainer.scrollLeft += e.deltaY;
});

```


---
{: .mb-10}
 
# 02-스티키컨테이너

### html

```html
<div class="vertical-section"> Content above </div>
<div class="sticky-container">
		<main>
				<section>
						<h1>Beep</h1>
				</section>
				<section>
						<h1>Boop</h1>
				</section>
				<section>
						<h1>Boooom</h1>
				</section>
				<section>
						<h1>The End</h1>
				</section>
		</main>
</div>
<div class="vertical-section"> Content Below </div>
<div class="sticky-container">
		<main>
				<section>
						<h1>Beep</h1>
				</section>
				<section>
						<h1>Boop</h1>
				</section>
				<section>
						<h1>Boooom</h1>
				</section>
				<section>
						<h1>The End</h1>
				</section>
		</main>
</div>
```
### html

```html
<div class="vertical-section"> Content above </div>
<div class="sticky-container">
		<main>
				<section>
						<h1>Beep</h1>
				</section>
				<section>
						<h1>Boop</h1>
				</section>
				<section>
						<h1>Boooom</h1>
				</section>
				<section>
						<h1>The End</h1>
				</section>
		</main>
</div>
<div class="vertical-section"> Content Below </div>
<div class="sticky-container">
		<main>
				<section>
						<h1>Beep</h1>
				</section>
				<section>
						<h1>Boop</h1>
				</section>
				<section>
						<h1>Boooom</h1>
				</section>
				<section>
						<h1>The End</h1>
				</section>
		</main>
</div>
```
### css

```css
html,
	body {
			margin: 0;
			font-family: sans-serif;
	}

	.vertical-section {
			height: 100vh;
			display: flex;
			align-items: center;
			justify-content: center;
	}

	main {
			overflow-x: hidden;
			display: flex;
			position: sticky;
			top: 0;
	}

	h1 {
			margin: 0;
			padding: 0;
	}

	section {
			min-width: 50vw;
			min-height: 100vh;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 4ch;
	}

	section:nth-child(even) {
			background-color: teal;
			color: white;
	}
```


### js

```js
(function () {
init();

let g_containerInViewport;
//초기화
function init() {
	setStickyContainersSize();
	bindEvents();
}

function bindEvents() {
	window.addEventListener("wheel", wheelHandler);
}

function setStickyContainersSize() {
	document.querySelectorAll('.sticky-container').forEach(function (container) {
			// scrollWidth=전체 스크롤바를 사용하게 되어 숨겨진 영역까지 포함한 크기를 리턴
			const stikyContainerHeight = container.querySelector('main').scrollWidth;
			//.sticky-container의 높이를 각각 스크롤 너비와 같게 함
			container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
	});
}
//요소가 화면에 들어왔는지를 확인하는 함수
function isElementInViewport(el) {
	const rect = el.getBoundingClientRect();
	//요소가 화면에 있을경운
	return rect.top <= 0 && rect.bottom > document.documentElement.clientHeight;
}

function wheelHandler(e) {
	// https://ko.javascript.info/iterable
	const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function (container) {
			return isElementInViewport(container);
	})[0];
	if (!containerInViewPort) {
			return;
	}

	let isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;//.sticky-container의 상단좌표를 스크롤보다 작은지 비교
	let isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;//.sticky-container 탑과 높이를 합하고(길이) 스크롤양보다 큰지비교
	let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;//true 는 보이는 상태

	console.log(containerInViewPort, containerInViewPort.offsetTop, isPlaceHolderBelowBottom);

	if (g_canScrollHorizontally) {
			containerInViewPort.querySelector('main').scrollLeft += e.deltaY;
	}
}
})();

```


