---
layout: default
title: 13-filter
parent: Javascript
grand_parent:
---

# 목차

{: .no_toc}

1. TOC
   {:toc}

---

# filter

**조건을 만족하는 배열 요소 추출하여 새 배열 만들기**

{: .note }

> 유저 정보 배열에서 18세 이상인 유저의 정보만을 가져와 배열을 생성하고 싶을 때

## synctax

| 문법                    | 의미                                | 반환값 |
| :---------------------- | :---------------------------------- | :----- |
| `배열.filter(콜백함수)` | 콜백 함수 조건을 만족하는 배열 생성 | 배열   |

{: .important }

> filter( )는 콜백 함수 조건에 만족하는 요소들을 새로운 배열로 생성

### **배열**

```js
//[10, 20, 30, 40] 배열에서 30 이상의 수를 배열로 생성하기
const arr = [10, 20, 30, 40].filter((value) => value >= 30)
console.log(arr) // [30, 40]

const arr = [10, 20, 30, 40].filter((value) => {
  return value >= 30
})

const arr = [10, 20, 30, 40].filter(function (value) {
  return value >= 30
})
```

### **객체**

```js
const dogs={
  name:"망고", age:"5",
  name:"딴딴", age:"5",
  name:"공주", age:"7",
}
```

**20세 이상, 30세 이상, 40세 이상의 레이블label을 가지는 버튼을 생성하여 클릭에 따라 유저 리스트를 출력**

html
{: .label .label-purple }

```html
<div class="button-wrapper">
  <button class="button" data-age="20">20세 이상</button>
  <button class="button" data-age="30">30세 이상</button>
  <button class="button" data-age="40">40세 이상</button>
</div>
<ul class="user_list"></ul>
```

js
{: .label .label-purple }

```js
// 데이터
const userDataList = [
  { name: "곰", age: 18 },
  { name: "여우", age: 27 },
  { name: "사자", age: 32 },
  { name: "얼룩말", age: 41 },
  { name: "기린", age: 56 },
]
// .button 요소의 이벤트 설정
document.querySelectorAll(".button").forEach((element) => {
  element.addEventListener("click", (event) => {
    onClickButton(event)
  })
})
/**
 * 버튼 클릭 시 처리
 */
function onClickButton(event) {
  // 클릭한 버튼의 요소
  const button = event.target
  // 버튼 요소에서 data-age 가져오기
  const targetAge = button.dataset.age
  // targetAge 이상의 유저 배열 생성
  const filterdList = userDataList.filter((data) => data.age >= targetAge)
  // 배열을 출력
  updateList(filterdList)
}
/**
 * 유저 배열을 출력
 */
function updateList(filterdList) {
  let listHtml = ""
  for (const data of filterdList) {
    listHtml += `<li>${data.name} : ${data.age}세</li>`
  }
  document.querySelector(".user_list").innerHTML = listHtml
}
```
