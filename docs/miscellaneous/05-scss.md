---
layout: default
title: 05-Scss
parent: Miscellaneous
tags: [scss , css ]
---
 
---
 ## Table of contents
 {: .no_toc .text-delta }

 1. TOC
{:toc}

---

🔗[scss공식사이트]({{'https://sass-lang.com/'| relative_url}} ){: .anc}

---

# 개요

![]({{'/assets/img/sass01.png'| relative_url}} )

css 파일을 조금 더 구조적으로 작성할 수 있는 언어

**css 전처리기**라고도 불림

종류는 sass(scss), less, stylus ⇒ css 전처리기

웹에서 해석할수 없으므로  번역기(컴파일러) 가 필요함

# 01 scss 워크스페이스 환경설정

1. 컴파일해주는 놈이 livescss 
2. scss 웹에서 해석X 작성후 css컴파일을 해야한다. 
3. livescss는 해석한 파일(css)을 환경설정에서 세팅한 경로의 폴더에 저장해준다.
4. livescss는 해석할때 워크스페이스 단위로 번역한다.
5.  즉 livescss는 워크스페이스 내의 환경설정에서 세팅한 경로로 css 파일을 저장함.
6.  환경설정은 워크스페이스 내에 .vscode/settings.json 에 들어있다

---

# 02. 워크스페이스 설정하기

1. pc에 프로젝트 단위의 폴더를 만든다
    ![]({{'/assets/img/scss04.png'| relative_url}} )
    
2. VSCode 실행하여 워크스페이스 생성

    ![]({{'/assets/img/scss01.png'| relative_url}} )

    ![]({{'/assets/img/scss02.png'| relative_url}} )

    
3. vscode :` ctrl+shift+p`
    ![]({{'/assets/img/scss03.png'| relative_url}} )


```json
{
        "liveSassCompile.settings.formats":[
        // This is Default.
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "~/../css"
        },
        {
            "format": "compressed",
            "extensionName": ".min.css",
            "savePath": "~/../dist/css"
        },
    ]

}
```

vscode는 사용자환경설정과 프로젝트 단위별 환경설정을 별도로 할수 있다.

---

# 03. scss basic

**css**

```css
html {
  font-size: 18px;
}

body {
  margin: 20px;
  background-color: #fff4c1;
}

div {
  color: #333;
  padding: 20px;
}

a {
  display: inline-block;
  margin: 10px 0;
}

#box1 {
  font-size: 40px;
  background-color: #ffcccc;
  border-radius: 20px;
  border: 3px solid #f00;
  -webkit-box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.75);
}

#box1 > a {
  color: #a22;
  text-decoration: none;
}

#box1 > a:hover {
  background-color: #ccc;
}

#box1 #box2 {
  font-size: 20px;
  background-color: #e9e9e9;
  border-radius: 20px;
  border: 3px solid #f00;
  -webkit-box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 3px 11px 0px rgba(0, 0, 0, 0.75);
}

#box1 #box2 > a {
  color: #ee6633;
  text-decoration: none;
}

#box1 #box2 > a:hover {
  color: #a22;
  text-decoration: none;
}
```

****html****

```html
<div id="box1">
<div id="box1-title">box1</div>
<a href="#">button1</a>
<div id="box2"> box2 <br>
  <a href="#">button2</a>
</div>
</div>
<div class="box1">
<div class="box2">
  <div class="box3"></div>
</div>
</div>
```
---