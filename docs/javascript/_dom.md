---
layout: default
title: dom조작
parent: Javascript
grand_parent: 
---

# 목차
{: .no_toc}

1. TOC
{:toc}

---

# 생성 innerHTML

{: .note }
>
> dom 요소를 추가해보자
>


innerHTML.js
{: .label .label-purple }

```htlm
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <h1 id="title"></h1>
    <select id="sel"></select>
    <script>
      document.getElementById("title").innerText = "제목 입니다.";
      var sel = document.getElementById("sel");
      sel.innerHTML = '<option value="">선택하세요</option>';
    </script>
  </body>
</html>

```

{: .importnat }
> select 태그의 자식 option 자바스크립트로 추가한다.
>
>


---
{: .mb-10}
 
# 속성조작 attribute

{: .note }
> hasAttribute 속성확인
> value input요소의 value 취득
>

attr.html
{: .label .label-purple }

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <input type="text" id="text1" value="ABC" data-role="name" />
    <br />
    <button onclick="doSave(event);">저장</button>
    <script>
      var oText1 = document.getElementById("text1");
      var textValue = oText1.value;
      console.log(textValue);
      console.log(document.getElementById("text1").getAttribute("value"));

      console.log(oText1.hasAttribute("value"));
      console.log(oText1.hasAttribute("data-role"));
      oText1.removeAttribute("data-role");
      console.log(oText1.hasAttribute("data-role"));

      function doSave(e) {
        var obj = e.target;
        obj.disabled = true; //사용자가 중복해서 버튼을 또 클릭하지 못하도록 버튼을 disabled 시킴

        // 저장을 실행하는 코드 작성
        setTimeout(function () {
          // 저장완료까지 2초가 소요된 것으로 가정. 2초 후 버튼을 다시 enabled
          obj.disabled = false;
        }, 2000);
      }
    </script>
  </body>
</html>

```

{: .importnat }
>
>