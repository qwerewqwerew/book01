---
layout: default
title: 06-form
parent: PHP
tags: [ form ,get,post ]
---
 

1. TOC
{:toc}

---

>[πphp GET](https://www.php.net/manual/en/reserved.variables.get.php){: .anc}
>[πphp SuperGlobals](https://www.php.net/manual/en/language.variables.superglobals.php){: .anc}

---
## 01 form.php

{: .note-title }
> μ΄λ² μμ μμλ λ°μ΄ν°κ° μ΄λ€ λ°©μμΌλ‘ μ μ‘μ΄ λλμ§ νλ¦μ νμνλλ‘ νλ€.<br>
> λ°μ΄ν°μ‘°μμ μΆν μ§ννλ€.<br>
> κ°λ¨ν νμκ°μ μλ ₯ νΌμ μ μν΄λ³΄μ.<br>
> 
>{: .fs-3 .fw-400}


### 01-1 form.php

* `form.php` λ¬Έμ μμ±ν μ½λ μμ±

```php
<?php
  $title='login';
  include_once('inc/header.php');
  require_once('inc/functions.php');
?>
```
* ![]({{'/assets/img/php78.jpg'| relative_url}} )

* `form.php`  μμ±

```php

<?php
$title = 'login';
include_once('inc/header.php');
require_once('inc/functions.php');
?>
/* action="μλ²μ£Όμ"  method="μ μ‘λ°©λ² "*/
<form action="request.php" method="get">
  <p>
    <label for="userName">Name</label>
    /*  type="λ°μ΄ν°νμ" name="νλλͺ" id="μμ΄λ" */
    <input type="text" name="userName" id="userName">
  </p>
  <p>
    <label for="userEmail">Email</label>
    <input type="email" name="userEmail" id="userEmail">
  </p>
  <p>
    <input type="submit" value="λ‘κ·ΈμΈ">
  </p>

```
μ€ννλ©΄
![]({{'/assets/img/php79.jpg'| relative_url}} )


---


### 01-2 request.php

{: .note-title }
> `$_GET[userName]` [super globals variable : λͺ¨λ  λ²μμμ μ¬μ© κ°λ₯ν λ΄μ₯ λ³μ]
>
> HTTP νλ‘ν μ½μ GET λ°©μμ ν΅ν΄ μ¬μ©μκ° μλ²μ μμ²­νμμ λ URLμ ν΅ν΄ μ μ‘λ λ°μ΄ν°λ₯Ό κ°κ°μ μμλ‘ κ°μ§λ λ°°μ΄ λ³μ.
>{: .fs-3 .fw-400}

```php
<?php
$title = 'login';
include_once('inc/header.php');
require_once('inc/functions.php');
?>

<?php
$name = $_GET["userName"];  //form.phpμ name="userName" μμ±μ κ°μ μ λ¬λ°λλ€.
$email = $_GET["userEmail"];//form.phpμ name="userEmail" μμ±μ κ°μ μ λ¬λ°λλ€.
echo $name . 'λμ μλ ₯ν μ΄λ©μΌμ' . $email . 'μλλ€';
?>

<?php
include('inc/footer.php');
?>

```

1. login.php μ νμμ λ³΄ μλ ₯ν λ‘κ·ΈμΈ ν΄λ¦­
  ![]({{'/assets/img/php80.jpg'| relative_url}} )
2. request.phpμ μ£Όμνμμ€κ³Ό νλ©΄μΆλ ₯ λ΄μ© νμΈ
  ![]({{'/assets/img/php81.jpg'| relative_url}} )

`http://localhost/request.php?userName=+%EA%B9%80%EB%A7%9D%EA%B3%A0&userEmail=asdf%40gflgi.com` 

π get λ°©μμ μ¬μ©μκ° μλ ₯ν μ λ³΄κ° μ£Όμνμμ€μ λΈμΆλ¨
{: .bg-w-000}


---
### 01-3 post

**post λ°©μμΌλ‘ λ°κΏλ³΄μ**{: .bg-w-100}

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
    <input type="submit" value="λ‘κ·ΈμΈ">
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
echo $name . 'λμ μλ ₯ν μ΄λ©μΌμ' . $email . 'μλλ€';
?>

<?php
include('inc/footer.php');
?>

```

μ€ν
![]({{'/assets/img/php82.png'| relative_url}} )

π**postλ°©μμ μ£Όμνμμ€μ λΈμΆλμ§ μμ**

---

## 02 μ λ¦¬

{: .note-title }
> Http νλ‘ν μ½μ μ¬μ©νμ¬ get κ³Ό post λ°©μμΌλ‘ λ°μ΄ν°μ μμ²­/μλ΅μ μμ±ν΄λ³΄μλ€. 
> λκ°μ§ λ°©μμ μ λ¦¬ν΄λ³΄μ
>{: .fs-3 .fw-400}

> + GET μμ²­μ μΊμ( Cache : μμ£Ό μ κ·Όνλ λ°μ΄ν°λ₯Ό λ³΅μ¬ ν΄λλ μμ μ μ₯μ)κ° κ°λ₯νλ€. 
> + GET μμ²­μ λΈλΌμ°μ  νμ€ν λ¦¬μ λ¨λλ€.
> + GET μμ²­μ κΈΈμ΄ μ νμ΄ μλ€.
> + GET μμ²­μ μ€μν μ λ³΄λ₯Ό λ€λ£¨λ©΄ μλλ€.

> + POST μμ²­μ μΊμλμ§ μλλ€.
> + POST μμ²­μ λΈλΌμ°μ  νμ€ν λ¦¬μ λ¨μ§ μλλ€.
> + POST μμ²­μ λ°μ΄ν° κΈΈμ΄μ μ νμ΄ μλ€.

πCTRL + F5 λ₯Ό λλ₯΄λ©΄ μΊμκ° μ­μ λλ€