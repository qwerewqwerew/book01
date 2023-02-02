---
title: 06-BXslider
date: 2023-01-07
parent: jQuery
layout: post
---

---

## 01 BXslider

[BXslider 공식문서](https://bxslider.com/)


---

>### 가장 유명한 jQuery 캐로셀 플러그인
>
> 
{: .block-tip }

[파일다운로드](https://www.notion.so/mango2/03-JQ-73fdd10ad5ba40cd9c429f0c3d842126#923831fded0a414f9c8360c11a04cea7)


### 기본슬라이드

<script async src="//jsfiddle.net/qwerew0/t5jhvgsz/3/embed/js,html,css,result/dark/"></script>

### 좌우컨트롤

<script async src="//jsfiddle.net/qwerew0/t5jhvgsz/5/embed/js,html,css,result/dark/"></script>


### 멀티플

<script async src="//jsfiddle.net/qwerew0/t5jhvgsz/6/embed/js,html,css,result/dark/"></script>

### 옵션활용

<script async src="//jsfiddle.net/qwerew0/t5jhvgsz/7/embed/js,html,css,result/dark/"></script>

### 애니메이션 활용
<script async src="//jsfiddle.net/qwerew0/t5jhvgsz/9/embed/js,html,css,result/dark/"></script>

### 동영상

```html

<div class="slideWrap">
	<div class="video_slides">
		<div><video src="video/video.mp4"></video></div>
		<div><video src="video/video.mp4"></video></div>
		<div><video src="video/video.mp4"></video></div>
	</div>
</div>

```

```css

.slideWrap{
    max-width: 960px;
    width:90%;
    margin:2em auto;
    position: relative;
}

```

```javascript

$('.video_slides').bxSlider({
	video: true,
	onSliderLoad:function(currentIndex){
		$('.video_slides div').eq(currentIndex + 1).find('video').get(0).play();
	},
	onSlideAfter:function($slideElement){
		$slideElement.siblings().find('video').get(0).pause();
		$slideElement.find('video').get(0).play();
	}
});

```