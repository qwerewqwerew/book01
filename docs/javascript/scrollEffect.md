---
layout: default
title: 08 scroll-Effect
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
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      section {
        display: flex;
        align-items: center;
        text-align: center;
        height: 100vh;
      }
      .box {
        position: fixed;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
    <section>
      <h2>section1</h2>
    </section>
    <section>
      <h2>section1</h2>
    </section>
    <section>
      <h2>section1</h2>
    </section>
    <section>
      <h2>section1</h2>
    </section>
    <section>
      <h2>section1</h2>
    </section>
    <section>
      <h2>section1</h2>
    </section>
    <section>
      <h2>section1</h2>
    </section>
    <section>
      <h2>section1</h2>
    </section>
    <section>
      <h2>section1</h2>
    </section>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="scroll.js"></script>
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
