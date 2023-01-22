---
title: 01-지킬설치
author: 김경아
date: 2023-01-06
parent: Jekyll
layout: post
---
-----

1. TOC
{:toc}
--

### 00. 도움말 링크

[지킬공식사이트](https://jekyllrb-ko.github.io/)

[리퀴드문법정리](http://shopify.github.io/liquid/)

[리퀴드변수정리](http://jekyllrb-ko.github.io/docs/variables/)

[지킬메뉴얼한국어블로그](https://docs.3rdeyesys.com/etc/etc_jekyll_documentation_theme_page_create_guide.html)

[망고는코딩대장 레파지토리](https://github.com/qwerewqwerew/book01)

[깃블로그 단계별 설치가이드](https://jekyllrb.com/docs/step-by-step/01-setup/)

[깃페이지설명서] (https://pages.github.com)

[깃테마] (https://pages.github.com/themes)

[지킬북테마] (https://github.com/sighingnow/jekyll-gitbook/fork)

[just-the-docs](https://just-the-docs.github.io/just-the-docs/)

[just-the-docs](https://100sang.net/292)

---


### 01. 지킬설치

#### 01-1 루비설치

*** 지킬을 사용하려면 루비를 설치해야한다. ***

1. Ruby 설치: RubyInstaller 파일 다운로드 후 실행
   (ruby -v으로 설치 확인) [루비다운로드](https://rubyinstaller.org/downloads/)

1. 프로그램 설치후 PC 재부팅 한다.

### 01-2 지킬 구성파일 설치

1. 윈도우 시작버튼 누르고 `cmd`입력

1. Jekyll 설치: 터미널에 `gem install bundler jekyll`

### 01-3 지킬 블로그 생성

1. 블로그 생성: `jekyll new my-blog`

1. 현재 디렉토리 하위에 my-blog 라는 폴더가 생성되며 지킬블로그 테마가 설치된다.

1. 테마를 다운로드 했을경우 `bundle install` 을 실행한다.

### 01-4 블로그 실행

1. 터미널 실행 : `cd my-blog`

1. `bundle exec jekyll serve`

5. `http://localhost:4000`으로 접속

---




### 02. 이미지 넣기
1. HTML 문법으로 넣기

  - Absolute URL (절대 경로): url과 baseurl을 앞에 붙여준다.

```html
<img src='{{ "/assets/img/image.png" | relative_url }}' >
<!-- result : http://blog.mango.io/my-baseurl/assets/img/image.png -->
```
+ 아래의 이미지처럼 해보세요

<img src='{{ "/assets/img/dog.jpg" | relative_url }}' style="width:100px">
<img src='{{ "/assets/img/2023-01-06_205.jpg" | relative_url }}'>



### 03. 페이지

| 컨텐츠를 구성하는 가장 기본적인 요소
---

### 04. 구조

```
.
├── about.md    # => http://example.com/about.html
├── index.html    # => http://example.com/
└── contact.html  # => http://example.com/contact.html
```

| 페이지가 많을 경우 하위 폴더로 정리할수 있다.
  사이트 빌드 시, 사이트 소스에서 페이지를 그룹지을 때 사용한 하위 폴더가 동일한 형태로 _site 폴더 안에 생성됩니다.
  하지만, 페이지의 
| 머리말에 다른 고유주소가 설정되어 있으면, _site 의 하위 폴더는 이에 맞게 변형됩니다.

  -  04-1 하위폴더 생성시 구조

```
.
├── about.md          # => http://example.com/about.html
├── documentation     # 페이지가 들어있는 폴더
│   └── doc1.md       # => http://example.com/documentation/doc1.html
├── design            # 페이지가 들어있는 폴더
│   └── draft.md      # => http://example.com/design/draft.html
```
📌 [디렉토리 구조 원문 링크](https://jekyllrb-ko.github.io/docs/structure/)

---


### 05. 깃허브 빌드시 테마가 깨질때

1. 원인: github에 업로드한 테마파일의 경로가 로컬환경과 달라져서 그렇다.
2. 해결: `_config.yml` 의 url 과 baseurl 값을 변경한다

```
url:              'https://qwerewqwerew.github.io' # 내 깃블로그 주소
baseurl:          '/book01' # 깃페이지 경로
```
---
