---
layout: default
title: 07-form-validator
parent: PHP
tags: [ form ,get,post ]
---
 

1. TOC
{:toc}

---

>[๐php filter](https://www.php.net/manual/en/book.filter.php){: .anc}

---
## 01 form.php

**๊ฒ์์ฐฝ์ php๋ฅผ ๊ฒ์ํด๋ณด์**
**์ฃผ์ํ์์ค์ search?q ๋ผ๋ ๋ฑ๋ง ๋ค์ ์ฐ๋ฆฌ๊ฐ ์๋ ฅํ ๋จ์ด๊ฐ ๋ณด์ธ๋ค.**
![]({{'/assets/img/php89.jpg'| relative_url}} )

**q๋ Query ์ ํ์๋ก Query๋ (์ง์๋ฌธ:์ ์ฅ๋์ด์ ธ ์๋ ์ ๋ณด๋ฅผ ๊ณจ๋ผ๋ด๊ธฐ ์ํ ์ง๋ฌธ) ์ด๋ค**

![]({{'/assets/img/php87.jpg'| relative_url}} )

> ์์ ๊ทธ๋ฆผ์ http GET ๋ฐฉ์์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ์์ฒญํ ์์์ด๋ค.
> ์ง์  ๋ง๋ค์ด๋ณด์

### 01-1 

1. `07/get-input.php` ์์ฑ

```php
<?php

?>

<h1>get input</h1>

```
์คํ
![]({{'/assets/img/php86.jpg'| relative_url}} )

2. ๋ธ๋ผ์ฐ์  ์ฃผ์์ฐฝ์ ์ฟผ๋ฆฌ๋ฌธ๊ณผ ํ๋ผ๋ฏธํฐ๋ฅผ ์์ฑํ ์ํฐ๋ฅผ ์ณ๋ณธ๋ค
  > ๋น์ฐํ ๋ฐ์ดํฐ๊ฐ ์์ผ๋ ์๋ฌด๊ฒ๋ ์๋์ฌ ๊ฒ์ด๋ค.

![]({{'/assets/img/php89.jpg'| relative_url}} )

3. php ์์ฑ

```php
<?php
$product_id=$_GET['productid'];
?>
<h1>get input</h1>
<?= $product; ?>
```
์คํ

![]({{'/assets/img/php87.jpg'| relative_url}} )

![]({{'/assets/img/php83.jpg'| relative_url}} )
> get ๋ฐฉ์์ ์์ฒญ์ผ๋ก ๋ค์ด์จ ๋งค๊ฐ๋ณ์ ๊ฐ์ ์ทจ๋ํ์ฌ ํ๋ฉด์ ์ถ๋ ฅ

### 01-2

> ๋งค๊ฐ๋ณ์ 2๊ฐ

```php
<?php
$product = $_GET['product']; //superGlobals php๋ฌธ์ ์ด๋์๋ ์ฌ์ฉ๊ฐ๋ฅ
$limit = $_GET['limit'];  //limit ์ถ๊ฐ
?>
<h1>get input</h1>
<?= $product; ?>
<p>
  ์ง์ด์ํ๋ฆฌ์คํธ:<?= $product; ?>-๐Limit <?= $limit;?> //์ถ๋ ฅ
</p>

```
์คํ

![]({{'/assets/img/php88.jpg'| relative_url}} )

๐ํ๋ผ๋ฏธํฐ๋ฅผ ์ฐ๊ฒฐํ ๋๋ `&` ๋ฅผ ์์ฑ

* ๋งค๊ฐ๋ณ์ ๋๊ฐ์ ๊ฐ์ด ์ ์ ๋ฌ๋๊ฒ์ ํ์ธ

---

## 02 filter

{: .note-title }
> ์ฌ์ฉ์๊ฐ ์์์ ์ผ๋ก ์ฃผ์์ฐฝ์ ํตํด ์ํํ ๋ฐ์ดํฐ๋ฅผ ์ ์กํ ์ ์๋ค.
> filter ๋ฅผ ์ฌ์ฉํ์ฌ ๋ฐ์ดํฐ๋ฅผ ๊ณจ๋ผ๋ด์
>{: .fs-3 .fw-400}

```php

<?php
  $product = filter_input(INPUT_GET,'product',FILTER_VALIDATE_INT);  //FILTER_VALIDATE_INT ์ ์๋ true ์๋๋ฉด false
  $limit = filter_input(INPUT_GET,'limit',FILTER_VALIDATE_INT);

  if($product == false || $limit == false){
      die();//๋ฉ์ถฐ
  }
?>
<h1>get input</h1>
<p>
 ์ง์ด์ํ๋ฆฌ์คํธ:<?=  $product; ?> -๐Limit <?=  $limit; ?>
</p>
```
![]({{'/assets/img/php82.jpg'| relative_url}} )
- ๋งค๊ฐ๋ณ์๋ฅผ ๊ธ์๋ก ๋ณด๋ด๋ฉด ์คํ์๋จ

![]({{'/assets/img/php84.jpg'| relative_url}} )
- ์ซ์๋ก ๋ณด๋ด๋ฉด ์คํ๋จ

### 02-1

{: .note-title }
> ํํฐ์ ํด๋น๋์ง ์์๊ฒฝ์ฐ ๊ธฐ๋ณธ๊ฐ์ ์ถ๋ ฅํ์
>
>{: .fs-3 .fw-400}

```php
<?php
    $product = filter_input(INPUT_GET,'product',FILTER_VALIDATE_INT);  //FILTER_VALIDATE_INT ์ ์๋ true ์๋๋ฉด false
    $limit = filter_input(INPUT_GET,'limit',FILTER_VALIDATE_INT);

   //if($product == false || $limit == false){
   //    die();//๋ฉ์ถฐ
   //}

    if($product == false){  //๋ณ์ product ๊ฐ false ์ด๋ฉด
        $product = 10;  // product์ 10ํ ๋น
    }
    if($limit == false){
        $limit = 10;
    }
?>
<h1>get input</h1>
<p>
์ง์ด์ํ๋ฆฌ์คํธ:<?=  $product; ?> - ๐Limit <?=  $limit; ?>
</p>

```

๐ ์์ ์ฝ๋ ์ฒ๋ผ ์์ฑํ๋ฉด ๋น ํ๋ฉด์ด ์ถ๋ ฅ๋์ง ์๊ฒ ์ฃ ?