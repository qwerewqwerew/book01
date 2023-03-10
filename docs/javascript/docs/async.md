---
layout: default
title: async/await
parent: Javascript
grand_parent:
---

1. TOC
{:toc}

---

## κ΄λ ¨λ§ν¬

{: .no_toc}

π[μ½μ΄μλ°μ€ν¬λ¦½νΈ]({{'https://ko.javascript.info/async'| relative_url}} ){: .anc}

π[mdn-link]({{'https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise'| relative_url}} ){: .anc}

---


# μ½λ°±μ§μ₯

<div class='box'>
  λΉλκΈ°μ  μ²λ¦¬λ₯Ό ν λ μ½λ°±μ νμ©νκ² λλλ° νλ€λ³΄λ©΄ μ½λ°± ν¨μκ° μ€μ²©λλ©΄μ μ½λ°± μ§μ₯μ λΉ μ§κ² λλ€.
</div>

### μμ 

- 1μ΄νμ μΌμ νλ timer ν¨μκ° μλ€

  timer.js
  {: .label .label-purple }

      ```js
      function timer(time) {
            setTimeout(() => {
              console.log("1μ΄ννλ€")
            }, time);
        }
        timer(1000)
      }
      ```

  <script async src="//jsfiddle.net/qwerew0/uj13wLoh/4/embed/js/"></script>

- timer ν¨μμ 1μ΄ν μ½λ°±ν¨μλ₯Ό μ€νμν€κ³  λ μ½λ°±μ μ€νμν€κ² λ κ²½μ°β¦ μ½λ°±μ§μ₯μ λΉ μ§κ²λλ€

  timer.js
  {: .label .label-purple }

      ```js
        function timer(){
        setTimeout(function(){
        console.log('μμ')
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

## promise (μ½λ°±μ§μ₯νμΆ)

{: .note }

> ES6

### syntax

`new Promise((resolve,reject)=>{  })`

- resolve:ν΄κ²°, reject:κ±°λΆ μ
- λΉλκΈ° μμμ΄ μ±κ³΅ν κ²½μ° resolve(...)λ₯Ό νΈμΆνκ³ , μ€ν¨ν κ²½μ° reject(...)λ₯Ό νΈμΆν©λλ€.

π[mdn-link]({{'https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise'| relative_url}} ){: .anc}

### μμ 

#### μ±κ³΅

{: .no_toc}

```js
let myprom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("μ±κ³΅νλ€")
  }, 1000)
})

myprom.then((msg) => {
  console.log("1μ΄νμ€ν" + msg)
})
```

<script async src="//jsfiddle.net/qwerew0/n4ud1ytc/3/embed/js/"></script>

#### μ€ν¨

{: .no_toc}

```js
let myprom = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error())
  }, 1000)
})

myprom
  .then((msg) => {
    console.log("1μ΄νμ€ν" + msg)
  })
  .catch((error) => {
    return console.log(error)
  })
```

{: .warning }

> μ±κ³΅μ κ²°κ³Όλ₯Ό resolve μ λ°νλ°μ then μ μ λ¬νκ³ 
> μ€ν¨μ κ²°κ³Όλ₯Ό reject μ λ°νλ°μ error μ μ λ¬ν μμλ€

#### then

{: .no_toc}

```js
let myprom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("μ±κ³΅νλ€")
    //reject(new Error());
  }, 1000)
})

myprom
  .then((msg) => {
    console.log("1μ΄νμ€ν" + msg)
  })
  .then((msg) => {
    console.log("3μ΄νμ€ν" + msg)
  })
  .then((msg) => {
    console.log("4μ΄νμ€ν")
  })
  .catch((error) => {
    return console.log(error)
  })
```

<div class='box'>
  ajaxλ λΉλκΈ°μ λ€νΈμν¬ ν΅μ μλλ€.
  λΉλκΈ° μμμ μ½λ°±ν¨μλ₯Ό μ¬μ©νμ¬ κ²°κ³Όλ₯Ό λ°νλ°κ² λλλ° μ΄λ μ½λ°±μ§μ₯μ λΉ μ§κΈ° μ½μ΅λλ€.
  μ΄λ Promise κ°μ²΄λ₯Ό μ¬μ©νλ©΄ ν΄κ²°ν μ μμ΅λλ€.
</div>

---

{: .mb-10}

# async & await

{: .note }

> ES8μ μΆκ°
> Promise λ₯Ό μ’λ μ½κ² μ¬μ©νκ² ν΄μ€

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
