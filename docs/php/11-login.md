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

## 참고링크

{: .no_toc}

🔗[$_SERVER링크]({{'docs/php/server/#%EB%AC%B8%EB%B2%95'| relative_url}} ){: .anc}

🔗[filter_input]({{'https://www.php.net/manual/en/function.filter-input.php'| relative_url}} ){: .anc}

🔗[Types_of_filters]({{'https://www.php.net/manual/en/filter.filters.php'| relative_url}} ){: .anc}

---

## 완료소스

## 🔗[download]({{{'/assets/img/login.zip'| relative_url}} ){: .anc}

# 로그인 페이지

{: .no_toc}

{: .note}

> ### 주요기능
>
> {: .no_toc}
>
> - post 방식 값 확인
> - 함수 이용 값 확인
> - 멀티폼 값 확인
> - 이메일 형식 유효성검사

## 01 login.php

1. `htdoc/09/login.php` 생성
2. 코드작성

login.php
{: .label .label-purple }

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

functions.php
{: .label .label-purple }

```php

</body>
</html>

```

## 05 login 수정

{: .important }

> form 요소 추가

login.php
{: .label .label-purple }

```php

<?php
  //변수title 에 Login 저장
  $title = 'Login';
  //header.php 삽입
  include('header.php');
  //functions.php 삽입
  require_once('functions.php');
    //global-super $_SERVER를 로 email 의 값을 출력한다
    ////$_SERVER변수의 요청방식중 post 와 같으면 true
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
    //$_POST 방식으로 요청받은 email 을 출력한다
    echo $_POST['email'];
  }
?>
<form action="" method="POST">
...

<?php include('footer.php'); ?>

```

설명

![]({{'/assets/img/php134.jpg'| relative_url}} )

🔗[$_SERVER링크]({{'docs/php/server/#%EB%AC%B8%EB%B2%95'| relative_url}} ){: .anc}

실행

2번처럼 email의 value 가 화면에 출력되는지 확인
{: .fs-3 .text-grey-lt-400 .fw-800}

![]({{'/assets/img/php130.jpg'| relative_url}} )

## 06 functions.php 수정

{: .important }

> - form 요소의 value 를 하나씩 전달받아 확인하는
>   함수를 작성한다.

1. functions.php에 $value 를 출력하는 함수 작성

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

2. login.php 의 내용을 output 함수를 출력하도록 수정

login.php
{: .label .label-purple }

```php
...
  //echo $_POST['email'];
  output($_POST);
...
```

설명
![]({{'/assets/img/php135.jpg'| relative_url}} )

출력
![]({{'/assets/img/php133.jpg'| relative_url}} )

실행화면에 출력된 array 내의 value 들은 각각 입력받은 값을 [name]=value 형태로 보여주고 있다.

만약 `<input type="submit" name="login" value="로그인">` 태그에 name 속성이 없다면
여러개의 submit 버튼이 있을경우 구별할수 없다
{: .fs-3 .text-grey-lt-400 .fw-800}

3. 수정

- post 방식으로 전달받은 값중에 변수가 설정되었는지 확인해서 출력한다

login.php
{: .label .label-purple }

```php
if(isset($_POST['login'])){
output($_POST);
}
```

---

{: .mb-10}

## 07-이메일형식 유효성 검사

{: .note }

> filter_input 함수는 true 나 false를 반환
> <a href="https://www.php.net/manual/en/function.filter-input.php">filter_input</a> 함수는 parameter 를 사용한다.
> 그중 type은 `One of INPUT_GET, INPUT_POST, INPUT_COOKIE, INPUT_SERVER, or INPUT_ENV.`중에 하나를 작성한다
> ![]({{'/assets/img/php136.jpg'| relative_url}} )

login.php
{: .label .label-purple }

```php
if(isset($_POST['login'])){
  //output($_POST);
   //filter_input
  //INPUT_POST 방식, 변수명 email , email 유효성검사 매개변수
  $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

  // 변수 email 에 false 가 반환되면
  if($email == false){
      $status = '이메일 형식에 맞게 입력해주세요.';
  }
}
```

- login.php 하단에 에러를 출력할 요소를 넣는다

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

실행
![]({{'/assets/img/php138.jpg'| relative_url}} )

<details markdown='block'>
  <summary>
    <span class='text-red-200'>📢완료코드</span>
  </summary>
  ```html
  <?php
  $title = 'Login';
  include('header.php');
  require_once('functions.php');
  if (isset($_POST['login'])) {
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    if ($email == false) {
      $status = '이메일 형식에 맞게 입력해주세요.';
    }
  }
  ?>
  <form action="" method="POST">
    <p>
      <label for="email">이메일:</label>
      <input type="text" name="email" id="email" autocomplete="off">
    </p>
    <p>
      <label for="password">비밀번호:</label>
      <input type="password" name="password" id="password">
    </p>
    <p>
      <input type="submit" name="login" value="로그인">
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
