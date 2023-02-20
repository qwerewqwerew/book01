---
title: 03-Higher-Order-Function
parent: Javascript
layout: default
---

1. TOC
{:toc}
--


{: .note }
>
> 고차 함수(Higher order function) <br/>
> 함수를 인자로 전달받거나 함수를 결과로 반환하는 함수
>

# 다른 함수를 인자로 받는 경우

```js

function price(num) {
  return num * 500;
}
// calc는 price함수를 인자로 받으므로 고차함수이다
// calc 함수의 인자 func에 함수가 들어올 경우
// func은 calc의 콜백 함수이다.
function calc(func, num) {
  /*
  	num=5
    func= function price(num) {
      return num * 500;
    }
  */
  const result = func(num)
  console.log(result)
}
// price는 calc의 콜백 함수이다.
calc(price, 5);
//출력 2500

```

# 함수를 리턴하는 경우

```js
// subtractor 함수는 고차 함수이다. (다른 함수를 리턴한다.)
function subtractor(subtract) {
  //subtract=5 num=8
  return function (num) {
    //8-5
    return num - subtract;
  }
}
// subtractor(5)는 함수이므로 호출 연산자 '()'를 사용 할 수 있다.
subtractor(5)(8) // --> 3
// subtractor 함수가 리턴하는 함수를 변수에 저장할 수 있다.
// 이는 자바스크립트에서 함수는 일급 객체이기 때문이다.
const subtract5 = subtractor(5);
subtract5(8) // -> 3

```


# 함수를 인자로 받고, 함수를 리턴하는 경우

```js
function double(num) {
  return num * 2;
}
// doubleSubtractor 함수는 고차 함수이다.
function doubleSubtractor(subtract, func) {
  const doubled = func(subtract);
  return function (num) {
    return num - doubled;
  }
}
// double 함수는 doubleSubtractor 함수의 콜백으로 전달되었다.
doubleSubtractor(5, double)(18); // --> 8
```