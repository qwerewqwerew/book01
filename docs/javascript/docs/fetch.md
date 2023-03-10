---
layout: default
title: fetch
parent: Javascript
---



1. TOC
{:toc}

---

# Promise 
๐[์ค๋ชํ์ด์ง]({{'/docs/javascript/fetch/#promise'| relative_url}} ){: .anc}

{: .note }

> javascript์ ๋น๋๊ธฐ ์ฒ๋ฆฌ๋ฅผ ์ง์ํ๋ ๊ฐ์ฒด ์ค ํ๋
>
> 1. fetch ๋ฅผ ์ฌ์ฉํ๋ฉด Promise๋ฅผ ๋ฐํํ๋ค.
> 1. Promise ๊ฐ์ฒด๋ then๊ณผ catch ๋ฉ์๋๋ฅผ ๊ฐ์ง๊ณ  ์๋ค.
>    > 1. then (์ฝ๋ฐฑ) ๋ ํต์ ์ฑ๊ณต์ ๊ฒฐ๊ณผ๊ฐ ๋ฐํ
>    > 1. catch (์ฝ๋ฐฑ) ๋ ํต์ ์๋ฌ์ ๊ฒฐ๊ณผ๊ฐ ๋ฐํ

promise ๊ฐ์ฒด๋ฅผ ๋ฐํํ๋ ๋ํ์ ์ธ ํจ์๊ฐ fetch ์ด๋ค
{: .text-purple-200 }

---

{: .mb-10}

# Fetch 
๐[์ค๋ชํ์ด์ง]({{'/docs/javascript/fetch/#fetch'| relative_url}} ){: .anc}


๐[mdn-fetch]({{'https://developer.mozilla.org/ko/docs/Web/API/Fetch_API'| relative_url}} ){: .anc}

{: .note }

> ๋คํธ์ํฌ ํต์ ๊ณผ ๊ทธ ๊ฒฐ๊ณผ๊ฐ์ ๋ฐํ๋ฐ์๋ ์ฌ์ฉํ๋ API
> XMLHttpRequest ๋ณด๋ค ์ฌ์ฉํ๊ธฐ ํธํจ
> fetch ์ฌ์ฉ์ ๋น๋๊ธฐ ์ฒ๋ฆฌ๋ฅผ ์ง์ํ๋ promise ๊ฐ์ฒด๋ฅผ ๋ฐํํ๋ค.
> ![]({{'/assets/img/fetch1.png'| relative_url}} )

## Syntax ๐[mdn-fetch#๋ฌธ๋ฒ]({{'https://developer.mozilla.org/en-US/docs/Web/API/fetch#syntax'| relative_url}} ){: .anc}

```js
fetch(resource)
fetch(resource, options)
```

## ์์ 

fetch1.html
{: .label .label-purple }

```js
var fetched = fetch("https://jsonplaceholder.typicode.com/photos")
console.log(`fetched, ${fetched}`)
```

![]({{'/assets/img/00.jpg'| relative_url}} )

<script async src="//jsfiddle.net/qwerew0/0gc4h1un/embed/"></script>

fetch2.html
{: .label .label-purple }

```javascript
fetch("https://jsonplaceholder.typicode.com/photos").then((response) => {
  response.json()
  console.log(response.json())
})
```

<script async src="//jsfiddle.net/qwerew0/0gc4h1un/2/embed/"></script>

**์ค๋ช**

> response๋ณ์๋ promise ๊ฐ์ฒด๋ก ๋ฐํ๋๋ค.
>
> response ๋ฅผ json ํจ์๋ฅผ ์ฌ์ฉํ์ฌ json ๋ฐ์ดํฐ๋ก ๋ณํํ์๋ค.
>
> ๋ฐ์ดํฐ ๋ณํํ ํ์ธํด ๋ณด๋ promise ๊ฐ์ฒด๋ก ๋ฐํ ๋์๋ค.
>
> promise ๋ then ๋ฉ์๋๊ฐ ์๊ณ  then ์ ๋งค๊ฐ๋ณ์๋ก ํต์  ์ฑ๊ณต ๊ฒฐ๊ณผ๋ฅผ ๊ฐ์ ธ์จ๋ค

fetch3.html
{: .label .label-purple }

```javascript
fetch("https://jsonplaceholder.typicode.com/photos").then((response) => {
  response.json().then(function (data) {
    //data ์๋ response.json() ์ ๊ฒฐ๊ณผ๊ฐ ๋ฐํ๋๋ค
    console.log("data", data)
  })
})
```

<script async src="//jsfiddle.net/qwerew0/0gc4h1un/3/embed/"></script>

![]({{'/assets/img/fetch3.png'| relative_url}} )


---

{: .mb-10}

# then, catch

๐ promise ๋ ๋น๋๊ธฐ๋ก ๋์ํ๋ ๊ฐ์ฒด์ด๋ฉฐ then ๊ณผ catch ๋ฅผ ํฌํจํ๊ณ  ์๋ค
{: .fs-6 .bg-red-000 .text-grey-lt-000}

![]({{'/assets/img/fetch7.png'| relative_url}} )
fetch ํจ์๋ก ํต์ ์ฑ๊ณต์ ํ๋ก๋ฏธ์ค๊ฐ ๋ฐํ๋จ

{: .important }

> **๐ promise ๋ ๋น๋๊ธฐ๋ก ๋์ํ๋ ๊ฐ์ฒด์ด๋ฉฐ then ๊ณผ catch ๋ฅผ ํฌํจํ๊ณ  ์๋ค**
>
> **๐ then ๊ณผ catch๋ ์ฝ๋ฐฑํจ์!**

## ์์ 

then์ fatch ํต์ ์ด ์ฑ๊ณต์ ๋ฐํ๋๋ฉฐ, catch๋ ์ค๋ฅ์ ๋ฐํ๋๋ค

fetch4.js
{: .label .label-purple }

```js
var fetched = fetch("https://jsonplaceholder.typicode.com/photos")
console.log(`fetched, ${fetched}`)
fetched.then((result) => {
  console.log("์ฑ๊ณต", result)
})
fetched.catch((reason) => {
  console.log("์คํจ", reason)
})
```

์คํํ๋ฉด
{: .fs-8}

![]({{'/assets/img/fetch9.png'| relative_url}} )


![]({{'/assets/img/fetch10.png'| relative_url}} )


![]({{'/assets/img/fetch6.png'| relative_url}} )


fetch5.html
{: .label .label-purple }

```javascript
//์ผ๋ฐ์ ์ผ๋ก๋ ์๋์ ๊ฐ์ด ์์ฑํ๋ค.

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    //response.json().then(function (data) {
    //  console.log("data", data);
    //});
    return response.json()
  })
  .catch((error) => {
    console.log("error", error)
  })
  .then((data) => {
    console.log("data", data)
  })
```

<details markdown='block'>
  <summary>
    <span class="text-red-300">ํ๊ธฐ๋ฒ์์ฐจ์ด</span>
  </summary>
  1. nestingโ then ์์ .then ์ ์ฐ๋ 1๋ฒ ๋ฐฉ์
  2. chaningโ then ๊ณผ then ์ ์ฐ๊ฒฐํด์ ์ฐ๋ 2๋ฒ ๋ฐฉ์
  ![]({{'/assets/img/fetch5.png'| relative_url}} )
</details>
