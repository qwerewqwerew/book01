---
layout: post
title: 01-설치
date: 2023-01-06
parent: PHP
---

1. TOC
{:toc}
--

# 00.php 란

> PHP란?
> 서버사이드 언어 중 하나로(Java, PHP, Ruby, Python, Node.js ...)로 무료임
> php를 설치하면 회원가입, 로그인, 내용 검색, 관리자로 로그인해서 콘텐츠를 등록할 수 있음
> php를 설치하려면 php와 아파치 서버, 데이터베이스가 설치되어 있어야 함.
>
> {: .block-tip }

- apm setup
- apache : 웹서버 프로그램
- php : 서버사이드 언어
- mysql : 데이터베이스
- phpmadmin : 데이터베이스를 편리하게 운영할수 있는 프로그램
- bitnami wamp⇒ 위의 프로그램들을 통합 설치해주는 통합개발환경설정관리툴
- bitnami 의 서비스가 종료되어 xmapp로 진행함

---

# 01.설치

1. xmapp 설치 - [https://www.apachefriends.org/download.html](https://www.apachefriends.org/download.html)
xmapp 포터블 링크 [googleDrive](https://drive.google.com/file/d/1LVF1XA1P5hV9Y7zPJYDiJA7UWhcCL-nI/view?usp=share_link)
xmapp 포터블 링크 [sourceforge](https://sourceforge.net/projects/xampp/files/)

2. **파일 압축 푼 후 setup_xampp.bat 파일 실행**
2. **파일 압축 푼 후 mysql_start.bat 파일 실행**
2. **파일 압축 푼 후 apache_start.bat 파일 실행**

2. **본 메뉴얼은 포터블과 설치판이 뒤섞여 있으므로 수업과 함께 진행해야 함**

2. phpMyadmin 만 체크후 → next
   <img src='{{ "/assets/img/Untitled.png" | relative_url }}'>
   <img src='{{ "/assets/img/php1.png" | relative_url }}'>

3. 123456 비밀번호는 6자리 적어놓는다<br>
   이후에 데이터베이스 관련한 수업할 때 이 비번을 이용하므로 꼭 기억해놓는다
   <img src='{{ "/assets/img/php2.png" | relative_url }}'>

4. 중간에 방화벽으로 차단이 나올경우 모두 엑세스 허용해준다.
   <img src='{{ "/assets/img/php3.png" | relative_url }}'>
   <img src='{{ "/assets/img/php4.png" | relative_url }}'>

5. 설치완료

  <img src='{{ "/assets/img/php5.png" | relative_url }}'>

  [localhost](http://localhost) 를 입력해도 접속할수 있다
  <img src='{{ "/assets/img/2023-01-07_206.jpg" | relative_url }}'>

---

## 01-01.설치확인

1. 01-5 단계에서 브라우저에서 확인한 페이지가 있는 루트 폴더를 찾아보자
   <br>`**C:\xampp\htdocs\dashboard\**`
   <img src='{{ "/assets/img/2023-01-07_207.jpg" | relative_url }}'>

1. dashboard의 index 파일을 vscode에서 열어보자
1. index.html 의 내용을 변경하면 브라우저화면에 출력되는 내용도 변경된다
1. php.info 파일을 실행하여 php 정보를 확인하자
    <img src='{{ "/assets/img/2023-01-07_208.jpg" | relative_url }}'>

1. xmapp control panel을 실행하여 아파치 서버와 mySQL을 실행해보자
   <img src='{{ "/assets/img/2023-01-07_212.jpg" | relative_url }}'>
1. mySQL 실행시 phpmyAdmin 화면에 로그인 창이 뜨면 설치시 설정한 root 계정의 비밀번호로 로그인한다.
   <img src='{{ "/assets/img/php15.png" | relative_url }}' style="width:500px">
1. 로그인완료
   <img src='{{ "/assets/img/php16.png" | relative_url }}'>
1. phpmyAdmin 은 database 를 쉽게 다룰수 있게 도와주는 gui 툴이다 (git의 sourcetree 와 유사)

---

## 01-02. 환경변수설정

1. 윈도우 시작버튼 우클릭
  <img src='{{"/assets/img/php17.png" | relative_url }}' style="width:100px">

2. 시스템 클릭
   <img src='{{ "/assets/img/php18.png"| relative_url }}' style="width:300px">

3. 고급시스템설정 클릭
   <img src='{{ "/assets/img/php19.png" | relative_url }}' style="width:400px">

4. 환경변수 -> 새로만들기 클릭
   <img src='{{ "/assets/img/php20.png" | relative_url }}' style="width:800px">

4. 변수명에 PHP를 입력한다.
   - 그후 디렉터리 찾아보기를 클릭한다.
   <img src='{{ "/assets/img/php21.png" | relative_url }}'>
5. 그후 탐색기가 열리면 `php.exe` 가 설치된 경로를 찾아 이동한다.
   - 그후 설치된 폴더를 클릭한다. `php`는 `xmapp` 가 설치된 폴더 내에 깔려있다.
   <img src='{{ "/assets/img/php22.png" | relative_url }}'>

2. 확인
<img src='{{ "/assets/img/php23.png" | relative_url }}'>

1. 확인

<img src='{{ "/assets/img/php24.png" | relative_url }}'>

---

## 01-03. VSCode Extention설치

1. php intellisense(코끼리표) - 문법교정 기능제공
2. php debug - 오류수정 기능 제공
   <img src='{{ "/assets/img/php26.png" | relative_url }}'>

---

## 01-04. php_xdebug 환경세팅
1. php debug Extention 의 intro 화면으로 이동하여 설명서를 본다
   <img src='{{ "/assets/img/php27.png"| relative_url }}'>
1. `Extention의 링크로` 이동_[Xdebug installation wizard](https://xdebug.org/wizard.php)
   <img src='{{ "/assets/img/php30.png"| relative_url }}'>


2. [02-4 단계](#02설치확인) 에서 진행한 `phpinfo` 문서 실행
   <img src='{{ "/assets/img/php29.png" | relative_url }}'>
2. 05-2 단계의 링크를 클릭하여 창을 연다
<img src='{{ "/assets/img/php31.png" | relative_url }}'>
2. 새창이 열리면 phpinfo의 모든 내용을 복사 붙여넣기 한다.
   <img src='{{ "/assets/img/php32.png" | relative_url }}'>
2. 새창이 열리면 php_xdebug의 설명에 맞게 환경을 세팅한다.
   <img src='{{ "/assets/img/2023-01-07_210.jpg" | relative_url }}'>

   - php_xdebug-3.2.0-8.1-vs16-x86_64.dll 다운로드
   <img src='{{ "/assets/img/2023-01-07_213.jpg" | relative_url }}'>
   - 다운로드한 파일을 C:\xampp\php\ext로 이동하고 이름을 다음으로 바꿉니다.php_xdebug.dll
   <img src='{{ "/assets/img/2023-01-07_214.jpg" | relative_url }}'>
   - 다 C:\xampp\php\php.ini 파일을 열고 `zend_extension = xdebug` 추가 하십시오.
   <img src='{{ "/assets/img/2023-01-07_211.jpg" | relative_url }}'>
   - 아파치 웹서버 재시작
   <img src='{{ "/assets/img/2023-01-07_212.jpg" | relative_url }}'>

---

## 01-05. VSCode 설정

   1. VSCODE 실행후 php 문서를 열면 아래와 같은 오류창 보임
   <img src='{{"/assets/img/php33.jpg"  | relative_url }}'>

   1. `ctrl + , ` -> preference 검색

   <img src='{{"/assets/img/php34.jpg"  | relative_url }}'>

   1. php 검색 -> Extensions ->  Edit in settings.json 선택
   
   <img src='{{"/assets/img/php35.jpg"  | relative_url }}'>

   1. settings.json 파일에 아래의 코드를 추가 후 저장
      - `"php.validate.executablePath"`: "php.exe 가 설치된 경로를 작성",

```php
	"php.validate.enable": false,
	"php.validate.executablePath": "C:\xampp\php\php.exe",
```

   ---
