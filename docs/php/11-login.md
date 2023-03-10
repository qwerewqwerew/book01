---
title: 11-login
layout: default
parent: PHP
tags: [admin]
---

---

1. TOC
{:toc}

---

## ์ฐธ๊ณ ๋งํฌ

{: .no_toc}

๐[$_SERVER๋งํฌ]({{'docs/php/server/#%EB%AC%B8%EB%B2%95'| relative_url}} ){: .anc}

๐[filter_input]({{'https://www.php.net/manual/en/function.filter-input.php'| relative_url}} ){: .anc}

๐[Types_of_filters]({{'https://www.php.net/manual/en/filter.filters.php'| relative_url}} ){: .anc}

๐[์์ฑ์ฝ๋]({{'/assets/img/login.zip'| relative_url}} ){: .anc}

---



# ๋ก๊ทธ์ธ ํ์ด์ง

{: .no_toc}

{: .note}

> ### ์ฃผ์๊ธฐ๋ฅ
>
> {: .no_toc}
>
> - post ๋ฐฉ์ ๊ฐ ํ์ธ
> - ํจ์ ์ด์ฉ ๊ฐ ํ์ธ
> - ๋ฉํฐํผ ๊ฐ ํ์ธ
> - ์ด๋ฉ์ผ ํ์ ์ ํจ์ฑ๊ฒ์ฌ

## 01 login.php

1. `htdoc/09/login.php` ์์ฑ
2. ์ฝ๋์์ฑ

login.php
{: .label .label-purple }

```php

<?php
  $title = 'Login'; //๋ณ์
  include('header.php'); //๊ณตํต์์ญ
  require_once('functions.php');//๊ณตํตํจ์
?>

<?php include('footer.php'); ?>//๊ณตํต์์ญ
```

## 02 header.php

1. login.php ์ ๊ฐ์ ํด๋์ header.php ์์ฑ

header.php
{: .label .label-purple }

```php
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- ๋ณ์ title์ ๊ฐ์ ์ถ๋ ฅ -->
  <title><?= $title; ?></title>
</head>
<body>


```

## 03 footer.php

1. login.php ์ ๊ฐ์ ํด๋์ footer.php ์์ฑ
2. html ํ๊ทธ๋ฅผ ๋ซ๋ ๋ฌธ์ฅ์ ๋ฃ๋๋ค
footer.php
{: .label .label-purple }

```php

</body>
</html>

```

## 04 functions.php

1. login.php ์ ๊ฐ์ ํด๋์ functions.php ์์ฑ


## 05 login ์์ 

{: .important }

> form ์์ ์ถ๊ฐ

login.php
{: .label .label-purple }

```php

<?php
  //๋ณ์title ์ Login ์ ์ฅ
  $title = 'Login';
  //header.php ์ฝ์
  include('header.php');
  //functions.php ์ฝ์
  require_once('functions.php');
    //global-super $_SERVER๋ฅผ ๋ก email ์ ๊ฐ์ ์ถ๋ ฅํ๋ค
    ////$_SERVER๋ณ์์ ์์ฒญ๋ฐฉ์์ค post ์ ๊ฐ์ผ๋ฉด true
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
    //$_POST ๋ฐฉ์์ผ๋ก ์์ฒญ๋ฐ์ email ์ ์ถ๋ ฅํ๋ค
    echo $_POST['email'];
  }
?>
<form action="" method="POST">
...

<?php include('footer.php'); ?>

```

์ค๋ช

![]({{'/assets/img/php134.jpg'| relative_url}} )

๐[$_SERVER๋งํฌ]({{'docs/php/server/#%EB%AC%B8%EB%B2%95'| relative_url}} ){: .anc}

์คํ

2๋ฒ์ฒ๋ผ email์ value ๊ฐ ํ๋ฉด์ ์ถ๋ ฅ๋๋์ง ํ์ธ
{: .fs-3 .text-grey-lt-400 .fw-800}

![]({{'/assets/img/php130.jpg'| relative_url}} )

## 06 functions.php ์์ 

{: .important }

> - form ์์์ value ๋ฅผ ํ๋์ฉ ์ ๋ฌ๋ฐ์ ํ์ธํ๋
>   ํจ์๋ฅผ ์์ฑํ๋ค.

1. functions.php์ $value ๋ฅผ ์ถ๋ ฅํ๋ ํจ์ ์์ฑ

functions.php
{: .label .label-purple }

```php
<?php
    function output($value){
        //์๋ ฅํ ํํ ๊ทธ๋๋ก ํ์ธํ๊ธฐ ์ํด pre ํ๊ทธ๋ฅผ ์์ฑ
        echo '<pre>';
        //๋ฐฐ์ด์ ๊ฐ์ ์ค์  ์ถ๋ ฅ ํํ
        print_r($value);
        echo '</pre>';
    }
?>

```

2. login.php ์ ๋ด์ฉ์ output ํจ์๋ฅผ ์ถ๋ ฅํ๋๋ก ์์ 

login.php
{: .label .label-purple }

```php
...
  //echo $_POST['email'];
  output($_POST);
...
```

์ค๋ช
![]({{'/assets/img/php135.jpg'| relative_url}} )

์ถ๋ ฅ
![]({{'/assets/img/php133.jpg'| relative_url}} )

์คํํ๋ฉด์ ์ถ๋ ฅ๋ array ๋ด์ value ๋ค์ ๊ฐ๊ฐ ์๋ ฅ๋ฐ์ ๊ฐ์ [name]=value ํํ๋ก ๋ณด์ฌ์ฃผ๊ณ  ์๋ค.

๋ง์ฝ `<input type="submit" name="login" value="๋ก๊ทธ์ธ">` ํ๊ทธ์ name ์์ฑ์ด ์๋ค๋ฉด
์ฌ๋ฌ๊ฐ์ submit ๋ฒํผ์ด ์์๊ฒฝ์ฐ ๊ตฌ๋ณํ ์ ์๋ค
{: .fs-3 .text-grey-lt-400 .fw-800}

3. ์์ 

- post ๋ฐฉ์์ผ๋ก ์ ๋ฌ๋ฐ์ ๊ฐ์ค์ ๋ณ์๊ฐ ์ค์ ๋์๋์ง ํ์ธํด์ ์ถ๋ ฅํ๋ค

login.php
{: .label .label-purple }

```php
if(isset($_POST['login'])){
output($_POST);
}
```

---

{: .mb-10}

## 07-์ด๋ฉ์ผํ์ ์ ํจ์ฑ ๊ฒ์ฌ

{: .note }

> filter_input ํจ์๋ true ๋ false๋ฅผ ๋ฐํ
> <a href="https://www.php.net/manual/en/function.filter-input.php">filter_input</a> ํจ์๋ parameter ๋ฅผ ์ฌ์ฉํ๋ค.
> ๊ทธ์ค type์ `One of INPUT_GET, INPUT_POST, INPUT_COOKIE, INPUT_SERVER, or INPUT_ENV.`์ค์ ํ๋๋ฅผ ์์ฑํ๋ค
> ![]({{'/assets/img/php136.jpg'| relative_url}} )

login.php
{: .label .label-purple }

```php
if(isset($_POST['login'])){
  //output($_POST);
   //filter_input
  //INPUT_POST ๋ฐฉ์, ๋ณ์๋ช email , email ์ ํจ์ฑ๊ฒ์ฌ ๋งค๊ฐ๋ณ์
  $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

  // ๋ณ์ email ์ false ๊ฐ ๋ฐํ๋๋ฉด
  if($email == false){
      $status = '์ด๋ฉ์ผ ํ์์ ๋ง๊ฒ ์๋ ฅํด์ฃผ์ธ์.';
  }
}
```

- login.php ํ๋จ์ ์๋ฌ๋ฅผ ์ถ๋ ฅํ  ์์๋ฅผ ๋ฃ๋๋ค

login.php
{: .label .label-purple }

```php
...

<div class="error">
  <p>
    <?php
    if (isset($status)) {
      echo $status;
    }
    ?>
  </p>
</div>
<?php include('footer.php') ?>
```

![]({{'/assets/img/php137.jpg'| relative_url}} )

์คํ
![]({{'/assets/img/php138.jpg'| relative_url}} )

<details markdown='block'>
  <summary>
    <span class='text-red-200'>๐ข์๋ฃ์ฝ๋</span>
  </summary>
  ```html
  <?php
  $title = 'Login';
  include('header.php');
  require_once('functions.php');
  if (isset($_POST['login'])) {
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    if ($email == false) {
      $status = '์ด๋ฉ์ผ ํ์์ ๋ง๊ฒ ์๋ ฅํด์ฃผ์ธ์.';
    }
  }
  ?>
  <form action="" method="POST">
    <p>
      <label for="email">์ด๋ฉ์ผ:</label>
      <input type="text" name="email" id="email" autocomplete="off">
    </p>
    <p>
      <label for="password">๋น๋ฐ๋ฒํธ:</label>
      <input type="password" name="password" id="password">
    </p>
    <p>
      <input type="submit" name="login" value="๋ก๊ทธ์ธ">
    </p>
  </form>
  <div class="error">
    <p>
      <?php
      if (isset($status)) {
        echo $status;
      }
      ?>
    </p>
  </div>
  <?php include('footer.php') ?>

```
</details>
```
