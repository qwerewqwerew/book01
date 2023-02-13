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

# 로그인 페이지
{: .no_toc}


{: .note}
> ### 주요기능
> + post 방식 값 확인
> + 함수 이용 값 확인
> + 멀티폼 값 확인
> + 이메일 형식 유효성검사




## 01 login.php

1. `htdoc/09/login.php` 생성

2.  코드작성


login.php
{: .label-purple }


```php

<?php  
  $title = 'Login'; //변수
  include('header.php'); //공통영역
  require_once('functions.php');//공통함수
?>

<?php include('footer.php'); ?>//공통영역
```


## 02 header.php
1. login.php 와 같은 폴더에 header.php 생성

header.php
{: .label .label-purple }

```php
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- 변수 title의 값을 출력 -->
  <title><?= $title; ?></title>
</head>
<body>
  

```



## 03 footer.php
1. login.php 와 같은 폴더에 footer.php 생성

footer.php
{: .label .label-purple }

```php

</body>
</html>

```


## 04 functions.php
1. login.php 와 같은 폴더에 functions.php 생성

footer.php
{: .label .label-purple }

```php

</body>
</html>

```

## 05 login 수정

{: .important }
> form 요소를 작성하자
>


login.php
{: .label .label-purple }

```php

<?php
  $title = 'Login';
  include('header.php');
  require_once('functions.php');
    //global-super $_SERVER를 로 email 의 값을 출력한다
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
    echo $_POST['email'];  
  }   
?>
<form action="" method="POST">
...

<?php include('footer.php'); ?>

```
🔗[$_SERVER링크]({{'http://localhost:4000/book01/docs/php/server/#%EB%AC%B8%EB%B2%95'| relative_url}} ){: .anc}

실행
![]({{'/assets/img/php130.jpg'| relative_url}} )


## 06 functions.php 수정

{: .important }
> + form 요소의 value 를 하나씩 전달받아 확인하는 
> 함수를 작성한다.
>


functions.php
{: .label .label-purple }


```php
<?php
    function output($value){
        //입력한 형태 그대로 확인하기 위해 pre 태그를 작성
        echo '<pre>';
        //배열의 값을 실제 출력 형태
        print_r($value);
        echo '</pre>';
    }
?>

```

1. login.php 의 내용을 output 함수를 출력하도록 수정



login.php
{: .label .label-purple }

```php
...
  //echo $_POST['email'];  
  output($_POST);
...
```

출력
![]({{'/assets/img/php133.jpg'| relative_url}} )