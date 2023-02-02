---
layout: default
title: 07-form-validator
parent: PHP
tags: [ form ,get,post ]
---
 

1. TOC
{:toc}

---

>[🔗php filter](https://www.php.net/manual/en/book.filter.php){: .anc}

---
## 01 form.php

**검색창에 php를 검색해보자**
**주소표시줄에 search?q 라는 낱말 뒤에 우리가 입력한 단어가 보인다.**
![]({{'/assets/img/php89.jpg'| relative_url}} )

**q는 Query 의 표시로 Query란 (질의문:저장되어져 있는 정보를 골라내기 위한 질문) 이다**

![]({{'/assets/img/php87.jpg'| relative_url}} )

> 위의 그림은 http GET 방식으로 데이터를 요청한 예시이다.
> 직접 만들어보자

### 01-1 

1. `07/get-input.php` 생성

```php
<?php

?>

<h1>get input</h1>

```
실행
![]({{'/assets/img/php86.jpg'| relative_url}} )

2. 브라우저 주소창에 쿼리문과 파라미터를 작성후 엔터를 쳐본다
  > 당연히 데이터가 없으니 아무것도 안나올 것이다.

![]({{'/assets/img/php89.jpg'| relative_url}} )

3. php 작성

```php
<?php
$product_id=$_GET['productid'];
?>
<h1>get input</h1>
<?= $product; ?>
```
실행

![]({{'/assets/img/php87.jpg'| relative_url}} )

![]({{'/assets/img/php83.jpg'| relative_url}} )
> get 방식의 요청으로 들어온 매개변수 값을 취득하여 화면에 출력

### 01-2

> 매개변수 2개

```php
<?php
$product = $_GET['product']; //superGlobals php문서 어디서나 사용가능
$limit = $_GET['limit'];  //limit 추가
?>
<h1>get input</h1>
<?= $product; ?>
<p>
  진열상품리스트:<?= $product; ?>-👍Limit <?= $limit;?> //출력
</p>

```
실행

![]({{'/assets/img/php88.jpg'| relative_url}} )

🔑파라미터를 연결할때는 `&` 를 작성

* 매개변수 두개의 값이 잘 전달된것을 확인

---

## 02 filter

{: .note-title }
> 사용자가 악의적으로 주소창을 통해 위험한 데이터를 전송할수 있다.
> filter 를 사용하여 데이터를 골라내자
>{: .fs-3 .fw-400}

```php

<?php
  $product = filter_input(INPUT_GET,'product',FILTER_VALIDATE_INT);  //FILTER_VALIDATE_INT 정수는 true 아니면 false
  $limit = filter_input(INPUT_GET,'limit',FILTER_VALIDATE_INT);

  if($product == false || $limit == false){
      die();//멈춰
  }
?>
<h1>get input</h1>
<p>
 진열상품리스트:<?=  $product; ?> -👍Limit <?=  $limit; ?>
</p>
```
![]({{'/assets/img/php82.jpg'| relative_url}} )
- 매개변수를 글자로 보내면 실행안됨

![]({{'/assets/img/php84.jpg'| relative_url}} )
- 숫자로 보내면 실행됨

### 02-1

{: .note-title }
> 필터에 해당되지 않을경우 기본값을 출력하자
>
>{: .fs-3 .fw-400}

```php
<?php
    $product = filter_input(INPUT_GET,'product',FILTER_VALIDATE_INT);  //FILTER_VALIDATE_INT 정수는 true 아니면 false
    $limit = filter_input(INPUT_GET,'limit',FILTER_VALIDATE_INT);

   //if($product == false || $limit == false){
   //    die();//멈춰
   //}

    if($product == false){  //변수 product 가 false 이면
        $product = 10;  // product에 10할당
    }
    if($limit == false){
        $limit = 10;
    }
?>
<h1>get input</h1>
<p>
진열상품리스트:<?=  $product; ?> - 👍Limit <?=  $limit; ?>
</p>

```

🔑 위의 코드 처럼 작성하면 빈 화면이 출력되지 않겠죠?