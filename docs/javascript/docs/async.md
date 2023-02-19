---
layout: default
title: async/await
parent: Javascript
grand_parent:
---

1. TOC
{:toc}

---

## 관련링크

{: .no_toc}

🔗[코어자바스크립트]({{'https://ko.javascript.info/async'| relative_url}} ){: .anc}

🔗[mdn-link]({{'https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise'| relative_url}} ){: .anc}

---


# 콜백지옥

<div class='box'>
  비동기적 처리를 할땐 콜백을 활용하게 되는데 하다보면 콜백 함수가 중첩되면서 콜백 지옥에 빠지게 된다.
</div>

### 예제

- 1초후에 일을 하는 timer 함수가 있다

  timer.js
  {: .label .label-purple }

      ```js
      function timer(time) {
            setTimeout(() => {
              console.log("1초후한다")
            }, time);
        }
        timer(1000)
      }
      ```

  <script async src="//jsfiddle.net/qwerew0/uj13wLoh/4/embed/js/"></script>

- timer 함수에 1초후 콜백함수를 실행시키고 또 콜백을 실행시키게 될경우… 콜백지옥에 빠지게된다

  timer.js
  {: .label .label-purple }

      ```js
        function timer(){
        setTimeout(function(){
        console.log('작업')
          timer(
            timer(1000)
          )
        },1000)
        }
        timer()
      ```

  <script async src="//jsfiddle.net/qwerew0/uj13wLoh/6/embed/js/"></script>

---

{: .mb-10}

## promise (콜백지옥탈출)

{: .note }

> ES6

### syntax

`new Promise((resolve,reject)=>{  })`

- resolve:해결, reject:거부 시
- 비동기 작업이 성공한 경우 resolve(...)를 호출하고, 실패한 경우 reject(...)를 호출합니다.

🔗[mdn-link]({{'https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise'| relative_url}} ){: .anc}

### 예제

#### 성공

{: .no_toc}

```js
let myprom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("성공했다")
  }, 1000)
})

myprom.then((msg) => {
  console.log("1초후실행" + msg)
})
```

<script async src="//jsfiddle.net/qwerew0/n4ud1ytc/3/embed/js/"></script>

#### 실패

{: .no_toc}

```js
let myprom = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error())
  }, 1000)
})

myprom
  .then((msg) => {
    console.log("1초후실행" + msg)
  })
  .catch((error) => {
    return console.log(error)
  })
```

{: .warning }

> 성공시 결과를 resolve 에 반환받아 then 에 전달하고
> 실패시 결과를 reject 에 반환받아 error 에 전달할수있다

#### then

{: .no_toc}

```js
let myprom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("성공했다")
    //reject(new Error());
  }, 1000)
})

myprom
  .then((msg) => {
    console.log("1초후실행" + msg)
  })
  .then((msg) => {
    console.log("3초후실행" + msg)
  })
  .then((msg) => {
    console.log("4초후실행")
  })
  .catch((error) => {
    return console.log(error)
  })
```

<div class='box'>
  ajax는 비동기식 네트워크 통신입니다.
  비동기 작업시 콜백함수를 사용하여 결과를 반환받게 되는데 이때 콜백지옥에 빠지기 쉽습니다.
  이때 Promise 객체를 사용하면 해결할수 있습니다.
</div>

---

{: .mb-10}

# async & await

{: .note }

> ES8에 추가
> Promise 를 좀더 쉽게 사용하게 해줌

```js
function timer(time) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}
const run = async () => {
  console.log("start");
  let time = await timer(1000);
  console.log("time:" + time);
  time = await timer(time + 1000);
  console.log("time:" + time);
  time = await timer(time + 1000);
  console.log("end");
};

run();
```
