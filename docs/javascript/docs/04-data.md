---
title: 04-데이터 다루기
parent: Javascript
layout: default
---

1. TOC
{:toc}
--

# 01-배열정의

## Syntax

| 구문        | 의미          | 
|:-------------|:------------------|
| `[` `]`       |배열정의 | 
| `배열[인덱스]` | 배열의 인덱스요소 가져오기   |


```javascript
//arr 배열을 선언하고 값을 초기화
const arr = [1,"가",6];
//arr배열의 0번째를 콘솔에 출력
console.log(arr[0]);
//arr 출력
console.log(arr);

```

---

{: .mb-8}
# 01-배열요소 부분 변환

{: .note }
>
> 배열내의 요소를 일부 변환 하자
>

## splice

