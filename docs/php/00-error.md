---
layout: post
title: 00-에러
parent: PHP
---

아파치의 기본 서비스 포트인 80포트를 다른 포트로 변경

![]({{'/assets/img/php40.jpg'| relative_url}} )

+ 아파치 서버가 두개 설치되어 포트 충돌이 났다
  +  이미 80번 포트를 다른 서버가 사용중이라는 메시지 

1. ![]({{'/assets/img/php41.png'| relative_url}} )
1. ![]({{'/assets/img/php42.png'| relative_url}} )
1. ![]({{'/assets/img/php43.png'| relative_url}} )
1. ![]({{'/assets/img/php44.png'| relative_url}} )
1. ![]({{'/assets/img/php45.png'| relative_url}} )
1. ![]({{'/assets/img/php46.png'| relative_url}} )
1. ![]({{'/assets/img/php47.png'| relative_url}} )
  + php 포트번호 변경
1. ![]({{'/assets/img/php48.png'| relative_url}} )

1. htttpd.conf 열고 80 -> 8088
1. htttpd-ssl.conf 열고 443 -> 4433
1. xmapp 컨트롤 패널 우측의 config 버튼을 클릭하여 그부분도 수정


---
## mysql error

```
 [mysql] 	Error: MySQL shutdown unexpectedly.
 [mysql] 	This may be due to a blocked port, missing dependencies, 
 [mysql] 	improper privileges, a crash, or a shutdown by another method.
 [mysql] 	Press the Logs button to view error logs and check
 [mysql] 	the Windows Event Viewer for more clues
 [mysql] 	If you need more help, copy and post this
 [mysql] 	entire log window on the forums
```

> 삭제후 재설치

1. my.ini 열고 port 번호 3400 로 수정
1. xmapp 컨트롤 패널 우측의 config 버튼을 클릭하여 그부분도 수정
1. [stackoverflow](https://stackoverflow.com/questions/18022809/how-to-solve-error-mysql-shutdown-unexpectedly)