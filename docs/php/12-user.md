---
title: 12-user
layout: default
parent: PHP
tags: [user]
---

---

1. TOC
{:toc}

---

## 참고링크

{: .no_toc}

🔗[redirect_tut]({{'https://www.tutorialspoint.com/redirection-in-php'| relative_url}} ){: .anc}

🔗[redirect_wiki]({{'https://wikidocs.net/116886'| relative_url}} ){: .anc}

🔗[완성코드]({{'/assets/img/12.zip'| relative_url}} ){: .anc}

🔗[실습예제]({{'/assets/img/newsgrid-start.zip'| relative_url}} ){: .anc}

🔗[실습예제완성]({{'/assets/img/newsgrid.zip'| relative_url}} ){: .anc}

---

# user 페이지

{: .no_toc}

{: .note}

> ### 주요기능
>
> {: .no_toc}
>
> - user page에서 사용자정보 입력시 로그인 구현

---

## 01 login.php

1. `htdoc/09/login.php` 수정
2. 코드작성

```php
<?php
/* add */
session_start();
...
//filter_input 는 사용자의 입력값을 유효성 검증해주는 php내장 함수이다
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
/* add */
$password = $_POST['password'];
```

{: .important }

> 1. form 에서 입력받은 정보를 저장하려면 session 을 유지해야함<br/>
> 2. session은 최상단에 작성한다.<br/>
> 3. password 변수에 password를 저장<br/>
> 4. filter_input 함수는 5가지 형태로 넘어온 값 지원 한다.<br/>
> > INPUT_GET : GET 방식으로 받은 입력값 경우. <br/>
> > INPUT_POST : POST 방식으로 받은 입력값 경우.<br/>
> > INPUT_COOKIE : COOKIR로 넘겨받은 입력값 경우.<br/>
> > INPUT_SERVER :  슈퍼전역변수 경우.<br/>
> > INPUT_ENV : 환경변수 경우<br/>

---

{: .mb-10}

# 02-config.php

{: .new }

> user 페이지를 구현하려면 사용자의 입력 정보가 db에 저장된 <br>
> 값과 비교해서 처리해야한다. <br/>
> 이번에는 임시로 db를 파일로 생성하여 구현할것이다.

1. 작업중인 폴더에 config.php 를 생성후 사용자 정보 data를 작성.

```js
<?php
    const user_name = 'user@user.com';
    const password = '1234';
?>
```

---

{: .mb-10}

# 03-functions.php

{: .note }
> 사용자 인증정보를 확인하는 함수작성


```php

function authenticate_user($email, $password){
  if($email = user_name && $password == password){
      return true;
  }
}
```



![]({{'/assets/img/php139.jpg'| relative_url}} )

{: .new }

> 1. 사용자가 정보를 입력한다<br/>
> 2. authenticate_user 함수의 조건문으로 조건별 처리<br/>
> 3. config.php 에 저장된 값과 비교한다.<br/>
>    ![]({{'/assets/img/php140.jpg'| relative_url}} )
>
> 입력 정보가 저장된 db와 같으면 true 를 반환하는 코드이다

---

{: .mb-10}

# 04-login.php

2. `login`에 `config`가 로드되어 있어야 `functions.php`를 실행해서 값을 비교할수 있으므로 `login.php`의 상단에 `config.php`를 인클루드 한다.
3. `login` 에서 입력받은 값을 `authenticate_user` 함수로 전달한다.


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
    //사용자가 입력한 email과 사용자의 email 이 같으면
    //session 에 email을 저장-사용자가 로그아웃을 실행하여 세션을 초기화 하지 않는 이상 email은 세션에 저장됨
    $_SESSION['email'] = $email;
    //redirect 함수를 사용하여 사용자페이지로 이동
    redirect('user.php');
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

> redirect 는 페이지가 이동한다는 뜻 <br/>
> redirect 를 php 에서 구현하려먼 header 함수를 사용한다.

## Syntax

| 구문                                       | 설명                                         |
| :----------------------------------------- | :------------------------------------------- |
| `header("Location: /target_url");` <br> `exit();` | Location 뒤에 이동할 페이지 경로를 작성한다. |

`exit()` 는 php 실행을 끝내는 함수. <br/>
이후에 어떤 코드가 있어도 실행하지 않로 응답을 브라우저에 되돌린다. <br/>
`exit()` 를 굳이 쓰는 이유는 이후에 나오는 코드가 리다이렉트가 아닌 다른 상태로 바꿀 가능성을 차단하기 위해서이다. <br/>
<span class="fs-2 text-gray-100">출처:https://wikidocs.net/116886</span>
{: .box .bg-white-100}

```php

function redirect($url){
  /* redirect 함수에 매개변수가 전달되면 */
function redirect($url){
    //url 변수의 값으로 페이지 이동
    //"" 주의
    header("Location:$url");
    exit();
}
}

```

---

{: .mb-10}

# 06-user.php

1. `user.php` 파일을 생성한다


```php
<?php
//1. 세션시작
session_start();
//2
$title = '사용자페이지';
include('header.php');
include('config.php');
require_once('functions.php');

//3. session 에 저장된 email 정보를 출력
echo $_SESSION['email'];
```

실행

{: .new }
> 1. 로그인기능은 세션을 시작해야 한다.
> 2. `$title` 는 현재 페이지의  제목을 변수로 출력한다.
> 3. session 에 저장된 email 정보를 출력

![]({{'/assets/img/php141.jpg'| relative_url}} )

1. 사용자정보가 다를경우 `login` 으로 이동시키자
2. 함수선언 `user_is_auth()`;


```php
confirm_user_is_auth();
```

---

{: .mb-10}

# 07-functions.php

1. `confirm_user_is_auth() `작성

```php
function user_is_auth(){
  return isset($_SESSION['email']);
}

function confirm_user_is_auth(){
  if(!user_is_auth()){
      redirect('login.php');
      exit();
  }
}
```

- `user_is_auth` 함수는 session 에 email 이 있는지를 확인한다.
- `confirm_user_is_auth` 함수는 user_is_auth의 return 값을 비교하여 false 일경우 login 페이지로 이동 시킨다
  {: .box .bg-white-100}

---

{: .mb-10}

# 08-login.php

{: .note }

> 이미 사용자 로그인이 되어있는 상태로 login 페이지에 접속시 user 페이지로 이동시킨다.

login.php
{: .label .label-purple }

```php

if(user_is_auth()){
  redirect('user.php');
  exit();
}

```

![]({{'/assets/img/php142.jpg'| relative_url}} )

- 로그인 페이지 접속시 user.php 로 리디렉션 되는지 확인한다.

- 실행
  ![]({{'/assets/img/php143.jpg'| relative_url}} )

---

{: .mb-10}

# 09-logout.php

## user.php
{: .no_toc}

- user.php에서 로그아웃을 구현한다.
- 로그아웃은 세션을 비워 구현할수 있다.

user.php의 마지막에 아래의 코드를 추가한다.
{: .box .bg-white-100}


```php
...
confirm_user_is_auth();
?>
#add 로그아웃 페이지로 이동하는 링크 생성
<p><a href="logout.php">logout</a></p>
<?php include('footer.php'); ?>

```

## logout.php 문서 생성를 생성한다.
{: .no_toc}


```php
<?php
  //1
    session_start();
  //2
    session_unset();
  //3
    session_destroy();
  //4
    require_once('functions.php');
  //5
    redirect('login.php');
    exit();
?>
```

1. 세션을 시작해야 삭제를 할수도 있으므로 세션을 시작한다.
2. 세션을 비운다.
3. 세션을 삭제한다. (상황에 따라 2,3 번중 하나만 사용해도 된다.)
4. 실행
    ![]({{'/assets/img/php144.jpg'| relative_url}} )
{: .box .bg-white-100}



---
{: .mb-10}
 
# 10-php 에 자바스크립트 넣기

```php
  <?php
  echo '<script>', 'showMessage();', '</script>';
  ?>
  <script>
    function showMessage() {
      alert("click here");
    }
  </script>
  <h2 onclick="showMessage()">Editor Picks</h2>
```
{: .important }
> 클릭시 함수실행됨
>
>
