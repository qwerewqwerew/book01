---
layout: default
title: 08 featch
parent: Javascript
grand_parent: 
---

 # 목차
 {: .no_toc}

1. TOC
{:toc}

---

# 1. 콜백 함수

1. **함수는 매개변수(parameter)를 넣을 수 있다.**
2. **함수는 값을 반환할 수 있다**

함수는 javascript의 꽃이라고 불리는 이유는 함수가 정말 많은 곳에서 사용되기 때문입니다. 이때  `callback(콜백) 함수`의 개념만 알면 함수의 대부분은 알고 계신다고 보면 됩니다!

콜백 함수는 함수가 나중에 불린다고 해서 CallBack 함수입니다. 보통 **콜백 함수를 구현할 때 함수의 인자에 함수를 넣는 방식으로 진행합니다.** 

```jsx
//1. sayHello라는 함수가 콜백 함수로 사용되는 예시를 보여줍니다.

function sayHello(){ //sayHello 라는 함수를 만듭니다.
	console.log('안녕하세요');
}

**f**unction getDog(callback){ //getDog 함수의 파라미터에는 함수가 들어갑니다.
	callback(); //callback 파라미터는 함수이기에 실행시킬 수 있습니다.
}

//getHuman의 파라미터인 callbackFunc에는 sayHello가 들어가고 sayHello가 실행됩니다.
getDog(sayHello) //'나는 댕댕이다'가 출력됩니다.
```

<aside>
💡 
모든 함수의 파라미터 이름은 자유롭게 설정할 수 있습니다. 즉 getDog(callback)을 getDog(cb) 이렇게 바꿔도 됩니다.

</aside>

이렇게 콜백함수를 사용할 때 아래와 같이 함수로 정의된 변수를 넣지 않고 바로 함수를 넣을 수도 있어요. 이를 `익명 함수`라고 부릅니다 (이런 게 있다고만 알고 계세요)

```jsx
//아래와 같은 형식으로도 사용이 가능해요. 이렇게 많이 사용되니까 꼭 알아두면 좋습니다. 
//함수의 이름을 붙여서 선언하지 않고 1회용으로 사용되는 함수를 만듭니다.
getDog(function(){
	console.log('나는 댕댕이다.')
})
```

<aside>
💡 
1. getDog안에 있는 익명함수는 실제로 코드가 실행될 때 위에서 선언한 callback이라는 파라미터에 들어가게 됩니다. 

2. 만약 getDog(1) 이렇게 넣으면 어떻게 될까요? 1은 int형이고 실제로 1() 이렇게 실행할 수 없습니다. 그렇기에 에러가 날 겁니다.

</aside>

우리가 콜백 함수를 꼭 알아야 하는 이유는,  **javascript에서 기본으로 제공해주는 많은 함수, 라이브러리들를 사용할 때 콜백 함수를 사용하기 때문이에요.**

```jsx
//대표적으로 setTimeout, setInterval 함수가 있습니다.이들은 javascript 기본으로 탑재되어 있는 내장함수입니다.

//이 두 함수는 첫 번째 인자에 콜백 함수를 넣고 두번째에 ms 단위의 숫자를 넣습니다.
setTimeout(function(){
	console.log('3초 뒤에 실행됩니다!');
}, 3000)

setInterval(function(){
	console.log('1초마다 출력됩니다')
},1000)
```

[참고]

콜백 함수에는 보통 인자를 넣어서 많이 사용됩니다.

```jsx
//콜백에 사용될 함수
function callbackFunc(name){
	console.log(name);
}

function sayHello(callback){
	var text = 'hello';
	callback(text);
}

sayHello(callbackFunc); //hello가 출력됩니다.
sayHello(function(value){ //위와 동일하게 value에는 hello가 들어갑니다.
	console.log(value) 
})
```

---

# 2. 동기와 비동기

### 🔸동기

![Untitled](Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/Untitled.png)

> 자바스크립트는 코드가 작성된 순서대로 작업을 처리함
이전 작업이 진행중 일때는 다음 작업을 수행하지 않고 기다림
먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드를 실행
**→동기 방식**
> 

![Untitled](Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/Untitled%201.png)

> 동기처리의 단점은 하나의 작업이 너무 오래 걸릴시
> 
> 
> 하나의 작업이 끝날때 까지 모든 작업이 중단되기 때문에 전반적인 흐름이 느려진다.
> 
- ❓멀티스레드
    
    ![Untitled](Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/Untitled%202.png)
    

### 🔸비동기

- 싱글 스레드 방식의 문제점으로 비동기작업이 생겼다

![Untitled](Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/Untitled%203.png)

> 싱글 스레드 방식을 쓰면서 여러 작업을 동시에 실행
먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행함
**→비동기방식**
> 

![Untitled](Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/Untitled%204.png)

![Untitled](Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/Untitled%205.png)

**이렇게 비동기 처리를 할때는 콜백함수를 붙여서 비동기 처리의 결과값이나 종료가 잘 되었는지 등을 확인하게 된다**

---

SetTImeout

✏️ **예제1**

```jsx
//setTimeout 함수도 비동기 처리를 지원합니다.
setTimeout(function(){
	console.log('3초 뒤에 실행됩니다!');
}, 3000)
console.log('바로 실행됩니다.');
```

✏️ **예제2**

```jsx
function taskA(){
	console.log('A작업끝');
	setTimeout(()=>{
	console.log('a task end')
},2000)
}
 taskA();
console.log('코드끝');

```

setTimeout 이 실행된후 console 이 실행되야 하지만 console 실행후 settimeout이 실행되었다

![Untitled](Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/Untitled%206.png)

✏️ **예제3**

```jsx
function taskA(a,b,cb){
	console.log('A작업끝');
	setTimeout(()=>{
	const res=a+b;
	cb(res)
	},3000)
}
 taskA(3,4,(res)=>{console.log('result:',res)});
console.log('코드끝');
```

![Untitled](Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/Untitled%207.png)

<aside>
💡 javascript 에서는 비동기처리를 지원하는 여러 방식이 있으며 그중 **setTimeout, setInterval은** 콜백함수를 사용한 비동기 처리 방식이다.

</aside>

<aside>
💡 우리가 사용할 비동기 로직은 네트워크 통신에만 사용하므로 간단히 이해만 하면된다.

</aside>

---

# 3. Promise-then,catch

<aside>
<img src="Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/4359738.png" alt="Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/4359738.png" width="40px" /> [Promise : javascript의 비동기 처리를 지원하는 객체 중 하나](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

1.  Promise 객체는 then과 catch  메서드를 가지고 있다.
    1. then (콜백) 는 통신성공시 결과값 반환
    2. catch (콜백)  는 통신에러시 결과값 반환 

---

☑ **promise 객체를 반환하는 대표적인 함수 `fetch` 를 알아보자**

</aside>

<aside>
📢 **Fetch API  기본예제**

---

🔗[mdn 문서를 읽어보자](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)

![Untitled](%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%89%E1%85%B5%E1%86%AF%2061cffbe30d964a5f89799791533741e3/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%AE%E1%86%BC%208656a010af724ca2bac7bb9128fcfd98/react%20806baaf83cd045e6bbc5740e98db8c2f/%E1%84%86%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9%E1%84%89%E1%85%A3%E1%86%B8%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%206b07c1c1fee442e3b56db961d12e5892/03-%5Breact-%E1%84%86%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9%E1%84%89%E1%85%A3%E1%86%B8%5D%E1%84%89%E1%85%A5%E1%84%87%E1%85%A5%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5%20DB%20%E1%84%87%E1%85%A1%E1%86%AE%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%A9%E1%84%80%E1%85%B5%20ed3bb1f5011941a39596c328bc8e00bf/Untitled.png)

🔗[문법을 보자](https://developer.mozilla.org/en-US/docs/Web/API/fetch#syntax)

🔗[리턴되는 값을 보자](https://developer.mozilla.org/en-US/docs/Web/API/fetch#return_value)

---

**✏️실습 1** 

```jsx
var fetched=fetch('https://jsonplaceholder.typicode.com/photos');
console.log(`fetched, ${fetched}`)
```

![프로미스가 반환됨
**( promise 는 비동기로 동작하는 객체이며 then 과 catch 를 포함하고 있다 )**](%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%89%E1%85%B5%E1%86%AF%2061cffbe30d964a5f89799791533741e3/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%AE%E1%86%BC%208656a010af724ca2bac7bb9128fcfd98/react%20806baaf83cd045e6bbc5740e98db8c2f/%E1%84%86%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9%E1%84%89%E1%85%A3%E1%86%B8%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%206b07c1c1fee442e3b56db961d12e5892/03-%5Breact-%E1%84%86%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9%E1%84%89%E1%85%A3%E1%86%B8%5D%E1%84%89%E1%85%A5%E1%84%87%E1%85%A5%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5%20DB%20%E1%84%87%E1%85%A1%E1%86%AE%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%A9%E1%84%80%E1%85%B5%20ed3bb1f5011941a39596c328bc8e00bf/Untitled%201.png)

프로미스가 반환됨
**( promise 는 비동기로 동작하는 객체이며 then 과 catch 를 포함하고 있다 )**

**(☞ﾟヮﾟ)☞ 매우중요  promise 는 비동기로 동작하는 객체이며 then 과 catch 를 포함하고 있다**

**(☞ﾟヮﾟ)☞ 매우중요   then 과 catch는 콜백함수!**

**✏️실습 2**

then은 fatch 통신이 성공시 반환되며, catch는 오류시 반환된다

```jsx
var fetched=fetch('https://jsonplaceholder.typicode.com/photos');
console.log(`fetched, ${fetched}`)
	fetched.then((result)=>{console.log('성공',result)})
	fetched.catch((reason)=>{console.log('실패',reason)})
```

![Untitled](%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%89%E1%85%B5%E1%86%AF%2061cffbe30d964a5f89799791533741e3/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%AE%E1%86%BC%208656a010af724ca2bac7bb9128fcfd98/react%20806baaf83cd045e6bbc5740e98db8c2f/%E1%84%86%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9%E1%84%89%E1%85%A3%E1%86%B8%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%206b07c1c1fee442e3b56db961d12e5892/03-%5Breact-%E1%84%86%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9%E1%84%89%E1%85%A3%E1%86%B8%5D%E1%84%89%E1%85%A5%E1%84%87%E1%85%A5%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5%20DB%20%E1%84%87%E1%85%A1%E1%86%AE%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%A9%E1%84%80%E1%85%B5%20ed3bb1f5011941a39596c328bc8e00bf/Untitled%202.png)

- then,catch 설명스샷
    
    ![http 통신의 응답결과 확인됨](%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%89%E1%85%B5%E1%86%AF%2061cffbe30d964a5f89799791533741e3/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%AE%E1%86%BC%208656a010af724ca2bac7bb9128fcfd98/react%20806baaf83cd045e6bbc5740e98db8c2f/%E1%84%86%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9%E1%84%89%E1%85%A3%E1%86%B8%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%206b07c1c1fee442e3b56db961d12e5892/03-%5Breact-%E1%84%86%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9%E1%84%89%E1%85%A3%E1%86%B8%5D%E1%84%89%E1%85%A5%E1%84%87%E1%85%A5%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5%20DB%20%E1%84%87%E1%85%A1%E1%86%AE%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%A9%E1%84%80%E1%85%B5%20ed3bb1f5011941a39596c328bc8e00bf/Untitled%203.png)
    
    http 통신의 응답결과 확인됨
    
    ![catch 가 실행됨](%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%89%E1%85%B5%E1%86%AF%2061cffbe30d964a5f89799791533741e3/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%AE%E1%86%BC%208656a010af724ca2bac7bb9128fcfd98/react%20806baaf83cd045e6bbc5740e98db8c2f/%E1%84%86%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9%E1%84%89%E1%85%A3%E1%86%B8%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%84%8C%E1%85%A6%E1%86%A8%E1%84%90%E1%85%B3%206b07c1c1fee442e3b56db961d12e5892/03-%5Breact-%E1%84%86%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9%E1%84%89%E1%85%A3%E1%86%B8%5D%E1%84%89%E1%85%A5%E1%84%87%E1%85%A5%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5%20DB%20%E1%84%87%E1%85%A1%E1%86%AE%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%A9%E1%84%80%E1%85%B5%20ed3bb1f5011941a39596c328bc8e00bf/Untitled%204.png)
    
    catch 가 실행됨
    

**✏️실습 3**

fetched 생략

```jsx
fetch("https://jsonplaceholder.typicode.com/user")
    .then((result) => {
      console.log("성공", result);
    })
    .catch((reson) => {
      console.log("실패", reson);
    });
```

</aside>

📢 **fetch 함수의 문법과 리턴값의 알아보았다. 반환된 데이터를 다뤄보자**

<aside>
👁️‍🗨️ [https://jsonplaceholder.typicode.com/photos](https://jsonplaceholder.typicode.com/photos) 
서버에 저장된 정보는 일반 텍스트 형태로 
웹페이지에 출력 시키려면 웹에서 가공할수 있는 
언어로 변경해야 한다.

</aside>

[🔗MDN문서가기](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch)⇒ 공식문서의 예제 활용

**✏️실습예제**

```jsx
fetch('https://jsonplaceholder.typicode.com/photos')
  .then((response) => response.json())
  .then((data) => console.log(data));
```

[🔗추가예제페이지](https://www.notion.so/fetch-2408361e98a04e2186333cdfccae8c3a)

> **정리**
> 
> - fetch 함수는 promise 객체를 반환한다.
> - promise객체는 비동기로 동작하며 then, catch 메소드가 있다.
> - then,catch 는 콜백함수이며 첫번째 파라미터로 통신의 결과값을 반환받는다
> 
> ```jsx
> .then((result)=>{})
> ```
> 

---

# 4. async & await

### 콜백지옥

<aside>
<img src="Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/4359738.png" alt="Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/4359738.png" width="40px" /> **비동기적 처리를 할땐 콜백을 활용하게 되는데 하다보면 콜백 함수가 중첩되면서 콜백 지옥에 빠지게 된다.**

</aside>

- 1초후에 일을 하는  timer 함수가 있다

```jsx
timer(1000, function () {
      console.log("작업");
    });
```

- timer 함수에 1초후 콜백함수를 실행시키고 또 콜백을 실행시키게 될경우… 콜백지옥에 빠지게된다

```jsx
timer(1000, function () {
	console.log("작업");
  timer(1000, function () {
    console.log("작업");
    timer(1000, function () {
      console.log("작업");
    });
  });
});
```

### 콜백지옥에서 탈출 → promise

<aside>
<img src="Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/4359738.png" alt="Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/4359738.png" width="40px" /> 콜백지옥에서 탈출하기 위해서는 promise 객체의 then 을 사용한다.

</aside>

- .then (함수)

```jsx
timer(1000)
	.then(function () {
		console.log("작업");
		return timer(1000);
	})
	.then(function () {
		console.log("작업");
		return timer(1000);
	})
	.then(function () {
		console.log("작업");
	});
```

- async & await 로 좀더 간단히 작성

```jsx
async function run(){
	await timer(1000)	
			console.log("작업");
	await timer(1000);
			console.log("작업");
	await timer(1000)
			console.log("작업");
}
run();
```

### async & await

<aside>
<img src="Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/4359738.png" alt="Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/4359738.png" width="40px" /> then 을 이용하여 콜백을 작성후 async로 변경해본다

</aside>

- .then (함수)
    - timer 함수는 promise 값을 반환하도록 작성되어있다.
    - then 함수를 사용하여 1초후 실행을 비동기적으로 여러번 시키는 코드를 작성해보자

```jsx
function timer(time) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}
console.log('start')
timer(1000)
  .then((time) => {
    console.log("time:" + time);
    return timer(time + 1000);
  })
  .then((time) => {
    console.log("time:" + time);
    return timer(time + 1000);
  })
  .then((time) => {
    console.log("time:" + time);
		console.log('end')
  });
```

![Untitled](Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/Untitled%208.png)

- async & await 로 좀더 간단히 작성

```jsx
const run = async () => {
  console.log("start");
  let time = await timer(1000);
  console.log("time:" + time);
  time = await timer(time + 1000);
  console.log("time:" + time);
  time = await timer(time + 1000);
  console.log("end");
};

run();
```

# 5. HTTP 통신 이해

---

# 6. Axios

<aside>
<img src="Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/4359738.png" alt="Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/4359738.png" width="40px" /> 프로젝트에서는  fetch함수의 쉬운 활용을 도와주는 `axios` 라이브러리를 사용하여 네트워크 통신을 구현한다.

---

1. 깃허브링크🔗 [https://github.com/axios/axios](https://github.com/axios/axios)
</aside>

## 1. Axios 설치

```html
//Axios cdn 주소
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

## 2. Axios 이용해서 통신하기

* axios는 비동기 처리를 하는 promise 객체를 반환 

**💬기본문법**

```jsx
//axios에서 get, post 사용하기
axios.get(url주소) 
axios.post(url주소,data 객체) 

//기본적으로 axios 메소드는 promise 객체를 return 
axios.get(url주소).then(function(result){
	//result 객체에는 status, data 등 여러 값이 있다.

}).catch(function(error){
	
})
```

**✏️예제**

```jsx
const url = '나의서버주소/products';
//const url = 'https://5464c0a94-ea04-42e0-8e83-badb01b043d7.mock.pstmn.io/products';

//callback 함수, result 파라미터에 결과값 저장
axios.get(url).then(function(result){

	//status 상수 =status code 반환
	const status = result.status
 
//data 상수 =응답 data 반환
	const data = result.data 

	//에러 발생시 err에 결과값 저장
}).catch(function(err){
	
	//에러가 없으면 실행안됨
	console.log(err)
})

```

![Untitled](%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%89%E1%85%B5%E1%86%AF%2061cffbe30d964a5f89799791533741e3/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%AE%E1%86%BC%208656a010af724ca2bac7bb9128fcfd98/react%20806baaf83cd045e6bbc5740e98db8c2f/%5BReact%5D%E1%84%86%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9%E1%84%89%E1%85%A3%E1%86%B8%20c20431567a1244d6b41cdf7b86af667a/Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%204dd5e1e6febe45cfa2f39da2b6e4ccb4/Untitled.png)

- 상수 url 의 값을 다르게 작성하여 에러발생후 콘솔확인
    
    ![Untitled](%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%89%E1%85%B5%E1%86%AF%2061cffbe30d964a5f89799791533741e3/%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B4%E1%84%8C%E1%85%A1%E1%84%85%E1%85%AD%E1%84%89%E1%85%A1%E1%84%8B%E1%85%AD%E1%86%BC%E1%84%8C%E1%85%AE%E1%86%BC%208656a010af724ca2bac7bb9128fcfd98/react%20806baaf83cd045e6bbc5740e98db8c2f/%5BReact%5D%E1%84%86%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9%E1%84%89%E1%85%A3%E1%86%B8%20c20431567a1244d6b41cdf7b86af667a/Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%204dd5e1e6febe45cfa2f39da2b6e4ccb4/Untitled%201.png)
    

---

# 7. 객체의 비교

<aside>
<img src="Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/4359738.png" alt="Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/4359738.png" width="40px" /> 객체, 함수등 비원시 타입의 값을 비교할때는 얕은 비교를 한다.

</aside>

### test1.js

자바스크립트에서 객체, 함수와 같은 비원시 타입의 값을 비교 할때는 얕은 비교 

즉, 데이터의 값 자체가 아닌 데이터가 저장되어있는 주소를 참조하는 방식의 비교를 한다.

값이 같은지가 아니라 주소가 같은지를 비교하게 되는것이다.

![Untitled](Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/Untitled%209.png)

```jsx

let a = { count: 1 };
let b = { count: 1 };
if (a === b) {
  console.log("equal");
} else {
  console.log("not equal");
}

//결과는 not equal 이 출력된다.
```

![Untitled](Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/Untitled%2010.png)

### test2.js

해결방법

아래의 코드는 변수의 값은 같으나 콘솔값은 다르다

![Untitled](Javascript%20%E1%84%89%E1%85%B5%E1%86%B7%E1%84%92%E1%85%AA%20(1)%20868055e649a341479f4078035b15de96/Untitled%2011.png)

```jsx

let a = { count: 1 };
let b = a;
if (a === b) {
  console.log("equal");
} else {
  console.log("not equal");
}

//결과는 equal 이 출력된다.
```