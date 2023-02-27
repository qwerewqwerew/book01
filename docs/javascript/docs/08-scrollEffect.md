---
layout: default
title: 08-스크롤효과
parent: Javascript
---

# 목차
{: .no_toc}

1. TOC
{:toc}

---

## HTML

```html
<nav>
  <ul class="gnb">
    <li class="on"><a href="#section1">section1</a></li>
    <li><a href="#section2">section2</a></li>
    <li><a href="#section3">section3</a></li>
    <li><a href="#section4">section4</a></li>
    <li><a href="#section5">section5</a></li>

  </ul>
</nav>
<ul class="sideNav">
  <li class="on"><a href="#section1">section1</a></li>
  <li><a href="#section2">section2</a></li>
  <li><a href="#section3">section3</a></li>
  <li><a href="#section4">section4</a></li>
  <li><a href="#section5">section5</a></li>
</ul>
<div class="container">
  <div class="section" id="section1" data-delay="0">
    <figure class="reveal">
      <figcaption>section1</figcaption>
      <div class="img"></div>
    </figure>
  </div>
  <div class="section" id="section2" data-delay="50">
    <figure class="reveal">
      <figcaption>section2</figcaption>
      <div class="img"></div>
    </figure>
  </div>
  <div class="section" id="section3" data-delay="100">
    <div class="stage">
      <div class="left box"></div>
      <div class="right box"></div>
    </div>
  </div>
  <div class="section" id="section4">
    <div class="parallax">
      <div class="pbox" data-delay="50">1</div>
      <div class="pbox" data-delay="150">2</div>
      <div class="pbox" data-delay="300">3</div>
    </div>
  </div>
  <div class="section" id="section5">
    <div class="parallax">
      <div class="pbox" data-delay="600">1</div>
      <div class="pbox" data-delay="800">2</div>
      <div class="pbox" data-delay="1000">3</div>
    </div>
  </div>
</div>
```



---
{: .mb-10}
 
# CSS

```css
* {margin: 0;padding: 0;box-sizing: border-box; } 
body {background-color: #f5f5f5; } 
ul {list-style: none; } 
a {text-decoration: none; } 
/* nav */
nav {position: absolute;top: 0;z-index: 2;background-color: rgba(0, 0, 0, 0.4);padding: 15px 20px;width: 100%; } 
nav.sticky {background: rgba(255, 0, 0, 0.363);position: fixed;z-index: 9999999; } 
nav .gnb {display: flex;width: 100%;max-width: 1600px;margin: auto; } 
nav .gnb {display: flex;width: 100%;max-width: 1600px;margin: auto; } 
nav .gnb li {list-style: none;flex: 1 1 200px; } 
nav .gnb li a {color: #fff;text-decoration: none;display: inline-block;padding: 5px;width: 50px;height: 30px;text-align: center;line-height: 30px;position: relative; } 
nav .gnb li a::before {content: "";position: absolute;top: 0;left: 0;width: 100%;height: 2px;background-color: #3d3d3d;transform: scaleX(0);transition: all 0.5s;transform-origin: left; } 
nav .gnb li a::after {content: "";position: absolute;bottom: 0;left: 0;width: 100%;height: 2px;background-color: #3d3d3d;transform: scaleX(0);transition: all 0.5s;transform-origin: right; } 
nav ul.gnb li.on a::before,
nav ul.gnb li.on a::after,
nav ul.gnb li a:hover::before,
nav ul.gnb li a:hover::after {transform: scaleX(1); } 

/* sideNav */
.sideNav {position: fixed;top: 10%;right: 10%;transition: top 1s;z-index: 9999; } 
.sideNav a {display: inline-block;padding: 1em;background-color: rgba(0, 0, 0, 0.5);color: #fff;margin-bottom: 1em; } 
.sideNav li.on a:before {content: "😺"; } 

/* container */
.container {max-width: 1600px;margin: auto;width: 100%;overflow: hidden; } 

/* section */
.section {width: 100%;max-width: 1400px;margin: 5em auto;padding-top: 10em;background: #f5f5f5;height: calc(100vh - 10em);position: relative; } 
.section .reveal,
.section .stage {width: 100%;height: 100%;position: relative;overflow: hidden; } 
.section .reveal .img {position: absolute;left: -10%;top: 8rem;width: 120%;height: 500px;background-repeat: no-repeat;background-size: cover;filter: saturate(0%) blur(5px);background-image: url(https://placedog.net/500);transition: filter 1s ease-in-out;opacity: 0; } 
.section .reveal .img:hover {transition: filter 1s ease-in-out;filter: saturate(100%) blur(0); } 
.section .reveal figcaption {position: absolute;font-size: 10rem;color: #d6d6d6;opacity: 0;top: -2.5rem; } 
.section .reveal::before {content: "";position: absolute;right: 0;top: 0;width: 0;height: 100%;z-index: 100;background-color: #494949;backdrop-filter: blur(20px); } 

/*section3 */
.stage {top:20%;}
.box {width: 40%;height: 20rem;background-color: red;position: absolute;transition: left 1s; } 
.left {left: -100%; transition-delay: 0; } 
.right {left: 100%; transition-delay: 1s; } 
.sectionIn .left {left: 0%; } 
.sectionIn .right {left: 60%; } 

/* section4 */
.parallax{display:flex; justify-content:space-around; height:500px;}
.parallax .pbox {width: 20%;height: 20rem;background-color: red; transition: transform 2s; transform:translateY(200%); animation: opacity 2s alternate; } 
.parallax .pbox.sectionIn {transform:translateY(10%);} 


/*sectionIn */
.section.sectionIn .reveal .img,
.section.sectionIn .reveal figcaption {animation: opacity 1s linear forwards; } 
.section.sectionIn .reveal::before {animation: reveal 1s cubic-bezier(0.77, 0, 0.18, 1); } 

@keyframes reveal {0% {width: 0;left: 0; } 
50% {width: 100%;left: 0; } 
80% {width: 100%;left: 0; } 
100% {width: 0;left: 100%; } 
}
@keyframes opacity {0% {opacity: 0; } 
60% {opacity: 0; } 
80% {opacity: 1; } 
100% {opacity: 1; } 
}

```



---
{: .mb-10}
 
# JS

```js
const gnb = document.querySelectorAll(".gnb>li");
const gnbAnc = document.querySelectorAll(".gnb>li>a");
const sideNav = document.querySelectorAll(".sideNav>li");
const sideNavAnc = document.querySelectorAll(".sideNav>li>a");
const nav = document.querySelector("nav");
let winH = window.innerHeight;
const sections = document.querySelectorAll(".section");
let winSct;

window.addEventListener("scroll", function () {
	winSct = (window.pageYOffset || document.documentElement.scrollTop || window.scrollY) + winH / 5;
	//console.log(winSct);
	gnbAni(winSct);
	sideNavAni();
});

gnbAnc.forEach((el) => {
	el.addEventListener("click", function (e) {
		e.preventDefault();
		//console.log(el.getAttribute("href"), this);
		document.querySelector(el.getAttribute("href")).scrollIntoView({ behavior: "smooth", block: "center" });
	});
});

sideNavAnc.forEach((el) => {
	el.addEventListener("click", function (e) {
		e.preventDefault();
		document.querySelector(el.getAttribute("href")).scrollIntoView({ behavior: "smooth", block: "center" });
	});
});

function sideNavAni() {
	document.querySelector(".sideNav").style.top = "-20%";
	setTimeout(() => {
		document.querySelector(".sideNav").style.top = parseInt(((winH - document.querySelector(".sideNav").clientHeight)) / 2) + "px";
	}, 400);
}

const gnbAni = (n) => {
	sections.forEach((o, i) => {
		let sct = o.offsetTop;
		const delay = o.dataset.delay;
		/* 스티키헤더 */
		n > sections[0].offsetTop ? nav.classList.add("sticky") : nav.classList.remove("sticky");
		//console.log(delay);
		if (n > sct) {
			if (delay == undefined) {
				/*console.log(o.hasChildNodes("parallax"));  */
				/* parallax 자식이 있는지 확인 */
				if (o.hasChildNodes("parallax")) {
					parallaxAni();
				}
				else { o.classList.add("sectionIn"); }
			} else {
				setTimeout(() => {
					return o.classList.add("sectionIn");
				}, delay);
			}

			gnb.forEach((el) => {
				el.classList.remove("on");
			});
			gnb[i].classList.add("on");
			sideNav.forEach((el) => {
				el.classList.remove("on");
			});
			sideNav[i].classList.add("on");
		} else {
			o.classList.remove("sectionIn");
		}

	});
};
function parallaxAni() {
	const parallax = document.querySelectorAll('.parallax>.pbox');
	parallax.forEach((o) => {
		o.classList.remove("sectionIn");
		const parallaxDelay = o.getAttribute("data-delay");
		setTimeout(() => {
			return o.classList.add("sectionIn");
		}, parallaxDelay);
	})
}
```