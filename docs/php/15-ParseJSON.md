---
title: 14-ParseJson
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
2. `app/app.php`를 만들고 해당 파일에서 관리하도록  한다.
3. app/app.php  생성
4. 코드 작성


app.php
{: .label .label-purple }

```php

```