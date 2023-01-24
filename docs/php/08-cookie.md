---
title: 08-Cookie,Session
layout: default
parent: PHP
tags: [ Cookie,Session ]
---
 

1. TOC
{:toc}

---

>[🔗php_setcookie](https://www.php.net/manual/en/function.setcookie.php){: .anc}
>[🔗php_$_COOKIE](https://www.php.net/manual/en/reserved.variables.cookies.php){: .anc}
>[🔗php_session_destroy](https://www.php.net/manual/en/function.session-destroy.php){: .anc}
>[🔗php_session_unset](https://www.php.net/manual/en/function.session-unset.php){: .anc}

---

## 00 쿠키와 세션

![]({{'/assets/img/210605_cookie-session.png'| relative_url}} )

- 쿠키:**클라이언트(브라우저) 로컬에 저장** 되는 키와 값이 들어있는 데이터 파일

- 쿠키의 구성
  - 이름 : 쿠키를 구별하는데 사용된다.
  - 값 : 쿠키의 이름과 mapping된 값이다.
  - 유효시간 : 쿠키의 유지시간이다.
  - 도메인 : 쿠키를 전송할 도메인 정보이다.
  - 경로 : 쿠키를 전송할 요청 경로이다.
{:.lh-5}

- 세션: **사용자 정보 파일을 서버에 저장**
  - session은 cookie를 사용해서 session ID 만을 저장

- cache : 이미지나 CSS, JS 파일등을 브라우저나 서버의 앞 단에 저장해놓고 사용하는 것

## 01 Cookie 생성

{: .new }
>  xmapp/htdoc/cookie/cookie_test.php 파일생성

1. [php](https://www.php.net/) 에 접속하여 `cookie` 를 검색해보자
1. `setcookie` 클릭
1. 설명을 본다.
  - ![]({{'/assets/img/php87.jpg'| relative_url}} )
  - 첫번째 값으로는 문자로 이름, 두번째 값으로 문자로 값, 세번째로는 배열로 옵션을 작성한다.
  - name(이름),value(값),expires_or_options(만기일),path(경로) 을 작성해야한다.

1. cookie_test.php 파일작성
    <details open markdown='block'>
      <summary>
        $_COOKIE
      </summary>
    ```
    $_COOKIE 는 쿠키의 이름을 불러서 값을 호출할수 있는 superGlobals 입니다.
    ```
      {: .text-delta }
    </details>

```php
<?php
$cookieName = "city";   //쿠키의 이름
$cookieValue = "seoul"; //쿠키의 값
//setcookie 함수에 인자전달()
setcookie($cookieName, $cookieValue, time() + 60, "/");//time() + 600 만료시간: 현재부터 600초 이후 만료
?>

<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>쿠키테스트</title>
</head>

<body>
<p>새로고침(f5) 하면 생성된 쿠키를 확인할 수 있습니다.</p>
  <?php
      if(!isset($_COOKIE[$cookieName])){  //$cookieName 변수가 세팅되지 않으면 true
          echo "{$cookieName}라는 이름의 쿠키는 생성이 되지 않았습니다.";
      }else{
          echo "{$cookieName}라는 이름의 쿠키는 생성되었고, 값은 ".$_COOKIE[$cookieName]."입니다.";
      }
  ?>
</body>

</html>
```
> **`time() + 60` 에 지정한 60초가 지나면 쿠키가 생성되고 브라우저 새로고침하면 메시지는 else 문의 내용이 출력된다**

실행화면
![]({{'/assets/img/php92.jpg'| relative_url}} )
---

## 02 Cookie 삭제

{: .new }
>  xmapp/htdoc/cookie/cookie_del.php 파일생성
>

🔑**쿠키의 삭제는 만기일을 현재보다 이전으로 설정하면 된다**

```php

<?php
$cookieName = "city";
$cookieValue = "seoul";
setcookie($cookieName, $cookieValue, time() - 60, "/");
?>

<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <title>쿠키삭제</title>
</head>

<body>
  <?php
  echo $cookieName . '의 쿠키가 삭제 되었습니다.';
  echo '생성된 값은 '.$_COOKIE[$cookieName] . '입니다.';
  ?>
</body>

</html>

```
실행
 ![]({{'/assets/img/php90.jpg'| relative_url}} )

**쿠키가 생성되자마자 삭제되었으므로 삭제 메시지와 함께 오류출력**

---


## 03 Session

{: .important }
> 브라우저가 해당 사이트에서 벗어나면 세션종료
> 사이트 접속후 30분이상 상호작용이 없으면 세션종료
>{: .fs-3 .fw-400}

{: .new }[#1]
> htdoc/session/session.php 생성
>{: .fs-3 .fw-400}

🔑 세션은 사용자의 정보를 서버에 저장하는것

```php

<?php
    session_start(); //세션시작
    $_SESSION["city"]= "seoul";
    $_SESSION["gu"] = "gangnam";
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title>session</title>
</head>
<body>
   <?php
    echo "세션 변수가 등록되었습니다.";
   ?>
 
</body>
</html>

```
실행
![]({{'/assets/img/php93.png'| relative_url}} )

{: .new }
> htdoc/session/session_set.php 생성
>{: .fs-3 .fw-400}

```php
<?php
    session_start();//세션시작
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title>session</title>
</head>
<body>
   <?php
    if(!isset($_SESSION["city"])){  //city이름의 세션이 없으면 true
        echo "해당 세션변수가 등록되지 않았습니다.";
    }else{
        echo "나의 도시는 {$_SESSION['city']}.입니다.<br/>";
        echo "{$_SESSION['gu']}구에 있습니다<br/>";
        print_r($_SESSION);//세션의 모든 정보를 보여줘(모든 세션의 정보를 연관배열형태로 출력)
    }
   ?>
 
</body>
</html>
```


> `session.php`에서 등록한 세션값이 저장되어 출력되는것을 볼수있다.

### 03-1 session 찾아보기

1. xmapp 설치폴더 에서 php.ini 를 찾아본다
1. `xmapp/php/php.ini-development` 파일을 vscode로 연다
1. `xmapp/php/php.ini` 로 저장한다.
1. `ctrl+F` 를 눌러 `session.save_path` 를 검색한다.
  - ![]({{'/assets/img/php93.jpg'| relative_url}} ) 
1. 우리가 사용중인 프로그램이 포터블 이므로 C드라이브로 가야한다
1.  `C:\Users\Administrator\AppData\Local\Temp\` 폴더로 이동한다.
  - ![]({{'/assets/img/php95.jpg'| relative_url}} )
1. 해당 폴더에서 파일명이 `sess_`~ 로 시작하는 파일을 vscode로 열어본다
  -![]({{'/assets/img/php96.jpg'| relative_url}} )
1. 세션정보를 확인할수 있다

## 04 seisson 지우기

{: .new }
>htdoc/session/session_del.php 생성
>{: .fs-3 .fw-400}

> 세션은 두가지 방법으로 지울수 있다.

```php
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title>session delete</title>
</head>
<body>
   <?php
    session_unset(); //모든 세션 변수의 등록을 해지한다.
    session_destroy(); //세션 아이디 삭제
    echo "모든 세션 변수가 등록 해지되었고, 세션 아이디도 삭제됨";
    print_r($_SESSION);
   ?>
</body>
</html>
```