---
title: 02-지킬 permalink
parent: Jekyll
layout: post
date: 2023-01-08
permalink:   
---


1. TOC
{:toc}
--

커스터마이징 -  고유 주소(Permalink)




고유 주소(Permalink)


참고 위키백과의 Permalink

고유 주소는 포스트, 페이지, 컬렉션의 도메인명과 디렉토리를 제외한 URL을 나타낸다.

Jekyll은 date처럼 다양한 템플릿 변수를 활용하거나 이 템플릿 변수의 패턴을 자동으로 사용하는 기능을 내장하고 있으며 사용자가 스타일을 작성하여 사용할 수 도 있는 유연함 또한 가지고 있다.

콜론과 동적인 요소로 이루어진 키워드(템플릿 변수)로 표시되는 템플릿 URL을 생성하여 고유 주소로 사용하며, 템플릿 고유주소의 기본값은 /:categories/:year/:month/:day/:title.html로 되어 있다.

고유 주소 구성
고유 주소는 _config.yml 환경 설정 파일이나 각 포스트, 페이지, 컬렉션이 가지고 있는 YAML 머리말에서 구성할 수 있다.

_config.yml 파일에서 아래와 같이 고유 주소를 설정하면 프로젝트 전체에 해당 설정이 적용된다.

1
permalink: /:categories/:year/:month/:day/:title.html
위의 설정값은 기본값이므로 고유 주소에 대한 설정을 하지 않으면 위에 패턴으로 적용된다.

고유 주소 스타일 설정

고유 주소는 Jekyll에 내장되어 있는 스타일을 사용하여 설정할 수도 있다.

1
permalink : date
위의 date는 :categories/:year/:month/:day/:title.html과 동일하다.

기본 내장된 고유 주소 스타일 목록은 아래에서 다시 다루겠다.

YAML 머리말

포스트, 페이지, 컬렉션의 머리말에 고유 주소를 설정하면 모든 전역 설정이 재정의 된다.

1
2
3
4
---
title: My page title
permalink: /mypageurl/
---
_config.yml에 아래와 같이 정의되어 있더라도

1
permalink : date
이 페이지의 고유 주소 URL은 http://somedomain.com/mypageurl/로 설정된다.

흔히 pretty URL 이라고 부르는 .html 파일 확장자를 생략한 고유 주소를 사용하면 아래처럼 페이지명과 동일한 폴더를 생성하고 그 폴더 안에 index.html 파일을 작성한다.



1 ├─ mypageurl
2 │ └─── index.html
고유 주소로 /mypageurl/를 사용하면 Jekyll이 생성해준 대로 mypageurl 폴더 내의 index.html 파일을 불러오므로 http://somedomain.com/mypageurl/의 주소로 접근하면 mypageurl/index.html 파일을 렌더링해준다.

고유 주소의 템플릿 변수
_config.yml 파일에서 사용할 수 있는 고유 주소의 템플릿 변수들을 소개한다.


| 변수       |설명         |
|:-------------|:------------------|
|year	         |    포스트의 파일명 기준 연도 |
|month	        | 포스트의 파일명 기준 월 | 
|i_month	      |   0을 제외한 포스트의 파일명 기준 월(10미만에서 09 -> 9) |
|day	          |포스트의 파일명 기준 일 | 
|i_day	        | 0을 제외한 포스트의 파일명 기준 일(10미만에서 09 -> 9) | 
|short_year	    |       포스트의 파일명 기준 두 자리 게시 연도 | 
|hour	          | 포스트의 파일명 기준 시간 (24시간제, 00..23 형식) | 
|minute	        |   포스트의 파일명 기준 분 (00..59 형식) | 
|second	        |   포스트의 파일명 기준 초 (00..60 형식)) | 
|title           	포스트의 파일명 기준 문서 제목 | 
|                   머리말의 slug로 값을 덮어쓸 수 있음 | 
|slug	          | 포스트의 파일명 기준으로 영어와 숫자가 아닌 모든 문자를 하이픈(-)으로 변경한 문서 제목 | 
|categories	    |       해당 포스트에 지정된 카테고리들 | 
|:--------	    |     카테고리가 2개 이상이면 계층구조로 URL이 생성| 
|:--------	    |     카테고리가 하나도 없으면 무시됨| 
|:--------	    |     위의 시간 또는 카테고리와 관련된 모든 템플릿 변수는 포스트에만 사용할 수 있다.| 
|:--------	    |     기본 내장 고유 주소 스타일| 
|:--------	    |      템플릿 변수를 사용하여 고유 주소의 패턴을 지정할 수도 있지만 기본 내장된 스타일도 제공한다.| 


                  
                  기본 내장 고유 주소 스타일
                 

스타일명	URL 템플릿
date	/:categories/:year/:month/:day/:title.html
pretty	/:categories/:year/:month/:day/:title/
ordinal	/:categories/:year/:y_day/:title.html
none	/:categories/:title.html
참고 YAML 머리말의 고유 주소 지정
기본 내장 고유 주소 스타일은 YAML 머리말에선 인식되지않는다.

포스트의 고유 주소 예시
고유 주소의 스타일이 포스트에 적용되는 방식의 몇 가지 예시를 아래의 표를 통해 알아보자.

스타일을 적용할 포스트의 파일명은 /2009-04-29-slap-chop.md 이다.

스타일명	URL 템플릿
미지정 혹은 date	/2009/04/29/slap-chop.html
pretty	/2009/04/29/slap-chop/
/:month-:day-:year/:title.html	/04-29-2009/slap-chop.html
/blog/:year/:month/:day/:title/	/blog/2009/04/29/slap-chop/
/:year/:month/:title	/2009/04/slap-chop
페이지와 컬렉션의 고유 주소 설정
위에서 언급했듯 _config.yml 환경설정 파일에서 고유 주소를 설정하면 포스트, 페이지, 컬렉션에 고유 주소 스타일을 전역으로 지정한다.

하지만 포스트와는 달리 페이지와 컬렉션은 시간 이나 범주 가 없기 때문에 고유 주소 스타일을 지정해도 무시된다.

아래의 예시를 보자.

고유 주소 스타일 /:parent/:year/:month/:day/:title.html의 경우

포스트 : /:parent/:year/:month/:day/:title.html
페이지나 컬렉션 : /:title.html
고유 주소 스타일 pretty의 경우(/:categories/:year/:month/:day/:title/과 동일)

포스트 : /:parent/:year/:month/:day/:title
페이지나 컬렉션 : /:title/
파일 확장명을 포함하는 고유 주소 스타일 date의 경우

포스트 : /:year/:month/:day/:title.html
페이지나 컬렉션 : /:title.html
고유 주소와 기본 경로
포스트, 페이지, 컬렉션마다 생성된 사이트의 포스트, 페이지의 경로가 다르다.

아래 종류별로 차이점을 기술한다.

포스트
_posts 디렉토리에서 포스트를 작성했을 경우 _posts의 하위 디렉토리는 고유 주소에 포함되지 않는다.

.html 파일 확장명을 생략하는 pretty와 같은 고유 주소 스타일을 사용할 경우 각 포스트는 포스트명과 동일한 폴더를 생성한 뒤 해당 폴더에 index.html 파일을 생성하여 렌더링한다.

예시 : parentname/2016/12/01/mypostname/index.html

페이지
고유 주소의 스타일에 따라 변동되는 포스트와는 달리 페이지는 디렉토리 구조를 그대로 가져다가 쓴다.

단 예외적으로 특정 페이지의 YAML 머리말에 고유 주소가 선언된 경우 고유 주소의 설정대로 생성한다.

포스트와 마찬가지로 .html 파일 확장명을 생략하는 pretty와 같은 고유 주소 스타일을 사용할 경우 각 페이지는 페이지명과 동일한 폴더를 생성한 뒤 해당 폴더에 index.html 파일을 생성하여 렌더링한다.

예시 : mypage/index.html

컬렉션
컬렉션은 컬렉션명에 접두사가 있는 경우를 제외하고는 _site 디렉토리와 유사한 구조로 생성된다.

예시 : collectionname/mypage.html

.html 파일 확장명을 생략하는 pretty와 같은 고유 주소 스타일을 사용할 경우 고유 주소의 경로는 llection_name/mypage/index.html로 설정된다.

빌드시 _site의 페이지 병합
사이트를 생성할 때 _site 디렉토리의 페이지를 병합하려면 경로가 지정되지 않은 상태에서 각 페이지의 YAML 머리말에 permalink 변수를 이용해 고유 주소를 추가하자.

다시 풀어서 설명하면 이렇다.

페이지를 폴더별로 구분한 상태에서 사이트를 생성한다면 각 폴더명을 포함하여 고유 주소가 생성될 것이다.

폴더의 계층 구조가 복잡할수록 깔끔하지않은 고유 주소를 생성하게 될 것이고 이를 방지하기 위해선 각 페이지마다 고유 주소를 할당하여 사이트를 생성하는 것이다.

조금 번거롭겠지만 www.yoursite.com/mypageurl.html과 같은 깔끔한 고유 주소를 생성할 수 있을 것이다.

아래와 같이 추가하여 고유 주소를 설정해주면 된다.

1
2
3
4
---
title: My page
permalink: mypageurl.html
---
끝에 /가 없는 고유 주소
Jekyll에선 URL 끝에 /나 파일의 확장자도 포함하지 않는 고유 주소를 지원한다.

하지만 고유 주소를 지정한다고 해서 생성되는 파일이 확장자가 없는 것은 아니므로 웹 서버를 이용할 시 추가적인 지원이 필요하다.

추가적인 지원이란 URL에 확장자없이 요청되는 경우 해당 파일을 연결하도록 작업해야 함을 말한다.

단 Github와 Jekyll에 내장된 WEBrick 서버는 추가 작업없이 동작한다.


---

## 지킬캐시삭제 
  
`jekyll clean`


---
