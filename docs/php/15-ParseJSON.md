---
title: 15-ParseJson
layout: default
parent: PHP
tags: [admin]
---

---

1. TOC
{:toc}

---

## μ°Έκ³ λ§ν¬

{: .no_toc}

π[μμ±μ½λ]({{'/assets/img/14.zip'| relative_url}} ){: .anc}

π[fopen-php-offical]({{'https://www.php.net/manual/en/function.fopen.php'| relative_url}} ){: .anc}
π[fread-php-offical]({{'https://www.php.net/manual/en/function.fread.php'| relative_url}} ){: .anc}
π[fread-php-tutorial]({{'https://www.w3schools.com/php/func_filesystem_fread.asp'| relative_url}} ){: .anc}

---

{: .note }

> νμΌμ μμ±νκ³  λΆλ¬μμ μνλ λΆλΆλ§ μΉνμ΄μ§μ μΆλ ₯νκΈ°
> => data νμΌμ jsonμΌλ‘ μμ±νκ³  php μμ parse ν΄λ³΄μ

# 01-index.php

1. ν¨μνΈμΆ

index.php
{: .label .label-purple }

```php
...
$data = get_data();
...
```

1. ν¨μμ μΈ

functions.php
{: .label .label-purple }

```php
<?php
...
function get_data(){

}

```

---

{: .mb-10}

# 02-app

{: .note }

> μ€μ νμΌμ κ΄λ¦¬ν  config.php μμ±
> require νμΌμ λͺ¨μλμ app.php μμ±

1. app/config.php μμ±
2. index.phpμ config require νλ€

index.php
{: .label .label-purple }

```php
<?php
...
  require('app/config.php');
...
?>
```

1. index.phpμ require κ΅¬λ¬Έμ λ€λ₯Έ νμΌμμλ λ°λ³΅ μ¬μ©νλ―λ‘ νλμ νμΌμμ κ΄λ¦¬νλ κ²μ΄ ν¨μ¨μ μ΄λ€.
2. `app/app.php`λ₯Ό λ§λ€κ³  ν΄λΉ νμΌμμ κ΄λ¦¬νλλ‘ νλ€.
3. app/app.php μμ±
4. μ½λ μμ±

app.php
{: .label .label-purple }

```php
require('app/functions.php');
require('app/config.php');
```

1. index.php μ require μμ 

index.php
{: .label .label-purple }

```php
require('app/app.php');
#require('app/functions.php');
#require('app/config.php');
```

---

{: .mb-10}

# 03-config.php

1. μμ config λ₯Ό μμ±νκ³  μ°κ΄λ°°μ΄λ‘ μ¬μ©ν  κ°μ ν λΉνλ€.

```php
const CONFIG = [
  'data_file' => 'data.json',
  'users' => [
      'admin@admin.com' => '1234'
  ]
];

```

{: .important }

> `const CONFIG` λ μμλΌλ μλ―Έλ‘ λλ¬Έμλ‘ μμ±νμλ€
> CONFIG λ λ°°μ΄μ΄λ μ°κ΄λ°°μ΄λ‘ index λ²νΈ λμ  ν€λ‘ κ°μ κ΅¬λΆνλ€

---

{: .mb-10}

# 04-functions.php

{: .note }

> get_data ν¨μμ μ°κ΄λ°°μ΄ CONFIGλ‘ κ°μ μ λ¬νλ λ‘μ§μ μμ±νλ€.
> μ΄λ κ°μ ννλ₯Ό json νμΌλ‘ μ λ¬ν  κ² μ΄λ―λ‘ μλμ ν¨μλ₯Ό μ°Έμ‘°νλ€.

## phpλ‘ νμΌλ€λ£¨κΈ° ν¨μ

### fopen() νμΌμ μ¬λ ν¨μ

- νμΌμ μ½κ±°λ μ°κΈ° μν΄μλ νμΌμ λ¨Όμ  μ΄μ΄μΌ νλ€.
  π[link]({{'https://www.php.net/manual/en/function.fopen.php'| relative_url}} ){: .anc}

`$fp = fopen("νμΌκ²½λ‘", 'λͺ¨λ/μ΅μ');`

#### μ£Όμλͺ¨λμ λ¦¬

| λͺ¨λ | κΆν                          | λ΄μ©                                          |
| :--- | :---------------------------- | :-------------------------------------------- |
| r    | νμΌμ μ½κΈ° μ μ©μΌλ‘ μ΄κΈ°     | μ°κΈ° λΆκ°λ₯                                   |
| w    | νμΌμ μ°κΈ° μ μ©μΌλ‘ μ΄κΈ°     | κΈ°μ‘΄ νμΌμ΄ μμ λ λ΄μ© μ§μ°κ³  μμ±          |
| w+   | νμΌμ μ½κ³  μΈ μ μλλ‘ μ΄κΈ° | κΈ°μ‘΄ νμΌμ΄ μμ λ λ?μ΄μ°κ³  μμΌλ©΄ μλ‘ μμ± |
| a    | νμΌμ μ°κΈ° μ μ©μΌλ‘ μ΄κΈ°     | κΈ°μ‘΄ νμΌμ΄ μμ λ λ€μ λ§λΆμ               |
| r+   | νμΌμ μ½κ³  μΈ μ μλλ‘ μ΄κΈ° | κΈ°μ‘΄ νμΌμ΄ μμ λ λ΄μ© μ§μ°κ³  μμ±          |
| a+   | νμΌμ μ½κ³  μΈ μ μλλ‘ μ΄κΈ° | κΈ°μ‘΄ νμΌμ΄ μμ λ λ€μ λ§λΆμ               |

### fwrite() νμΌμ μ¬λ ν¨μ

- νμΌμ λ΄μ©μ μμ±νλ ν¨μ
  `$fp = fopen("νμΌκ²½λ‘", 'w');`
  `$fw = fwrite($fp, 'νμΌμ μΈ λ΄μ©');`

### fread() νμΌμ μ½λ ν¨μ

- μ΄λ¦° νμΌμ μ½λ ν¨μ
  `$fp = fopen("νμΌκ²½λ‘", 'r');`
  `$fr = fread($fp, 'λΆλ¬μ¬μλ');`

### fclose() νμΌμ μ¬λ ν¨μ

- μ¬μ©μ΄ λͺ¨λ λλ νμΌλ«κΈ°
  `fclose($fp);`

## get_data ν¨μμμ±

functions.php
{: .label .label-purple }

```php
...
get_data(){
//1
  $fname = CONFIG['data_file'];
//2
  if (!file_exists($fname)) {
//3
    $handle = fopen("$fname", "w+");
//4
    fclose($handle);
  }
}
...
```

<details markdown='block'>
  <summary>
    <span class='text-red-200'>π’μ€μ¬μ°κΈ°</span>
  </summary>
```
 file_put_contents($fname,'');
```
</details>

1. λ³μ `$fname` μ μμ CONFIG μ data_file ν€μ κ°μ ν λΉνλ€.
2. ` file_exists("κ²½λ‘ λ° νμΌμ΄λ¦")`μλ²μ νμΌμ΄ μλμ§ νμΈνμ¬ bool κ° λ°ν
3. `$fname`μ κ°μ΄ μμ κ²½μ° μ¦ λ°μ΄ν° νμΌμ΄ μ μκ²½μ° fopen ν¨μμ w+ μ΅μμ μ¬μ©(μμΌλ©΄ λ?μ΄μμ°κ³  μμΌλ©΄ μμ±) νμ¬ νμΌμ μ΄κ³  `$handle ` λ³μμ μ μ₯.
4. μ½κ³  λν νμΌμ λ«λλ€
   {: .box .bg-white-100}

functions.php
{: .label .label-purple }

```php
...
get_data(){
  $fname = CONFIG['data_file'];
  //1
  $json = '';
  if (!file_exists($fname)) {
    $handle = fopen("$fname", "w+");
    fclose($handle);
  } else{
  //2
  $handle = fopen("$fname", "r");
  //3
  $json = fread($handle, filesize($filename));
  }
  
//4
  return $json;
}
...
```

<details markdown='block'>
  <summary>
    <span class='text-red-200'>π’μ€μ¬μ°κΈ°</span>
  </summary>
```
 $json = file_get_contents($fname);
```
</details>
1. `$json`λ³μμ λΉ λ¬Έμμ΄ ν λΉ
2. νμΌμ΄ μμκ²½μ° else λ¬ΈμΌλ‘ λ°λλ€ <br>
  νμΌμ΄ μμ κ²½μ°μλ λ΄μ©μ μ½κΈ°λ§ νλ€ 
3. $fname μ νμΌμ μ½κΈ°μ μ©μΌλ‘ μ΄μ΄μ $handle μ μ μ₯
4. fread ν¨μλ‘ $handle μ νμΌμ μ½λλ€ filesize($fname) μ μ¬μ΄μ¦ π[μμ μ°Έμ‘°]({{'https://www.php.net/manual/en/function.fread.php'| relative_url}} ){: .anc}
{: .box .bg-white-100}

μ€ν
index.phpλ₯Ό μ€ννλ©΄ data.json νμΌμ΄ μμ±λλ€.
![]({{'/assets/img/php151.jpg'| relative_url}} )



---
{: .mb-10}
 
# 05-data.json

π[json-MDN]({{'https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/JSON'| relative_url}} ){: .anc}

```json
[
    {
        "term" :"html",
        "desc" : "μΉνμ΄μ§μ λ΄μ©μ μ λ¬νλ€."
    },
    {
        "term" :"css",
        "desc" : "μΉνμ΄μ§μ λͺ¨μμ λ΄λΉνλ€."
    },
    {
        "term" :"javascript",
        "desc" : "μΉνμ΄μ§μ λμ μμλ₯Ό λ΄λΉνλ€."
    }

]
```


---
{: .mb-10}
 
# 06-view

{: .note }
>
> μμ±ν json νμΌμ view μ λ£μ΄λ³΄μ
> μ΅μ’μΌλ‘ titleμ νμν΄μΌ ν  κ²λ€κ³Ό bodyμ νμν΄μΌ ν κ²μ μ λ¦¬νλ€


index.php
{: .label .label-purple }

```php
...
view('index', $data);
```

functions.php
{: .label .label-purple }

```php
...
function view($name, $data)
{
    global $title;
    require('view/layout_view.php');
}
...
```

index_view.php
{: .label .label-purple }

```php
<div class="container">
  <header>
    <h1><?= $title; ?></h1>
  </header>
  <main>
    <h2><?= $data; ?></h2>
  </main>
</div>
```

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

μ€ν
![]({{'/assets/img/php155.jpg'| relative_url}} )