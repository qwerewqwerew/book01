---
layout: default
title: 05-include
parent: PHP
tags: [ include ,Require ]
---
 

1. TOC
{:toc}

---

>[🔗php 공식문서](https://www.php.net/manual/en/function.include.php){: .anc}

---
## 01 Include

{: .note-title }
>공통으로 쓰는 파일을 외부에 불러와서 쓸수 있다.<br>
>html 문서의 header, footer 같은 반복되는 영역을 외부에 저장 해 놓고<br>
>불러와서 사용하는 것
>{: .fs-3 .fw-400}

---

### 01-1 문서분리

1. `functions.php` -> 다른이름으로 저장 -> `home.php`
2. 표시된 부분을 반복영역으로 간주하고 진행한다
  + ![]({{'/assets/img/php61.jpg'| relative_url}} )
3. 표시된 부분의 코드를 잘라낸다
  + ![]({{'/assets/img/php62.jpg'| relative_url}} )
4. vscode 에 `inc` 폴더를 생성하고 하위에 `header.php` 를 만든다.
  + ![]({{'/assets/img/php63.jpg'| relative_url}} )
  + ![]({{'/assets/img/php64.jpg'| relative_url}} )
5. 잘라낸 코드를 `header.php` 에 붙여넣는다.
  + ![]({{'/assets/img/php65.jpg'| relative_url}} )
  + 편집완료스샷
  + ![]({{'/assets/img/php66.jpg'| relative_url}} )
 
---

### 01-2 변수설정
1. `header.php` 수정
  + 삽입한 페이지의 제목을 출력할수 있도록 title을 변수처리

```php
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $title; ?></title>
</head>

<body>
  <h1><?= $title; ?></h1>
```
---

---
### 01-3 header

1. `home.php` 수정

```php
<?php
  $title='home';
  include('inc/header.php');
?>
...
```
2. ` $title='home';` -> `inc/header.php`에 전달할 title 변수값
3. `include('inc/header.php');` -> include 함수는 삽입할 파일의 경로를 작성하면 된다.
4. `home.php` 를 실행하여 탭 제목과 h1의 변수값이 변경되었는지 확인한다
실행
![]({{'/assets/img/php67.jpg'| relative_url}} )

5. 개발자도구에서 변수값이 적용된것을 확인한다.
![]({{'/assets/img/php68.jpg'| relative_url}} )

{: .danger }
> `header.php` 만 단독으로 실행할 경우 에러발생 
> `home.php` 의 $title 변수를  include 함수 이후에 초기화 할 경우 에러발생
>{: .fs-3 .fw-400}
---

### 01-4 응용

> title 변수에 값을 확인하여 없으면 에러대신 빈값 출력시키기

```php

<?php 
  if(!isset($title)){
    $title='';
  }
<!DOCTYPE html>
<html lang="ko">
...
?>

```
1. `header.php` 의 최상단에 작성
3. isset 함수를 활용하여 변수의 상태를 확인한다. $title 변수가 준비되지 않았을경우 true 이므로 $title변수에 빈값을 저장한다.

4. 이제 `header.php` 만 실행해도 오류가 발생하지 않는다

실행
![]({{'/assets/img/php69.jpg'| relative_url}} )

5. 주석처리 후 계속 진행


---

### 01-5 footer
1. `home.php` 편집
2. `</body></html>`를 잘라낸다
3. 문서의 하단에 아래의 코드를 작성한다.

```php
...

<?php
include('inc/footer.php')
?>
```
4. `inc/footer.php` 를 생성후 잘라낸 코드를 붙여넣는다
![]({{'/assets/img/php70.jpg'| relative_url}} )

5. 실행하여 결과를 확인
![]({{'/assets/img/php72.jpg'| relative_url}} )
`</body></html>`가 추가된것 확인
{:.no-toc}

---

## 02 Require

{: .note-title }
> 함수를 include 해보자
>{: .fs-3 .fw-400}

### 02-1 

1. `inc/functions.php` 생성
2. `home.php`의 함수의 호출문만 `functions.php`는 함수의 실행문 만 으로 분리한다.
![]({{'/assets/img/php71.jpg'| relative_url}} )


<details open markdown='block'>
  <summary>
    home.php
  </summary>
  {: .text-delta }

```php
<?php
$title = '망고홈';
include('inc/header.php');
require('inc/functions.php');
?>

<pre>
  function 함수이름 (매개변수1,매개변수2){
    ...실행문
  }
  함수이름();
  
  function func_add(){

  }
  </pre>

<h2>SUM</h2>
<?php
echo sum(50, 20);
?>
<hr>
<?php
$fruits = ['apple', 'mango', 'banana', 'orange'];
output($fruits)
?>
<hr>
<?php

$result = sum1(10, 20); 
echo $result;
?>
<hr>
<h2>지역변수 전역변수</h2>
<?php
myfunc();

?>

<hr>
<h2>전역변수</h2>
<?php

$var2 = 20;

myfunc2();
echo "{$var2} 임<br>";
?>
<hr>
<h2>정적변수</h2>
<?php

increment();
increment();
increment();
?>
<?php
include('inc/footer.php')
?>

```

</details>

<details open markdown='block'>
  <summary>
    function.php
  </summary>  
  {: .text-delta }

```php
<?php

function sum($x, $y)
{
  return $x + $y;
}
function output($value)
{
  echo '<pre>';
  print_r($value);
  echo '</pre>';
}
function sum1($x, $y)
{
  $result = $x + $y;  //지역변수(local variable)
  return $result;
}

function myfunc()
{
  $var = 10;
  echo "{$var}";
}

function myfunc2()
{
  global $var2; //global
  echo "$var2 임 <br>"; //출력됨
}

function increment()
{
  static $count;
  $count++;
  echo "$count<br/>";
}
```
</details>

 `home.php`에서 sum 함수의 인자를 변경해서 실행해본다
![]({{'/assets/img/php73.jpg'| relative_url}} )


모든 함수가 오류없이 실행되는지 확인
{: .bg-w-000 }

---

## 03 Include VS Require

`home.php` 의 include 문장을 변경

```php
<?php
$title = '망고홈';
include('inc/headers.php'); //없는 경로
include('inc/functions.php'); //include로 수정
?>
```
> 오류출력 후 그대로 실행

![]({{'/assets/img/php74.jpg'| relative_url}} )

`home.php` 의 include 문장을 변경

```php
<?php
$title = '망고홈';
require('inc/headers.php');
require('inc/functions.php');
?>
```
> 오류출력 실행안함

![]({{'/assets/img/php75.jpg'| relative_url}} )

{: .note-title }
> Include : 단순히 구조를 반복할때
> Require: 오류발생시 치명적인 상황일때 (데이터베이스와의 연동...)
>{: .fs-3 .fw-400}

## 04 _once

+ `include`를 반복해보자

```php
include('inc/header.php');
include('inc/header.php');
require('inc/header.php');
require('inc/header.php');
```
+ 두번씩 반복 적용된다.

![]({{'/assets/img/php76.jpg'| relative_url}} )


+ `_once` 를 사용해보자

```php

<?php
$title = '망고홈';
include('inc/header.php');
include_once('inc/header.php');  //once를 붙이면 한번만됨

require('inc/header.php');
require_once('inc/header.php'); //once를 붙이면 한번만됨
require_once('inc/functions.php');
?>

```

![]({{'/assets/img/php77.jpg'| relative_url}} )
