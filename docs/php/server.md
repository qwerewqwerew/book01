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

π[link]({{'https://www.php.net/manual/en/reserved.variables.server.php'| relative_url}} ){: .anc}

{: .important }
>
> super globals
> 
> μλ² μ λ³΄ νμΈν΄μΌν  λ μ¬μ©
>

## λ¬Έλ²

`$_SERVER['νμΈν  νκ²½λ³μ']`

| νκ²½λ³μ        | μ€λ©°γγ          |
|:-------------|:------------------|
| DOCUMENT_ROOT	        | νμ¬ μ¬μ΄νΈκ° μμΉν μλ²μμ μμΉ| 
| HTTP_ACCEPT_ENCODING  |            μΈμ½λ© λ°©μ| 
| HTTP_ACCEPT_LANGUAGE  |            μΈμ΄ λ°©μ| 
| HTTP_USER_AGENT       |    	μ¬μ΄νΈμ μ μν ν΄λΌμ΄μΈνΈ νλ‘κ·Έλ¨ μ λ³΄| 
| REMOTE_ADDR	          |  μ¬μ΄νΈμ μ μν ν΄λΌμ΄μΈνΈ IP| 
| HTTP_REFERER	        | λ¦¬νΌλ¬(μ΄μ  μΉνμ΄μ§ μ£Όμ), form νκ·Έλ‘ μ μ‘ μ κ°μ΄ λμ΄μ¬ λ,| 
| SCRIPT_FILENAME       |  	μ€νλκ³  μλ νμΌμ μ μ²΄ κ²½λ‘| 
| SERVER_NAME	          |  μ¬μ΄νΈ λλ©μΈ (κ°μ νΈμ€νΈμ μ§μ ν λλ©μΈ)| 
| HTTP_HOST	            |μ¬μ΄νΈ λλ©μΈ (μ μ μ μ¬μ©ν λλ©μΈ)| 
| SERVER_PORT	          |  μ¬μ΄νΈ PORT| 
| SERVER_SOFTWARE	      |      μλ²μ μννΈμ¨μ΄ νκ²½| 
| GATEWAY_INTERFACE	    |        CGI μ λ³΄| 
| SERVER_PROTOCOL	      |      μ¬μ©λ μλ² νλ‘ν μ½| 
| REQUEST_URI	          |  νμ¬ νμ΄μ§ μ£Όμμμ λλ©μΈμ μ μΈν κ°| 
| PHP_SELF	            |νμ¬ νμ΄μ§ μ£Όμμμ λλ©μΈκ³Ό ν¨κ» λκ²¨μ§λ κ° μ μΈ| 
| APP_PHYSICAL_PATH	    |        νμ¬ νμ΄μ§μ μ€μ  νμΌ μ£Όμ| 
| QUERY_STRING	        |    GET λ°©μμ νμΌλͺ λ€μ λΆμ΄μ λμ΄μ€λ νλΌλ―Έν°μ κ°| 


π[link]({{'https://itwiki.kr/w/PHP_SERVER_%EB%B3%80%EC%88%98'| relative_url}} ){: .anc}