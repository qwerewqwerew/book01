---
title: function
date: 2019-04-28
parent: Javascript
layout: post
---

1. TOC
{:toc}
--

### 01 return

**`[return` 명령문](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/return)** 
은 함수 실행을 종료하고, 주어진 값을 함수 호출 지점으로 반환한다.

함수의 실행문 내부에 묵시적으로 정의되어 있다.

### 오류

<iframe width="100%" height="300" src="//jsfiddle.net/qwerew0/rftx23qb/16/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### 수정

<iframe width="100%" height="300" src="//jsfiddle.net/qwerew0/rftx23qb/17/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


### 02 고차함수 (High order Function) 함수를 인자로 전달받거나 함수를 결과로 반환하는 함수

**아래의 함수는 두개의 숫자와 연산자를 입력받아 값을 반환하는 계산기 프로그램이다**
**함수의 중복을 고차함수로 작성하여 제거해보자**
<iframe width="100%" height="300" src="//jsfiddle.net/qwerew0/rftx23qb/19/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

#### 02-1 중복되는 부분은 함수로 변하는 부분은  매개변수로 만들자
!(/assets/js03.jpg)

!(/assets/js04.jpg)

<iframe width="100%" height="300" src="//jsfiddle.net/qwerew0/rftx23qb/20/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
