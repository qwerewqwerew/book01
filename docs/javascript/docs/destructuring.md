---
title: destructuring
parent: Javascript
layout: default
---

1. TOC
{:toc}
--


# 구조분해할당(destructuring)
{: .no_toc}


<div class='box'>
디스트럭처링(Destructuring)은 배열이나 객체를 Destructuring(비구조화, 파괴)하여 개별적인 변수에 할당하는것
<mark>배열이나 객체안의 값을 편하게 꺼내쓰는 문법</mark>
</div>


# 01-배열(Array destructuring)


ES5
{: .fs-6}

arr 배열안의 값을 꺼내어 사용하려면 배열의 인덱스 번호를 사용해야 한다.


```js
var arr = [1, 2, 3];
var one   = arr[0];
var two   = arr[1];
var three = arr[2];

console.log(one, two, three); // 1 2 3

```


ES6
{: .fs-6}

구조분해할당은 쉽게 배열의 값을 꺼내어 사용할수 있다. 기준은 index 번호이다


```js

var arr = [1, 2, 3];

const [one, two, three] = arr;

console.log(one, two, three); // 1 2 3

```

