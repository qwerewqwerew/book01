---
layout: default
title: 06-form
parent: PHP
tags: [ form ,get,post ]
---
 

1. TOC
{:toc}

---

>[🔗php GET](https://www.php.net/manual/en/reserved.variables.get.php){: .anc}
>[🔗php SuperGlobals](https://www.php.net/manual/en/language.variables.superglobals.php){: .anc}

---
## 01 form.php

{: .note-title }
> 이번 예제에서는 데이터가 어떤 방식으로 전송이 되는지 흐름을 파악하도록 한다.<br>
> 데이터조작은 추후 진행한다.<br>
> 간단한 회원가입 입력 폼을 제작해보자.<br>
> 
>{: .fs-3 .fw-400}


### 01-1 form.php

* `form.php` 문서 생성후 코드 작성

```php
<?php
  $title='login';
  include_once('inc/header.php');
  require_once('inc/functions.php');
?>
```
* ![]({{'/assets/img/php78.jpg'| relative_url}} )

* `form.php`  작성

```php

<?php
$title = 'login';
include_once('inc/header.php');
require_once('inc/functions.php');
?>
/* action="서버주소"  method="전송방법 "*/
<form action="request.php" method="get">
  <p>
    <label for="userName">Name</label>
    /*  type="데이터형식" name="필드명" id="아이디" */
    <input type="text" name="userName" id="userName">
  </p>
  <p>
    <label for="userEmail">Email</label>
    <input type="email" name="userEmail" id="userEmail">
  </p>
  <p>
    <input type="submit" value="로그인">
  </p>

```
실행화면
![]({{'/assets/img/php79.jpg'| relative_url}} )


---


### 01-2 request.php

{: .note-title }
> `$_GET[userName]` [super globals variable : 모든 범위에서 사용 가능한 내장 변수]
>
> HTTP 프로토콜의 GET 방식을 통해 사용자가 서버에 요청하였을 때 URL을 통해 전송된 데이터를 각각의 원소로 가지는 배열 변수.
>{: .fs-3 .fw-400}

```php
<?php
$title = 'login';
include_once('inc/header.php');
require_once('inc/functions.php');
?>

<?php
$name = $_GET["userName"];  //form.php의 name="userName" 속성의 값을 전달받는다.
$email = $_GET["userEmail"];//form.php의 name="userEmail" 속성의 값을 전달받는다.
echo $name . '님의 입력한 이메일은' . $email . '입니다';
?>

<?php
include('inc/footer.php');
?>

```

1. login.php 에 회원정보 입력후 로그인 클릭
  ![]({{'/assets/img/php80.jpg'| relative_url}} )
2. request.php의 주소표시줄과 화면출력 내용 확인
  ![]({{'/assets/img/php81.jpg'| relative_url}} )

`http://localhost/request.php?userName=+%EA%B9%80%EB%A7%9D%EA%B3%A0&userEmail=asdf%40gflgi.com` 

🔑 get 방식은 사용자가 입력한 정보가 주소표시줄에 노출됨
{: .bg-w-000}


---
### 01-3 post

**post 방식으로 바꿔보자**{: .bg-w-100}

![]({{'/assets/img/php81.png'| relative_url}} )

form.php
{: .label }

```php
<?php
$title = 'login';
include_once('inc/header.php');
require_once('inc/functions.php');
?>

<!-- <form action="request.php" method="get"> -->
<form action="request.php" method="post">
  <p>
    <label for="userName">Name</label>
    <input type="text" name="userName" id="userName">
  </p>
  <p>
    <label for="userEmail">Email</label>
    <input type="email" name="userEmail" id="userEmail">
  </p>
  <p>
    <input type="submit" value="로그인">
  </p>
</form>
```

request.php
{: .label }

```php
<?php
$title = 'login';
include_once('inc/header.php');
require_once('inc/functions.php');
?>

<?php
//$name = $_GET["userName"];
//$email = $_GET["userEmail"];
$name = $_POST["userName"];
$email = $_POST["userEmail"];
echo $name . '님의 입력한 이메일은' . $email . '입니다';
?>

<?php
include('inc/footer.php');
?>

```

실행
![]({{'/assets/img/php82.png'| relative_url}} )

🔑**post방식은 주소표시줄에 노출되지 않음**

---

## 02 정리

{: .note-title }
> Http 프로토콜을 사용하여 get 과 post 방식으로 데이터의 요청/응답을 작성해보았다. 
> 두가지 방식을 정리해보자
>{: .fs-3 .fw-400}

> + GET 요청은 캐시( Cache : 자주 접근하는 데이터를 복사 해놓는 임시 저장소)가 가능하다. 
> + GET 요청은 브라우저 히스토리에 남는다.
> + GET 요청은 길이 제한이 있다.
> + GET 요청은 중요한 정보를 다루면 안된다.

> + POST 요청은 캐시되지 않는다.
> + POST 요청은 브라우저 히스토리에 남지 않는다.
> + POST 요청은 데이터 길이에 제한이 없다.

🔑CTRL + F5 를 누르면 캐시가 삭제된다