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

## Javascript

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
