---
title: syntax-$_SERVER
layout: default
parent: PHP
tags: [admin]
---

---

1. TOC
{:toc}

---

🔗[link]({{'https://www.php.net/manual/en/reserved.variables.server.php'| relative_url}} ){: .anc}

{: .important }
>
> super globals
> 
> 서버 정보 확인해야할 때 사용
>

## 문법

`$_SERVER['확인할 환경변수']`

| 환경변수        | 설며ㅓㅇ          |
|:-------------|:------------------|
| DOCUMENT_ROOT	        | 현재 사이트가 위치한 서버상의 위치| 
| HTTP_ACCEPT_ENCODING  |            인코딩 방식| 
| HTTP_ACCEPT_LANGUAGE  |            언어 방식| 
| HTTP_USER_AGENT       |    	사이트에 접속한 클라이언트 프로그램 정보| 
| REMOTE_ADDR	          |  사이트에 접속한 클라이언트 IP| 
| HTTP_REFERER	        | 리퍼러(이전 웹페이지 주소), form 태그로 전송 시 값이 넘어올 때,| 
| SCRIPT_FILENAME       |  	실행되고 있는 파일의 전체 경로| 
| SERVER_NAME	          |  사이트 도메인 (가상 호스트에 지정한 도메인)| 
| HTTP_HOST	            |사이트 도메인 (접속 시 사용한 도메인)| 
| SERVER_PORT	          |  사이트 PORT| 
| SERVER_SOFTWARE	      |      서버의 소프트웨어 환경| 
| GATEWAY_INTERFACE	    |        CGI 정보| 
| SERVER_PROTOCOL	      |      사용된 서버 프로토콜| 
| REQUEST_URI	          |  현재 페이지 주소에서 도메인을 제외한 값| 
| PHP_SELF	            |현재 페이지 주소에서 도메인과 함께 넘겨지는 값 제외| 
| APP_PHYSICAL_PATH	    |        현재 페이지의 실제 파일 주소| 
| QUERY_STRING	        |    GET 방식의 파일명 뒤에 붙어서 넘어오는 파라미터의 값| 


🔗[link]({{'https://itwiki.kr/w/PHP_SERVER_%EB%B3%80%EC%88%98'| relative_url}} ){: .anc}