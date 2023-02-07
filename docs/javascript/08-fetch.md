---
layout: default
title: 08-featch
parent: Javascript
grand_parent:
---



1. TOC
{:toc}

---

# Promise

{: .note }

> javascript의 비동기 처리를 지원하는 객체 중 하나
>
> 1. fetch 를 사용하면 Promise를 반환한다.
> 1. Promise 객체는 then과 catch 메서드를 가지고 있다.
>    > 1. then (콜백) 는 통신성공시 결과값 반환
>    > 1. catch (콜백) 는 통신에러시 결과값 반환

promise 객체를 반환하는 대표적인 함수가 fetch 이다
{: .text-purple-200 }

---

{: .mb-10}

# Fetch

🔗[mdn-fetch]({{'https://developer.mozilla.org/ko/docs/Web/API/Fetch_API'| relative_url}} ){: .anc}

{: .note }

> 네트워크 통신과 그 결과값을 반환받을때 사용하는 API
> XMLHttpRequest 보다 사용하기 편함
> fetch 사용시 비동기 처리를 지원하는 promise 객체를 반환한다.
> ![]({{'/assets/img/fetch1.png'| relative_url}} )

## Syntax 🔗[mdn-fetch#문법]({{'https://developer.mozilla.org/en-US/docs/Web/API/fetch#syntax'| relative_url}} ){: .anc}

```js
fetch(resource)
fetch(resource, options)
```

## 예제

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

**설명**

> response변수는 promise 객체로 반환된다.
>
> response 를 json 함수를 사용하여 json 데이터로 변환하였다.
>
> 데이터 변환후 확인해 보니 promise 객체로 반환 되었다.
>
> promise 는 then 메서드가 있고 then 은 매개변수로 통신 성공 결과를 가져온다

fetch3.html
{: .label .label-purple }

```javascript
fetch("https://jsonplaceholder.typicode.com/photos").then((response) => {
  response.json().then(function (data) {
    //data 에는 response.json() 의 결과가 반환된다
    console.log("data", data)
  })
})
```

<script async src="//jsfiddle.net/qwerew0/0gc4h1un/3/embed/"></script>

![]({{'/assets/img/fetch3.png'| relative_url}} )


---

{: .mb-10}

# then, catch

👍 promise 는 비동기로 동작하는 객체이며 then 과 catch 를 포함하고 있다
{: .fs-6 .bg-red-000 .text-grey-lt-000}

![]({{'/assets/img/fetch7.png'| relative_url}} )
fetch 함수로 통신성공시 프로미스가 반환됨

{: .important }

> **👍 promise 는 비동기로 동작하는 객체이며 then 과 catch 를 포함하고 있다**
>
> **👍 then 과 catch는 콜백함수!**

## 예제

then은 fatch 통신이 성공시 반환되며, catch는 오류시 반환된다

fetch4.js
{: .label .label-purple }

```js
var fetched = fetch("https://jsonplaceholder.typicode.com/photos")
console.log(`fetched, ${fetched}`)
fetched.then((result) => {
  console.log("성공", result)
})
fetched.catch((reason) => {
  console.log("실패", reason)
})
```

실행화면
{: .fs-8}

![]({{'/assets/img/fetch9.png'| relative_url}} )


![]({{'/assets/img/fetch10.png'| relative_url}} )


![]({{'/assets/img/fetch6.png'| relative_url}} )


fetch5.html
{: .label .label-purple }

```javascript
//일반적으로는 아래와 같이 작성한다.

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
    <span class="text-red-300">표기법의차이</span>
  </summary>
  1. nesting⇒ then 안에 .then 을 쓰는 1번 방식
  2. chaning⇒ then 과 then 을 연결해서 쓰는 2번 방식
  ![]({{'/assets/img/fetch5.png'| relative_url}} )
</details>
