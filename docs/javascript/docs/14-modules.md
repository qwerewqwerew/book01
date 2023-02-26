---
layout: default
title: 14-modules
parent: Javascript
---

# 목차

{: .no_toc}

1. TOC
{:toc}

---

{: .note }
> 프로그래밍에서 모듈 이란 프로그램을 구성하는 구성요소의 일부 <br/>
다른 사람의 코드나, 내가 잘게 쪼개 놓은 코드를 재사용하고 싶을 때 쓴다<br/>
> 자바스크립트의 모듈을 지원하는 함수인 export, defalut 를 사용해보자


---
{: .mb-10}
 
# 관련링크
{: .no_toc}

🔗[mdn]({{'https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export'| relative_url}} ){: .anc}
🔗[모던자바스크립트-모듈]({{'https://ko.javascript.info/modules-intro'| relative_url}} ){: .anc}

🔗[모던자바스크립트-모듈내보내기,가져오기]({{'https://ko.javascript.info/import-export'| relative_url}} ){: .anc}


---
{: .mb-10}
 
# 01-단일객체 export & import 하기

### say.js
{: .no_toc}

```js
export function say(user){
  alert(`Hello,${user}!`)
}
```
export 를 변수나 함수 앞에 붙이면 외부 모듈에서 해당 변수나 함수에 접근가능 하다
{: .box .bg-white-100}

### module.html
{: .no_toc}

```html
...
<body>
  <script type="module">
    /* import 를 사용해 say.js의 함수 say를 사용 */

    import {say} from './say.js';  
    document.body.innerHTML = say('망고');

	</script>
</body>
</html>
```

모듈을 불러올때는 `<script type="module">` 속성을 설정해 스크립트가 모듈이란 걸 브라우저가 알 수 있게 해준다. 
{: .box .bg-white-100}

{: .new }
> **라이브서버에서 테스트할것**
> **모듈은 로컬 파일에서 동작하지 않고, HTTP 또는 HTTPS 프로토콜을 통해서만 동작한다.**
> - 모듈은 자신만의 스코프가 있다. 따라서 모듈 내부에서 정의한 변수나 함수는 다른 스크립트에서 접근할 수 없으므로 브라우저 환경에서도 `<script type="module">`
 을 사용해 모듈을 만들면 독립적인 스코프가 생성된다.
>
> - 동일한 모듈이 여러 곳에서 사용되더라도 모듈은 최초 호출 시 단 한 번만 실행된다.
>
> - 실행 후 결과는 이 모듈을 가져가려는 모든 모듈에 내보내진다.
>

---
{: .mb-10}


# 02-여러객체 export & import 하기

### main.js
{:.no-toc}

```js
function funcA() {
	console.log("functionAA");
}
function funcB(test) {
	console.log(test, "functionbb");
}
const varC = "hello";
export { funcA, funcB, varC };
```

### module.html
{:.no-toc}

```html
<body>
  <script type="module">
    import { funcA, funcB, varC } from './main.js';
    funcA()
    funcB(varC)
  </script>
</body>

```

import 할 때는 `{}` 를 이용. 
{: .box .bg-white-100}

![]({{'/assets/img/module.jpg'| relative_url}} )



---
{: .mb-10}
 
# 03-export default

{: .note }
>
> 개체 하나만 선언되어있는 모듈에 사용하는 문법
>

### app.js
{:.no-toc}


```js
const app = () => {
  document.body.innerHTML = "<h1>이것은 모듈</h1>"
  console.log("myapp");
}
export default app;
```

### app.html
{:.no-toc}

```html
<body>
  <script type="module">
    import app from "./app.js";
    app()
  </script>
</body>
```

1. `default` 로 export 된 모듈은 `{}` 로 임포트 하지 않아도 된다.
2. 모듈은 반드시 경로를 작성한다. ex)`app.js : X``./app.js : O` 
{: .box .bg-white-100}



---
