---
title: 09-board
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
> [๐php\_$_COOKIE](https://www.php.net/manual/en/reserved.variables.cookies.php){: .anc}
>
> [๐php_session_destroy](https://www.php.net/manual/en/function.session-destroy.php){: .anc}
>
> [๐php_session_unset](https://www.php.net/manual/en/function.session-unset.php){: .anc}
>
> [๐mySql](https://mysql.com/){: .anc}
> 
>
> [๐mySql_statements](https://dev.mysql.com/doc/refman/8.0/en/sql-data-manipulation-statements.html){: .anc}
> 

---

# 01 SQL๋ก ๊ฒ์ํ ๋ง๋ค๊ธฐ(DB์์ฑ)

{: .new }

> ๐บ SQL ์ด๋?
> ๋ฐ์ดํฐ๋ฅผ ๊ด๋ฆฌํ๊ธฐ ์ํด ์ค๊ณ๋ ํน์ ๋ชฉ์ ์ ํ๋ก๊ทธ๋๋ฐ ์ธ์ด
>
> > โพ ๊ฒ์ํ๊ตฌํ์ ์ํด ์์์ผ ํ ๊ฒ
> >
> > โพCreate(์์ฑ), Read(์กฐํ), Update(์์ ), Delete(์ญ์ )<br>
> >
> > โพ ํ์ํ ๊ฐ๋ฐํ๊ฒฝ
> > ์๋ฒ(xmapp)๋ฅผ ์ค์นํ๊ณ  ๋ฐ์ดํฐ ๋ฒ ์ด์ค(mango_board)๋ฅผ ์์ฑ ํ  ํ์ด๋ธ(free_board)์์ฑ<br>
> >
> > {: .fs-3 .fw-400}

{:.pt-8}

## 01-1 DB ๊ตฌ์ถ

> ์ฐ๋ฆฌ๊ฐ ๋ง๋ค ํ์ด๋ธ์ ์ ๋ณด๋ ์๋์ ๊ฐ๋ค

| ์๋ฒ : xmapp | ๋ฐ์ดํฐ๋ฒ ์ด์ค๋ช : mango_board | ํ์ด๋ธ๋ช : free_board

1. xmapp control-panel์ด๊ธฐ
   - ![]({{'/assets/img/php97.jpg'| relative_url}} )

2. phpMyAdmin ์ ๋ก๊ทธ์ธํ๋ค
   - ![]({{'/assets/img/php98.jpg'| relative_url}} )

3. ์ฌ์ฉ์์ถ๊ฐ
  - ![]({{'/assets/img/php100.jpg'| relative_url}} )

2. ์๋์ ์ด๋ฏธ์ง๋ฅผ ๋ณด๊ณ  ์ฒดํฌ๋ ๋ถ๋ถ์ฒ๋ผ ๊ธฐ์ฌํ๋ค. ๋น๋ฐ๋ฒํธ๋ ์ฌ์ด๊ฑธ๋ก ํ์
  - ![]({{'/assets/img/php101.jpg'| relative_url}} )

---


{:.pt-8}
## 01-2 ํ์ด๋ธ์์ฑ

{: .note }
> ์์ฑํ  ํ์ด๋ธ์ ๊ตฌ์กฐ๋ ์๋์ ๊ฐ๋ค

|  ์ข๋ฅ        | ์ด๋ฆ        | ์ค๋ช |
|:-------------|-------------|------|
|  ํ์ด๋ธ๋ช    | free_board                                                      |||
| ์ปฌ๋ผ(ํ๋)๋ช |  number  |INT              |์๋์ผ๋ก ์ซ์๋ฅผ ์ฌ๋ฆฌ๋ auto_increment PK|
|              |  name    | varchar(100)   |๊ธ์ด์ด|
|              |  message |  varchar(255)  |๋ฉ์์ง|


๋ง๋ค์ด๋ณด์
{: .text-purple-200}

1. create new table ํด๋ฆญ
   ![]({{'/assets/img/php102.jpg'| relative_url}} )

1. ์ด๋ฏธ์ง์ ํ์๋ ์ ๋ณด๋ฅผ ์๋ ฅํ ์คํ ํด๋ฆญ -> ์ค๋ฅ๋ฉ์์ง ์ถ๋ ฅ์ ๋ชจ๋ ๋ฌด์ ํด๋ฆญ
   ![]({{'/assets/img/php102.jpg'| relative_url}} )

1. ์ด๋ฏธ์ง์ ํ์๋ ๋ถ๋ถ๋ง ํด๋น ์ ๋ณด๋ฅผ ์๋ ฅํ๋ค. ๋๋จธ์ง๋ ๊ทธ๋ฅ๋ 
   ![]({{'/assets/img/php104.jpg'| relative_url}} )

1. 3 ๋จ๊ณ์์ primary ์ ํ์ ์๋์ ๊ฐ์ ํ๋ฉด์ด ๋จ๋ฉด ์คํ์ ๋๋ฅด๋ฉด ๋๋ค.
   ![]({{'/assets/img/php105.jpg'| relative_url}} )

1. sql ๋ฏธ๋ฆฌ๋ณด๊ธฐ ํด๋ฆญ
   ![]({{'/assets/img/php107.jpg'| relative_url}} )

1. ์ค์ ๊ฐ ํ์ธํ ์ ์ฅํด๋ฆญ
   ![]({{'/assets/img/php106.jpg'| relative_url}} )

1. ์ค์ ๊ฐ ํ์ธํ ์ ์ฅํด๋ฆญ
   ![]({{'/assets/img/php108.jpg'| relative_url}} )

---

# 02 ์๋ฒ๋ง๋ค๊ธฐ

Structure of a server
{: .label .label-purple }

```markdown
htdocs/
โโโ board/
    โโโ index.php(๊ธ์กฐํ,๊ฒ์,์ญ์ )
    โโโ view.php(๊ธ๋ณด๊ธฐ)
    โโโ write.php(๊ธ์์ฑ)
    โโโ insert.php(๊ธ์๋ ฅ)
    โโโ delete.php(๊ธ์ญ์ )
    โโโ search.php(๊ฒ์)
    โโโ list.php(๊ธ๋ชฉ๋ก)
```

## 02-1 index.php

1. xmapp/htdocs/board ์์ฑ
   ![]({{'/assets/img/php109.jpg'| relative_url}} )
1. board/index.php ์์ฑ ํ ์ฝ๋์์ฑ

- ๊ธ์ฐ๊ธฐ ๋งํฌ ํด๋ฆญ์ write.php ๋ฌธ์๋ก ์ด๋

index.php
{: .label .label-purple }

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>๋ง๊ณ ๋ค ์์  ๊ฒ์ํ</title>
  </head>

  <body>
    <h1>์์  ๊ฒ์ํ</h1>
    <h2>๊ธ ๋ชฉ๋ก</h2>

    <hr />
    <p><a href="write.php">๊ธ์ฐ๊ธฐ</a></p>
    <hr />
  </body>
</html>
```

2. ์์ฑํ localehost/board ์์ ํ์ธ
   ![]({{'/assets/img/php110.jpg'| relative_url}} )

---

## 02-2 write.php

1. board/write.php ์์ฑ

1. ๊ธ์์ฑ์ ํ๋ ํ์ด์ง์ด๋ค. <br/>
   form ํ๊ทธ์ input ์ ์์ฑ๋ค์ด ์ค์  ๋์ํ๋๊ฒ์ ํ์ธํ๋ฉด์ ์ฝ๋ฉํ๋ค.<br/>

`form action ="์ ์กํ  ํ์ผ,ํด๋์ ์ฃผ์"`
{: .text-red-100 }

`input name ="db field name"`
{: .text-red-100 }

write.php
{: .label .label-purple }

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>๊ธ์ฐ๊ธฐ</title>
  </head>

  <body>
    <h1>๊ธ์ฐ๊ธฐ</h1>
    <!-- action=์ ์กํ  ์ฃผ์  -->
    <form action="insert.php" method="post">
      <p>
        <label for="name">์์ฑ์:</label>
        <!-- name=ํ์ด๋ธ์ ํ๋๋ช -->
        <input type="text" id="name" name="name" />
      </p>
      <p>
        <label for="message">๋ฉ์์ง:</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </p>
      <!-- submit ๋ฒํผ์ ํด๋ฆญํ๋ฉด form ์ ์ก์ ๊ฐ์ ์ฃผ์๋ก ๋ฐ์ดํฐ๊ฐ ์ ์ก๋๋ค -->
      <input type="submit" value="๊ธ์ฐ๊ธฐ" />
    </form>
  </body>
</html>
```

- index.php ์์ ๊ธ์ฐ๊ธฐ ํด๋ฆญ์ write.php๋ก ์ด๋ํ๋์ง ํ์ธํ๋ค

---

## 02-3 insert.php

{: .note }

> [๐๊ณต์์ฌ์ดํธ](#mySql)
>
> ๐ DB์ ์ฐ๋ํด์ ์๋ํ  ํ์ด์ง
> {: .note-title }
>
> - view.php
>
> - insert.php
>
> - delete.php
>
> - search.php
>
> - list.php
>
> - search.php
>
> ์์ ํ์ผ๋ค์ mango_board DB์ ์ ๊ทผํ์ฌ freeboard ํ์ด๋ธ ๋ด์ฉ์ ์กฐํํ ์ ์์ด์ฌ ํ๋ค
> {: .text-blue-200 }

---

### mysqli_connect ํจ์

| ํจ์๋ช           | ๋ฌธ๋ฒ                                                                                                         | ์ค๋ช                                  |
| :--------------- | :----------------------------------------------------------------------------------------------------------- | :------------------------------------ |
| `mysqli_connect` | `mysqli_connect( ์๋ฒ์ฃผ์, mysql์ฌ์ฉ์์์ด๋, mysql์ฌ์ฉ์๋น๋ฐ๋ฒํธ, ๋ฐ์ดํฐ๋ฒ ์ด์ค์ด๋ฆ,(์ต์: port, socket) );` | MySQL server ๋ MariaDB Server์ ์ฐ๊ฒฐ |

{: .note }

> mysqli_connect ํจ์๋ MySQL server์ ์ฐ๊ฒฐํด์ฃผ๋ ํจ์๋ก db์ ์ ๊ทผํด์ผ ํ  ๊ฒฝ์ฐ ๋ฌธ์์ ์ต์๋จ์ ์์ฑ์ ํด์ผํ๋ค.

insert.php
{: .label .label-purple }

```php
<?php
  //๋ณ์ conn ์ mysqli_connect(์๋ฒ์ฃผ์, mysql์ฌ์ฉ์์์ด๋, mysql์ฌ์ฉ์๋น๋ฐ๋ฒํธ, ๋ฐ์ดํฐ๋ฒ ์ด์ค์ด๋ฆ) ํ ๋น
  //$conn=mysqli_connect("localhost","๋ด๋ทํdb์์ด๋","๋ด๋ทํdb๋น๋ฒ","๋ด๋ทํdb๋ช");
  $conn=mysqli_connect("localhost","root","","mango_board");
  if(!$conn){ //๋ณ์conn ์ด false ์ผ๊ฒฝ์ฐ
    echo 'db์ ์ฐ๊ฒฐํ์ง ๋ชปํ์ต๋๋ค.'. mysqli_connect_error(); //๋ฌธ์์ด๊ณผ ํจ๊ป ์๋ฌ๋ฉ์์ง ์ถ๋ ฅํจ์ ์คํ
  } else{
    echo 'db์ ์ ์ํ์ต๋๋ค'; //์ฑ๊ณต์ ์ถ๋ ฅํ  ๋ฌธ์์ด
  }

  mysqli_close($conn); //์ ์์ ๋๋๋ค
  print "<hr/><a href='index.php'>๋ฉ์ธํ๋ฉด์ผ๋ก ์ด๋ํ๊ธฐ</a>"; // ๋ฉ์ธํ๋ฉด์ผ๋ก ์ด๋ํ ์ ์๋ ๋งํฌ ์ถ๋ ฅ
?>
```

์ฌ๊ธฐ๊น์ง sql ์๋ฒ์ ์ฐ๊ฒฐ์ด ๋๊ณ  ๋ฉ์์ง๋ฅผ ์ถ๋ ฅํ๋์ง ํ์ธํด๋ณธ๋ค
![]({{'/assets/img/php112.jpg'| relative_url}} )

---

## 02-4 insert.php ์ด์ด์ ์์ฑ

1. ์ฌ์ฉ์๊ฐ `write.php`์ ์์ฑํ ๊ธ์ ์ ์กํ๋ฉด `insert.php`์์ ๊ฐ์ ์ ์ฅํ์ฌ DB์ ์ถ๊ฐํ๋ ์ญํ ์ ํ๋ค.

2. ์ฌ์ฉ์๊ฐ ์ ๋ฌํ๋ ๋ฐ์ดํฐ๋ฅผ ์ ์ฅํ๋์ง ํ์ธํด๋ณด๋ ์ฝ๋๋ฅผ ์์ฑํ์
   2-1. `mysqli_close($conn);` ์ ์์ ๋๋ ํจ์ ์ด์ ์ ์์ฑํ๋ค.


insert.php
{: .label .label-purple }

```php

$user_name = $_POST['name'];
$user_msg = $_POST['message'];
print $user_name;
print $user_msg;

```

์ฌ๊ธฐ๊น์ง ํ์ธํด๋ณธ๋ค

- write.php ์์ ๊ธ ์์ฑํ ๊ธ์ฐ๊ธฐ ํด๋ฆญ
- insert.php ์์ ๋ด์ฉ ํ์ธ
  ![]({{'/assets/img/php113.jpg'| relative_url}} )

---

## 02-5

{: .note }

> [๋ฐ์ดํฐ๋ฒ ์ด์ค ์กฐ์์ด](https://dev.mysql.com/doc/refman/8.0/en/sql-data-manipulation-statements.html) > **C**reate, **R**ead, **U**pdate, **D**elete ๊ด๋ จ ๋ช๋ น์ด ๊ฐ์ฅ ๊ธฐ๋ณธ์ด๋ค

---

### INSERT Statement ,mysqli_query

{: .new }

> INSERT Statement
> ํ์ด๋ธ์ ์๋ก์ด ๋ ์ฝ๋(ํ)์ ์ถ๊ฐํ๋ ๋ช๋ น์ด
> ![]({{'/assets/img/php113.jpg'| relative_url}} )

๊ณต์ ์ฌ์ดํธ์ ๊ฐ์ด๋๋ฅผ ๋ณด๋ฉด ์๋ ๊ทธ๋จ๊ณผ ๊ฐ์ ์์๋ฅผ ํ์ธํ ์ ์๋ค.

![]({{'/assets/img/php114.jpg'| relative_url}} )

{: .new }

> ๊ฐ๋จํ ๋ฌธ๋ฒ
> `insert into ํ์ด๋ธ๋ช(์ปฌ๋ผ1, ์ปฌ๋ผ2) values (์ปฌ๋ผ1, ์ปฌ๋ผ2)`

- ์ด์ ์ print ๋ช๋ น์ ์ญ์ ํ insert๋ฌธ์ ์์ฑํ๋ค

- `mysqli_query(([์ฐ๊ฒฐ ๊ฐ์ฒด], [์ฟผ๋ฆฌ])` ๋ mysqli_connect ๋ก ์ฐ๊ฒฐ๋ ๊ฐ์ฒด๋ฅผ ๋ฐํํ๋ค
- ์ด ํจ์๋ ํด๋น ๊ตฌ๋ฌธ์ ์คํ์ ์คํจํ๋ฉด FALSE๋ฅผ ๋ฐํํ๋ค

insert.php
{: .label .label-purple }
```php
//  print $user_name;
//  print $user_msg;

//๋ณ์sql = ์ถ๊ฐ(ํ์ด๋ธfree_board (์ปฌ๋ผname=$user_name,message=$user_msg))
$sql = "INSERT INTO free_board (name, message) VALUES ('$user_name', '$user_msg')";

//result= mysqli_connect ๊ฐ์ฒด์ INSERT ๋ฌธ์ผ๋ก  ์ถ๊ฐ๋ ๋ฐ์ดํฐ๊ฐ ์ ์ฅ๋จ
$result = mysqli_query($conn, $sql);
if($result === false){  //result ๋ฐํ๊ฐ์ด false์ด๋ฉด
    echo '์ ์ฅ ์คํจ';
    error_log(mysqli_error($conn));//์๋ฌ ๋ก๊ทธ ๊ธฐ๋ก
}else{
    echo '์ ์ฅ ์ฑ๊ณต';
}

mysqli_close($conn);  //์ฐ๊ฒฐ์ข๋ฃ

print "<hr/><a href='index.php'>๋ฉ์ธํ๋ฉด์ผ๋ก ์ด๋ํ๊ธฐ</a>";

```
1. ์คํํ๋ฉด์ ํ์ธํด๋ณธ๋ค
  ![]({{'/assets/img/php114.jpg'| relative_url}} )

2. phpMyAdmin ์ ์ ์ฅ๋ DB๋ ํ์ธํด๋ณธ๋ค
  ![]({{'/assets/img/php115.jpg'| relative_url}} )

3. ๊ธ์ ๋ช๊ฐ ๋ ์ฌ๋ ค๋ณด์

---

# 03 ์ ์ฅ๋ ๊ธ๋ชฉ๋ก ์ถ๋ ฅ

## 03-1 ๊ธ๋ชฉ๋ก ์์ฑ

1. `insert.php` ์ sqlconnect ๋ถ๋ถ์ ๋ณต์ฌํด์ `index.php`์ ๋ถ์ฌ๋ฃ๋๋ค
  ![]({{'/assets/img/php116.jpg'| relative_url}} )

2.  $sql ์ ๊ธ์ ๋ชฉ๋ก์ ์กฐํํ๋ ๋ด์ฉ์ผ๋ก ๋ณ๊ฒฝํ๋ค.
   - <del class="text-grey-dk-000">`$sql = "INSERT INTO free_board (name, message) VALUES ('$user_name', '$user_msg')";`</del>  
   - `$sql = "SELECT * FROM free_board";`    
   -   > ๐ํ์ด๋ธ์ ๋ฐ์ดํฐ๋ฅผ ์กฐํํ๋ ํจ์:  `SELECT * FROM ํ์ด๋ธ๋ช` 
        {: .text-red-300}

3. ๋ค์ํ ๋ฐฉ๋ฒ์ผ๋ก ๊ฒฐ๊ณผ ์ถ๋ ฅํ๊ธฐ
  - $result ์ ๊ฒฐ๊ณผ๋ฅผ ์ถ๋ ฅํด๋ณด๋ฉด ์๋์ ์ด๋ฏธ์ง์ ๊ฐ๋ค
    ![]({{'/assets/img/php117.jpg'| relative_url}} )    
  -  | ํจ์๋ช        | ๊ธฐ๋ฅ     | 
    |:-------------|:------------------|
    | `echo`       | ๊ฐ์ ๊ทธ๋๋ก ์ถ๋ ฅ | 
    | `print`      | ๊ฐ์ ๊ทธ๋๋ก ์ถ๋ ฅ  | 
    | `print_r()`  | ๋ฐฐ์ด, ๊ฐ์ฒด์ ๋ชจ์์ ๊ทธ๋๋ก ์ถ๋ ฅ    | 
    | `var_dump()`|  ๋ฐฐ์ด, ๊ฐ์ฒด๋ฅผ ์์ธํ ์ถ๋ ฅ | 

index.php
{: .label .label-purple }

```php

<body>
  <h1>์์  ๊ฒ์ํ</h1>
  <h2>๊ธ ๋ชฉ๋ก</h2>
  <ul>
    <?php
    $conn = mysqli_connect("localhost", "root", "", "mango_board");

    if (!$conn) {
      echo 'db์ ์ฐ๊ฒฐํ์ง ๋ชปํ์ต๋๋ค.' . mysqli_connect_error();
    } else {
      echo 'db์ ์ ์ํ์ต๋๋ค!!!';
    }
    // free_board ํ์ด๋ธ์์ ๊ธ ์กฐํ SELECT * FROM ํ์ด๋ธ๋ช
    $sql = "SELECT * FROM free_board"; 
    //$result ๊ฒฐ๊ณผ ์ ์ฅ
    $result = mysqli_query($conn, $sql);
    //๊ฒฐ๊ณผ๋ฅผ ๋ฐ๋ณต๋ฌธ์ผ๋ก ๋์ ์์ ์์ฑ
    ?>
  </ul>
  <hr />
  <p><a href="write.php">๊ธ์ฐ๊ธฐ</a></p>
  <hr />
</body>

```
## 03-2 ๊ธ๋ชฉ๋ก ์ถ๋ ฅ

4. `$result` ์ ๊ฐ์ ๋์ ์์๋ก ์์ฑํ์ฌ html ๋ฌธ์์ ์ถ๋ ฅํ์
5. ๋์ ์์ ์์ฑ์์
  + ์ ์ญ๋ณ์๋ก ๋น ๋ฌธ์์ด์ ์ค๋นํ๋ค.
  + ๋ฐ๋ณต๋ฌธ์ผ๋ก ๋์ ์์๋ฅผ ๋ฐ๋ณต ์์ฑ ํ๋ค
  + ์ ์ญ๋ณ์์ ๋ฐ๋ณต์์ฑ๋ ์์๋ฅผ ์ถ๊ฐํ๋ค.
6. ์์ฑํ  ์์๋ ์๋์ ๊ทธ๋ฆผ๊ณผ ๊ฐ๋ค
  ![]({{'/assets/img/php118.jpg'| relative_url}} )

 {: .pb-8}

<details close markdown='block'>
  <summary class="text-red-100">
    ๐์์๋ฅผ ์ถ๊ฐํ๊ธฐ
  </summary>
```javascript
var list=""
var li="li"
list+=li
list+=li

```
![]({{'/assets/img/add.jpg'| relative_url}} )

  {: .text-delta }
</details>


index.php
{: .label .label-purple }

```php
<ul>
<?php
$sql = "SELECT * FROM msg_board";
$result = mysqli_query($conn, $sql);
// ์ ์ญ๋ณ์๋ก ๋น ๋ฌธ์์ด์ ์ค๋น
$list = '';

//๋ฐ๋ณต๋ฌธ์์
while($row = mysqli_fetch_array($result)){
  $list = $list."<li>{$row['number']}: <a href=\"view.php?number={$row['number']}\">{$row['name']}</a></li>";           
}
echo $list;
?>
</ul>

```
์ถ๋ ฅ๊ฒฐ๊ณผ
![]({{'/assets/img/php119.jpg'| relative_url}} )


{: .mt-8}

###  mysqli_fetch_array()

* `$row = mysqli_fetch_array($result)` <br/>
  ๐[ํํ ๋ฆฌ์ผlink]({{'https://www.tutorialspoint.com/php/php_function_mysqli_fetch_array.htm'| relative_url}} ){: .anc}<br/>
  ๐[๊ณต์link]({{'https://www.php.net/manual/en/mysqli-result.fetch-array.php'| relative_url}} ){: .anc}<br/> 

  + mysqli_fetch_array: mysqli_query๋ฅผ ํตํด ์ป์ result์์ ๋ฐ์ดํฐ(๋ ์ฝ๋)๋ฅผ 1๊ฐ์ฉ ๋ฆฌํดํด์ฃผ๋ ํจ์
  + ๋ฐฐ์ด์ ์์๋ฅผ ํ๋ฒ์ฉ ์ํํ ์๋ ์ข๋ฃํจ while ์ ์ด์ฉํ์ฌ ๊ฐํธ์ถ
    ![]({{'/assets/img/php200.jpg'| relative_url}} )

๊ฒฐ๊ณผ
![]({{'/assets/img/php125.jpg'| relative_url}} )


---
{: .mb-10}
 
# 04 view.php

{: .note }
> ๊ธ๋ชฉ๋ก ํด๋ฆญ์ ๋ด์ฉ์ด ๋ณด์ด๋ view๋ฅผ ์์ฑํ๋ค
>
>


+ index.php์ ๋ด์ฉ์ ๋ค์ ์ดํด๋ณด์
{: .text-red-200}

![]({{'/assets/img/php120.jpg'| relative_url}} )


+ index.php์ ๋ฐ๋ณต๋ฌธ์ ์ผ๋ถ๋ถ์ ๊ฐ์ ธ์์ ์์ ํ๋๋ก ํ๋ค
{: .text-red-200}

+ view.php ์์๋ ๋ชจ๋  ํ์ด๋ธ์ ๊ธ์ ๊ฐ์ ธ์์ผ ํ๋๊ฒ์ด ์๋๋ผ ๋ชฉ๋ก์ค์์ ์ ํํ ๋ฒํธ์ ํด๋นํ๋ ๊ธ๋ง ๊ฐ์ ธ์์ผ ํ๋ค.
![]({{'/assets/img/php121.jpg'| relative_url}} )

  ๐[13.2.13 SELECT Statement]({{'https://dev.mysql.com/doc/refman/8.0/en/select.html'| relative_url}} ){: .anc}

  ![]({{'/assets/img/php123.jpg'| relative_url}} )

+ mysql ์ฌ์ดํธ์ ์กฐํ๋ฌธ์ ํ์ธํด๋ณด๋ฉด column๋ช์ผ๋ก ์กฐํํ๋ ์์๊ฐ ์๋ค.
  ์ด๊ฒ์ ์์ ํ์

+ ์ฝ๋์์ฑ
  - ๊ธ๋ชฉ๋ก์ด ์๋์ง๋ฅผ ํ์ธํ๋ ์กฐ๊ฑด๋ฌธ ์์ฑ
    
  view.php
  {: .label .label-purple }
  
  ```html

<!--index.php ๋ด์ฉ ๋ถ์ฌ๋ฃ๊ธฐ-->
<?php
  $conn = mysqli_connect("localhost", "root", "", "mango_board");

  if(!$conn){
      echo 'db์ ์ฐ๊ฒฐํ์ง ๋ชปํ์ต๋๋ค.'. mysqli_connect_error(); 
  } else{
      echo 'db์ ์ ์ํ์ต๋๋ค!!!';
  }
  <!-- -->
  <!--free_board ํ์ด๋ธ์์ ๊ธ ์กฐํ-->
  <!-- SELECT * FROM ํ์ด๋ธ๋ช-->

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
        $conn = mysqli_connect("localhost", "root", "", "mango_board");
        if($row = mysqli_fetch_array($result)){

      ?>
    <h3>๊ธ๋ฒํธ: / ๊ธ์ด์ด:</h3>

   <!--๊ธ๋ด์ฉ์ถ๋ ฅ-->
    <div></div>
     <?php  }  ?>
  </body>

  </html>

  ```

+ ๊ธ๋ด์ฉ ๋์ ์ถ๋ ฅ
  - $row ์์ number ํ๋์ ๊ฐ์ ๊ธ๋ฒํธ์ ์ถ๋ ฅ
  - $row ์์ name ํ๋์ ๊ฐ์ ๊ธ์ด์ด์ ์ถ๋ ฅ  
  - $row ์์ message ํ๋์ ๊ฐ์ div์ ์ถ๋ ฅ  

  ```php
  <h3>๊ธ๋ฒํธ: <?= $row['number'] ?> / ๊ธ์ด์ด: <?= $row['name'] ?> </h3>
  <div><?= $row['message'] ?> </div>
   <?php  }  ?>
  ```


  ![]({{'/assets/img/php132.jpg'| relative_url}} )

+ ๋ฉ์ธํ๋ฉด ์ด๋๋งํฌ ์ถ๊ฐ

`<p><a href="index.php">๋ฉ์ธํ๋ฉด์ผ๋ก ๋์๊ฐ๊ธฐ</a></p>`

<details close markdown='block'>
  <summary>
    <span class="text-red-200">์ ์ฒด์ฝ๋</span>
  </summary>
```
<?php
$conn = mysqli_connect("localhost", "root", "", "mango_board");

if (!$conn) {
  echo 'db์ ์ฐ๊ฒฐํ์ง ๋ชปํ์ต๋๋ค.' . mysqli_connect_error();
} else {
  echo 'db์ ์ ์ํ์ต๋๋ค!!!';
}
//free_board ํ์ด๋ธ์์ ๊ธ ์กฐํ
// SELECT ํ๋๋ช FROM ํ์ด๋ธ๋ช

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
  $conn = mysqli_connect("localhost", "root", "", "mango_board");

  if ($row = mysqli_fetch_array($result)) {
  ?>
    <h3>๊ธ๋ฒํธ: <?= $row['number'] ?> / ๊ธ์ด์ด: <?= $row['name'] ?> </h3>
    <div>
     <?= $row['message'] ?>
    </div>
  <?php
  }
  ?>
  <p><a href="index.php">๋ฉ์ธํ๋ฉด์ผ๋ก ๋์๊ฐ๊ธฐ</a></p>

</body>

</html>
```
</details>


---
{: .mb-10}
 
# 05-๋ทํ์ ์ฌ๋ฆฌ๊ธฐ

 1. ๋ฌด๋ฃํธ์คํ ์ ์ฒญ ๐[link]({{'https://www.dothome.co.kr/web/free/index.php'| relative_url}} ){: .anc}
 2. 1๋จ๊ณ๋ ์์์ ํ ๊ฒ ํธ์คํ ์ ์ฒญ์ด ์๋ฃ๋๋ฉด ftp ์ฐ๊ฒฐ๊น์ง ์๋ฃํ ๊ฒ
 3. ๋ง์ด๋ทํ์ ํด๋ฆญํ์ฌ db์ ๋ณด๋ฅผ ํ์ธํ๋ค.
    ![]({{'/assets/img/php158.jpg'| relative_url}} )
 4. ์์ธ๋ณด๊ธฐ ํด๋ฆญ  
    ![]({{'/assets/img/php159.jpg'| relative_url}} )
 5. ํ๋จ์ db์ ๋ณด๋ฅผ ํ์ธํ MySQL ๊ด๋ฆฌ ๋ฅผ ํด๋ฆญํ์ฌ PHPMYADMIN์ ์ ์ํ๋ค. ์ด๋ ์ ์์์ด๋์ ๋น๋ฐ๋ฒํธ๋ DB ์ ๋ณด๋๋ก ์์ฑํ๋ค.
    ![]({{'/assets/img/php167.jpg'| relative_url}} )
    ![]({{'/assets/img/php170.jpg'| relative_url}} )
 6. ๊ทธํ [01๋จ๊ณ](#01-sql๋ก-๊ฒ์ํ-๋ง๋ค๊ธฐdb์์ฑ) ์ ํ์ด๋ธ ์์ฑ๊ณผ์ ์ ๋ฐ๋ณตํ๋ค.

 7. `$conn=mysqli_connect("localhost","๋ด๋ทํdb์์ด๋","๋ด๋ทํdb๋น๋ฒ","๋ด๋ทํdb๋ช");` 
 8. ๋ทํ์ฐ๊ฒฐ์ ์ผ์ชฝ์ ๊ฐ์ผ๋ก ์์ ํ์ฌ ์ฌ๋ฆฐ๋ค.
