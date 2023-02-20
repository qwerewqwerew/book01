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

## 참고링크
{: .no_toc}

🔗[완성코드]({{'/assets/img/15.zip'| relative_url}} ){: .anc}

---

{: .note }
> 게시판 글수정, 조회, update 구현<br/>
> CRUD 의 마지막 update 를 구현한다.<br/>
> CRUD(create, read, update, delete) 의 약자로 데이터베이스의 기본 처리 기능을 말한다

---
{: .mb-10}
 
# 01-view.php
1. 수정하기 콘텐츠 추가

view.php
{: .label .label-purple }

```html
<p><a href="index.php">메인화면으로 돌아가기</a></p>
<p><a href="index.php">수정하기</a></p>

```
실행

하단에 수정하기 글씨 추가됨
![]({{'/assets/img/php156.jpg'| relative_url}} )

---
{: .mb-10}
 
# 02-update.php

1. write.php 를 다른이름으로 저장 `update.php`
2. 수정

update.php
{: .label .label-purple }

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>글수정</title>
  </head>

  <body>
    <h1>수정하기</h1>
    <!-- 수정페이지로 이동한다 -->
    <form action="modify.php" method="post">
      <p>
        <label for="name">작성자:</label>
        <!--value에 임의의 값을 넣어 수정전의 데이터를 임시생성한다. 이후 데이터베이스를 조회하여 변수로 출력한다.  -->
        <input type="text" id="name" name="name" value="김망고"/>
      </p>
      <p>
        <label for="message">메시지:</label>
        <!--임의의 값을 넣어 수정전의 데이터를 임시생성한다. 이후 데이터베이스를 조회하여 변수로 출력한다.  -->        
        <textarea name="message" id="message" cols="30" rows="10">이전글내용</textarea>
      </p>
      <input type="submit" value="글쓰기" />
    </form>
  </body>
</html>
```
{: .note }
> update에 필요한 기능
> 1. 데이터베이스 접속
> 2. 데이터베이스 조회
> 3. 해당 글 내용 보기
> 위의 내용은 index.php 의 list 내용에서 전달받아서 글을 출력하는 view.php의 상단부와 같다

설명
![]({{'/assets/img/php152.jpg'| relative_url}} )

---

1. view.php의 내용을 복사하여 update.php의 최상단에 붙여넣는다

update.php
{: .label .label-purple }

```php
<?php
$conn = mysqli_connect("localhost", "root", "", "mango_board");

if (!$conn) {
  echo 'db에 연결하지 못했습니다.' . mysqli_connect_error();
} else {
  echo 'db에 접속했습니다!!!';
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

+ 글내용을 출력하는 코드를 응용하여 작성한다.
+ 표시된 부분을 복사한다.
![]({{'/assets/img/php160.jpg'| relative_url}} )

view.php
{: .label .label-purple }

```php
<!-- db접속시 php -->
<?php
$conn = mysqli_connect("localhost", "root", "", "mango_board");

if (!$conn) {
  echo 'db에 연결하지 못했습니다.' . mysqli_connect_error();
} else {
  echo 'db에 접속했습니다!!!';
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
  <title>View-망고게시글</title>
</head>

<body>
  <h1>자유 게시판</h1>
  <h2>글 내용</h2>
  <?php
  /* 여기부터 추가 */
  if ($row = mysqli_fetch_array($result)) {
  ?>
    <h3>글번호: <?= $row['number'] ?> / 글쓴이: <?= $row['name'] ?> </h3>
    <div> <?= $row['message'] ?></div>
  <?php
  }
  mysqli_close($conn);
  ?>
  <p><a href="index.php">메인화면으로 돌아가기</a></p>
  /* update.pnp에 매개변수로 number 를 전달한다.*/
  <p><a href="update.php?number=<?= $row['number'] ?>">수정하기</a></p>

</body>
</html>

```
![]({{'/assets/img/php157.jpg'| relative_url}} )

| db를 조회해서 $row의 number 과 name, message 의 데이터를 출력한후 데이터베이스 서버를 종료한다.
{: .box .bg-white-100}
---
{: .mb-10}
 
# 04-update.php

![]({{'/assets/img/php153.jpg'| relative_url}} )

1. db에서 조회한 결과를 리턴하는 함수로 form 을 감싼다

```php
<?php
$conn = mysqli_connect("localhost", "root", "", "mango_board");

if (!$conn) {
  echo 'db에 연결하지 못했습니다.' . mysqli_connect_error();
} else {
  echo 'db에 접속했습니다!!!';
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
  <title>글수정</title>
</head>

<body>
  <h1>수정하기</h1>
  <?php
  if ($row = mysqli_fetch_array($result)) {
  ?>
    <form action="modify.php" method="post">
      <p>
        <label for="name">작성자:</label>
        <input type="text" id="name" name="name" value=<?= $row['name'] ?> />
      </p>
      <p>
        <label for="message">메시지:</label>
        <textarea name="message" id="message" cols="30" rows="10"><?= $row['message'] ?></textarea>
      </p>
      <input type="submit" value="글쓰기" />
    </form>
  <?php
  }
  mysqli_close($conn);
  ?>

</body>

</html>
```

실행

![]({{'/assets/img/php154.jpg'| relative_url}} )

1. index.php 에서 글목록 클릭
2. 해당글번호로 이동 수정하기 클릭
3. 해당글 조회 수정페이지 이동

---

{: .mb-10}
 
# 05-modify.php

1. insert.php 다른이름으로 저장 =>  `modify.php`
2. 코드작성


modify.php
{: .label .label-purple }

```php
<?php
//변수 conn 에 mysqli_connect(서버주소, mysql사용자아이디, mysql사용자비밀번호, 데이터베이스이름) 할당
$conn = mysqli_connect("localhost", "root", "", "mango_board");
if (!$conn) { //변수conn 이 false 일경우
  echo 'db에 연결하지 못했습니다.' . mysqli_connect_error(); //문자열과 함께 에러메시지 출력함수 실행
} else {
  echo 'db에 접속했습니다'; //성공시 출력할 문자열
}

$number = $_POST['number'];
$user_name = $_POST['name'];
$user_msg = $_POST['message'];
$sql = "UPDATE free_board SET name='$user_name', message='$user_msg' WHERE number=$number";

$result = mysqli_query($conn, $sql);

if ($result === false) {
  echo "수정에 실패했습니다.";
  error_log(mysqli_error($conn));
} else {
  echo "수정을 완료하였습니다.";
}
mysqli_close($conn);
print "<p><a href='index.php'>메인화면으로 돌아가기</a></p>";
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
  echo 'db에 연결하지 못했습니다.' . mysqli_connect_error();
} else {
  echo 'db에 접속했습니다!!!';
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
  <title>글수정</title>
</head>

<body>
  <h1>수정하기</h1>
  <?php
  if ($row = mysqli_fetch_array($result)) {
  ?>
    <form action="modify.php" method="post">
      <input type="hidden" name="number" value="<?= $view_num ?>">
      <p>
        <label for="name">작성자:</label>
        <input type="text" id="name" name="name" value=<?= $row['name'] ?> />
      </p>
      <p>
        <label for="message">메시지:</label>
        <textarea name="message" id="message" cols="30" rows="10"><?= $row['message'] ?></textarea>
      </p>
      <input type="submit" value="글쓰기" />
    </form>
  <?php
  }
  mysqli_close($conn);
  ?>

</body>

</html>
```