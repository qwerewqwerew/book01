---
layout: default
title: 12-parallax
parent: Javascript
---

# 목차

{: .no_toc}

1. TOC
{:toc}

---

# MouseEffect

{: .note }
>
> 마우스 포인터가 움직일때 요소에 시간차를 효과를 적용해보자
>


html
{: .label .label-purple }

```html
<div class="parallax-wrap">
		<span value="-15"></span>
		<span value="5"></span>
		<span value="30"></span>
		<span value="-5"></span>
		<span value="15"></span>
		<h2>Parallax effect</h2>
	</div>
```


css
{: .label .label-purple }

```css
body { margin: 0; height: 100vh; background-color: #bd1060; overflow: hidden; } 
 * { margin: 0; padding: 0; box-sizing: border-box; font-family: sans-serif; } 
 .parallax-wrap { position: relative; width: 100%; height: 100vh; overflow: hidden; display: flex; justify-content: center; align-items: center; } 
 .parallax-wrap h2 { position: relative; font-size: 100px; color: white; z-index: 2; text-align: center; } 
 .parallax-wrap span { position: absolute; height: 20px; width: 20px; border-radius: 100%; } 
 .parallax-wrap span:nth-child(1) { top: 70%; left: 70%; background: blue; z-index: 3; } 
 .parallax-wrap span:nth-child(2) { top: 60%; left: 80%; background: yellow; z-index: 3; } 
 .parallax-wrap span:nth-child(3) { top: 40%; left: 60%; background: green; z-index: 3; } 
 .parallax-wrap span:nth-child(4) { top: 70%; left: 40%; background: red; z-index: 3; } 
 .parallax-wrap span:nth-child(5) { top: 40%; left: 30%; background: purple; z-index: 3; } 
```


js
{: .label .label-purple }

```js
document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".parallax-wrap span").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}
```