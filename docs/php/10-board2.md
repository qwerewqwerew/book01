---
title: 10-board2
layout: default
parent: PHP
tags: [Cookie, Session, mysqli_connect]
---

---

1. TOC
{:toc}

---

๊ด๋ จ๋งํฌ
{: .label .label-purple }

> [๐php_setcookie](https://www.php.net/manual/en/function.setcookie.php){: .anc}
>

---
# ๊ฒ์, ์ญ์  ๊ตฌํ

## 01 index์์ 

{: .note }
> index.php ์ input ์์๋ฅผ ์ถ๊ฐํ์ฌ
> ๊ธ๊ฒ์๊ณผ ๊ธ์ญ์  interface๋ฅผ ๊ตฌํํ๋ค
>

index.php
{: .label .label-purple }

```html
...
while($row = mysqli_fetch_array($result)){
    $list = $list."<li>{$row['number']}: <a href=\"view.php?number={$row['number']}\">{$row['name']}</a></li>";           
}
echo $list;
?>
</ul>
<hr>
<p><a href="write.php">๊ธ์ฐ๊ธฐ</a></p>
<hr>
...

<!-- ์๋๋ถํฐ ์ถ๊ฐ -->
<h2>๊ธ ๊ฒ์</h2>
<form action="search_result.php" method="post">
    <h3>๊ฒ์ํ  ํค์๋๋ฅผ ์๋ ฅํ์ธ์.</h3>
    <p>
        <label for="search">ํค์๋:</label>
        <input type="text" id="search" name="bdKey">
    </p>
    <input type="submit" value="๊ฒ์">
</form>
<hr>
<h2>๊ธ ์ญ์ </h2>
<form action="delete.php" method="post">
    <h3>์ญ์ ํ  ๋ฉ์์ง ๋ฒํธ๋ฅผ ์๋ ฅํ์ธ์.</h3>
    <p>
        <label for="msgdel">๋ฒํธ:</label>
        <input type="text" id="msgdel" name="delnum">
    </p>
    <input type="submit" value="์ญ์ ">

```

## 02 ๊ฒ์

1. index.php ๋ฅผ ๋ค๋ฅธ ์ด๋ฆ์ผ๋ก ์ ์ฅ <span class="text-red-300">search_result.php </span>
2. ๋ด์ฉ์์ 

```php
//ํค์๋๋ฅผ ์ ์ฅํ  ๋ณ์ ์์ฑ
//post ๋ฐฉ์์ผ๋ก ์ ๋ฌ๋ boardKey ์ ๊ฐ์  user_key ๋ณ์์ ์ ์ฅ
$user_bdkey=$_POST['bdKey'];
//free_board ํ์ด๋ธ์์ ์กฐ๊ฑด(where)๊ณผ ๊ฐ์ ๋ฐ์ดํฐ ์กฐํ 
//LIKE ๋ ๋ถ๋ถ์ ์ผ๋ก ์ผ์นํ๋ ์นผ๋ผ์ ์ฐพ์๋ ์ฌ์ฉ 
//php ์ % ๋ * ์ ๊ฐ๋ค
//๋ณ์ bdkey ๋ฅผ ํฌํจํ๋ ๋ฌธ์์ด์ด ์กฐ๊ฑด
$sql = "SELECT * FROM free_board WHERE message LIKE '%$bdKey%'";

//...์ค๋ต
echo $list;
//์กฐํํ db๋ฅผ ๋ซ๋๋ค
mysqli_close($conn);

```

![]({{'/assets/img/php126.jpg'| relative_url}} )
![]({{'/assets/img/php127.jpg'| relative_url}} )

<details open markdown='block'>
  <summary>
    <span class='text-red-200'>๐ข์ ์ฒด์ฝ๋</span>
  </summary>
```
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>๋ง๊ณ ๋ค ์์  ๊ฒ์ํ</title    $conn = mysqli_connect("localhost", "root", "", "mango_board");
>
</head>

<body>
  <h1>์์  ๊ฒ์ํ</h1>
  <h2>๊ฒ์๊ฒฐ๊ณผ</h2>
  <ul>
    <?php
    $conn = mysqli_connect("localhost", "root", "", "mango_board");

    if (!$conn) {
      echo 'db์ ์ฐ๊ฒฐํ์ง ๋ชปํ์ต๋๋ค.' . mysqli_connect_error();
    } else {
      echo 'db์ ์ ์ํ์ต๋๋ค!!!';
    }
    //ํค์๋๋ฅผ ์ ์ฅํ  ๋ณ์ ์์ฑ
    //post ๋ฐฉ์์ผ๋ก ์ ๋ฌ๋ boardKey ์ ๊ฐ์  user_bdkey ๋ณ์์ ์ ์ฅ
    $user_bdkey=$_POST['bdKey'];
    //free_board ํ์ด๋ธ์์ ์กฐ๊ฑด(where)๊ณผ ๊ฐ์ ๋ฐ์ดํฐ ์กฐํ 
    //LIKE ๋ ๋ถ๋ถ์ ์ผ๋ก ์ผ์นํ๋ ์นผ๋ผ์ ์ฐพ์๋ ์ฌ์ฉ 
    //php ์ % ๋ * ์ ๊ฐ๋ค
    //๋ณ์ bdkey ๋ฅผ ํฌํจํ๋ ๋ฌธ์์ด์ด ์กฐ๊ฑด
    $sql = "SELECT * FROM free_board WHERE message LIKE '%$user_bdkey%'";

    $result = mysqli_query($conn, $sql);

    $list = '';

    while ($row = mysqli_fetch_array($result)) {

      $list = $list . "<li>{$row['number']}: <a href=\"view.php?number={$row['number']}\">{$row['name']}</a></li>";
    }
    echo $list;
    //์กฐํํ db๋ฅผ ๋ซ๋๋ค
    mysqli_close($conn);
    ?>
  </ul>
  <hr />
  <p><a href="write.php">๊ธ์ฐ๊ธฐ</a></p>
  <hr />
</body>

</html>
```
  {: .text-delta }
</details>

๊ฒฐ๊ณผ:
![]({{'/assets/img/php128.jpg'| relative_url}} )



---
{: .mb-10}
 
## 03-์ญ์ 

1. index.php ๋ฅผ ๋ค๋ฅธ ์ด๋ฆ์ผ๋ก ์ ์ฅ ->delet.php


delete.php
{: .label .label-purple }

```php
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>๋ง๊ณ ๋ค ์์  ๊ฒ์ํ</title>
</head>

<body>
  <h1>์์  ๊ฒ์ํ</h1>
  <h2>์ญ์ ๊ฒฐ๊ณผ</h2>

  <?php
  $conn = mysqli_connect("localhost", "root", "", "mango_board");

  if (!$conn) {
    echo 'db์ ์ฐ๊ฒฐํ์ง ๋ชปํ์ต๋๋ค.' . mysqli_connect_error();
  } else {
    echo 'db์ ์ ์ํ์ต๋๋ค!!!';
  }
  $num = $_POST['delnum'];


  //์ญ์ 
  $sqlDEL = "DELETE FROM free_board WHERE number = $num";
  mysqli_query($conn, $sqlDEL);


  echo $num . '๋ฒ์งธ ๋ฐ์ดํฐ๊ฐ ์ญ์ ๋์์ต๋๋ค.';
  mysqli_close($conn);
  ?>

  <p><a href="index.php">๋ฉ์ธํ๋ฉด์ผ๋ก ๋์๊ฐ๊ธฐ</a></p>

</html>

```

์คํ
![]({{'/assets/img/php129.jpg'| relative_url}} )