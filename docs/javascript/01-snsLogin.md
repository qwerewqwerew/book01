---
title: 01-SNSLogin
parent: Javascript
layout: default
---

1. TOC
{:toc}
--

{: .new }
> SNS 로그인 기능을 구현해보자
>
>{: .fs-3 .fw-400}

# 01 naver

## 01-`1 네이버로그인 API`

[🔗네이버개발자](https://developers.naver.com/)

[🔗 네이버로그인 API가이드](https://developers.naver.com/docs/login/web/web.md)

1. 아래의 동영상 가이드를 보면서 따라한다.
[🔗 동영상 가이드](https://drive.google.com/file/d/1wUMlGNYVaNIfl_8zwO8I1pkvzHjazB3p/view?usp=share_link)

2. [네이버로그인 API가이드](🔗 네이버로그인 API가이드) 의 예제를 복사하여 vscode 에 붙여넣고 수정후 서버에 올린다.

3. 꼭 서버환경에 업로드 하여 테스트 해본다




<script async src="//jsfiddle.net/qwerew0/eLtho1rd/embed/"></script>


<script async src="//jsfiddle.net/qwerew0/eLtho1rd/1/embed/"></script>


# 02 kakao

1. 🔗[카카오개발자]({{https://developers.kakao.com/'| relative_url}} ){: .anc} 카카오에서 인증키를 발급받아야 한다

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
    <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
  </head>
  <body>
    <a id="custom-login-btn" href="javascript:kakaoLogin()">
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="222"
      />
    </a>
    <button id="logout-btn" style="display: none" onclick="kakaoLogout();">
      로그아웃
    </button>
    <script>
      Kakao.init("5e953dddfcae9a00c14179f3e355c90b"); //발급 받은 앱키

      function kakaoLogin() {
        Kakao.Auth.login({
          scope: "profile_nickname,account_email", //동의항목에서 설정한 ID와 반드시 일치해야 함
          success: function () {
            //로그인 성공
            Kakao.API.request({
              //사용자 정보를 가져오기 위한 API
              url: "/v2/user/me",
              success: (res) => {
                //사용자 정보를 가져오는데 성공
                const kakaoAccount = res.kakao_account; //사용자 계정 정보
                console.log(kakaoAccount);
                document.getElementById("custom-login-btn").style.display =
                  "none"; //로그인 버튼 숨기기
                document.getElementById("logout-btn").style.display = ""; //로그아웃 버튼 보이기
              },
            });
          },
          fail: function (error) {
            //로그인 실패
            console.log(error);
          },
        });
      }

      function kakaoLogout() {
        if (!Kakao.Auth.getAccessToken()) {
          //로그인을 했으면 Access Token 이 발급되어져 있음. 없으면 아직 로그인을 안한 것임.
          console.log("Not logged in.");
          return;
        }

        Kakao.Auth.logout((res) => {
          //로그아웃 함수 호출
          console.log(window.Kakao.Auth.getAccessToken());
          console.log(res);
          document.getElementById("custom-login-btn").style.display = ""; //로그인 버튼 보이기
          document.getElementById("logout-btn").style.display = "none"; //로그아웃 버튼 숨기기
        });
      }
    </script>
  </body>
</html>


```


