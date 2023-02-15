---
layout: default
title: formEvent
parent: Javascript
grand_parent: 
---

# 목차
{: .no_toc}

1. TOC
{:toc}

---

# form의 value 다루기


## 문법
{: .no_toc}

`input요소.value`
{: .fs-6 .text-red-200}


{: .note }
>
> `<input type="text">` 의 value 읽기
>

### 읽기

readValue.html
{: .label .label-purple }

```html
 <input id="myText" type="text" value="안녕하세요. 여러분!" />
```

```js
const element = document.querySelector('#myText');
const value = element.value;
console.log(value);
```

{: .importnat }
> value 속성내의 값을 읽어온다
>

![]({{'/assets/img/form.jpg'| relative_url}} )


### 변경감지

`change`  - input 요소 변경시 이벤트
{: .fs-6 .text-red-200}

`input` - input 요소 키 입력시 이벤트
{: .fs-6 .text-red-200}

02.html
{: .label .label-purple }

```html
 <input id="myText" type="text" />
```

```js
// input 요소 참조
const element = document.querySelector('#myText');
// 이벤트 등록
element.addEventListener('input', handleChange);

function handleChange(event) {
  // 값 가져오기
  const value = event.target.value;
  // 화면에 반영
  document.querySelector('.log').innerHTML = value;
}

```

---
{: .mb-10}
 
## textarea를 활용한 실습

```html
<textarea id="myText">오늘의 날씨는맑음</textarea>
<p class="log"></p>
```

```js
// textarea 참조
const element = document.querySelector('#myText');
// 데이터 값 가져오기
const value = element.value;
console.log(value); // 결과: ‘오늘의 날씨는 (줄바꿈)맑음’

//이벤트추가
element.addEventListener('input', handleChange);

function handleChange(event) {
  // 데이터 값 가져오기
  const value = event.target.value;

  // 줄바꿈 코드를 태그로 변경
  const htmlStr = value.split('\n').join('<br />');
  document.querySelector('.log').innerHTML = htmlStr;
}
```

---
{: .mb-10}
 
# checkbox

{: .note }
> 체크박스의 상태확인/변경시 활용
> niput 요소의 type이 checkbox 일때 사용가능
> 상태에 따라 bool 리턴

## 체크된것 확인

## 문법
{: .no_toc}

`input요소.checked`
{: .fs-6 .text-red-200}

html
{: .label .label-purple }

```html
<label> <input type="checkbox" id="cbA" value="A" /> 체크박스 A </label>
<label> <input type="checkbox" id="cbB" value="B" checked /> 체크박스 B </label>
<label> <input type="checkbox" id="cbC" value="C" /> 체크박스 C </label>
<p class="log"></p>
```

js
{: .label .label-purple }

```js
const cbA = document.querySelector('#cbA');
const checkedA = cbA.checked; // 선택 상태 확인

const cbB = document.querySelector('#cbB');
const checkedB = cbB.checked; // 선택 상태 확인

const cbC = document.querySelector('#cbC');
const checkedC = cbC.checked; // 선택 상태 확인

console.log('checkedA 값', checkedA); // 결과: false
console.log('checkedB 값', checkedB); // 결과: true
console.log('checkedC 값', checkedC); // 결과: false


```


## 체크변경 확인

## 문법
{: .no_toc}

`change`
{: .fs-6 .text-red-200}


js
{: .label .label-purple }

```js
// 체크박스 참조
const cb = document.querySelector('#cbA');
cb.addEventListener('change', (event) => {
  // 체크박스 상태 확인
  const value = event.target.checked;

  // 화면에 표시
  const log = `체크박스 A는 ${value}로 변경되었습니다.`;
  document.querySelector('.log').innerHTML = log;
});

```


---
{: .mb-10}
 
# 드롭다운 메뉴 값 다루기

## 읽기
## 문법
{: .no_toc}

`select요소.value`
{: .fs-6 .text-red-200}

{: .note }
>
>

html
{: .label .label-purple }

```html
<select id="mySelect">
  <option value="apple">apple</option>
  <option value="orange">orange</option>
  <option value="grape" selected>grape</option>
</select>

<p class="log"></p>
```
js
{: .label .label-purple }
```js
// select 요소 참조
const element = document.querySelector('#mySelect');

// 값 가져오기
const value = element.value;

// 상태를 화면에 표시
const log = `선택된 값은 ${value}입니다.`;
document.querySelector('.log').innerHTML = log;

```

## 변경확인
## 문법
{: .no_toc}

`change`
{: .fs-6 .text-red-200}


js
{: .label .label-purple }

```js
element.addEventListener('change', handleChange);

function handleChange(event) {
  // 값 가져오기
  const value = element.value;

  // 상태를 화면에 표시
  const log = `선택된 값은 ${value}입니다.`;
  document.querySelector('.log').innerHTML = log;
}

```

---
{: .mb-10}
 
# total

{: .note }
> 행정코드출력하기
>

html
{: .label .label-purple }

```html
<select id="pref"></select>
<p class="log"></p>
```

js
{: .label .label-purple }

```js
// 행정표준코드에 따른 지역별 코드 배열
const PREF_LIST = [
 { value: 1100, name: '서울' },
 { value: 3611, name: '세종' },
 { value: 2600, name: '부산' },
 { value: 2700, name: '대구' },
 { value: 2800, name: '인천' },
 { value: 2900, name: '광주' },
 { value: 3000, name: '대전' },
 { value: 3100, name: '울산' },
 { value: 5011, name: '제주' },
 { value: 5013, name: '서귀포' },
 { value: 4111, name: '수원' },
 { value: 4128, name: '고양' },
 { value: 4113, name: '성남' },
 { value: 4146, name: '용인' },
 { value: 4119, name: '부천' },
 { value: 4127, name: '안산' },
 { value: 4122, name: '평택' },
 { value: 4115, name: '의정부' },
 { value: 4157, name: '김포' },
 { value: 4121, name: '광명' },
 { value: 4145, name: '하남' },
 { value: 4129, name: '과천' },
 { value: 4211, name: '춘천' },
 { value: 4213, name: '원주' },
 { value: 4215, name: '강릉' },
 { value: 4221, name: '속초' },
 { value: 4313, name: '충주' },
 { value: 4420, name: '아산' },
 { value: 4511, name: '전주' },
 { value: 4513, name: '군산' },
 { value: 4519, name: '남원' },
 { value: 4611, name: '목포' },
 { value: 4613, name: '여수' },
 { value: 4615, name: '순천' },
 { value: 4623, name: '광양' },
 { value: 4711, name: '포항' },
 { value: 4713, name: '경주' },
 { value: 4715, name: '김천' },
 { value: 4717, name: '안동' },
 { value: 4719, name: '구미' },
 { value: 4725, name: '상주' },
 { value: 4812, name: '창원' },
 { value: 4817, name: '진주' },
 { value: 4822, name: '통영' },
 { value: 4824, name: '사천' },
 { value: 4825, name: '김해' },
 { value: 4831, name: '거제' }

];

// select 요소 참조
const selectElement = document.querySelector('#pref');

// option 요소 초기 표시 작성
let optionString = '<option value ="">선택하세요</option>';
// option 요소를 배열에서 가져오기
PREF_LIST.forEach((item) => {
  // 시도별 value와 name 반영
  optionString +=
    `<option value="${item.value}">${item.name}</option>`;
});
// option 요소를 select 요소에 추가
selectElement.innerHTML = optionString;

// 변경 시 이벤트
selectElement.addEventListener('change', (event) => {
  // 현재 값 가져오기
  const value = event.target.value;

  // 메시지 작성
  const message = value === '' ? `지역이 선택되지 않았습니다.` :`선택된 지역은 ${value}입니다.`;

  // 화면에 표시
  document.querySelector('.log').innerHTML = message;
});

```

