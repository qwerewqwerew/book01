---
title: ajax
parent: Javascript
layout: post
---

1. TOC
{:toc}
--

(XMLHttpRequest)[https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest]

```javascript
const url = "https://dummyjson.com/products";
const req = new XMLHttpRequest();
let div = document.querySelector("div");
req.onload = (e) => {
	const datas = req.response; // not responseText

	for (data of datas.products) {
		let { brand, parent } = data;
		div.innerHTML += `brand: ${brand}, <br> parent: ${parent}<br><hr>`;
		console.log(brand, parent);
	}
};
req.open("GET", url);
req.responseType = "json";
req.send();

```
<script async src="//jsfiddle.net/85wdprzm/56/embed/js,html,css,result/dark/"></script>
---

#### ajax2

<script async src="//jsfiddle.net/qwerew0/x4nwgtz3/52/embed/js,html,css,result/dark/"></script>
