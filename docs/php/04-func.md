---
layout: post
title: 04-함수와 변수
date: 2023-01-10
parent: PHP
tags: [function, variable]
---
---
1. TOC
{:toc}

---
[php](https://www.php.net/manual/en/reserved.variables.globals.php)

## 01 function

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

### 01-1 :  함수

+ `xmapp/htdoc/func.php` 생성

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

### 01-2 : 활용

+ 간단한 덧셈함수를 만들어 보자

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

### 01-3 배열의 값을 출력하는 함수 [plus]

{: .note }
> print_r
> 변수의 정보를 출력해주는 함수
>
> PHP에서 변수는 배열(Array)과 객체(Object)도 포함

+ 예제

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

### 01-4
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
</details>



출력:

![]({{'/assets/img/php47.jpg'| relative_url}} )  

---
## 02 variable

### 02-1

> 더하기 함수 변형
>[plus](#01-3-배열의-값을-출력하는-함수-plus)

php
```php
function sum1($x, $y)
{
  $result=$x+$y;  //$result 지역변수 선언
  return $result; //$result 변수 리턴
}
$result= sum1(10, 20);//$result 전역변수에 sum1(10,20) 호출
echo $result;
```

출력

![]({{'/assets/img/php-49.jpg'| relative_url}} )

+ 전역변수 $result 에 주석처리후 실행

![]({{'/assets/img/php-50.jpg'| relative_url}} )

+ 지역변수 $result는 함수 밖으로 꺼내올수 없으므로 에러

---

### 02-2 

+ 지역변수를 알아보자

```php
<hr>
<h2>지역변수 전역변수</h2>
<?php
function myfunc()
{
  $var = 10;
  echo "{$var}"; //지역변수로써 함수 외부에서 출력안됨
}
myfunc();
echo "{$var}";
?>

```
![]({{'/assets/img/php-51.jpg'| relative_url}} )

+ `$var` 의 스코프는 myfunc 함수의 바디영역이므로 실행오류 발생

---
### 02-3 전역변수

+ 전역변수를 알아보자

```php
<hr>
<h2>전역변수</h2>
  <?php
  $var2 = 20;
  function myfunc2()
  {
    echo "{$var2}";//외부에 선언되었더라도 global 키워드가 없으면 함수 내부로 갖고 올수 없다
    global $var2;
    echo "{$var2}" //출력됨
  }
  myfunc2();
  echo "{$var2}";
  ?>
```
![]({{'/assets/img/php-51.jpg'| relative_url}} )


**`echo "$var2 임 <br>"`과  `echo "{$var2} 임<br>`"의 차이**

![]({{'/assets/img/php52.jpg'| relative_url}} )

1. 둘다 화면에 출력값은 같다
2. `echo "$var2 임 <br>"` 처럼 변수명 뒤에 다른 문자가 나오면, PHP 파서는 "$var"라는 변수의 이름을 찾는 대신 "$var임"이라는 이름을 가진 변수를 찾는다.
3. `echo "{$var2} 임<br>` 같이 변수명을 중괄호로 감싸야 PHP 파서가 변수명을 정확히 인식할 수 있다.

---
### 02-4 정적변수

{: .note}
**함수 내부에서 static 키워드로 선언한 변수**<br>
함수의 호출이 종료되어도 메모리상에 존재함.<br>
지역 변수처럼 해당 함수 내부에서만 접근가능.<br>

```php
  <hr>
  <h2>정적변수</h2>
  `static`

  <?php
  function increment()
  {
    global $count;
    $count= 0;
    echo "{$count}<br/>";
    $count++;
  }
  increment();
  increment();
  increment();
?>

```

실행화면 - 정적변수로 선언시 함수의 호출 이후에도 변수값이 증가함
![]({{'/assets/img/php53.jpg'| relative_url}} )

실행화면-전역변수로 선언시 함수의 호출 이후에도 변수값이 불변함
![]({{'/assets/img/php54.jpg'| relative_url}} )
