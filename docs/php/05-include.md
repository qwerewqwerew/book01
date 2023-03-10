---
layout: default
title: 05-include
parent: PHP
tags: [ include ,Require ]
---
 

1. TOC
{:toc}

---

>[πphp κ³΅μλ¬Έμ](https://www.php.net/manual/en/function.include.php){: .anc}

---
## 01 Include

{: .note-title }
>κ³΅ν΅μΌλ‘ μ°λ νμΌμ μΈλΆμ λΆλ¬μμ μΈμ μλ€.<br>
>html λ¬Έμμ header, footer κ°μ λ°λ³΅λλ μμ­μ μΈλΆμ μ μ₯ ν΄ λκ³ <br>
>λΆλ¬μμ μ¬μ©νλ κ²
>{: .fs-3 .fw-400}

---

### 01-1 λ¬ΈμλΆλ¦¬

1. `functions.php` -> λ€λ₯Έμ΄λ¦μΌλ‘ μ μ₯ -> `home.php`
2. νμλ λΆλΆμ λ°λ³΅μμ­μΌλ‘ κ°μ£Όνκ³  μ§ννλ€
  + ![]({{'/assets/img/php61.jpg'| relative_url}} )
3. νμλ λΆλΆμ μ½λλ₯Ό μλΌλΈλ€
  + ![]({{'/assets/img/php62.jpg'| relative_url}} )
4. vscode μ `inc` ν΄λλ₯Ό μμ±νκ³  νμμ `header.php` λ₯Ό λ§λ λ€.
  + ![]({{'/assets/img/php63.jpg'| relative_url}} )
  + ![]({{'/assets/img/php64.jpg'| relative_url}} )
5. μλΌλΈ μ½λλ₯Ό `header.php` μ λΆμ¬λ£λλ€.
  + ![]({{'/assets/img/php65.jpg'| relative_url}} )
  + νΈμ§μλ£μ€μ·
  + ![]({{'/assets/img/php66.jpg'| relative_url}} )
 
---

### 01-2 λ³μμ€μ 
1. `header.php` μμ 
  + μ½μν νμ΄μ§μ μ λͺ©μ μΆλ ₯ν μ μλλ‘ titleμ λ³μμ²λ¦¬

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

1. `home.php` μμ 

```php
<?php
  $title='home';
  include('inc/header.php');
?>
...
```
2. ` $title='home';` -> `inc/header.php`μ μ λ¬ν  title λ³μκ°
3. `include('inc/header.php');` -> include ν¨μλ μ½μν  νμΌμ κ²½λ‘λ₯Ό μμ±νλ©΄ λλ€.
4. `home.php` λ₯Ό μ€ννμ¬ ν­ μ λͺ©κ³Ό h1μ λ³μκ°μ΄ λ³κ²½λμλμ§ νμΈνλ€
μ€ν
![]({{'/assets/img/php67.jpg'| relative_url}} )

5. κ°λ°μλκ΅¬μμ λ³μκ°μ΄ μ μ©λκ²μ νμΈνλ€.
![]({{'/assets/img/php68.jpg'| relative_url}} )

{: .danger }
> `header.php` λ§ λ¨λμΌλ‘ μ€νν  κ²½μ° μλ¬λ°μ 
> `home.php` μ $title λ³μλ₯Ό  include ν¨μ μ΄νμ μ΄κΈ°ν ν  κ²½μ° μλ¬λ°μ
>{: .fs-3 .fw-400}
---

### 01-4 μμ©

> title λ³μμ κ°μ νμΈνμ¬ μμΌλ©΄ μλ¬λμ  λΉκ° μΆλ ₯μν€κΈ°

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
1. `header.php` μ μ΅μλ¨μ μμ±
3. isset ν¨μλ₯Ό νμ©νμ¬ λ³μμ μνλ₯Ό νμΈνλ€. $title λ³μκ° μ€λΉλμ§ μμμκ²½μ° true μ΄λ―λ‘ $titleλ³μμ λΉκ°μ μ μ₯νλ€.

4. μ΄μ  `header.php` λ§ μ€νν΄λ μ€λ₯κ° λ°μνμ§ μλλ€

μ€ν
![]({{'/assets/img/php69.jpg'| relative_url}} )

5. μ£Όμμ²λ¦¬ ν κ³μ μ§ν


---

### 01-5 footer
1. `home.php` νΈμ§
2. `</body></html>`λ₯Ό μλΌλΈλ€
3. λ¬Έμμ νλ¨μ μλμ μ½λλ₯Ό μμ±νλ€.

```php
...

<?php
include('inc/footer.php')
?>
```
4. `inc/footer.php` λ₯Ό μμ±ν μλΌλΈ μ½λλ₯Ό λΆμ¬λ£λλ€
![]({{'/assets/img/php70.jpg'| relative_url}} )

5. μ€ννμ¬ κ²°κ³Όλ₯Ό νμΈ
![]({{'/assets/img/php72.jpg'| relative_url}} )
`</body></html>`κ° μΆκ°λκ² νμΈ
{:.no-toc}

---

## 02 Require

{: .note-title }
> ν¨μλ₯Ό include ν΄λ³΄μ
>{: .fs-3 .fw-400}

### 02-1 

1. `inc/functions.php` μμ±
2. `home.php`μ ν¨μμ νΈμΆλ¬Έλ§ `functions.php`λ ν¨μμ μ€νλ¬Έ λ§ μΌλ‘ λΆλ¦¬νλ€.
![]({{'/assets/img/php71.jpg'| relative_url}} )


<details open markdown='block'>
  <summary>
    home.php
  </summary>
  {: .text-delta }

```php
<?php
$title = 'λ§κ³ ν';
include('inc/header.php');
require('inc/functions.php');
?>

<pre>
  function ν¨μμ΄λ¦ (λ§€κ°λ³μ1,λ§€κ°λ³μ2){
    ...μ€νλ¬Έ
  }
  ν¨μμ΄λ¦();
  
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
<h2>μ§μ­λ³μ μ μ­λ³μ</h2>
<?php
myfunc();

?>

<hr>
<h2>μ μ­λ³μ</h2>
<?php

$var2 = 20;

myfunc2();
echo "{$var2} μ<br>";
?>
<hr>
<h2>μ μ λ³μ</h2>
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
  $result = $x + $y;  //μ§μ­λ³μ(local variable)
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
  echo "$var2 μ <br>"; //μΆλ ₯λ¨
}

function increment()
{
  static $count;
  $count++;
  echo "$count<br/>";
}
```
</details>

 `home.php`μμ sum ν¨μμ μΈμλ₯Ό λ³κ²½ν΄μ μ€νν΄λ³Έλ€
![]({{'/assets/img/php73.jpg'| relative_url}} )


λͺ¨λ  ν¨μκ° μ€λ₯μμ΄ μ€νλλμ§ νμΈ
{: .bg-w-000 }

---

## 03 Include VS Require

`home.php` μ include λ¬Έμ₯μ λ³κ²½

```php
<?php
$title = 'λ§κ³ ν';
include('inc/headers.php'); //μλ κ²½λ‘
include('inc/functions.php'); //includeλ‘ μμ 
?>
```
> μ€λ₯μΆλ ₯ ν κ·Έλλ‘ μ€ν

![]({{'/assets/img/php74.jpg'| relative_url}} )

`home.php` μ include λ¬Έμ₯μ λ³κ²½

```php
<?php
$title = 'λ§κ³ ν';
require('inc/headers.php');
require('inc/functions.php');
?>
```
> μ€λ₯μΆλ ₯ μ€νμν¨

![]({{'/assets/img/php75.jpg'| relative_url}} )

{: .note-title }
> Include : λ¨μν κ΅¬μ‘°λ₯Ό λ°λ³΅ν λ
> Require: μ€λ₯λ°μμ μΉλͺμ μΈ μν©μΌλ (λ°μ΄ν°λ² μ΄μ€μμ μ°λ...)
>{: .fs-3 .fw-400}

## 04 _once

+ `include`λ₯Ό λ°λ³΅ν΄λ³΄μ

```php
include('inc/header.php');
include('inc/header.php');
require('inc/header.php');
require('inc/header.php');
```
+ λλ²μ© λ°λ³΅ μ μ©λλ€.

![]({{'/assets/img/php76.jpg'| relative_url}} )


+ `_once` λ₯Ό μ¬μ©ν΄λ³΄μ

```php

<?php
$title = 'λ§κ³ ν';
include('inc/header.php');
include_once('inc/header.php');  //onceλ₯Ό λΆμ΄λ©΄ νλ²λ§λ¨

require('inc/header.php');
require_once('inc/header.php'); //onceλ₯Ό λΆμ΄λ©΄ νλ²λ§λ¨
require_once('inc/functions.php');
?>

```

![]({{'/assets/img/php77.jpg'| relative_url}} )



---
{: .mb-10}
 
# μ΄μ λ¦¬

{: .note }
>
>include : λ€λ₯Έ PHPνμΌμ λΆλ¬μ¬λ μ¬μ©
>
>include_once : νμΌμ λΆλ¬μ¬λ 1λ²λ§ λ‘λνκ² λ¨
>
>require :λ€λ₯Έ PHPνμΌμ λΆλ¬μ¬λ μ¬μ©
>
>require_once : νμΌμ λΆλ¬μ¬λ 1λ²λ§ λ‘λνκ² λ¨
>
> include, require μ κΈ°λ₯μ°¨μ΄λ μμΌλ require κ° μ’λ μκ²©ν λ¬Έλ²μ²λ¦¬λ₯Ό ν¨