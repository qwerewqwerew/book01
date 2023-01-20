---
layout: post
title:  01-Dooosan-시작
date:   2023-01-06
parent: Projects
---

---
## 프로젝트 - 기업사이트

[두산클론](https://github.com/qwerewqwerew/repository)

### 230113(금) 수업

#### html
```html
<!DOCTYPE html>
<html lang="ko">

<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/media.css">
  <style>
    #layer {
      display: block;
    }

    #layer {
      display: none;
    }
  </style>
  <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
  <script src="js/script.js"></script>
</head>

<body>

  <header id="header">
    <div class="header_cover cf">
      <h1 class="logo fl">
        <a href="#"><img src="./images/logo.png" alt="두산그룹 로고" /></a>
      </h1>
      <a href="#" class="mo"><span class="material-symbols-outlined"> menu </span></a>
      <ul class="nav fl">
        <li><a href="#">회사소개 <div class="line"></div></a></li>
        <li><a href="#">사회책임경영 <div class="line"></div></a></li>
        <li><a href="#">투자정보 <div class="line"></div></a></li>
        <li><a href="#">미디어센터 <div class="line"></div></a></li>
        <li><a href="#">채용 <div class="line"></div></a></li>
      </ul>
      <div class="mo_menu">
        <ul>
          <li><a href="#">회사소개 <div class="line"></div></a>
            <ul>
              <li><a href="#">두산스토리</a></li>
              <li><a href="#">두산의 활약상</a></li>
              <li><a href="#">목표와 핵심가치</a></li>
              <li><a href="#">경영전략</a></li>
              <li><a href="#">리더쉽</a></li>
              <li><a href="#">기술과 혁신</a></li>
              <li><a href="#">계열사</a></li>
            </ul>
          </li><!-- //dep1 -->
          <li><a href="#">사회책임경영 <div class="line"></div></a>
            <ul>
              <li><a href="#">개요</a></li>
              <li><a href="#">윤리경영</a></li>
              <li><a href="#">상생협력</a></li>
              <li><a href="#">EHS</a></li>
              <li><a href="#">사회공헌</a></li>
            </ul>
          </li><!-- //dep1 -->
          <li><a href="#">투자정보 <div class="line"></div></a>
            <ul>
              <li><a href="#">IR자료</a></li>
              <li><a href="#">거버넌스</a></li>
              <li><a href="#">보고서</a></li>
              <li><a href="#">주가정보</a></li>
              <li><a href="#">공시</a></li>
              <li><a href="#">전자공고</a></li>
            </ul>
          </li><!-- //dep1 -->
          <li><a href="#">미디어센터 <div class="line"></div></a>
            <ul>
              <li><a href="#">두산뉴스룸</a></li>
              <li><a href="#">캠페인 &amp; PR영상</a></li>
              <li><a href="#">메뉴얼 브로슈어</a></li>
            </ul>
          </li><!-- //dep1 -->
          <li><a href="#">채용 <div class="line"></div></a>
            <ul>
              <li><a href="#">두산의 인재,두산인</a></li>
              <li><a href="#">커리어두산</a></li>
            </ul>
          </li><!-- //dep1 -->
        </ul>
      </div> <!-- //.mo_menu -->
      <div class="pc full_menu">
        <div class="full_cover">
          <ul>
            <li>
              <ul>
                <li><a href="#">두산스토리</a></li>
                <li><a href="#">두산의 활약상</a></li>
                <li><a href="#">목표와 핵심가치</a></li>
                <li><a href="#">경영전략</a></li>
                <li><a href="#">리더쉽</a></li>
                <li><a href="#">기술과 혁신</a></li>
                <li><a href="#">계열사</a></li>
              </ul>
            </li><!-- //dep1 -->
            <li>
              <ul>
                <li><a href="#">개요</a></li>
                <li><a href="#">윤리경영</a></li>
                <li><a href="#">상생협력</a></li>
                <li><a href="#">EHS</a></li>
                <li><a href="#">사회공헌</a></li>
              </ul>
            </li><!-- //dep1 -->
            <li>
              <ul>
                <li><a href="#">IR자료</a></li>
                <li><a href="#">거버넌스</a></li>
                <li><a href="#">보고서</a></li>
                <li><a href="#">주가정보</a></li>
                <li><a href="#">공시</a></li>
                <li><a href="#">전자공고</a></li>
              </ul>
            </li><!-- //dep1 -->
            <li>
              <ul>
                <li><a href="#">두산뉴스룸</a></li>
                <li><a href="#">캠페인 &amp; PR영상</a></li>
                <li><a href="#">메뉴얼 브로슈어</a></li>
              </ul>
            </li><!-- //dep1 -->
            <li>
              <ul>
                <li><a href="#">두산의 인재,두산인</a></li>
                <li><a href="#">커리어두산</a></li>
              </ul>
            </li><!-- //dep1 -->
          </ul>
        </div>
      </div>
      <ul class="gnb fr">
        <li><a href="#">한국어</a></li>
        <li>
          <a href="#"><img src="./images/ico_search.png" alt="" class="leave"><img src="./images/ico_search_on.png" alt="" class="hover"></a>
        </li>
        <li>
          <a href="#"><img src="./images/btn_gnb_right_menu.png" alt="" class="leave" /><img src="./images/btn_gnb_right_menu_ov.png" alt="" class="hover" /></a>
        </li>
      </ul>
    </div>
  </header>
  <section id="main_slide">
    <!-- .slide_cover>ul>li>a>img+p -->
    <div class="slide_cover">
      <ul>
        <!-- 한장의 슬라이드그룹 -->
        <li>
          <a href="#">
            <img src="./images/main1.jpg" alt="" class="pc"><img src="./images/main1_mo.jpg" alt="" class="mo">
            <h2 class="img_logo">두산은 지금<br>내일을 준비합니다</h2>
            <span class="box box1"></span>
            <p class="img_text">세계 곳곳에서 인류의 더 나은 삶을 위해 두산은 지금 미래를 준비합니다.</p>
            <span class="white_box"></span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/main2.jpg" alt="" class="pc"><img src="./images/main2_mo.jpg" alt="" class="mo">
            <h2 class="img_logo">두산은 지금<br>내일을 준비합니다</h2>
            <span class="box box2"></span>
            <p class="img_text">세계 곳곳에서 인류의 더 나은 삶을 위해 두산은 지금 미래를 준비합니다.</p>
            <span class="white_box"></span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/main3.jpg" alt="" class="pc"><img src="./images/main3_mo.jpg" alt="" class="mo">
            <h2 class="img_logo">두산은 지금<br>내일을 준비합니다</h2>
            <span class="box box3"></span>
            <p class="img_text">세계 곳곳에서 인류의 더 나은 삶을 위해 두산은 지금 미래를 준비합니다.</p>
            <span class="white_box"></span>
          </a>
        </li>
      </ul>
    </div><!-- //.slide_cover -->
    <div class="slide_btn">
      <ul>
        <li><a href="#"><span class="color on"></span></a></li>
        <li><a href="#"><span class="color"></span></a></li>
        <li><a href="#"><span class="color"></span></a></li>
      </ul>
      <div class="reset">
        <div class="pause_btn off"><img src="./images/ico_kv_pause.png" alt=""></div>
        <div class="start_btn on"><img src="./images/ico_kv_play.png" alt=""></div>
      </div>
    </div>
    <div class="main_cursor cf">
      <div class="cursor_left"></div>
      <div class="cursor_right"></div>
      <div class="cursor"></div>
    </div>
  </section>
  <!--  //#main_slide -->
  <section id="content">
  </section>
  <!-- //#content -->
  <section id="media_center"></section>
  <!-- //#media_center -->
  <section id="find"></section>
  <!--  //#find -->
  <footer id="footer"></footer>
</body>

</html>
```
#### css
```css
@charset "utf-8";
.cf:after {
	content: "";
	display: block;
	clear: both;
}
/* layout */
[class*="_cover"] {
	width: 100%;
	max-width: 1400px;
	margin: auto;
}
/* link 스타일 정의 */
a {
	font-size: 1.6rem;
}

/* layer popup */
#layer {
	position: fixed;
	width: 500px;
	height: 500px;
	background: #ccc;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.4);
	z-index: 999999999;
	font-size: 2.4em;
	padding: 3em;
	box-sizing: border-box;
	line-height: 2;
	top: 50px;
	left: 150px;
}
#layer button {
	position: absolute;
	cursor: pointer;
	padding: 10px 20px;
	right: 0;
	top: 0;
	background-color: #222;
	color: #fff;
}

/* #header */
#header {
	width: 100%;
	height: 90px;
	position: relative;
	font-size: 1.3rem;
	background: #fff;
}

#header .logo {
	width: 10%;
	height: 100%;
} /* 140px, 90px */
.logo a {
	display: block;
	width: 100%;
	height: 100%;
}
.logo a img {
	display: block;
	width: 80%;
	margin: auto;
	padding-top: 17px;
}

#header .nav {
	width: 50%;
	margin: 0 10%;
	display: flex;
}
.nav li {
	width: 20%;
	text-align: center;
	line-height: 90px;
}
.nav a {
	display: block;
	width: 100%;
	height: 100%;
	color: #000;
	font-weight: 700;
	position: relative;
}
.nav .line {
	width: 0%;
	height: 2px;
	background: #1634db;
	position: absolute;
	left: 0;
	bottom: 0;
	transition: width 0.8s;
}
.nav a:hover .line {
	width: 100%;
}

/* .mo_menu */
#header .mo {
	float: right;
	padding-right: 20px;
	display: none;
	line-height: 90px;
}
.mo span {
	font-size: 3rem;
}
.mo_menu {
	position: absolute;
	width: 100%;
	background-color: white;
	left: 0;
	top: 100%;
	z-index: 99999;
	display: none;
}
.mo_menu ul {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 50%;
	margin: auto;
}

/* .pc.full_menu */
#header .full_menu {
	position: absolute;
	left: 0;
	width: 100%;
	height: 450px;
	border-top: 1px solid #c1c1c1;
	box-sizing: border-box;
	background-color: #fff;
	top: 100%;
	z-index: 999999999; /* display: none; */
}
.full_menu .full_cover > ul {
	display: flex;
	width: 60%;
	height: 100%;
	margin-left: 20%;
}

.full_menu .full_cover > ul > li {
	width: 20%;
	max-width: 140px;
	height: 450px;
	border-left: 1px solid #c1c1c1;
	box-sizing: border-box;
}
.full_menu .full_cover > ul > li:last-child {
	border-right: 1px solid #c1c1c1;
}
.full_menu .full_cover > ul ul {
	width: 100%;
}
.full_menu .full_cover > ul ul li {
	width: 100%;
	line-height: 50px;
	text-align: center;
}
.full_menu .full_cover > ul ul li a {
	position: relative;
	color: #000;
}
.full_menu .full_cover > ul ul li a:after {
	content: "";
	position: absolute;
	background-color: #1634db;
	transition: all 0.5s;
	left: 0;
	width: 0;
	height: 1px;
	bottom: -5px;
}
.full_menu .full_cover > ul ul li a:hover:after {
	width: 100%;
}

/* gnb */
#header .gnb {
	width: 20%;
	display: flex;
}
.gnb li {
	font-size: 1.4rem;
	width: 100%;
}
.gnb li:nth-child(1) a {
	background: url(../images/ico_lang.png) no-repeat 0 50% /30%;
}
.gnb li a {
	display: block;
	width: 100%;
	height: 100%;
	line-height: 90px;
	text-align: center;
	color: #000;
}
.gnb li a img {
	width: 40px;
	vertical-align: middle;
}
.gnb li a img.leave {
	display: inline-block;
}
.gnb li a img.hover {
	display: none;
}
.gnb li a:hover img.leave {
	display: none;
}
.gnb li a:hover img.hover {
	display: inline-block;
	transform: scale(1.1);
}

/* #main_slide */
#main_slide {
	position: relative;
	width: 100%;
	height: 800px;
	overflow: hidden;
}
#main_slide > .slide_cover {
	position: relative;
	width: 90%;
	height: 100%;
	max-width: none;
}
#main_slide > .slide_cover ul {
	position: relative;
	width: 100%;
	height: 100%;
} /*90%*/
#main_slide > .slide_cover ul li {
	position: absolute;
	width: 100%;
	height: 100%;
	overflow: hidden;
}
#main_slide > .slide_cover ul li.on {
	z-index: 6;
}
#main_slide > .slide_cover ul li a {
	position: relative;
	display: block;
	width: 100%;
	height: 100%;
}
#main_slide > .slide_cover ul li a h2.img_logo {
	position: absolute;
	top: 15%;
	left: 10%;
	color: #fff;
	font-size: 6rem;
	width: 480px;
	word-break: keep-all;
	opacity: 0;
	transition: all 2s;
	letter-spacing: -2.5px;
}
#main_slide > .slide_cover ul li a h2.img_logo.on {
	top: 10%;
	opacity: 1;
}
#main_slide > .slide_cover ul li a p.img_text {
	position: absolute;
	bottom: 0;
	right: 10%;
	color: #fff;
	font-size: 2.4rem;
	width: 400px;
	opacity: 0;
	transition: all 2s;
}
#main_slide > .slide_cover ul li a p.img_text.on {
	bottom: 15%;
	opacity: 1;
}
#main_slide > .slide_cover ul li a .box {
	position: absolute;
	bottom: 10%;
	left: 55%;
	width: 0;
	height: 250px;
	transition: all 1.5s;
}
#main_slide > .slide_cover ul li a .box.box1.on {
	background-color: #0d28bd;
}
#main_slide > .slide_cover ul li a .box.box2.on {
	background-color: #0088ce;
}
#main_slide > .slide_cover ul li a .box.box3.on {
	background-color: #00ad83;
}

#main_slide > .slide_cover ul li a .box.on {
	width: 250px;
	animation: rotate 15s infinite linear;
}
@keyframes rotate {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(45deg);
	}
}
#main_slide > .slide_cover ul li a .white_box {
	position: absolute;
	top: 0;
	left: -100%;
	width: 100%;
	height: 100%;
	z-index: 7;
	background-color: #fff;
}

.slide_cover ul li a img {
	display: block;
	width: 100%;
	height: auto;
	transition: all 5s;
}

.slide_cover ul li a img.mo {
	display: none;
}
.slide_cover ul li a img.on {
	transform: scale(1.1);
}

/* .slide_btn */
.slide_btn {
	position: absolute;
	bottom: 100px;
	left: 200px;
	width: 300px;
	height: 10px;
	z-index: 11;
}

.slide_btn ul {
	display: flex;
}
.slide_btn ul li {
	position: relative;
	width: 90px;
	height: 10px;
	margin-left: 15px;
	background-color: rgba(0, 0, 0, 0.4);
	cursor: pointer;
}

.slide_btn ul li:nth-child(1) {
	margin-left: 0;
}
.slide_btn ul li a {
	position: relative;
	display: block;
	width: 100%;
}

.slide_btn ul li a .color {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	width: 0%;
	height: 10px;
	background-color: rgba(255, 255, 255, 0.8);
}

.slide_btn ul li a .color.on {
	animation: width 7s linear forwards;
}

@keyframes width {
	0% {
		width: 0;
	}
	100% {
		width: 100%;
	}
}
.slide_btn .reset {
	position: absolute;
	top: 50%;
	right: -40px;
	transform: translateY(-50%);
	width: 30px;
	height: 30px;
	cursor: pointer;
}
.slide_btn .reset .off {
	display: block;
}
.slide_btn .reset .on {
	display: none;
}
.slide_btn .reset img {
	display: block;
	width: 100%;
	height: auto;
}

/* .main_cursor */

.main_cursor {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9;
}
.main_cursor .cursor {
	position: absolute;
	top: 0;
	left: 0;
	transform: translate(-50%, -50%);
	width: 60px;
	height: 60px;
	background: no-repeat center/contain;
	pointer-events: none;
}
.main_cursor .cursor:before{
	content:'';
	display:block; 
	position: absolute;
	top:0;
	left:0;
	width:60px; height:60px; 
	background-image: url("../images/main_cursor_l.svg");
	opacity: 0;
} 
.main_cursor .cursor:after{
	content:'';
	display:block; 
	position: absolute;
	top:0;
	left:0;
	width:60px; height:60px; 
	background-image: url("../images/main_cursor_r.svg");
	opacity: 0;
} 
.main_cursor .cursor_left{
	position: absolute;
	top:0;
	left:0;
	width:50%; height: 100%; 
	cursor: none;
	cursor: default;
} 
.main_cursor .cursor_right{
	position: absolute;
	top:0;
	right:0;
	width:50%; height: 100%; 
	cursor: none;
	cursor: default;

} 

.main_cursor .cursor_left:hover ~ .cursor::before{opacity:1;}
.main_cursor .cursor_left:hover ~ .cursor::after{opacity:0;}
.main_cursor .cursor_right:hover ~ .cursor::before{opacity:0;}
.main_cursor .cursor_right:hover ~ .cursor::after{opacity:1;}

```
#### jQuery
```javascript
$(function () {
	gnb();
	function gnb() {
		$(".full_menu, .nav li").mouseover(function () {
			$(".full_menu").stop().slideDown(600);
		});
		$(".full_menu, .nav li").mouseleave(function () {
			$(".full_menu").stop().slideUp(600);
		});
		$(".full_cover>ul>li").mouseover(function () {
			var i = $(this).index();
			$(".nav li").eq(i).find(".line").css("width", "100%");
		});
		$(".full_cover>ul>li").mouseleave(function () {
			var i = $(this).index();
			$(".nav li").eq(i).find(".line").css("width", "0%");
		});
		$(".nav li").mouseover(function () {
			$(this).find(".line").css("width", "100%");
		});
		$(".nav li").mouseleave(function () {
			$(this).find(".line").css("width", "0%");
		});
		$("#header .mo").click(function () {
			$(".mo_menu").stop().slideToggle("fast");
			$("#header .mo").css("color", "red");
		});
	}

	var i = 0; //current
	var k = null; //prev
	var n = null; //next
	var mainInterval; //setIntervalID
	var speed = 2000; //반복시간

	/**
	 * 시간마다 인덱스 계산, slide함수 호출함
	 * * */
	timer();
	function timer() {
		mainInterval = setInterval(function () {
			i++;
			k = i - 1;
			if (i == 3) {
				i = 0;
			}
			slide();
		}, speed);
	}

	function slide() {
		$(".slide_btn ul li").off("click");
		$(".cursor_left, .cursor_right").off("click");
		$(".reset").off("click", reset);
		clearInterval(mainInterval);
		$(".slide_cover ul li")
			.find(".white_box")
			.css("left", "-100%")
			.stop()
			.animate({ left: "0%" }, 1000, function () {
				$(".white_box").stop().animate({ left: "100%" }, 1000);
				$(".slide_cover ul li").eq(i).addClass("on");
				$(".slide_cover ul li").eq(k).removeClass("on");
				/* 추가 */
				$(".color, .img_logo, .img_text, .box").removeClass("on");
				$(".slide_btn ul li").eq(i).find(".color").addClass("on");

				$(".slide_cover ul li").eq(i).find(".img_logo").addClass("on");
				$(".slide_cover ul li").eq(i).find(".img_text").addClass("on");
				$(".slide_cover ul li").eq(i).find(".box").addClass("on");
				$(".slide_cover ul li a img").removeClass("on");
				$(".slide_cover ul li").eq(i).find("a img").addClass("on");
			});

		$(".slide_cover ul li")
			.eq(k)
			.animate({ left: 0 }, 2000, function () {
				setTimeout(function () {
					//trigger
					$(".slide_cover ul li").on("click", click_slide);
					$(".cursor_left").on("click", left_click);
					$(".cursor_right").on("click", right_click);

					var pause_css = $(".pause_css").css("display");
					if (pause_css == "none") {
						clearInterval(mainInterval);
						$(".color").removeClass("on");
					} else {
						timer();
						$(".slide_btn ul li").eq(i).find(".color").addClass("on");
					}
				}, 1000);
			});
		n = i;
	}

	/**
	 * click_slide
	 * pager 함수
	 *
	 * **/
	function click_slide() {
		i = $(this).index();
		if (i == n) return;
		k = n;
		console.log(i, n, k);
		slide();
		$(".color").removeClass("on");
	}

	/**
	 * left_click
	 * left 커서함수
	 *
	 * **/
	function left_click() {
		i--;
		if (i == -1) i = 2;
		if (i == n) return;
		k = n;
		slide();
		$(".color").removeClass("on");
	}

	/**
	 * right_click
	 * right 커서함수
	 *
	 * ***/
	function right_click() {
		i++;
		if (i == 3) i = 0;
		if (i == n) return;
		k = n;
		slide();
		$(".color").removeClass("on");
	}

	/**
	 * reset
	 * play,stop
	 *
	 * ***/
	/* 비동기 함수 */
	function reset() {
		var pause_css = $(".pause_btn").css("display");
		var start_css = $(".start_btn").css("display");
		if (pause_css == "none") {
			clearInterval(mainInterval);
			$(".color").removeClass("on");
		} else {
			timer();
			$(".slide_btn ul li").eq(i).find(".color").addClass("on");
		}
	}

	/**이벤트 핸들러 */
	$(".reset").click(function () {
		reset();
	});
	$(".reset .pause_btn").click(function () {
		$(".pause_btn").css("display", "none");
		$(".start_btn").css("display", "block");
	});
	$(".reset .start_btn").click(function () {
		$(".pause_btn").css("display", "block");
		$(".start_btn").css("display", "none");
	});

	$(".slide_btn ul li").on("click", click_slide);

	$(".cursor_left").on("click", left_click);
	$(".cursor_right").on("click", right_click);
	$(".main_cursor").mousemove(function (e) {
		var x = e.clientX;
		var y = e.clientY;
		$(".cursor").css({
			left: x,
			top: y,
		});
	});

	/***
	 * Resize
	 * * */

	$(window).resize(function () {
		var w_width = $(window).width();
		var img_height = $(".slide_cover ul li img.pc").height();
		var img_height_mo = $(".slide_cover ul li img.mo").height();
		if (w_width > 1330) {
			$("#main_slide .slide_cover").height(img_height);
		} else {
			$("#main_slide .slide_cover").height(img_height_mo);
			$(".slide_cover ul li img.pc").css("display", "none");
			$(".slide_cover ul li img.mo").css("display", "block");
		}
	});

	$(window).trigger("resize");
}); //jQuery

```
