---
title: 08-Cookie,Session
layout: default
parent: PHP
tags: [ Cookie,Session ]
---
 
---

1. TOC
{:toc}

---

๊ด๋ จ๋งํฌ
{: .label .label-purple }

>[๐php_setcookie](https://www.php.net/manual/en/function.setcookie.php){: .anc}
>[๐php_$_COOKIE](https://www.php.net/manual/en/reserved.variables.cookies.php){: .anc}
>[๐php_session_destroy](https://www.php.net/manual/en/function.session-destroy.php){: .anc}
>[๐php_session_unset](https://www.php.net/manual/en/function.session-unset.php){: .anc}

---

## 00 ์ฟ ํค์ ์ธ์

![]({{'/assets/img/210605_cookie-session.png'| relative_url}} )

- ์ฟ ํค:**ํด๋ผ์ด์ธํธ(๋ธ๋ผ์ฐ์ ) ๋ก์ปฌ์ ์ ์ฅ** ๋๋ ํค์ ๊ฐ์ด ๋ค์ด์๋ ๋ฐ์ดํฐ ํ์ผ

- ์ฟ ํค์ ๊ตฌ์ฑ
  - ์ด๋ฆ : ์ฟ ํค๋ฅผ ๊ตฌ๋ณํ๋๋ฐ ์ฌ์ฉ๋๋ค.
  - ๊ฐ : ์ฟ ํค์ ์ด๋ฆ๊ณผ mapping๋ ๊ฐ์ด๋ค.
  - ์ ํจ์๊ฐ : ์ฟ ํค์ ์ ์ง์๊ฐ์ด๋ค.
  - ๋๋ฉ์ธ : ์ฟ ํค๋ฅผ ์ ์กํ  ๋๋ฉ์ธ ์ ๋ณด์ด๋ค.
  - ๊ฒฝ๋ก : ์ฟ ํค๋ฅผ ์ ์กํ  ์์ฒญ ๊ฒฝ๋ก์ด๋ค.
{:.lh-5}

- ์ธ์: **์ฌ์ฉ์ ์ ๋ณด ํ์ผ์ ์๋ฒ์ ์ ์ฅ**
  - session์ cookie๋ฅผ ์ฌ์ฉํด์ session ID ๋ง์ ์ ์ฅ

- cache : ์ด๋ฏธ์ง๋ CSS, JS ํ์ผ๋ฑ์ ๋ธ๋ผ์ฐ์ ๋ ์๋ฒ์ ์ ๋จ์ ์ ์ฅํด๋๊ณ  ์ฌ์ฉํ๋ ๊ฒ

## 01 Cookie ์์ฑ

{: .new }
>  xmapp/htdoc/cookie/cookie_test.php ํ์ผ์์ฑ

1. [php](https://www.php.net/) ์ ์ ์ํ์ฌ `cookie` ๋ฅผ ๊ฒ์ํด๋ณด์
1. `setcookie` ํด๋ฆญ
1. ์ค๋ช์ ๋ณธ๋ค.
  - ![]({{'/assets/img/php87.jpg'| relative_url}} )
  - ์ฒซ๋ฒ์งธ ๊ฐ์ผ๋ก๋ ๋ฌธ์๋ก ์ด๋ฆ, ๋๋ฒ์งธ ๊ฐ์ผ๋ก ๋ฌธ์๋ก ๊ฐ, ์ธ๋ฒ์งธ๋ก๋ ๋ฐฐ์ด๋ก ์ต์์ ์์ฑํ๋ค.
  - name(์ด๋ฆ),value(๊ฐ),expires_or_options(๋ง๊ธฐ์ผ),path(๊ฒฝ๋ก) ์ ์์ฑํด์ผํ๋ค.

1. cookie_test.php ํ์ผ์์ฑ
    <details open markdown='block'>
      <summary>
        $_COOKIE
      </summary>
    ```
    $_COOKIE ๋ ์ฟ ํค์ ์ด๋ฆ์ ๋ถ๋ฌ์ ๊ฐ์ ํธ์ถํ ์ ์๋ superGlobals ์๋๋ค.
    ```
      {: .text-delta }
    </details>

```php
<?php
$cookieName = "city";   //์ฟ ํค์ ์ด๋ฆ
$cookieValue = "seoul"; //์ฟ ํค์ ๊ฐ
//setcookie ํจ์์ ์ธ์์ ๋ฌ()
setcookie($cookieName, $cookieValue, time() + 60, "/");//time() + 600 ๋ง๋ฃ์๊ฐ: ํ์ฌ๋ถํฐ 600์ด ์ดํ ๋ง๋ฃ
?>

<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>์ฟ ํคํ์คํธ</title>
</head>

<body>
<p>์๋ก๊ณ ์นจ(f5) ํ๋ฉด ์์ฑ๋ ์ฟ ํค๋ฅผ ํ์ธํ  ์ ์์ต๋๋ค.</p>
  <?php
      if(!isset($_COOKIE[$cookieName])){  //$cookieName ๋ณ์๊ฐ ์ธํ๋์ง ์์ผ๋ฉด true
          echo "{$cookieName}๋ผ๋ ์ด๋ฆ์ ์ฟ ํค๋ ์์ฑ์ด ๋์ง ์์์ต๋๋ค.";
      }else{
          echo "{$cookieName}๋ผ๋ ์ด๋ฆ์ ์ฟ ํค๋ ์์ฑ๋์๊ณ , ๊ฐ์ ".$_COOKIE[$cookieName]."์๋๋ค.";
      }
  ?>
</body>

</html>
```
> **`time() + 60` ์ ์ง์ ํ 60์ด๊ฐ ์ง๋๋ฉด ์ฟ ํค๊ฐ ์์ฑ๋๊ณ  ๋ธ๋ผ์ฐ์  ์๋ก๊ณ ์นจํ๋ฉด ๋ฉ์์ง๋ else ๋ฌธ์ ๋ด์ฉ์ด ์ถ๋ ฅ๋๋ค**

์คํํ๋ฉด
![]({{'/assets/img/php92.jpg'| relative_url}} )
---

## 02 Cookie ์ญ์ 

{: .new }
>  xmapp/htdoc/cookie/cookie_del.php ํ์ผ์์ฑ
>

๐**์ฟ ํค์ ์ญ์ ๋ ๋ง๊ธฐ์ผ์ ํ์ฌ๋ณด๋ค ์ด์ ์ผ๋ก ์ค์ ํ๋ฉด ๋๋ค**

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
  <title>์ฟ ํค์ญ์ </title>
</head>

<body>
  <?php
  echo $cookieName . '์ ์ฟ ํค๊ฐ ์ญ์  ๋์์ต๋๋ค.';
  echo '์์ฑ๋ ๊ฐ์ '.$_COOKIE[$cookieName] . '์๋๋ค.';
  ?>
</body>

</html>

```
์คํ
 ![]({{'/assets/img/php90.jpg'| relative_url}} )

**์ฟ ํค๊ฐ ์์ฑ๋์๋ง์ ์ญ์ ๋์์ผ๋ฏ๋ก ์ญ์  ๋ฉ์์ง์ ํจ๊ป ์ค๋ฅ์ถ๋ ฅ**

---


## 03 Session

{: .important }
> ๋ธ๋ผ์ฐ์ ๊ฐ ํด๋น ์ฌ์ดํธ์์ ๋ฒ์ด๋๋ฉด ์ธ์์ข๋ฃ
> ์ฌ์ดํธ ์ ์ํ 30๋ถ์ด์ ์ํธ์์ฉ์ด ์์ผ๋ฉด ์ธ์์ข๋ฃ
>{: .fs-3 .fw-400}

{: .new }[#1]
> htdoc/session/session.php ์์ฑ
>{: .fs-3 .fw-400}

๐ ์ธ์์ ์ฌ์ฉ์์ ์ ๋ณด๋ฅผ ์๋ฒ์ ์ ์ฅํ๋๊ฒ

```php

<?php
    session_start(); //์ธ์์์
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
    echo "์ธ์ ๋ณ์๊ฐ ๋ฑ๋ก๋์์ต๋๋ค.";
   ?>
 
</body>
</html>

```
์คํ
![]({{'/assets/img/php93.png'| relative_url}} )

{: .new }
> htdoc/session/session_set.php ์์ฑ
>{: .fs-3 .fw-400}

```php
<?php
    session_start();//์ธ์์์
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title>session</title>
</head>
<body>
   <?php
    if(!isset($_SESSION["city"])){  //city์ด๋ฆ์ ์ธ์์ด ์์ผ๋ฉด true
        echo "ํด๋น ์ธ์๋ณ์๊ฐ ๋ฑ๋ก๋์ง ์์์ต๋๋ค.";
    }else{
        echo "๋์ ๋์๋ {$_SESSION['city']}.์๋๋ค.<br/>";
        echo "{$_SESSION['gu']}๊ตฌ์ ์์ต๋๋ค<br/>";
        print_r($_SESSION);//์ธ์์ ๋ชจ๋  ์ ๋ณด๋ฅผ ๋ณด์ฌ์ค(๋ชจ๋  ์ธ์์ ์ ๋ณด๋ฅผ ์ฐ๊ด๋ฐฐ์ดํํ๋ก ์ถ๋ ฅ)
    }
   ?>
 
</body>
</html>
```


> `session.php`์์ ๋ฑ๋กํ ์ธ์๊ฐ์ด ์ ์ฅ๋์ด ์ถ๋ ฅ๋๋๊ฒ์ ๋ณผ์์๋ค.

### 03-1 session ์ฐพ์๋ณด๊ธฐ

1. xmapp ์ค์นํด๋ ์์ php.ini ๋ฅผ ์ฐพ์๋ณธ๋ค
1. `xmapp/php/php.ini-development` ํ์ผ์ vscode๋ก ์ฐ๋ค
1. `xmapp/php/php.ini` ๋ก ์ ์ฅํ๋ค.
1. `ctrl+F` ๋ฅผ ๋๋ฌ `session.save_path` ๋ฅผ ๊ฒ์ํ๋ค.
  - ![]({{'/assets/img/php93.jpg'| relative_url}} ) 
1. ์ฐ๋ฆฌ๊ฐ ์ฌ์ฉ์ค์ธ ํ๋ก๊ทธ๋จ์ด ํฌํฐ๋ธ ์ด๋ฏ๋ก C๋๋ผ์ด๋ธ๋ก ๊ฐ์ผํ๋ค
1.  `C:\Users\Administrator\AppData\Local\Temp\` ํด๋๋ก ์ด๋ํ๋ค.
  - ![]({{'/assets/img/php95.jpg'| relative_url}} )
1. ํด๋น ํด๋์์ ํ์ผ๋ช์ด `sess_`~ ๋ก ์์ํ๋ ํ์ผ์ vscode๋ก ์ด์ด๋ณธ๋ค
  -![]({{'/assets/img/php96.jpg'| relative_url}} )
1. ์ธ์์ ๋ณด๋ฅผ ํ์ธํ ์ ์๋ค

## 04 seisson ์ง์ฐ๊ธฐ

{: .new }
>htdoc/session/session_del.php ์์ฑ
>{: .fs-3 .fw-400}

> ์ธ์์ ๋๊ฐ์ง ๋ฐฉ๋ฒ์ผ๋ก ์ง์ธ์ ์๋ค.

```php
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title>session delete</title>
</head>
<body>
   <?php
    session_unset(); //๋ชจ๋  ์ธ์ ๋ณ์์ ๋ฑ๋ก์ ํด์งํ๋ค.
    session_destroy(); //์ธ์ ์์ด๋ ์ญ์ 
    echo "๋ชจ๋  ์ธ์ ๋ณ์๊ฐ ๋ฑ๋ก ํด์ง๋์๊ณ , ์ธ์ ์์ด๋๋ ์ญ์ ๋จ";
    print_r($_SESSION);
   ?>
</body>
</html>
```