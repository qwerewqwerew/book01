---
title: 12-login2
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

🔗[redirect_tut]({{'https://www.tutorialspoint.com/redirection-in-php'| relative_url}} ){: .anc}

🔗[redirect_wiki]({{'https://wikidocs.net/116886'| relative_url}} ){: .anc}

---


# admin 페이지
{: .no_toc}


{: .note}
> ### 주요기능
> {: .no_toc}
> + admin page에서 관리자정보 입력시 로그인 구현
> 
---

## 01 login.php

1. `htdoc/09/login.php` 수정
2.  코드작성


login.php
{: .label  .label-purple }


```php
<?php
/* add */
session_start();
...
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
/* add */
$password = $_POST['password'];
```

{: .important }
> 1. form 에서 입력받은 정보를 저장하려면 session 을 유지해야함
> 2. session은 최상단에 작성한다.
> 3. password 변수에 password를 저장
>

---
{: .mb-10}
 
# 02-config.php

{: .new }
> admin 페이지를 구현하려면 사용자의 입력 정보가 db에 저장된 <br>
> 값과 비교해서 처리해야한다. <br/>
> 이번에는 임시로 db를 파일로 생성하여 구현할것이다.

1. 작업중인 폴더에 config.php 를 생성한다.

config.php
{: .label .label-purple }

```js
<?php
    const admin_name = 'admin@admin.com';
    const password = '1234';
?>
```


---
{: .mb-10}
 
# 03-functions.php

{: .note }
>
> 사용자 인증정보를 확인하는 함수작성
>

functions.php
{: .label .label-purple }

```php

function authenticate_admin($email, $password){
  if($email = admin_name && $password == password){
      return true;
  }
}
```

![]({{'/assets/img/php139.jpg'| relative_url}} )

{: .note }
> 1. 관리자가 정보를 입력한다<br/>
> 2. authenticate_user 함수의 조건문으로 조건별 처리<br/>
> 3. config.php 에 저장된 값과 비교한다.<br/>
> ![]({{'/assets/img/140.jpg'| relative_url}} )

---
{: .mb-10}
 
# 04-login.php

1. login.php의 상단에 config.php를 인클루드 한다.
2. login에 config가 로드되어 있어야 functions.php를 실행해서 값을 비교할수 있다
3. login 에서 입력받은 값을 authenticate_admin 함수로 전달한다.

login.php
{: .label .label-purple }


```php
$title = 'Login';
include('header.php');
include('config.php');
...
if (isset($_POST['login'])) {
  ...

  if ($email == false) {
    $status = '이메일 형식에 맞게 입력해주세요.';
  }
  #add
  if (authenticate_user($email, $password)) {
    //사용자가 입력한 email과 관리자의 email 이 같으면
    //session 에 email을 저장-사용자가 로그아웃을 실행하여 세션을 초기화 하지 않는 이상 email은 세션에 저장됨
    $_SESSION['email'] = $email;
    //redirect 함수를 사용하여 관리자페이지로 이동
    redirect('admin.php');
    die();
  } else {
    $status = '비밀번호를 확인해주세요.';
  }
}
...

```


---
{: .mb-10}
 
# 05-functions.php

{: .note }
>
> redirect 는 페이지가 이동한다는 뜻
>


