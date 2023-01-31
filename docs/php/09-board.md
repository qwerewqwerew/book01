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

관련링크
{: .label .label-purple }

> [🔗php_setcookie](https://www.php.net/manual/en/function.setcookie.php){: .anc}
>
> [🔗php\_$_COOKIE](https://www.php.net/manual/en/reserved.variables.cookies.php){: .anc}
>
> [🔗php_session_destroy](https://www.php.net/manual/en/function.session-destroy.php){: .anc}
>
> [🔗php_session_unset](https://www.php.net/manual/en/function.session-unset.php){: .anc}
>
> [🔗mySql](https://mysql.com/){: .anc}
> 
>
> [🔗mySql_statements](https://dev.mysql.com/doc/refman/8.0/en/sql-data-manipulation-statements.html){: .anc}
> 

---

# 01 SQL로 게시판 만들기(DB생성)

{: .new }

> 😺 SQL 이란?
> 데이터를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어
>
> > ◾ 게시판구현을 위해 알아야 할것
> >
> > ◾Create(생성), Read(조회), Update(수정), Delete(삭제)<br>
> >
> > ◾ 필요한 개발환경
> > 서버(xmapp)를 설치하고 데이터 베이스(mango_board)를 생성 할 테이블(free_board)생성<br>
> >
> > {: .fs-3 .fw-400}

{:.pt-8}

## 01-1 DB 구축

> 우리가 만들 테이블의 정보는 아래와 같다

| 서버 : xmapp | 데이터베이스명 : mango_board | 테이블명 : free_board

1. xmapp control-panel열기
   - ![]({{'/assets/img/php97.jpg'| relative_url}} )

2. phpMyAdmin 에 로그인한다
   - ![]({{'/assets/img/php98.jpg'| relative_url}} )

3. 사용자추가
  - ![]({{'/assets/img/php100.jpg'| relative_url}} )

2. 아래의 이미지를 보고 체크된 부분처럼 기재한다. 비밀번호는 쉬운걸로 하자
  - ![]({{'/assets/img/php101.jpg'| relative_url}} )

---


{:.pt-8}
## 01-2 테이블생성

{: .note }
> 생성할 테이블의 구조는 아래와 같다

|  종류        | 이름        | 설명 |
|:-------------|-------------|------|
|  테이블명    | free_board                                                      |||
| 컬럼(필드)명 |  number  |INT              |자동으로 숫자를 올리는 auto_increment PK|
|              |  name    | varchar(100)   |글쓴이|
|              |  message |  varchar(255)  |메시지|


만들어보자
{: .text-purple-200}

1. create new table 클릭
   ![]({{'/assets/img/php102.jpg'| relative_url}} )

1. 이미지의 표시된 정보를 입력후 실행 클릭 -> 오류메시지 출력시 모두 무시 클릭
   ![]({{'/assets/img/php102.jpg'| relative_url}} )

1. 이미지의 표시된 부분만 해당 정보를 입력한다. 나머지는 그냥둠
   ![]({{'/assets/img/php104.jpg'| relative_url}} )

1. 3 단계에서 primary 선택시 아래와 같은 화면이 뜨면 실행을 누르면 된다.
   ![]({{'/assets/img/php105.jpg'| relative_url}} )

1. sql 미리보기 클릭
   ![]({{'/assets/img/php107.jpg'| relative_url}} )

1. 설정값 확인후 저장클릭
   ![]({{'/assets/img/php106.jpg'| relative_url}} )

1. 설정값 확인후 저장클릭
   ![]({{'/assets/img/php108.jpg'| relative_url}} )

---

# 02 서버만들기

Structure of a server
{: .label .label-purple }

```markdown
htdocs/
└── board/
    ├── index.php(글조회,검색,삭제)
    ├── view.php(글보기)
    ├── write.php(글작성)
    ├── insert.php(글입력)
    ├── delete.php(글삭제)
    ├── search.php(검색)
    └── list.php(글목록)
```

## 02-1 index.php

1. xmapp/htdocs/board 생성
   ![]({{'/assets/img/php109.jpg'| relative_url}} )
1. board/index.php 생성 후 코드작성

- 글쓰기 링크 클릭시 write.php 문서로 이동

index.php
{: .label .label-purple }

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>망고네 자유 게시판</title>
  </head>

  <body>
    <h1>자유 게시판</h1>
    <h2>글 목록</h2>

    <hr />
    <p><a href="write.php">글쓰기</a></p>
    <hr />
  </body>
</html>
```

2. 작성후 localehost/board 에서 확인
   ![]({{'/assets/img/php110.jpg'| relative_url}} )

---

## 02-2 write.php

1. board/write.php 생성

1. 글작성을 하는 페이지이다. <br/>
   form 태그와 input 의 속성들이 실제 동작하는것을 확인하면서 코딩한다.<br/>

`form action ="전송할 파일,폴더의 주소"`
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
    <title>글쓰기</title>
  </head>

  <body>
    <h1>글쓰기</h1>
    <!-- action=전송할 주소  -->
    <form action="insert.php" method="post">
      <p>
        <label for="name">작성자:</label>
        <!-- name=테이블의 필드명 -->
        <input type="text" id="name" name="name" />
      </p>
      <p>
        <label for="message">메시지:</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      </p>
      <!-- submit 버튼을 클릭하면 form 의 액션 값의 주소로 데이터가 전송된다 -->
      <input type="submit" value="글쓰기" />
    </form>
  </body>
</html>
```

- index.php 에서 글쓰기 클릭시 write.php로 이동하는지 확인한다

---

## 02-3 insert.php

{: .note }

> [🔗공식사이트](#mySql)
>
> 🔑 DB와 연동해서 작동할 페이지
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
> 위의 파일들은 mango_board DB에 접근하여 freeboard 테이블 내용을 조회할수 있어여 한다
> {: .text-blue-200 }

---

### mysqli_connect 함수

| 함수명           | 문법                                                                                                         | 설명                                  |
| :--------------- | :----------------------------------------------------------------------------------------------------------- | :------------------------------------ |
| `mysqli_connect` | `mysqli_connect( 서버주소, mysql사용자아이디, mysql사용자비밀번호, 데이터베이스이름,(옵션: port, socket) );` | MySQL server 나 MariaDB Server에 연결 |

{: .note }

> mysqli_connect 함수는 MySQL server에 연결해주는 함수로 db에 접근해야 할 경우 문서의 최상단에 작성을 해야한다.

insert.php
{: .label .label-purple }

```php
<?php
  //변수 conn 에 mysqli_connect(서버주소, mysql사용자아이디, mysql사용자비밀번호, 데이터베이스이름) 할당
  $conn=mysqli_connect("localhost","root","","mango_board");
  if(!$conn){ //변수conn 이 false 일경우
    echo 'db에 연결하지 못했습니다.'. mysqli_connect_error(); //문자열과 함께 에러메시지 출력함수 실행
  } else{
    echo 'db에 접속했습니다'; //성공시 출력할 문자열
  }

  mysqli_close($conn); //접속을 끊는다
  print "<hr/><a href='index.php'>메인화면으로 이동하기</a>"; // 메인화면으로 이동할수 있는 링크 출력
?>
```

여기까지 sql 서버에 연결이 되고 메시지를 출력하는지 확인해본다
![]({{'/assets/img/php112.jpg'| relative_url}} )

---

## 02-4 insert.php 이어서 작성

1. 사용자가 `write.php`에 작성한 글을 전송하면 `insert.php`에서 값을 저장하여 DB에 추가하는 역할을 한다.

2. 사용자가 전달하는 데이터를 저장하는지 확인해보는 코드를 작성하자
   2-1. `mysqli_close($conn);` 접속을 끊는 함수 이전에 작성한다.


insert.php
{: .label .label-purple }

```php

$user_name = $_POST['name'];
$user_msg = $_POST['message'];
print $user_name;
print $user_msg;

```

여기까지 확인해본다

- write.php 에서 글 작성후 글쓰기 클릭
- insert.php 에서 내용 확인
  ![]({{'/assets/img/php113.jpg'| relative_url}} )

---

## 02-5

{: .note }

> [데이터베이스 조작어](https://dev.mysql.com/doc/refman/8.0/en/sql-data-manipulation-statements.html) > **C**reate, **R**ead, **U**pdate, **D**elete 관련 명령이 가장 기본이다

---

### INSERT Statement ,mysqli_query

{: .new }

> INSERT Statement
> 테이블에 새로운 레코드(행)을 추가하는 명령어
> ![]({{'/assets/img/php113.jpg'| relative_url}} )

공식 사이트의 가이드를 보면 아래 그램과 같은 예시를 확인할수 있다.

![]({{'/assets/img/php114.jpg'| relative_url}} )

{: .new }

> 간단한 문법
> `insert into 테이블명(컬럼1, 컬럼2) values (컬럼1, 컬럼2)`

- 이전의 print 명령은 삭제후 insert문을 작성한다

- `mysqli_query(([연결 객체], [쿼리])` 는 mysqli_connect 로 연결된 객체를 반환한다
- 이 함수는 해당 구문의 실행에 실패하면 FALSE를 반환한다

insert.php
{: .label .label-purple }
```php
//  print $user_name;
//  print $user_msg;

//변수sql = 추가(테이블free_board (컬럼name=$user_name,message=$user_msg))
$sql = "INSERT INTO free_board (name, message) VALUES ('$user_name', '$user_msg')";

//result= mysqli_connect 객체와 INSERT 문으로  추가된 데이터가 저장됨
$result = mysqli_query($conn, $sql);
if($result === false){  //result 반환값이 false이면
    echo '저장 실패';
    error_log(mysqli_error($conn));//에러 로그 기록
}else{
    echo '저장 성공';
}

mysqli_close($conn);  //연결종료

print "<hr/><a href='index.php'>메인화면으로 이동하기</a>";

```
1. 실행화면을 확인해본다
  ![]({{'/assets/img/php114.jpg'| relative_url}} )

2. phpMyAdmin 에 저장된 DB도 확인해본다
  ![]({{'/assets/img/php115.jpg'| relative_url}} )

3. 글을 몇개 더 올려보자

---

# 03 저장된 글목록 출력

## 03-1 글목록 생성

1. `insert.php` 의 sqlconnect 부분을 복사해서 `index.php`에 붙여넣는다
  ![]({{'/assets/img/php116.jpg'| relative_url}} )

2.  $sql 은 글의 목록을 조회하는 내용으로 변경한다.
   - <del class="text-grey-dk-000">`$sql = "INSERT INTO free_board (name, message) VALUES ('$user_name', '$user_msg')";`</del>  
   - `$sql = "SELECT * FROM free_board";`    
   -   > 🔑테이블의 데이터를 조회하는 함수:  `SELECT * FROM 테이블명` 
        {: .text-red-300}

3. 다양한 방법으로 결과 출력하기
  - $result 의 결과를 출력해보면 아래의 이미지와 같다
    ![]({{'/assets/img/php117.jpg'| relative_url}} )    
  -  | 함수명        | 기능     | 
    |:-------------|:------------------|
    | `echo`       | 값을 그대로 출력 | 
    | `print`      | 값을 그대로 출력  | 
    | `print_r()`  | 배열, 객체의 모양을 그대로 출력    | 
    | `var_dump()`|  배열, 객체를 자세히 출력 | 

index.php
{: .label .label-purple }

```php

<body>
  <h1>자유 게시판</h1>
  <h2>글 목록</h2>
  <ul>
    <?php
    $conn = mysqli_connect("localhost", "root", "", "mango_board");

    if (!$conn) {
      echo 'db에 연결하지 못했습니다.' . mysqli_connect_error();
    } else {
      echo 'db에 접속했습니다!!!';
    }
    // free_board 테이블에서 글 조회 SELECT * FROM 테이블명
    $sql = "SELECT * FROM free_board"; 
    //$result 결과 저장
    $result = mysqli_query($conn, $sql);
    //결과를 반복문으로 동적요소 생성
    ?>
  </ul>
  <hr />
  <p><a href="write.php">글쓰기</a></p>
  <hr />
</body>

```
## 03-2 글목록 출력

4. `$result` 의 값을 동적요소로 생성하여 html 문서에 출력하자
5. 동적요소 생성순서
  + 전역변수로 빈 문자열을 준비한다.
  + 반복문으로 동적요소를 반복 생성 한다
  + 전역변수에 반복생성된 요소를 추가한다.
6. 생성할 요소는 아래의 그림과 같다
  ![]({{'/assets/img/php118.jpg'| relative_url}} )

 {: .pb-8}

<details close markdown='block'>
  <summary class="text-red-100">
    🔑요소를 추가하기
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
// 전역변수로 빈 문자열을 준비
$list = '';

//반복문시작
while($row = mysqli_fetch_array($result)){
  $list = $list."<li>{$row['number']}: <a href=\"view.php?number={$row['number']}\">{$row['name']}</a></li>";           
}
echo $list;
?>
</ul>

```

{: .mt-8}


* $row = mysqli_fetch_array($result)🔗[link]({{'https://www.tutorialspoint.com/php/php_function_mysqli_fetch_array.htm'| relative_url}} ){: .anc}
 {: .bg-yellow-000}  
  + mysqli_fetch_array: mysqli_query를 통해 얻은 result에서 데이터(레코드)를 1개씩 리턴해주는 함수

출력
![]({{'/assets/img/php119.jpg'| relative_url}} )

---

