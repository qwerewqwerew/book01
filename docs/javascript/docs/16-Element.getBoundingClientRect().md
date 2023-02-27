---
title: 16-Element.getBoundingClientRect()
parent: Javascript
layout: post
---


1. TOC
{:toc}
--

🔗[mdn]({{'https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect'| relative_url}} ){: .anc}

# 구문

`domRect = element.getBoundingClientRect();`
 
 **엘리먼트의 크기와 뷰포트에 상대적인 위치 정보를 제공**

![]({{'https://developer.mozilla.org/ko/docs/Web/API/Element/getBoundingClientRect/element-box-diagram.png'| relative_url}} )


---
{: .mb-10}
 
# 02

### HTML

```html
<div></div>
```

### css

```css
div {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}

```
### js

```js
let elem = document.querySelector('div');
let rect = elem.getBoundingClientRect();
for (var key in rect) {
    let para = document.createElement('p');
		//<p>
    para.textContent  = `${ key } : ${ rect[key] }`;
    document.body.appendChild(para);
}

```
뷰포트 기준으로 위치값 반환 
{: .bg-yellow-000}




---
{: .mb-10}
 
# 03

### HTML

```html
  <div></div>
  <div id="example"></div>
  <div id="controls"></div>
```


### css

```css
div#example {
	width: 400px;
	height: 200px;
	padding: 20px;
	margin: 50px auto;
	background: purple;
}

body {
	padding-bottom: 1000px;
}

p {
	margin: 0;
}
```

### js

```js
function update() {
	const container = document.getElementById("controls");
	const elem = document.querySelector('div');
	const rect = elem.getBoundingClientRect();

	container.innerHTML = '';
	for (let key in rect) {
		let para = document.createElement('p');
		para.textContent = `${key} : ${rect[key]}`;
		container.appendChild(para);
	}
}
document.addEventListener('scroll', update);
update();

```

