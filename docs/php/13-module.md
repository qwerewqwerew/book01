---
title: 13-module
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

🔗[완성코드]({{'/assets/img/13.zip'| relative_url}} ){: .anc}


---

# 모듈화하기
{: .no_toc}

{: .note }
> 프로그램을 제작시 생산성과 최적화, 관리에 용이하게 모듈(기능) 단위로 분할하는 것 <br/>
> 관련있는 코드나 재사용되는 함수를 분리하여 작은 단위로 관리하면 코드의 가독성이나 재활용성이 높아진다. <br/>
> 로직,뷰,레이아웃 부분을 분리하여 작성해보자 <br/>

```
┌─index.php─┬─/app─┬─app.php
│           │      ├─config.php
│           │      └─functions.php
│           └──/view─┬─index_view.php
└─data.json          └─layout_view.php
```


---
{: .mb-10}
 
# 01-index.php

1. 13/index.php를 생성


index.php
{: .label .label-purple }

```php
<?php
  $title = '안녕하세요';
?>
```

---

{: .mb-10}
 
# 02-view

{: .note }
> view 폴더에는 화면에 보이는 내용만 넣는다.

1. view 폴더 생성
2. view/index_view.php 생성

index_view.php
{: .label .label-purple }

```html
<div class="container">
  <header>
      <h1><?= $title; ?></h1>
  </header>
</div>
```


---
{: .mb-10}
 
# 03-functions.php

{: .note }
> 기능은 app 폴더에서 관리한다.

1. app/functions.php 생성


functions.php
{: .label .label-purple }

```php
<?php
function view($name){
    //$title 은 index.php의 지역변수 이므로 functions에서 전역변수로 지정한다.    
    global $title;
}

?>
```

---
{: .mb-10}
 
# 04-index.php

1. functions.php를 인클루드 해야 한다.
2. view함수를 실행하면서 인자를 전달한다(현재 페이지의 이름)

index.php
{: .label .label-purple }

```php
<?php
  require('app/functions.php');
  $title = '안녕하세요';
  view('index');  
?>
```
---
{: .mb-10}
 
# 05-functions.php
1. view 함수를 작성한다.


functions.php
{: .label .label-purple }

```php
<?php
function view($name){
    global $title;
    require('view/'.$name.'_view.php');
}
?>
```

설명
![]({{'/assets/img/php145.jpg'| relative_url}} )

실행

![]({{'/assets/img/php146.jpg'| relative_url}} )

---

## $title을 매개변수로 활용
{: .no_toc}

{: .note }
>
>
>
functions.php
{: .label .label-purple }

```php
<?php
function view($name,$title){
    #global $title;
    require('view/'.$name.'_view.php');
}

```
+ `$title`을 view 함수에서 매개변수로 받는다
+ view 함수는 `$name`_view 문서가 삽입되어 있으므로 index_view.php 에 $title의 값이 전달된다.
{: .box .bg-white-100}


index.php 
{: .label .label-purple }

```php
<?php
  ...
  view('index',$title);  
?>
```

+ `index.php`의 view 함수 호출부에 `$title`을 두번째 인자로 전달한다.
{: .box .bg-white-100}


index_view.php
{: .label .label-purple }

```php
<div class="container">
  <header>
    <h1><?= $title; ?></h1>
  </header>
  <main>
    <h2><?= $title; ?></h2>
  </main>
</div>
```

+ 이렇게 전달받은 title 변수는 index_view.php에서 다른 요소에도 사용할수 있다.
{: .box .bg-white-100}

실행

![]({{'/assets/img/php148.jpg'| relative_url}} )

---
{: .mb-10}
 
# 06-layout_view.php

1. view/layout_view.php 생성


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


---
{: .mb-10}
 
# 07-functions.php


functions.php
{: .label .label-purple }

```php
<?php
function view($name,$title){
    #global $title;
    #require('view/'.$name.'_view.php');
    require('view/layout_view.php');
}

```

실행
![]({{'/assets/img/php149.jpg'| relative_url}} )

![]({{'/assets/img/php150.jpg'| relative_url}} )

+ funcitons.php 에서layout_view.php를 호출
+ index.php의 head 영역이 완성되었다
{: .box .bg-white-100}