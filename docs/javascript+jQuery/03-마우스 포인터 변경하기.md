---
title: 03-마우스 포인터 변경하기
parent: Javascript+JQuery
layout: post
date: 2023-01-08
---

#  마우스포인터를 변경해보자

| 마우스 좌표값을 이용하여 DOM 요소와 애니메이션을 구현한다.
| 알아야 할 것
| 1. 마우스 좌표값 (브라우저, 화면에서 포인터의 위치정보 얻어오기)
| 2. 애니메이트 시킬 대상의 좌표 (움직일 대상도 위치정보가 있어야 한다.)

>#### 사용할 이미지
> 
><img src='{{"https://raw.githubusercontent.com/qwerewqwerew/book01/044dcd2a88b712a66ce6d22b7821da412b670f29/assets/img/1.png" | relative_url }}'>
><img src='{{"https://raw.githubusercontent.com/qwerewqwerew/book01/044dcd2a88b712a66ce6d22b7821da412b670f29/assets/img/2.png"| relative_url }}'>
><img src='{{"https://raw.githubusercontent.com/qwerewqwerew/book01/044dcd2a88b712a66ce6d22b7821da412b670f29/assets/img/3.png"| relative_url }}'>
>
{: .block-tip }

##  01 요소(문서)의 높이(크기) 를 알아보자

### 01-1 Js

#### 함수종류


### 01-2 JQ

#### 함수종류


---

### 02 스크롤 양을 얻어보자

## 02-1 Js

### 함수종류


## 02-2 JQ

### 함수종류


---

### 03 제작해보자

### JS
<iframe width="100%" height="300" src="//jsfiddle.net/qwerew0/3qwngLey/41/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### JQ
<iframe width="100%" height="300" src="//jsfiddle.net/qwerew0/3qwngLey/42/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


### 04 키티 3D 회전

```css
   #m3 {
      width: 100px;
      height: 100px;
      position: absolute;
      z-index: 999999;
      top: 50px;
      left: 30px;
      transition: all 0.5s ease-in-out;
    }
    #m3{
      animation: rotate 2.5s infinite alternate;
      animation-play-state:paused;
      /* animation-play-state:running; */
    }
    @keyframes rotate{
      0%{transform:perspective(200px) rotateY(0deg)}
      50%{transform:perspective(200px) rotateY(-180deg)}
      100%{transform:perspective(200px) rotateY(-360deg)}
    }

```
> #### perspective
> 요소를 3D 공간에 배치함 
> perspective(거리) 거리값이 클수록 먼 거리에서 보는것과 같은 효과
{: .block-warning }

<img src='{{ "https://miro.medium.com/max/720/0*CP84t13H0eHbab3R.webp" | relative_url }}'>
