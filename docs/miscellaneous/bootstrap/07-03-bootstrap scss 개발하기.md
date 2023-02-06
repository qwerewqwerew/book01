---
title: 03-bootstrap scss 개발하기
layout: default
parent: 07-Bootstrap
grand_parent: Miscellaneous
tags: [bootstrap,scss]
---


 1. TOC
{:toc}

---

## 01 nodeJS 설치
[NodeJS 16 버전 설치](https://nodejs.org/dist/latest-v16.x/)
  **EXPO 개발시 v18 충돌남**

## 01 bootstrap 인스톨

1. bootstrap 폴더 생성

1. `npm init -y`

- pacakage.json 파일생성

1. `npm i bootstrap`
1. `npm i bootstrap-icons`

- 위의 과정 진행후 node_modules 폴더를 열면 bootstrap 폴더가 보인다

1. index.html 파일생성
1. scss 폴더 생성
1. scss / main.scss 파일생성
1. livescsscompiler 세팅

- ![]({{'/assets/img/scss1.jpg'| relative_url}} )
- ![]({{'/assets/img/scss2.jpg'| relative_url}} )
- ![]({{'/assets/img/scss3.jpg'| relative_url}} )

1. scss 환경설정

```json
"liveSassCompile.settings.formats": [
  {
    "format": "expanded",
    "extensionName": ".css",
    "savePath": "~../css",
    "savePathReplacementPairs": null
  },
  {
    "format": "compressed",
    "extensionName": ".min.css",
    "savePath": "~../css",
    "savePathReplacementPairs": null
  }
],
```

1. index.html 작성

```html
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>bootstrap</title>
	</head>
	<body></body>
</html>
```

1. main.scss 작성

```scss
@import "../node_modules/bootstrap/scss/bootstrap.scss";
```

1. vscode 하단의 watch scss 를 클릭하면 프로젝트 폴더에 css 폴더와 함께 컴파일된 css 생성

---

## 02

1. 모듈링크

```html
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>bootstrap</title>
		<link rel="stylesheet" href="css/main.min.css" />
	</head>
	<body class="bg-primary">
		<script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>
	</body>
</html>
```

2. 실행화면 배경색이 primary-color 인지 확인

3. 버튼추가

   `<button type="button" class="btn-light btn">전송</button>`

   `<button type="button" class="btn-outline-light btn">전송</button>`


## 03

1. main.scss
1. 변수를 변경하여 수정해본다

```scss
$primary:pink;
$light:gray;
@import "../node_modules/bootstrap/scss/bootstrap.scss";

```

```html

<body>
    <button type="button" class="btn-light btn">전송</button>
    <button type="button" class="btn-outline-light btn">전송</button>
    <button type="button" class="btn-primary btn">전송</button>
    <button type="button" class="btn-outline-primary btn">전송</button>

  <script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>
</body>


```

## 04

1. 아이콘 넣기

```html
    <img src="node_modules/bootstrap-icons/icons/alarm.svg" alt="">
    <img src="node_modules/bootstrap-icons/icons/phone-fill.svg" alt="">
```
