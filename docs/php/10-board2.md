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

관련링크
{: .label .label-purple }

> [🔗php_setcookie](https://www.php.net/manual/en/function.setcookie.php){: .anc}
>

---
# 검색, 삭제 구현

## 01 index수정

{: .note }
> index.php 에 input 요소를 추가하여
> 글검색과 글삭제 interface를 구현한다
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
<p><a href="write.php">글쓰기</a></p>
<hr>
...

<!-- 아래부터 추가 -->
<h2>글 검색</h2>
<form action="search_result.php" method="post">
    <h3>검색할 키워드를 입력하세요.</h3>
    <p>
        <label for="search">키워드:</label>
        <input type="text" id="search" name="bdKey">
    </p>
    <input type="submit" value="검색">
</form>
<hr>
<h2>글 삭제</h2>
<form action="delete.php" method="post">
    <h3>삭제할 메시지 번호를 입력하세요.</h3>
    <p>
        <label for="msgdel">번호:</label>
        <input type="text" id="msgdel" name="delnum">
    </p>
    <input type="submit" value="삭제">

```

## 02 검색

1. index.php 를 다른 이름으로 저장 <span class="text-red-300">search_result.php </span>
2. 내용수정

```php
//키워드를 저장할 변수 생성
//post 방식으로 전달된 boardKey 의 값을  user_key 변수에 저장
$user_bdkey=$_POST['bdKey'];
//free_board 테이블에서 조건(where)과 같은 데이터 조회 
//LIKE 는 부분적으로 일치하는 칼럼을 찾을때 사용 
//php 의 % 는 * 와 같다
//변수 bdkey 를 포함하는 문자열이 조건
$sql = "SELECT * FROM free_board WHERE message LIKE '%$bdKey%'";

//...중략
echo $list;
//조회후 db를 닫는다
mysqli_close($conn);

```

![]({{'/assets/img/php126.jpg'| relative_url}} )
![]({{'/assets/img/php127.jpg'| relative_url}} )

<details open markdown='block'>
  <summary>
    <span class='text-red-200'>📢전체코드</span>
  </summary>
```
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>망고네 자유 게시판</title    $conn = mysqli_connect("localhost", "root", "", "mango_board");
>
</head>

<body>
  <h1>자유 게시판</h1>
  <h2>검색결과</h2>
  <ul>
    <?php
    $conn = mysqli_connect("localhost", "root", "", "mango_board");

    if (!$conn) {
      echo 'db에 연결하지 못했습니다.' . mysqli_connect_error();
    } else {
      echo 'db에 접속했습니다!!!';
    }
    //키워드를 저장할 변수 생성
    //post 방식으로 전달된 boardKey 의 값을  user_bdkey 변수에 저장
    $user_bdkey=$_POST['bdKey'];
    //free_board 테이블에서 조건(where)과 같은 데이터 조회 
    //LIKE 는 부분적으로 일치하는 칼럼을 찾을때 사용 
    //php 의 % 는 * 와 같다
    //변수 bdkey 를 포함하는 문자열이 조건
    $sql = "SELECT * FROM free_board WHERE message LIKE '%$user_bdkey%'";

    $result = mysqli_query($conn, $sql);

    $list = '';

    while ($row = mysqli_fetch_array($result)) {

      $list = $list . "<li>{$row['number']}: <a href=\"view.php?number={$row['number']}\">{$row['name']}</a></li>";
    }
    echo $list;
    //조회후 db를 닫는다
    mysqli_close($conn);
    ?>
  </ul>
  <hr />
  <p><a href="write.php">글쓰기</a></p>
  <hr />
</body>

</html>
```
  {: .text-delta }
</details>

결과:
![]({{'/assets/img/php128.jpg'| relative_url}} )



---
{: .mb-10}
 
## 03-삭제

1. index.php 를 다른 이름으로 저장 ->delet.php

```php
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>망고네 자유 게시판</title>
</head>

<body>
  <h1>자유 게시판</h1>
  <h2>삭제결과</h2>
  <ul>
    <?php
    $conn = mysqli_connect("localhost", "root", "", "mango_board");

    if (!$conn) {
      echo 'db에 연결하지 못했습니다.' . mysqli_connect_error();
    } else {
      echo 'db에 접속했습니다!!!';
    }
    $user_delnum = $_POST['delnum'];
    $sqlDEL = "DELETE FROM free_board WHERE number = $user_delnum";

    $sql = "SELECT * FROM free_board";
    $result = mysqli_query($conn, $sql);

    $list = '';

    while ($row = mysqli_fetch_array($result)) {
      $list = $list . "<li>{$row['number']}: <a href=\"view.php?number={$row['number']}\">{$row['name']}</a></li>";
    }
    echo $list;
    ?>
  </ul>
  <p>
    <?php
    echo $user_delnum . '번째 데이터가 삭제되었습니다.';
    ?>
  </p>
  <p><a href="index.php">메인화면으로 돌아가기</a></p>

</html>

```