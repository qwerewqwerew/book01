---
title: 13-update
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

๐[์์ฑ์ฝ๋]({{'/assets/img/15.zip'| relative_url}} ){: .anc}

---

{: .note }
> ๊ฒ์ํ ๊ธ์์ , ์กฐํ, update ๊ตฌํ<br/>
> CRUD ์ ๋ง์ง๋ง update ๋ฅผ ๊ตฌํํ๋ค.<br/>
> CRUD(create, read, update, delete) ์ ์ฝ์๋ก ๋ฐ์ดํฐ๋ฒ ์ด์ค์ ๊ธฐ๋ณธ ์ฒ๋ฆฌ ๊ธฐ๋ฅ์ ๋งํ๋ค

---
{: .mb-10}
 
# 01-view.php
1. ์์ ํ๊ธฐ ์ฝํ์ธ  ์ถ๊ฐ

view.php
{: .label .label-purple }

```html
<p><a href="index.php">๋ฉ์ธํ๋ฉด์ผ๋ก ๋์๊ฐ๊ธฐ</a></p>
<p><a href="index.php">์์ ํ๊ธฐ</a></p>

```
์คํ

ํ๋จ์ ์์ ํ๊ธฐ ๊ธ์จ ์ถ๊ฐ๋จ
![]({{'/assets/img/php156.jpg'| relative_url}} )

---
{: .mb-10}
 
# 02-update.php

1. write.php ๋ฅผ ๋ค๋ฅธ์ด๋ฆ์ผ๋ก ์ ์ฅ `update.php`
2. ์์ 

update.php
{: .label .label-purple }

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>๊ธ์์ </title>
  </head>

  <body>
    <h1>์์ ํ๊ธฐ</h1>
    <!-- ์์ ํ์ด์ง๋ก ์ด๋ํ๋ค -->
    <form action="modify.php" method="post">
      <p>
        <label for="name">์์ฑ์:</label>
        <!--value์ ์์์ ๊ฐ์ ๋ฃ์ด ์์ ์ ์ ๋ฐ์ดํฐ๋ฅผ ์์์์ฑํ๋ค. ์ดํ ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ฅผ ์กฐํํ์ฌ ๋ณ์๋ก ์ถ๋ ฅํ๋ค.  -->
        <input type="text" id="name" name="name" value="๊น๋ง๊ณ "/>
      </p>
      <p>
        <label for="message">๋ฉ์์ง:</label>
        <!--์์์ ๊ฐ์ ๋ฃ์ด ์์ ์ ์ ๋ฐ์ดํฐ๋ฅผ ์์์์ฑํ๋ค. ์ดํ ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ฅผ ์กฐํํ์ฌ ๋ณ์๋ก ์ถ๋ ฅํ๋ค.  -->        
        <textarea name="message" id="message" cols="30" rows="10">์ด์ ๊ธ๋ด์ฉ</textarea>
      </p>
      <input type="submit" value="๊ธ์ฐ๊ธฐ" />
    </form>
  </body>
</html>
```
{: .note }
> update์ ํ์ํ ๊ธฐ๋ฅ
> 1. ๋ฐ์ดํฐ๋ฒ ์ด์ค ์ ์
> 2. ๋ฐ์ดํฐ๋ฒ ์ด์ค ์กฐํ
> 3. ํด๋น ๊ธ ๋ด์ฉ ๋ณด๊ธฐ
> ์์ ๋ด์ฉ์ index.php ์ list ๋ด์ฉ์์ ์ ๋ฌ๋ฐ์์ ๊ธ์ ์ถ๋ ฅํ๋ view.php์ ์๋จ๋ถ์ ๊ฐ๋ค

์ค๋ช
![]({{'/assets/img/php152.jpg'| relative_url}} )

---

1. view.php์ ๋ด์ฉ์ ๋ณต์ฌํ์ฌ update.php์ ์ต์๋จ์ ๋ถ์ฌ๋ฃ๋๋ค

update.php
{: .label .label-purple }

```php
<?php
$conn = mysqli_connect("localhost", "root", "", "mango_board");

if (!$conn) {
  echo 'db์ ์ฐ๊ฒฐํ์ง ๋ชปํ์ต๋๋ค.' . mysqli_connect_error();
} else {
  echo 'db์ ์ ์ํ์ต๋๋ค!!!';
}
$view_num = $_GET['number'];
$sql = "SELECT * FROM free_board WHERE number = $view_num";
$result = mysqli_query($conn, $sql);
?>
...
```


---
{: .mb-10}
 
# 03-view.php

+ ๊ธ๋ด์ฉ์ ์ถ๋ ฅํ๋ ์ฝ๋๋ฅผ ์์ฉํ์ฌ ์์ฑํ๋ค.
+ ํ์๋ ๋ถ๋ถ์ ๋ณต์ฌํ๋ค.
![]({{'/assets/img/php160.jpg'| relative_url}} )

view.php
{: .label .label-purple }

```php
<!-- db์ ์์ php -->
<?php
$conn = mysqli_connect("localhost", "root", "", "mango_board");

if (!$conn) {
  echo 'db์ ์ฐ๊ฒฐํ์ง ๋ชปํ์ต๋๋ค.' . mysqli_connect_error();
} else {
  echo 'db์ ์ ์ํ์ต๋๋ค!!!';
}
$view_num = $_GET['number'];
$sql = "SELECT * FROM free_board WHERE number = $view_num";
$result = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>View-๋ง๊ณ ๊ฒ์๊ธ</title>
</head>

<body>
  <h1>์์  ๊ฒ์ํ</h1>
  <h2>๊ธ ๋ด์ฉ</h2>
  <?php
  /* ์ฌ๊ธฐ๋ถํฐ ์ถ๊ฐ */
  if ($row = mysqli_fetch_array($result)) {
  ?>
    <h3>๊ธ๋ฒํธ: <?= $row['number'] ?> / ๊ธ์ด์ด: <?= $row['name'] ?> </h3>
    <div> <?= $row['message'] ?></div>
  <?php
  }
  mysqli_close($conn);
  ?>
  <p><a href="index.php">๋ฉ์ธํ๋ฉด์ผ๋ก ๋์๊ฐ๊ธฐ</a></p>
  /* update.pnp์ ๋งค๊ฐ๋ณ์๋ก number ๋ฅผ ์ ๋ฌํ๋ค.*/
  <p><a href="update.php?number=<?= $row['number'] ?>">์์ ํ๊ธฐ</a></p>

</body>
</html>

```
![]({{'/assets/img/php157.jpg'| relative_url}} )

| db๋ฅผ ์กฐํํด์ $row์ number ๊ณผ name, message ์ ๋ฐ์ดํฐ๋ฅผ ์ถ๋ ฅํํ ๋ฐ์ดํฐ๋ฒ ์ด์ค ์๋ฒ๋ฅผ ์ข๋ฃํ๋ค.
{: .box .bg-white-100}
---
{: .mb-10}
 
# 04-update.php

![]({{'/assets/img/php153.jpg'| relative_url}} )

1. db์์ ์กฐํํ ๊ฒฐ๊ณผ๋ฅผ ๋ฆฌํดํ๋ ํจ์๋ก form ์ ๊ฐ์ผ๋ค

```php
<?php
$conn = mysqli_connect("localhost", "root", "", "mango_board");

if (!$conn) {
  echo 'db์ ์ฐ๊ฒฐํ์ง ๋ชปํ์ต๋๋ค.' . mysqli_connect_error();
} else {
  echo 'db์ ์ ์ํ์ต๋๋ค!!!';
}
$view_num = $_GET['number'];
$sql = "SELECT * FROM free_board WHERE number = $view_num";
$result = mysqli_query($conn, $sql);
?>


<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>๊ธ์์ </title>
</head>

<body>
  <h1>์์ ํ๊ธฐ</h1>
  <?php
  if ($row = mysqli_fetch_array($result)) {
  ?>
    <form action="modify.php" method="post">
      <p>
        <label for="name">์์ฑ์:</label>
        <input type="text" id="name" name="name" value=<?= $row['name'] ?> />
      </p>
      <p>
        <label for="message">๋ฉ์์ง:</label>
        <textarea name="message" id="message" cols="30" rows="10"><?= $row['message'] ?></textarea>
      </p>
      <input type="submit" value="๊ธ์ฐ๊ธฐ" />
    </form>
  <?php
  }
  mysqli_close($conn);
  ?>

</body>

</html>
```

์คํ

![]({{'/assets/img/php154.jpg'| relative_url}} )

1. index.php ์์ ๊ธ๋ชฉ๋ก ํด๋ฆญ
2. ํด๋น๊ธ๋ฒํธ๋ก ์ด๋ ์์ ํ๊ธฐ ํด๋ฆญ
3. ํด๋น๊ธ ์กฐํ ์์ ํ์ด์ง ์ด๋

---

{: .mb-10}
 
# 05-modify.php

1. insert.php ๋ค๋ฅธ์ด๋ฆ์ผ๋ก ์ ์ฅ =>  `modify.php`
2. ์ฝ๋์์ฑ


modify.php
{: .label .label-purple }

```php
<?php
//๋ณ์ conn ์ mysqli_connect(์๋ฒ์ฃผ์, mysql์ฌ์ฉ์์์ด๋, mysql์ฌ์ฉ์๋น๋ฐ๋ฒํธ, ๋ฐ์ดํฐ๋ฒ ์ด์ค์ด๋ฆ) ํ ๋น
$conn = mysqli_connect("localhost", "root", "", "mango_board");
if (!$conn) { //๋ณ์conn ์ด false ์ผ๊ฒฝ์ฐ
  echo 'db์ ์ฐ๊ฒฐํ์ง ๋ชปํ์ต๋๋ค.' . mysqli_connect_error(); //๋ฌธ์์ด๊ณผ ํจ๊ป ์๋ฌ๋ฉ์์ง ์ถ๋ ฅํจ์ ์คํ
} else {
  echo 'db์ ์ ์ํ์ต๋๋ค'; //์ฑ๊ณต์ ์ถ๋ ฅํ  ๋ฌธ์์ด
}

$number = $_POST['number'];
$user_name = $_POST['name'];
$user_msg = $_POST['message'];
$sql = "UPDATE free_board SET name='$user_name', message='$user_msg' WHERE number=$number";

$result = mysqli_query($conn, $sql);

if ($result === false) {
  echo "์์ ์ ์คํจํ์ต๋๋ค.";
  error_log(mysqli_error($conn));
} else {
  echo "์์ ์ ์๋ฃํ์์ต๋๋ค.";
}
mysqli_close($conn);
print "<p><a href='index.php'>๋ฉ์ธํ๋ฉด์ผ๋ก ๋์๊ฐ๊ธฐ</a></p>";
?>
</body>

</html>

```

---
{: .mb-10}
 
# 06-update.php


update.php
{: .label .label-purple }

```php
<?php
$conn = mysqli_connect("localhost", "root", "", "mango_board");

if (!$conn) {
  echo 'db์ ์ฐ๊ฒฐํ์ง ๋ชปํ์ต๋๋ค.' . mysqli_connect_error();
} else {
  echo 'db์ ์ ์ํ์ต๋๋ค!!!';
}
$view_num = $_GET['number'];
$sql = "SELECT * FROM free_board WHERE number = $view_num";
$result = mysqli_query($conn, $sql);
?>

<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>๊ธ์์ </title>
</head>

<body>
  <h1>์์ ํ๊ธฐ</h1>
  <?php
  if ($row = mysqli_fetch_array($result)) {
  ?>
    <form action="modify.php" method="post">
      <input type="hidden" name="number" value="<?= $view_num ?>">
      <p>
        <label for="name">์์ฑ์:</label>
        <input type="text" id="name" name="name" value=<?= $row['name'] ?> />
      </p>
      <p>
        <label for="message">๋ฉ์์ง:</label>
        <textarea name="message" id="message" cols="30" rows="10"><?= $row['message'] ?></textarea>
      </p>
      <input type="submit" value="๊ธ์ฐ๊ธฐ" />
    </form>
  <?php
  }
  mysqli_close($conn);
  ?>

</body>

</html>
```