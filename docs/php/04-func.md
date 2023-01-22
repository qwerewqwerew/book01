---
layout: post
title: 04-함수
date: 2023-01-10
parent: PHP
---

## 01 function.php

  {: .note }

  > ### 문법
  >  function 함수이름 (매개변수1,매개변수2){
  >  ...실행문
  > }
  > 함수이름();
  > {:fs-2}
  >
  >
  
  > 함수네이밍규칙 - 영문소문자로 시작 , 특수문자는 `_` 만 가능
  > 

---

## 01-1 :  문법

1. `xmapp/htdoc/func.php` 생성

<details open markdown='block'>
  <summary>
    html
  </summary>
  {: .text-delta }
  ```html
  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h1>function</h1>
      <pre>
        function 함수이름 (매개변수1,매개변수2){
          ...실행문
        }
        함수이름();
         function func_add(){
        }
  </pre>
  </body>
  </html>
  ```
</details>

---

## 01-2 : 활용

1. 간단한 덧셈함수를 만들어 보자

<details open markdown='block'>
  <summary>
php  </summary>
  {: .text-delta }
  ```php
    <?php
    function sum($x, $y)
    {
      return $x + $y;
    }
    echo sum(10, 20)
    ?>
  ```
</details>

실행화면 :


![]({{'/assets/img/php-48+.jpg'| relative_url}} )

---

## 01-3 배열의 값을 출력하는 함수

{: .note }
> print_r
> 변수의 정보를 출력해주는 함수
>
> PHP에서 변수는 배열(Array)과 객체(Object)도 포함

1. 예제

<details open markdown='block'>
  <summary>
    php
  </summary>
  {: .text-delta }
  ```php
  <?php
  $fruits=['apple','mango','banana','orange'];
  echo '<pre>';
  print_r($fruits);
  echo '</pre>';
  ?>
  ```
</details>
  실행화면


  ![]({{'/assets/img/php49.jpg'| relative_url}} )

1. $fruits 의 정보가 출력된다
  배열의 각 인덱스 번호에 해당하는 값을 출력해줌

2. print_r 의 위, 아래에 echo와 함께 pre 태그를 출력

---

## 01-4
{: .note-title }
> pre 태그를 추가해주는 것을 함수로 작성
>

<details open markdown='block'>
  <summary>
    php
  </summary>
```php
  <?php
  $fruits = ['apple', 'mango', 'banana', 'orange'];
  // echo '<pre>';
  // print_r($fruits);
  // echo '</pre>';
  function output($value)
  {
    echo '<pre>';
    print_r($value);
    echo '</pre>';
  }
  output($fruits)
  ?>
```
  {: .text-delta }
</details>


---


출력:

![]({{'/assets/img/php47.jpg'| relative_url}} )  


