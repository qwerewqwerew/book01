---
layout: post
title:  02-Dooosan-스크립트
date:   2023-01-05
parent: Projects
---

[슬라이드 설명 이미지](https://app.diagrams.net/#G1uRsu0G43BE0Q2dHJKjwWZjEfb0O0g-iW)

1. 객체와 변수 선언
```javascript
var current = 0; //current
var prev = null; //prev
var next = null; //next
let mainInterval; //setIntervalID
var speed = 4000; //반복시간
var pause_css;
var slides = $(".slide_cover ul li");
var obj = {
	"btn": $(".slide_btn ul li"),
	"btn-ani": $(".color"),	
	"left": $(".cursor_left"),
	"right":  $(".cursor_right"),
	"wbox": $(".white_box"),
	"cbox": $(".box"),
	"logo": $(".img_logo"),
	"text": $(".img_text"),
	"reset": $(".reset"),
	"pause": $(".pause_btn"),
	"play": $(".play_btn"),
	}
```

2. 슬라이드 함수 작성

```javascript

/**
 * 시간마다 인덱스 계산, slide함수 호출함
 * * */
timer();
function timer() {
	mainInterval = setInterval(function () {
		current++;
		prev = current - 1;
		if (current == 3) {
			current = 0;
		}
		slide();
	}, speed);
}
function remove(x) {
	x.removeClass("on");
}
function add(x) {
	x.addClass("on");
}
function slide() {
	obj.btn.off("click");
	obj.left.off("click");
	obj.right.off("click");
	obj.reset.off("click", reset);

	clearInterval(mainInterval);

	slides
		.find(obj.wbox)
		.css("left", "-100%")
		.stop()
		.animate({ left: "0%" }, 1000, function () {
			obj.wbox.stop().animate({ left: "100%" }, 1000);

			add(slides.eq(current));	//
			remove(slides.eq(prev));
			remove(obj.pager);
			remove(obj.logo);
			remove(obj.text);
			remove(obj.cbox);

			add(obj.btn.eq(current).find(obj.pager));
			add(slides.eq(current).find(obj.logo));
			add(slides.eq(current).find(obj.text));
			add(slides.eq(current).find(obj.cbox));

			remove(slides.find("a img"));
			console.log(slides.eq(current));
			add(slides.eq(current).find("a img"));
		});

	slides.eq(prev).animate({ left: 0 }, 2000, function () {
		setTimeout(function () {
			obj.btn.on("click", click_slide);
			obj.left.on("click", left_click);
			obj.right.on("click", right_click);
			pause_css = $(".pause_css").css("display");
			if (pause_css == "none") {
				clearInterval(mainInterval);
				remove(obj.pager);
			} else {
				add(obj.btn.eq(current).find(obj.pager));
				timer();
			}
		}, 1000);
	});
	next = current;
}

/**
 * click_slide
 * pager 함수
 *
 * **/
function click_slide() {
	current = $(this).index();
	if (current == next) return;
	prev = next;
	slide();
	remove(obj.pager);
}

/**
 * left_click
 * left 커서함수
 *
 * **/
function left_click() {
	current--;
	if (current == -1) current = 2;
	if (current == next) return;
	prev = next;
	slide();
	remove(obj.pager);
}

/**
 * right_click
 * right 커서함수
 *
 * ***/
function right_click() {
	current++;
	if (current == 3) current = 0;
	if (current == next) return;
	prev = next;
	slide();
	remove(obj.pager);
}

/**
 * reset
 * play,stop
 *
 * ***/
/* 비동기 함수 */
function reset() {
	pause_css = obj.pause.css("display");
	if (pause_css == "none") {
		clearInterval(mainInterval);
		remove(obj.pager);
	} else {
		timer();
		add(obj.btn.eq(current).find(obj.pager));
	}
}

/**이벤트 핸들러 */
obj.reset.click(function () {
	reset();
});
obj.pause.click(function () {
	obj.pause.css("display", "none");
	obj.play.css("display", "block");
});
obj.play.click(function () {
	obj.pause.css("display", "block");
	obj.play.css("display", "none");
});

obj.btn.on("click", click_slide);
obj.left.on("click", left_click);
obj.right.on("click", right_click);

$(".main_cursor").mousemove(function (e) {
	var x = e.clientX;
	var y = e.clientY - 80;
	$(".cursor").css({
		left: x,
		top: y,
	});
});

```

