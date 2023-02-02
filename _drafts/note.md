[#UNIX_time]:UNIX_time

- versioned docs - issue [#UNIX_time]
1. UNIX time 이란?
  UNIX time 이란, 1970년 1월 1일 00:00:00 UTC 로부터 현재까지의 누적된 초(seconds) 값을 의미
  예를들어 ‘2021-05-23 09:00:00 KST’ 시간을 UNIX time으로 표현한다면
1. KST(local time)를 UTC 로 변환해서, ‘2021-05-23 00:00:00 UTC’
1. UNIX time 의 기준 시간인 ‘1970-01-01 00:00:00 UTC’ 에서부터 누적 초를 계산
아래 숫자 값을 도출하게 된다.
‘1621728000’

1. UNIX time 을 취급할 때는 항상 로컬 시간대로 변환하는 추가 작업을 해야 한다

1. 9시간에 해당되는 초(32,400)를 더해주어야 한다.