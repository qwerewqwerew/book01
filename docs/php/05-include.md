---
layout: default
title: 05-include
parent: PHP
tags: [ include ,requried ]
---
 

1. TOC
{:toc}

---

>[🔗php 문서](https://www.php.net/manual/en/function.include.php){: .anc}

---
## 01 include

{: .note-title }
>공통으로 쓰는 파일을 외부에 불러와서 쓸수 있다.<br>
>html 문서의 header, footer 같은 반복되는 영역을 외부에 저장 해 놓고<br>
>불러와서 사용하는 것
>{: .fs-3 .fw-400}

### 01-1 문서분리

1. `functions.php` -> 다른이름으로 저장 -> `home.php`
2. 표시된 부분을 반복영역으로 간주하고 진행한다
  + ![]({{'/assets/img/php61.jpg'| relative_url}} )
3. 표시된 부분의 코드를 잘라낸다
  + ![]({{'/assets/img/php62.jpg'| relative_url}} )
4. vscode 에 `inc` 폴더를 생성하고 하위에 `header.php` 를 만든다.
  + ![]({{'/assets/img/php63.jpg'| relative_url}} )
  + ![]({{'/assets/img/php64.jpg'| relative_url}} )
5. 잘라낸 코드를 `header.php` 에 붙여넣는다.
  + ![]({{'/assets/img/php65.jpg'| relative_url}} )
  + 편집완료스샷
  + ![]({{'/assets/img/php66.jpg'| relative_url}} )


### 01-2 변수설정
1. `header.php` 수정
  + 삽입한 페이지의 제목을 출력할수 있도록 title을 변수처리

```php
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $title; ?></title>
</head>

<body>
  <h1><?= $title; ?></h1>
```

### 01-3 include하기

1. `home.php` 수정


