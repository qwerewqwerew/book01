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

## ์ฐธ๊ณ ๋งํฌ

{: .no_toc}

๐[redirect_tut]({{'https://www.tutorialspoint.com/redirection-in-php'| relative_url}} ){: .anc}

๐[redirect_wiki]({{'https://wikidocs.net/116886'| relative_url}} ){: .anc}

๐[์์ฑ์ฝ๋]({{'/assets/img/12.zip'| relative_url}} ){: .anc}

๐[์ค์ต์์ ]({{'/assets/img/newsgrid-start.zip'| relative_url}} ){: .anc}

๐[์ค์ต์์ ์์ฑ]({{'/assets/img/newsgrid.zip'| relative_url}} ){: .anc}

---

# user ํ์ด์ง

{: .no_toc}

{: .note}

> ### ์ฃผ์๊ธฐ๋ฅ
>
> {: .no_toc}
>
> - user page์์ ์ฌ์ฉ์์ ๋ณด ์๋ ฅ์ ๋ก๊ทธ์ธ ๊ตฌํ

---

## 01 login.php

1. `htdoc/09/login.php` ์์ 
2. ์ฝ๋์์ฑ

```php
<?php
/* add */
session_start();
...
//filter_input ๋ ์ฌ์ฉ์์ ์๋ ฅ๊ฐ์ ์ ํจ์ฑ ๊ฒ์ฆํด์ฃผ๋ php๋ด์ฅ ํจ์์ด๋ค
$email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
/* add */
$password = $_POST['password'];
```

{: .important }

> 1. form ์์ ์๋ ฅ๋ฐ์ ์ ๋ณด๋ฅผ ์ ์ฅํ๋ ค๋ฉด session ์ ์ ์งํด์ผํจ<br/>
> 2. session์ ์ต์๋จ์ ์์ฑํ๋ค.<br/>
> 3. password ๋ณ์์ password๋ฅผ ์ ์ฅ<br/>
> 4. filter_input ํจ์๋ 5๊ฐ์ง ํํ๋ก ๋์ด์จ ๊ฐ ์ง์ ํ๋ค.<br/>
> > INPUT_GET : GET ๋ฐฉ์์ผ๋ก ๋ฐ์ ์๋ ฅ๊ฐ ๊ฒฝ์ฐ. <br/>
> > INPUT_POST : POST ๋ฐฉ์์ผ๋ก ๋ฐ์ ์๋ ฅ๊ฐ ๊ฒฝ์ฐ.<br/>
> > INPUT_COOKIE : COOKIR๋ก ๋๊ฒจ๋ฐ์ ์๋ ฅ๊ฐ ๊ฒฝ์ฐ.<br/>
> > INPUT_SERVER :  ์ํผ์ ์ญ๋ณ์ ๊ฒฝ์ฐ.<br/>
> > INPUT_ENV : ํ๊ฒฝ๋ณ์ ๊ฒฝ์ฐ<br/>

---

{: .mb-10}

# 02-config.php

{: .new }

> user ํ์ด์ง๋ฅผ ๊ตฌํํ๋ ค๋ฉด ์ฌ์ฉ์์ ์๋ ฅ ์ ๋ณด๊ฐ db์ ์ ์ฅ๋ <br>
> ๊ฐ๊ณผ ๋น๊ตํด์ ์ฒ๋ฆฌํด์ผํ๋ค. <br/>
> ์ด๋ฒ์๋ ์์๋ก db๋ฅผ ํ์ผ๋ก ์์ฑํ์ฌ ๊ตฌํํ ๊ฒ์ด๋ค.

1. ์์์ค์ธ ํด๋์ config.php ๋ฅผ ์์ฑํ ์ฌ์ฉ์ ์ ๋ณด data๋ฅผ ์์ฑ.

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
> ์ฌ์ฉ์ ์ธ์ฆ์ ๋ณด๋ฅผ ํ์ธํ๋ ํจ์์์ฑ


```php

function authenticate_user($email, $password){
  if($email = user_name && $password == password){
      return true;
  }
}
```



![]({{'/assets/img/php139.jpg'| relative_url}} )

{: .new }

> 1. ์ฌ์ฉ์๊ฐ ์ ๋ณด๋ฅผ ์๋ ฅํ๋ค<br/>
> 2. authenticate_user ํจ์์ ์กฐ๊ฑด๋ฌธ์ผ๋ก ์กฐ๊ฑด๋ณ ์ฒ๋ฆฌ<br/>
> 3. config.php ์ ์ ์ฅ๋ ๊ฐ๊ณผ ๋น๊ตํ๋ค.<br/>
>    ![]({{'/assets/img/php140.jpg'| relative_url}} )
>
> ์๋ ฅ ์ ๋ณด๊ฐ ์ ์ฅ๋ db์ ๊ฐ์ผ๋ฉด true ๋ฅผ ๋ฐํํ๋ ์ฝ๋์ด๋ค

---

{: .mb-10}

# 04-login.php

2. `login`์ `config`๊ฐ ๋ก๋๋์ด ์์ด์ผ `functions.php`๋ฅผ ์คํํด์ ๊ฐ์ ๋น๊ตํ ์ ์์ผ๋ฏ๋ก `login.php`์ ์๋จ์ `config.php`๋ฅผ ์ธํด๋ฃจ๋ ํ๋ค.
3. `login` ์์ ์๋ ฅ๋ฐ์ ๊ฐ์ `authenticate_user` ํจ์๋ก ์ ๋ฌํ๋ค.


```php
$title = 'Login';
include('header.php');
include('config.php');
...
if (isset($_POST['login'])) {
  ...

  if ($email == false) {
    $status = '์ด๋ฉ์ผ ํ์์ ๋ง๊ฒ ์๋ ฅํด์ฃผ์ธ์.';
  }
  #add
  if (authenticate_user($email, $password)) {
    //์ฌ์ฉ์๊ฐ ์๋ ฅํ email๊ณผ ์ฌ์ฉ์์ email ์ด ๊ฐ์ผ๋ฉด
    //session ์ email์ ์ ์ฅ-์ฌ์ฉ์๊ฐ ๋ก๊ทธ์์์ ์คํํ์ฌ ์ธ์์ ์ด๊ธฐํ ํ์ง ์๋ ์ด์ email์ ์ธ์์ ์ ์ฅ๋จ
    $_SESSION['email'] = $email;
    //redirect ํจ์๋ฅผ ์ฌ์ฉํ์ฌ ์ฌ์ฉ์ํ์ด์ง๋ก ์ด๋
    redirect('user.php');
  } else {
    $status = '๋น๋ฐ๋ฒํธ๋ฅผ ํ์ธํด์ฃผ์ธ์.';
  }
}
...

```

---

{: .mb-10}

# 05-functions.php

{: .note }

> redirect ๋ ํ์ด์ง๊ฐ ์ด๋ํ๋ค๋ ๋ป <br/>
> redirect ๋ฅผ php ์์ ๊ตฌํํ๋ ค๋จผ header ํจ์๋ฅผ ์ฌ์ฉํ๋ค.

## Syntax

| ๊ตฌ๋ฌธ                                       | ์ค๋ช                                         |
| :----------------------------------------- | :------------------------------------------- |
| `header("Location: /target_url");` <br> `exit();` | Location ๋ค์ ์ด๋ํ  ํ์ด์ง ๊ฒฝ๋ก๋ฅผ ์์ฑํ๋ค. |

`exit()` ๋ php ์คํ์ ๋๋ด๋ ํจ์. <br/>
์ดํ์ ์ด๋ค ์ฝ๋๊ฐ ์์ด๋ ์คํํ์ง ์๋ก ์๋ต์ ๋ธ๋ผ์ฐ์ ์ ๋๋๋ฆฐ๋ค. <br/>
`exit()` ๋ฅผ ๊ตณ์ด ์ฐ๋ ์ด์ ๋ ์ดํ์ ๋์ค๋ ์ฝ๋๊ฐ ๋ฆฌ๋ค์ด๋ ํธ๊ฐ ์๋ ๋ค๋ฅธ ์ํ๋ก ๋ฐ๊ฟ ๊ฐ๋ฅ์ฑ์ ์ฐจ๋จํ๊ธฐ ์ํด์์ด๋ค. <br/>
<span class="fs-2 text-gray-100">์ถ์ฒ:https://wikidocs.net/116886</span>
{: .box .bg-white-100}

```php

function redirect($url){
  /* redirect ํจ์์ ๋งค๊ฐ๋ณ์๊ฐ ์ ๋ฌ๋๋ฉด */
function redirect($url){
    //url ๋ณ์์ ๊ฐ์ผ๋ก ํ์ด์ง ์ด๋
    //"" ์ฃผ์
    header("Location:$url");
    exit();
}
}

```

---

{: .mb-10}

# 06-user.php

1. `user.php` ํ์ผ์ ์์ฑํ๋ค


```php
<?php
//1. ์ธ์์์
session_start();
//2
$title = '์ฌ์ฉ์ํ์ด์ง';
include('header.php');
include('config.php');
require_once('functions.php');

//3. session ์ ์ ์ฅ๋ email ์ ๋ณด๋ฅผ ์ถ๋ ฅ
echo $_SESSION['email'];
```

์คํ

{: .new }
> 1. ๋ก๊ทธ์ธ๊ธฐ๋ฅ์ ์ธ์์ ์์ํด์ผ ํ๋ค.
> 2. `$title` ๋ ํ์ฌ ํ์ด์ง์  ์ ๋ชฉ์ ๋ณ์๋ก ์ถ๋ ฅํ๋ค.
> 3. session ์ ์ ์ฅ๋ email ์ ๋ณด๋ฅผ ์ถ๋ ฅ

![]({{'/assets/img/php141.jpg'| relative_url}} )

1. ์ฌ์ฉ์์ ๋ณด๊ฐ ๋ค๋ฅผ๊ฒฝ์ฐ `login` ์ผ๋ก ์ด๋์ํค์
2. ํจ์์ ์ธ `user_is_auth()`;


```php
confirm_user_is_auth();
```

---

{: .mb-10}

# 07-functions.php

1. `confirm_user_is_auth() `์์ฑ

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

- `user_is_auth` ํจ์๋ session ์ email ์ด ์๋์ง๋ฅผ ํ์ธํ๋ค.
- `confirm_user_is_auth` ํจ์๋ user_is_auth์ return ๊ฐ์ ๋น๊ตํ์ฌ false ์ผ๊ฒฝ์ฐ login ํ์ด์ง๋ก ์ด๋ ์ํจ๋ค
  {: .box .bg-white-100}

---

{: .mb-10}

# 08-login.php

{: .note }

> ์ด๋ฏธ ์ฌ์ฉ์ ๋ก๊ทธ์ธ์ด ๋์ด์๋ ์ํ๋ก login ํ์ด์ง์ ์ ์์ user ํ์ด์ง๋ก ์ด๋์ํจ๋ค.

login.php
{: .label .label-purple }

```php

if(user_is_auth()){
  redirect('user.php');
  exit();
}

```

![]({{'/assets/img/php142.jpg'| relative_url}} )

- ๋ก๊ทธ์ธ ํ์ด์ง ์ ์์ user.php ๋ก ๋ฆฌ๋๋ ์ ๋๋์ง ํ์ธํ๋ค.

- ์คํ
  ![]({{'/assets/img/php143.jpg'| relative_url}} )

---

{: .mb-10}

# 09-logout.php

## user.php
{: .no_toc}

- user.php์์ ๋ก๊ทธ์์์ ๊ตฌํํ๋ค.
- ๋ก๊ทธ์์์ ์ธ์์ ๋น์ ๊ตฌํํ ์ ์๋ค.

user.php์ ๋ง์ง๋ง์ ์๋์ ์ฝ๋๋ฅผ ์ถ๊ฐํ๋ค.
{: .box .bg-white-100}


```php
...
confirm_user_is_auth();
?>
#add ๋ก๊ทธ์์ ํ์ด์ง๋ก ์ด๋ํ๋ ๋งํฌ ์์ฑ
<p><a href="logout.php">logout</a></p>
<?php include('footer.php'); ?>

```

## logout.php ๋ฌธ์ ์์ฑ๋ฅผ ์์ฑํ๋ค.
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

1. ์ธ์์ ์์ํด์ผ ์ญ์ ๋ฅผ ํ ์๋ ์์ผ๋ฏ๋ก ์ธ์์ ์์ํ๋ค.
2. ์ธ์์ ๋น์ด๋ค.
3. ์ธ์์ ์ญ์ ํ๋ค. (์ํฉ์ ๋ฐ๋ผ 2,3 ๋ฒ์ค ํ๋๋ง ์ฌ์ฉํด๋ ๋๋ค.)
4. ์คํ
    ![]({{'/assets/img/php144.jpg'| relative_url}} )
{: .box .bg-white-100}



---
{: .mb-10}
 
# 10-php ์ ์๋ฐ์คํฌ๋ฆฝํธ ๋ฃ๊ธฐ

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
> ํด๋ฆญ์ ํจ์์คํ๋จ
>
>
