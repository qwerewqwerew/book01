---
title: scrollAmountJS
parent: Javascript
date: 2023-01-08
layout: post
---

## 01 스크롤양 얻기

### 함수종류

| 종류                                            | 설명                                                                                 |
| ----------------------------------------------- | ------------------------------------------------------------------------------------ |
| document.documentElement.scrollTop / scrollLeft | document.querySelector('html').scrollTop; 요소의 수직 스크롤 반환                    |
| window.pageYOffset / pageXOffset                | scrollY의 다른 이름으로, 문서가 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환 (IE ○) |
| window.scrollY / scrollX                        | 문서가 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환(IE X)                           |

---

### 예제
<iframe width="100%" height="300" src="//jsfiddle.net/qwerew0/3qwngLey/55/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

