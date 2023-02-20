---
title: 15-ParseJson
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

🔗[완성코드]({{'/assets/img/14.zip'| relative_url}} ){: .anc}

🔗[fopen-php-offical]({{'https://www.php.net/manual/en/function.fopen.php'| relative_url}} ){: .anc}
🔗[fread-php-offical]({{'https://www.php.net/manual/en/function.fread.php'| relative_url}} ){: .anc}
🔗[fread-php-tutorial]({{'https://www.w3schools.com/php/func_filesystem_fread.asp'| relative_url}} ){: .anc}

---

{: .note }

> 파일을 생성하고 불러와서 원하는 부분만 웹페이지에 출력하기
> => data 파일을 json으로 생성하고 php 에서 parse 해보자

# 01-index.php

1. 함수호출

index.php
{: .label .label-purple }

```php
...
$data = get_data();
...
```

1. 함수선언

functions.php
{: .label .label-purple }

```php
<?php
...
function get_data(){

}

```

---

{: .mb-10}

# 02-app

{: .note }

> 설정파일을 관리할 config.php 생성
> require 파일을 모아놓을 app.php 생성

1. app/config.php 생성
2. index.php에 config require 한다

index.php
{: .label .label-purple }

```php
<?php
...
  require('app/config.php');
...
?>
```

1. index.php의 require 구문은 다른 파일에서도 반복 사용하므로 하나의 파일에서 관리하는 것이 효율적이다.
2. `app/app.php`를 만들고 해당 파일에서 관리하도록 한다.
3. app/app.php 생성
4. 코드 작성

app.php
{: .label .label-purple }

```php
require('app/functions.php');
require('app/config.php');
```

1. index.php 의 require 수정

index.php
{: .label .label-purple }

```php
require('app/app.php');
#require('app/functions.php');
#require('app/config.php');
```

---

{: .mb-10}

# 03-config.php

1. 상수 config 를 생성하고 연관배열로 사용할 값을 할당한다.

```php
const CONFIG = [
  'data_file' => 'data.json',
  'users' => [
      'admin@admin.com' => '1234'
  ]
];

```

{: .important }

> `const CONFIG` 는 상수라는 의미로 대문자로 작성하였다
> CONFIG 는 배열이나 연관배열로 index 번호 대신 키로 값을 구분한다

---

{: .mb-10}

# 04-functions.php

{: .note }

> get_data 함수에 연관배열 CONFIG로 값을 전달하는 로직을 작성한다.
> 이때 값의 형태를 json 파일로 전달할 것 이므로 아래의 함수를 참조한다.

## php로 파일다루기 함수

### fopen() 파일을 여는 함수

- 파일을 읽거나 쓰기 위해서는 파일을 먼저 열어야 한다.
  🔗[link]({{'https://www.php.net/manual/en/function.fopen.php'| relative_url}} ){: .anc}

`$fp = fopen("파일경로", '모드/옵션');`

#### 주요모드정리

| 모드 | 권한                          | 내용                                          |
| :--- | :---------------------------- | :-------------------------------------------- |
| r    | 파일을 읽기 전용으로 열기     | 쓰기 불가능                                   |
| w    | 파일을 쓰기 전용으로 열기     | 기존 파일이 있을 때 내용 지우고 작성          |
| w+   | 파일을 읽고 쓸 수 있도록 열기 | 기존 파일이 있을 때 덮어쓰고 없으면 새로 생성 |
| a    | 파일을 쓰기 전용으로 열기     | 기존 파일이 있을 때 뒤에 덧붙임               |
| r+   | 파일을 읽고 쓸 수 있도록 열기 | 기존 파일이 있을 때 내용 지우고 작성          |
| a+   | 파일을 읽고 쓸 수 있도록 열기 | 기존 파일이 있을 때 뒤에 덧붙임               |

### fwrite() 파일을 여는 함수

- 파일에 내용을 작성하는 함수
  `$fp = fopen("파일경로", 'w');`
  `$fw = fwrite($fp, '파일에 쓸 내용');`

### fread() 파일을 읽는 함수

- 열린 파일을 읽는 함수
  `$fp = fopen("파일경로", 'r');`
  `$fr = fread($fp, '불러올영량');`

### fclose() 파일을 여는 함수

- 사용이 모두 끝난 파일닫기
  `fclose($fp);`

## get_data 함수작성

functions.php
{: .label .label-purple }

```php
...
get_data(){
//1
  $fname = CONFIG['data_file'];
//2
  if (!file_exists($fname)) {
//3
    $handle = fopen("$fname", "w+");
//4
    fclose($handle);
  }
}
...
```

<details markdown='block'>
  <summary>
    <span class='text-red-200'>📢줄여쓰기</span>
  </summary>
```
 file_put_contents($fname,'');
```
</details>

1. 변수 `$fname` 에 상수 CONFIG 의 data_file 키의 값을 할당한다.
2. ` file_exists("경로 및 파일이름")`서버에 파일이 있는지 확인하여 bool 값 반환
3. `$fname`에 값이 없을 경우 즉 데이터 파일이 없 을경우 fopen 함수의 w+ 옵션을 사용(있으면 덮어씌우고 없으면 생성) 하여 파일을 열고 `$handle ` 변수에 저장.
4. 읽고 난후 파일을 닫는다
   {: .box .bg-white-100}

functions.php
{: .label .label-purple }

```php
...
get_data(){
  $fname = CONFIG['data_file'];
  //1
  $json = '';
  if (!file_exists($fname)) {
    $handle = fopen("$fname", "w+");
    fclose($handle);
  } else{
  //2
  $handle = fopen("$fname", "r");
  //3
  $json = fread($handle, filesize($filename));
  }
  
//4
  return $json;
}
...
```

<details markdown='block'>
  <summary>
    <span class='text-red-200'>📢줄여쓰기</span>
  </summary>
```
 $json = file_get_contents($fname);
```
</details>
1. `$json`변수에 빈 문자열 할당
2. 파일이 있을경우 else 문으로 받는다 <br>
  파일이 있을 경우에는 내용을 읽기만 한다 
3. $fname 의 파일을 읽기전용으로 열어서 $handle 에 저장
4. fread 함수로 $handle 의 파일을 읽는다 filesize($fname) 의 사이즈 🔗[예제참조]({{'https://www.php.net/manual/en/function.fread.php'| relative_url}} ){: .anc}
{: .box .bg-white-100}

실행
index.php를 실행하면 data.json 파일이 생성된다.
![]({{'/assets/img/php151.jpg'| relative_url}} )



---
{: .mb-10}
 
# 05-data.json

🔗[json-MDN]({{'https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/JSON'| relative_url}} ){: .anc}

```json
[
    {
        "term" :"html",
        "desc" : "웹페이지의 내용을 전달한다."
    },
    {
        "term" :"css",
        "desc" : "웹페이지의 모양을 담당한다."
    },
    {
        "term" :"javascript",
        "desc" : "웹페이지의 동적요소를 담당한다."
    }

]
```


---
{: .mb-10}
 
# 06-view

{: .note }
>
> 작성한 json 파일을 view 에 넣어보자
> 최종으로 title에 표시해야 할 것들과 body에 표시해야 할것을 정리한다


index.php
{: .label .label-purple }

```php
...
view('index', $data);
```

functions.php
{: .label .label-purple }

```php
...
function view($name, $data)
{
    global $title;
    require('view/layout_view.php');
}
...
```

index_view.php
{: .label .label-purple }

```php
<div class="container">
  <header>
    <h1><?= $title; ?></h1>
  </header>
  <main>
    <h2><?= $data; ?></h2>
  </main>
</div>
```

layout_view.php
{: .label .label-purple }

```php
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $title ?></title>
</head>
<body>
<?php require($name."_view.php"); ?>
</body>
</html>
```

실행
![]({{'/assets/img/php155.jpg'| relative_url}} )