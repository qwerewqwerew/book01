---
layout: default
title: 11-Random gradient
parent: Javascript
grand_parent:
---

# 목차

{: .no_toc}

1. TOC
   {:toc}

---

## HTML

HTML
{: .label .label-purple }

```html


<!DOCTYPE html>
<html>
	<head>
		<title>Animated Gradients</title>

		<style>
      /* body의 변수값을 조정해서 container 의 그라디언트를 변경하는 소스 */
			body {
				margin: 0px;
				padding: 0px;
				--hue1: 176;
				--hue2: 341;
				--hue3: 250;
				--hue4: 90;
			}

			#container {
				width: 100vw;
				height: 100vh;
				background: radial-gradient(circle at top left, hsla(var(--hue1), 90%, 80%, 0.5), transparent 75%), radial-gradient(circle at top right, hsla(var(--hue2), 90%, 80%, 0.5), transparent 75%),
					radial-gradient(at bottom left, hsla(var(--hue3), 90%, 80%, 0.5), transparent 75%), radial-gradient(at bottom right, hsla(var(--hue4), 90%, 80%, 0.5), transparent 75%);
			}
		</style>
	</head>

	<body>
		<div id="container"></div>

		<script>
			var newHue1;
			var newHue2;
			var newHue3;
			var newHue4;

			var currentHue1;
			var currentHue2;
			var currentHue3;
			var currentHue4;

			var hueDiff1;
			var hueDiff2;
			var hueDiff3;
			var hueDiff4;

			var incrementer1 = 0;
			var incrementer2 = 0;
			var incrementer3 = 0;
			var incrementer4 = 0;

			var counter = 0;
			var iterations = 200;

			function setNewColor() {
				var bodyStyle = getComputedStyle(document.body);
				currentHue1 = Number(bodyStyle.getPropertyValue("--hue1"));
				currentHue2 = Number(bodyStyle.getPropertyValue("--hue2"));
				currentHue3 = Number(bodyStyle.getPropertyValue("--hue3"));
				currentHue4 = Number(bodyStyle.getPropertyValue("--hue4"));

				newHue1 = getRandomNumber(0, 360);
				newHue2 = getRandomNumber(0, 360);
				newHue3 = getRandomNumber(0, 360);
				newHue4 = getRandomNumber(0, 360);

				hueDiff1 = newHue1 - currentHue1;
				hueDiff2 = newHue2 - currentHue2;
				hueDiff3 = newHue3 - currentHue3;
				hueDiff4 = newHue4 - currentHue4;

				incrementer1 = hueDiff1 / iterations;
				incrementer2 = hueDiff2 / iterations;
				incrementer3 = hueDiff3 / iterations;
				incrementer4 = hueDiff4 / iterations;
			}

			var frameId;

			function animate() {
				if (counter == 0) {
					setNewColor();
				}

				counter++;

				currentHue1 += incrementer1;
				currentHue2 += incrementer2;
				currentHue3 += incrementer3;
				currentHue4 += incrementer4;

				if (counter == iterations) {
					counter = 0;
				}

				document.body.style.setProperty("--hue1", currentHue1);
				document.body.style.setProperty("--hue2", currentHue2);
				document.body.style.setProperty("--hue3", currentHue3);
				document.body.style.setProperty("--hue4", currentHue4);

				requestAnimationFrame(animate);
			}
			animate();

			function getRandomNumber(low, high) {
				var r = Math.floor(Math.random() * (high - low + 1)) + low;
				return r;
			}
		</script>
	</body>
</html>

```


---
{: .mb-10}
 
## Javascript01
```js
let win = window,
	winSct,
	sections = document.querySelectorAll(".section"),
	gnb = document.querySelectorAll(".gnb li");

const gnbOff = () => {
	gnb.forEach((o) => {
		o.classList.remove("on");
	});
};

gnb.forEach((el, idx) => {
	el.addEventListener("click", function (e) {
		e.preventDefault();
		document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({ behavior: "smooth", block: "center" });
		gnbOff();
		el.classList.add("on");
	});
});

win.addEventListener("scroll", function () {
	winSct = this.scrollY;
	//스티키헤더
	winSct >= 400 ? document.querySelector("nav").classList.add("sticky") : document.querySelector("nav").classList.remove("sticky");
	scrollGnb(winSct);
});
//const section=Array.from(sections).map((section,idx)=> section.offsetTop)
const scrollGnb = (sct) => {
	console.log(winSct);
	if (sct >= sections[0].offsetTop - 300) {
		gnbOff();
		document.querySelector(".gnb li:nth-child(1)").classList.add("on");
	}
	if (sct >= sections[1].offsetTop - 300) {
		gnbOff();
		document.querySelector(".gnb li:nth-child(2)").classList.add("on");
	}
	if (sct >= sections[2].offsetTop - 300) {
		gnbOff();
		document.querySelector(".gnb li:nth-child(3)").classList.add("on");
	}
	if (sct >= sections[3].offsetTop - 300) {
		gnbOff();
		document.querySelector(".gnb li:nth-child(4)").classList.add("on");
	}
	if (sct >= sections[4].offsetTop - 300) {
		gnbOff();
		document.querySelector(".gnb li:nth-child(5)").classList.add("on");
	}
	if (sct >= sections[5].offsetTop - 300) {
		gnbOff();
		document.querySelector(".gnb li:nth-child(6)").classList.add("on");
	}
	if (sct >= sections[6].offsetTop - 300) {
		gnbOff();
		document.querySelector(".gnb li:nth-child(7)").classList.add("on");
	}
	if (sct >= sections[7].offsetTop - 300) {
		gnbOff();
		document.querySelector(".gnb li:nth-child(8)").classList.add("on");
	}
	if (sct >= sections[8].offsetTop - 300) {
		gnbOff();
		document.querySelector(".gnb li:nth-child(9)").classList.add("on");
	}
};


```



---

{: .mb-10}

## Javascript02

```js
const gnb = document.querySelectorAll(".gnb>li")
const sections = document.querySelectorAll(".section")
const nav = document.querySelector("nav")
const sideNav = document.querySelectorAll(".sideNav>li>a")
let gap = 500
let winSct
const removeClass = () => {
  gnb.forEach((o) => {
    o.classList.remove("on")
  })
}

gnb.forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault()
    //console.log(el.getAttribute("href"), this);
    document
      .querySelector(el.firstChild.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" })
    removeClass()
    el.classList.add("on")
  })
})

const navAni = (n) => {
  sections.forEach((o, i) => {
    let sct = o.offsetTop - gap
    if (n > sct) {
      o.classList.add("sectionIn")
      removeClass()
      //console.log("gnb[i]",gnb[i]);
      gnb[i].classList.add("on")
    } else {
      o.classList.remove("sectionIn")
    }
    //스티키헤더
    n >= 400 ? nav.classList.add("sticky") : nav.classList.remove("sticky")
  })
}

window.addEventListener("scroll", function () {
  winSct = this.scrollY
  navAni(winSct)
})
```
