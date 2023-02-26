<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link href="https://fonts.googleapis.com/css2?family=Neonderthaw&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
		<link rel="stylesheet" type="text/css" href="http://qwerew.cafe24.com/modules/01/syntax-highlighter/styles/shCore.css" media="all" />
		<link rel="stylesheet" type="text/css" href="http://qwerew.cafe24.com/modules/01/syntax-highlighter/styles/shThemeDefault.css" media="all" />
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/SyntaxHighlighter/3.0.83/styles/shThemeRDark.css" />
		<link rel="stylesheet" href="http://qwerew.cafe24.com/modules/03/style.css" />
		<style>
			.syntaxhighlighter .line {
				white-space: pre-wrap !important;
				word-break: break-all !important;
			}
		</style>
	</head>
	<body>
		<div class="container my-4">
			<div class="row">
				<div class="alert alert-warning col-12">
					<h4 class="alert-heading">[JavaScript] elem.scrollIntoView() - 특정 요소 위치로 화면 스크롤 이동하기</h4>
					<hr />
					<p>
						버튼을 눌렀을때 원하는 내용이 있는 위치로 이동시켜야 한다거나 그럴때 사용할 수 있다. <br />
						scrollIntoView() 메소드가 존재하는데 element기반으로 사용하는거라 특정 element를 기준으로 스크롤 이동
					</p>
				</div>
			</div>
			<!-- //.row -->
			<div class="row">
				<div class="col-12">
					<h4>01. basic</h4>
					<p>
						1. 매개변수 없이 사용 <br />
						2.Boolean parameter true/false를 매개변수로 사용<br />
						<span class="text-danger">3.options 객체를 넣어서 사용하는 방법(추천)</span>
					</p>
					<pre class="brush:js">
						element.scrollIntoView();
						element.scrollIntoView(alignToTop); // Boolean parameter
						element.scrollIntoView(scrollIntoViewOptions); // Object parameter						
					</pre>
				</div>
			</div>
			<!-- // row -->
			<div class="row">
				<div class="col-12">
					<h4>02. alignToTop</h4>
					<p>
						- true : element 요소의 상단을 기준으로 스크롤을 이동한다. <br />
						- false : element 요소의 하단을 기준으로 스크롤을 이동한다.
					</p>
					<pre class="brush:js">
						document.getElementById("mine").scrollIntoView(true);
						document.getElementById("mine").scrollIntoView(false);
					</pre>
				</div>
			</div>
			<!-- // row -->
			<div class="row">
				<div class="col-12">
					<h4>03. scrollIntoViewOptions</h4>
					<p>
						- behavior : 전환 에니메이션 정의 (auto || smooth) <br />
						- block : 수직 정렬 (start || center || end || nearest) <br />
						- inline : 수평 정렬 (start || center || end || nearest) <br />
					</p>
					<pre class="brush:js">
						var element = document.getElementById("mine");
						element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
					</pre>
				</div>
			</div>
			<!-- // row -->
		</div>
		<!-- // end container -->

		<script src="http://qwerew.cafe24.com/modules/01/js/jquery.min.js"></script>
		<script src="http://qwerew.cafe24.com/modules/01/js/bootstrap.min.js"></script>
		<script src="http://qwerew.cafe24.com/modules/01/js/retina.js"></script>
		<script src="http://qwerew.cafe24.com/modules/01/js/jquery.fitvids.js"></script>
		<script src="http://qwerew.cafe24.com/modules/01/js/wow.js"></script>
		<script src="http://qwerew.cafe24.com/modules/01/js/jquery.prettyPhoto.js"></script>

		<!-- CUSTOM PLUGINS -->
		<script src="http://qwerew.cafe24.com/modules/01/js/custom.js"></script>
		<script src="http://qwerew.cafe24.com/modules/01/js/main.js"></script>
		<script src="http://qwerew.cafe24.com/modules/01/syntax-highlighter/scripts/shCore.js"></script>
		<script src="http://qwerew.cafe24.com/modules/01/syntax-highlighter/scripts/shBrushXml.js"></script>
		<script src="http://qwerew.cafe24.com/modules/01/syntax-highlighter/scripts/shBrushCss.js"></script>
		<script src="http://qwerew.cafe24.com/modules/01/syntax-highlighter/scripts/shBrushJScript.js"></script>
	</body>
</html>
