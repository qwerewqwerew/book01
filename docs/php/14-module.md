---
title: 14-module
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

๐[์์ฑ์ฝ๋]({{'/assets/img/13.zip'| relative_url}} ){: .anc}


---

# ๋ชจ๋ํํ๊ธฐ
{: .no_toc}

{: .note }
> ํ๋ก๊ทธ๋จ์ ์ ์์ ์์ฐ์ฑ๊ณผ ์ต์ ํ, ๊ด๋ฆฌ์ ์ฉ์ดํ๊ฒ ๋ชจ๋(๊ธฐ๋ฅ) ๋จ์๋ก ๋ถํ ํ๋ ๊ฒ <br/>
> ๊ด๋ จ์๋ ์ฝ๋๋ ์ฌ์ฌ์ฉ๋๋ ํจ์๋ฅผ ๋ถ๋ฆฌํ์ฌ ์์ ๋จ์๋ก ๊ด๋ฆฌํ๋ฉด ์ฝ๋์ ๊ฐ๋์ฑ์ด๋ ์ฌํ์ฉ์ฑ์ด ๋์์ง๋ค. <br/>
> ๋ก์ง,๋ทฐ,๋ ์ด์์ ๋ถ๋ถ์ ๋ถ๋ฆฌํ์ฌ ์์ฑํด๋ณด์ <br/>

```
โโindex.phpโโฌโ/appโโฌโapp.php
โ           โ      โโconfig.php
โ           โ      โโfunctions.php
โ           โโโ/viewโโฌโindex_view.php
โโdata.json          โโlayout_view.php
```


---
{: .mb-10}
 
# 01-index.php

1. 13/index.php๋ฅผ ์์ฑ


index.php
{: .label .label-purple }

```php
<?php
  $title = '์๋ํ์ธ์';
?>
```

---

{: .mb-10}
 
# 02-view

{: .note }
> view ํด๋์๋ ํ๋ฉด์ ๋ณด์ด๋ ๋ด์ฉ๋ง ๋ฃ๋๋ค.

1. view ํด๋ ์์ฑ
2. view/index_view.php ์์ฑ

index_view.php
{: .label .label-purple }

```html
<div class="container">
  <header>
      <h1><?= $title; ?></h1>
  </header>
</div>
```


---
{: .mb-10}
 
# 03-functions.php

{: .note }
> ๊ธฐ๋ฅ์ app ํด๋์์ ๊ด๋ฆฌํ๋ค.

1. app/functions.php ์์ฑ


functions.php
{: .label .label-purple }

```php
<?php
function view($name){
    //$title ์ index.php์ ์ง์ญ๋ณ์ ์ด๋ฏ๋ก functions์์ ์ ์ญ๋ณ์๋ก ์ง์ ํ๋ค.    
    global $title;
}

?>
```

---
{: .mb-10}
 
# 04-index.php

1. functions.php๋ฅผ ์ธํด๋ฃจ๋ ํด์ผ ํ๋ค.
2. viewํจ์๋ฅผ ์คํํ๋ฉด์ ์ธ์๋ฅผ ์ ๋ฌํ๋ค(ํ์ฌ ํ์ด์ง์ ์ด๋ฆ)

index.php
{: .label .label-purple }

```php
<?php
  require('app/functions.php');
  $title = '์๋ํ์ธ์';
  view('index');  
?>
```
---
{: .mb-10}
 
# 05-functions.php
1. view ํจ์๋ฅผ ์์ฑํ๋ค.


functions.php
{: .label .label-purple }

```php
<?php
function view($name){
    global $title;
    require('view/'.$name.'_view.php');
}
?>
```

์ค๋ช
![]({{'/assets/img/php145.jpg'| relative_url}} )

์คํ

![]({{'/assets/img/php146.jpg'| relative_url}} )

---

## $title์ ๋งค๊ฐ๋ณ์๋ก ํ์ฉ
{: .no_toc}

{: .note }
>
>
>
functions.php
{: .label .label-purple }

```php
<?php
function view($name,$title){
    #global $title;
    require('view/'.$name.'_view.php');
}

```
+ `$title`์ view ํจ์์์ ๋งค๊ฐ๋ณ์๋ก ๋ฐ๋๋ค
+ view ํจ์๋ `$name`_view ๋ฌธ์๊ฐ ์ฝ์๋์ด ์์ผ๋ฏ๋ก index_view.php ์ $title์ ๊ฐ์ด ์ ๋ฌ๋๋ค.
{: .box .bg-white-100}


index.php 
{: .label .label-purple }

```php
<?php
  ...
  view('index',$title);  
?>
```

+ `index.php`์ view ํจ์ ํธ์ถ๋ถ์ `$title`์ ๋๋ฒ์งธ ์ธ์๋ก ์ ๋ฌํ๋ค.
{: .box .bg-white-100}


index_view.php
{: .label .label-purple }

```php
<div class="container">
  <header>
    <h1><?= $title; ?></h1>
  </header>
  <main>
    <h2><?= $title; ?></h2>
  </main>
</div>
```

+ ์ด๋ ๊ฒ ์ ๋ฌ๋ฐ์ title ๋ณ์๋ index_view.php์์ ๋ค๋ฅธ ์์์๋ ์ฌ์ฉํ ์ ์๋ค.
{: .box .bg-white-100}

์คํ

![]({{'/assets/img/php148.jpg'| relative_url}} )

---
{: .mb-10}
 
# 06-layout_view.php

1. view/layout_view.php ์์ฑ


layout_view.php
{: .label .label-purple }

```php
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $title ?></title>
</head>
<body>
<?php require($name."_view.php"); ?>
</body>
</html>
```


---
{: .mb-10}
 
# 07-functions.php


functions.php
{: .label .label-purple }

```php
<?php
function view($name,$title){
    #global $title;
    #require('view/'.$name.'_view.php');
    require('view/layout_view.php');
}

```

์คํ
![]({{'/assets/img/php149.jpg'| relative_url}} )

![]({{'/assets/img/php150.jpg'| relative_url}} )

+ funcitons.php ์์layout_view.php๋ฅผ ํธ์ถ
+ index.php์ head ์์ญ์ด ์์ฑ๋์๋ค
{: .box .bg-white-100}