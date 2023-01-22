---
parent: Javascript

title: onMediaQueryChange
date: 2023-01-06
layout: post
---

1. TOC
{:toc}
--
## 01 미디어쿼리가 변할때 실행하는 함수

`onMediaQueryChange`

```html
<!DOCTYPE html>
<html lang="ko">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>샘플</title>
	</head>
	<body>
		<main class="centering">
			<div class="rectangle"></div>
		</main>
	</body>
</html>
```

```
.rectangle {
  background-image: linear-gradient(-135deg, #00aaff, #5500ff);
}

.rectangle.big-size {
  background-image: linear-gradient(-135deg, red, #ff00a2);
}

.rectangle {
  width: 100%;
  height: calc(100% - 50px);
  transition: 300ms ease-in-out all;
}
```

```
const rectAngle = document.querySelector('.rectangle');

// 미디어쿼리 정보
const mediaQueryList = matchMedia('(min-width: 600px)');

// 미디어쿼리 변화 시점에 따라 처리
mediaQueryList.addListener(onMediaQueryChange);

/**
 * 미디어쿼리 변화 시점에 따라 실행되는 함수
 */
function onMediaQueryChange(mediaQueryList) {
  if (mediaQueryList.matches === true) {
    rectAngle.classList.add('big-size');
    console.log('윈도우 창의 크기가 600px 이상입니다.');
  } else {
    rectAngle.classList.remove('big-size');
    console.log('윈도우 창의 크기가 600px 미만입니다.');
  }
}

// 화면 표시 시점에 onMediaQueryChange( ) 1회 실행
onMediaQueryChange(mediaQueryList);
```

<!--\c07_event\131\ -->
<!--\c07_event\118\ -->
<!--\c07_event\119\ -->
<!--\c06_resize\119\ -->