---
title: 09-board
layout: default
parent: PHP
tags: [ Cookie,Session ]
---
 

1. TOC
{:toc}

---

## 관련링크

>[🔗php_setcookie](https://www.php.net/manual/en/function.setcookie.php){: .anc}
>[🔗php_$_COOKIE](https://www.php.net/manual/en/reserved.variables.cookies.php){: .anc}
>[🔗php_session_destroy](https://www.php.net/manual/en/function.session-destroy.php){: .anc}
>[🔗php_session_unset](https://www.php.net/manual/en/function.session-unset.php){: .anc}

---

## 01 SQL 을 활용한 게시판을 만들어보자

{: .new }
> 😺 SQL 이란?
> > 데이터를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어
> > 
> 😺 게시판구현을 위해 알아야 할것
> > 
> > create, read, update, delete
> > (생성), (조회),(수정), (삭제)
> > 
> 😺 필요한 개발환경
> > 서버를 설치 하고 데이터 베이스를 생성 할 테이블 생성
> > (xmapp)         (mango_board)
>{: .fs-3 .fw-400}


### 01-1 DB 구축

> 우리가 만들 테이블의 정보는 아래와 같다

| 서버 : xmapp       | 데이터베이스명 : mango_board     

1. xmapp control-panel열기
  + ![]({{'/assets/img/php97.jpg'| relative_url}} )
2. phpMyAdmin 에 로그인한다
  + ![]({{'/assets/img/php98.jpg'| relative_url}} )
3. 사용자추가
  + ![]({{'/assets/img/php100.jpg'| relative_url}} )
2. 아래의 이미지를 보고 체크된 부분처럼 기재한다. 비밀번호는 쉬운걸로 하자
  + ![]({{'/assets/img/php101.jpg'| relative_url}} )

---

> 테이블의 구조를 살펴보자

1. 테이블명 : free_board
1. 컬럼(필드)명: number - INT : 자동으로 숫자를 올리는 auto_increment PK
1. 컬럼(필드)명: name - varchar(100) : 글쓴이
1. 컬럼(필드)명: message - varchar(255) : 메시지


---

### 01-2 테이블생성

1. create new table 클릭 
  ![]({{'/assets/img/pnp102.jpg'| relative_url}} )

1. 이미지의 표시된 정보를 입력후 실행 클릭 -> 오류메시지 출력시 모두 무시 클릭
  ![]({{'/assets/img/pnp102.jpg'| relative_url}} )


1. 이미지의 표시된 부분만 해당 정보를 입력한다. 나머지는 그냥둠
  ![]({{'/assets/img/pnp104.jpg'| relative_url}} )

1. 3 단계에서 primary 선택시 아래와 같은 화면이 뜨면 실행을 누르면 된다.
  ![]({{'/assets/img/pnp105.jpg'| relative_url}} )


1. sql 미리보기 클릭
  ![]({{'/assets/img/pnp107.jpg'| relative_url}} )


1. 설정값 확인후 저장클릭
  ![]({{'/assets/img/pnp106.jpg'| relative_url}} )


1. 설정값 확인후 저장클릭
  ![]({{'/assets/img/pnp108.jpg'| relative_url}} )

---

## 02 서버만들기

| Structure of a server

```
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
### 02-1 index.php

1. xmapp/htdocs/board 생성
  ![]({{'/assets/img/php109.jpg'| relative_url}} )
1. board/index.php 생성 후 코드작성
  + 글쓰기 링크 클릭시 write.php 문서로 이동
```php
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>망고네 자유 게시판</title>
</head>

<body>
  <h1>자유 게시판</h1>
  <h2>글 목록</h2>

  <hr>
  <p><a href="write.php">글쓰기</a></p>
  <hr>
</body>

</html>
```
2. 작성후 localehost/board 에서 확인 
  ![]({{'/assets/img/php110.jpg'| relative_url}} )

---

### 02-2 write.php

1. board/write.php 생성

1. 글작성을 하는 페이지이다.
  form 태그와 input 의 속성들이 실제 동작하는것을 확인하면서 코딩한다.
  `form action ="전송할 파일,폴더의 주소"`
  `input name ="db field name"`

```php

<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>글쓰기</title>
</head>

<body>
  <h1>글쓰기</h1>
  <!-- action=전송할 주소  -->
  <form action="insert.php" method="post">
    <p>
      <label for="name">작성자:</label>
      <!-- name=테이블의 필드명 -->
      <input type="text" id="name" name="name">
    </p>
    <p>
      <label for="message">메시지:</label>
      <textarea name="message" id="message" cols="30" rows="10"></textarea>
    </p>
     <!-- submit 버튼을 클릭하면 form 의 액션 값의 주소로 데이터가 전송된다 -->
    <input type="submit" value="글쓰기">
  </form>

</body>

</html>

```

2. index.php 에서 글쓰기 클릭시 write.php로 이동하는지 확인한다

---

### 02-4 delete.php

1. board/delete.php 생성












