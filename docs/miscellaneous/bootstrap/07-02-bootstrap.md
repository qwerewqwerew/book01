---
layout: default
title: 02-부트스트랩사용하기
parent: 07-Bootstrap
grand_parent: Miscellaneous
has_children: true
tags: [부트스트랩, bootstrap]
---

---

1.  TOC
{:toc}

---

# 관련링크

🔗[v4공식]({{'https://getbootstrap.com/docs/4.1/getting-started/introduction/'| relative_url}} ){: .anc}

🔗[v3공식]({{'http://bootstrapk.com/'| relative_url}} ){: .anc}

🔗[v5-grid 설명서]({{'https://getbootstrap.com/docs/5.3/layout/grid/#grid-options'| relative_url}} ){: .anc}

---

{: .mb-10}

---

{: .mb-10}

# Breakpoink(중단점)

{: .note }

> 부트스트랩은 반응형 페이지를 구현하기 위한 화면 분기를 6단계로 나누고 있다. <br/>
> 화면 크기에 해당하는 클래스는 속성과 속성값의 사이에 작성한다. 예시: `col-md-4` <br/>
> 부트스트랩 5부터는 `min-width` 로 분기가 작성된다.
> 4는 `max-width` 였고 jQuery 였다.

| Breakpoint        | Class infix | 화면폭          |
| ----------------- | :---------: | --------------- |
| Extra small       |    None     | <576px (0~576)  |
| Small             |     sm      | ≥576px (576~)   |
| Medium            |     md      | ≥768px (768~)   |
| Large             |     lg      | ≥992px (992~)   |
| Extra large       |     xl      | ≥1200px (1200~) |
| Extra extra large |     xxl     | ≥1400px (1400~) |

# Grid(그리드)

{: .warning .title }

> 그리드란? 디자인을 효율적으로 하기위한 방법중 하나
> 화면을 일정한 크기의 사각형으로 분할하여 콘텐츠를 배치하면
> 가독성있고 세련된 디자인을 쉽게 제작할수 있다

🔗[구글머티리얼디자인3-그리드시스템 설명]({{'https://m3.material.io/foundations/adaptive-design/large-screens/overview#aa2f873e-5e49-479c-8dbf-78efccfec07e'| relative_url}} ){: .anc}
![]({{'https://lh3.googleusercontent.com/qixknS5-RIlW4BccfVNAzkhu8-Bap-plL7rDI8fWA_6TCJgaDsGB5ZY2zmaedWbiEf7GPdch84CbM9kpITiLAGkGaLvwZ9JoLjt3232N2Uo=s0'| relative_url}} )

{: .note }

> 부트스트랩의 그리드 시스템은 <span class="text-blue-000">컨테이너 > 행 > 열</span> 단위로 레이아웃을 구성한다.
>
> 부트스트랩의 그리드 시스템은 6단계로 화면을 분기한다.

```css

// sm 576~767
// md ~768
// lg ~992
// xl ~1200
// xxl ~1400

// X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap

// sm
@media (min-width: 576px) { ... }

// md
@media (min-width: 768px) { ... }

// lg
@media (min-width: 992px) { ... }

// xl
@media (min-width: 1200px) { ... }

// xxl
@media (min-width: 1400px) { ... }

```

## Container(컨테이너)

> 콘텐츠 박스를 구성하는 큰 단위로 6단계의 분기점이 있다.
> xxl: 1400/xl: 1200/ lg: 992/md: 768/sm: 576 / xs: 575 미만 으로 나누며
> 화면 크기별 콘테이너의 너비는 아래의 표와 같다

| class                                              | <abbr title="화면폭 0~576 이며 접두어는 xs">Extra Small</abbr> <br> <576px | <abbr title="화면폭 576이상"> Small</abbr> <br> ≥576px | <abbr title="화면폭 768이상">Medium</abbr> <br> ≥768px | <abbr title="화면폭992이상">Large</abbr><br> ≥992px | <abbr title="화면폭1200이상">X-Large</abbr> <br> ≥1200px | <abbr title="화면폭 1400이상">XX-Large</abbr> ≥1400px |
| :------------------------------------------------- | :------------------------------------------------------------------------- | :----------------------------------------------------- | :----------------------------------------------------- | :-------------------------------------------------- | :------------------------------------------------------- | :---------------------------------------------------- |
| <span class="text-red-200">.container</span>       | 100%                                                                       | 540px                                                  | 720px                                                  | 960px                                               | 1140px                                                   | 1320px                                                |
| <span class="text-red-200">.container-sm</span>    | 100%                                                                       | 540px                                                  | 720px                                                  | 960px                                               | 1140px                                                   | 1320px                                                |
| <span class="text-red-200">.container-md</span>    | 100%                                                                       | 100%                                                   | 720px                                                  | 960px                                               | 1140px                                                   | 1320px                                                |
| <span class="text-red-200">.container-lg</span>    | 100%                                                                       | 100%                                                   | 100%                                                   | 960px                                               | 1140px                                                   | 1320px                                                |
| <span class="text-red-200">.container-xl</span>    | 100%                                                                       | 100%                                                   | 100%                                                   | 100%                                                | 1140px                                                   | 1320px                                                |
| <span class="text-red-200">.container-xxl</span>   | 100%                                                                       | 100%                                                   | 100%                                                   | 100%                                                | 100%                                                     | 1320px                                                |
| <span class="text-red-200">.container-fluid</span> | 100%                                                                       | 100%                                                   | 100%                                                   | 100%                                                | 100%                                                     | 100%                                                  |

---

{: .mb-10}

{: .new }

> 부트스트랩은 moblie-first 이므로 작은크기의 화면부터 테스트하자

container.html
{: .label .label-purple }

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>

  <body>
    <!-- xxl: 1400/xl: 1200/ lg: 992/md: 768/sm: 576 / xs: 575 미만-->
    <div class="container text-center mt-4 bg-info">
      .container (xs:100% / sm:540 / md : 720 / lg : 960 / xl: 1140 / xxl :1400
      )
    </div>
    <div class="container-sm text-center mt-4 bg-info">
      .container-sm (xs:100% / sm:540 / md : 720 / lg : 960 / xl: 1140 / xxl
      :1400 )
    </div>
    <div class="container-md text-center mt-4 bg-info">
      .container-md (xs:100% / sm:100% / md : 720 / lg : 960 / xl: 1140 / xxl
      :1400 )
    </div>
    <div class="container-lg text-center mt-4 bg-info">
      .container-lg (xs:100% / sm:100% / md : 100% / lg : 960 / xl: 1140 / xxl
      :1400 )
    </div>
    <div class="container-xl text-center mt-4 bg-info">
      .container-xl (xs:100% / sm:100% / md : 100% / lg : 100% / xl: 1140 / xxl
      :1400 )
    </div>
    <div class="container-xxl text-center mt-4 bg-info">
      .container-xxl (xs:100% / sm:100% / md : 100% / lg : 100% / xl: 100% / xxl
      :1400 )
    </div>
    <div class="container-fluid text-center mt-4 bg-info">
      .container-xxl (xs:100% / sm:100% / md : 100% / lg : 100% / xl: 100% / xxl
      :100% )
    </div>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
```

![]({{'/assets/img/bt1.jpg'| relative_url}} )

---

{: .mb-10}

## col (레이아웃 규칙)

{: .note }

> 부트스트랩은 <span class="text-red-300">1행(.row)</span>이 <span class="text-red-300">12개의 열(.col)</span>로 구성
> 화면크기마다 정해진 클래스를 부여해서 반응형 페이지 쉽게 완성할수 있음

### 사용법

{: .no_toc}

1. .container 를 쓰면 미디어쿼리부터 전부 맞춰짐
2. 약속된 접두사를 쓰면 레이아웃이 만들어짐
   - 접두사 예시 : `.row` , `.col`, `.col-xd` ...
   - <span class="text-red-300">col-화면크기-숫자</span>: 지정한 화면 크기에서 col이 몇칸을 차지할것인지 설정
   - <span class="text-red-300">col-sm-숫자</span>: 576px 이하면 세로배치 (휴대폰)
   - <span class="text-red-300">col-md-숫자</span>: 768px 이하면 세로배치
   - <span class="text-red-300">col-lg-숫자</span>: 992px 이하면 세로배치
   - <span class="text-red-300">col-xl-숫자</span>: 1200px 이하면 세로배치
3. 구조는 `.container>.row>.col*12` 가 기본
4. `.row` 에 `.col` 은 총 12개까지 들어갈수 있음 + ![]({{'/assets/img/bootstrap1.png'| relative_url}} ) 5.<span class="text-red-300">full-width</span>레이아웃을 만들때는 `.container-fluid` 사용

{: .new }

> 위의 그림과 같은 레이아웃을 만들어보자

col-start.html
{: .label .label-purple }

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://getbootstrap.com/docs/5.3/assets/css/docs.css"
      rel="stylesheet"
    />
    <title>Bootstrap Example</title>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
  </head>
  <body class="p-3 m-0 border-0 bd-example bd-example-row"></body>
</html>
```

col-final.html
{: .label .label-blue }

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link
      href="https://getbootstrap.com/docs/5.3/assets/css/docs.css"
      rel="stylesheet"
    />
    <title>Bootstrap Example</title>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
  </head>

  <body class="p-3 m-0 border-0 bd-example bd-example-row">
    <!-- Example Code -->
    <div class="container text-center mb-5">
      <div class="row d-flex ">
        <div class="col mx-2">1</div>
        <div class="col me-1">2</div>
        <div class="col gx-5">3</div>
        <div class="col">4</div>
        <div class="col">5</div>
        <div class="col">6</div>
        <div class="col">7</div>
        <div class="col">8</div>
        <div class="col">9</div>
        <div class="col">10</div>
        <div class="col">11</div>
        <div class="col">12</div>
      </div>
    </div>
    <div class="container text-center mb-5">
      <div class="row">
        <div class="col-xxl-4 col-xl-2 col-lg-8">4</div>
        <div class="col-xxl-4 col-xl-2 col-lg-4">4</div>
        <div class="col-xxl-4 col-xl-2 d-lg-none d-xl-block">4</div>
      </div>
    </div>
    <div class="container text-center mb-5">
      <div class="row">
        <div class="col-xxl-4 ">4</div>
        <div class="col-xxl-8 ">8</div>
      </div>
    </div>
    <div class="container text-center mb-5">
      <div class="row">
        <div class="col-xxl-6 ">6</div>
        <div class="col-xxl-6 ">6</div>
        <div class="col-xxl-12 col-xl-10 col-lg-4">12</div>
      </div>
    </div>

    <!-- End Example Code -->
  </body>
</html>
```

---

{: .mb-10}

# 화면분기별 가시성

## 숨기기 `.d-none`

| 화면분기     | 클래스     |
| :----------- | :--------- |
| 모두숨김     | .d-none    |
| sm 이상 숨김 | .d-sm-none |
| md 이상 숨김 | .d-md-none |
| lg 이상 숨김 | .d-lg-none |
| xl 에서 숨김 | .d-xl-none |

## 표시하기 `.d-block`

| 화면분기     | 클래스     |
| :----------- | :--------- |
| 모두표시     | .d-block    |
| sm 이상 보임 | .d-sm-block |
| md 이상 보임 | .d-md-block |
| lg 이상 보임 | .d-lg-block |
| xl 에서 보임 | .d-xl-block |

## 조합사용


| 화면분기     | 클래스     |
| :----------- | :--------- |
| xs 에서만 숨김 |.d-none .d-sm-block	 |
| sm 에서만 숨김 |.d-sm-none .d-md-block	 |
| md 에서만 숨김 |.d-md-none .d-lg-block	 |
| lg 에서만 숨김 |.d-lg-none .d-xl-block	 |
| xs 에서만 보임 |.d-block .d-sm-none	 |
| sm 에서만 보임 |.d-none .d-sm-block .d-md-none |
| md 에서만 보임 |.d-none .d-md-block .d-lg-none |
| lg 에서만 보임 |.d-none .d-lg-block .d-xl-none |
| xl 에서만 보임 |.d-none .d-xl-block	 |

---

{: .mb-10}

## 거터

{: .note }

> 😀 컬럼 사이의 여백
> ver 5에 추가된 속성
> 컬럼사이의 여백으로 최대 **`1.5rem` (`24px`) 이다**

### 세로거터

{: .no_toc}

{: .important }

> `.gx-*` 를 추가한다.
>
> `container px-4` 가 있을 경우 보다 큰값으로 `gx-5` 넣어야 한다.

![]({{'/assets/img/bootstrap2.png'| relative_url}} )

### ex

html
{: .label .label-purple }

```html
<div class="container px-4 text-center">
  <div class="row gx-5">
    <div class="col">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
  </div>
</div>
```

### 가로거터

{: .no_toc}

{: .important }

> 접두사에 `.gy-` 를 사용 하고 부모`.row` 에`.overflow-hidden `를 추가한다

![]({{'/assets/img/bootstrap3.png'| relative_url}} )

### ex

html
{: .label .label-purple }

```html
<div class="container overflow-hidden text-center">
  <div class="row gy-5">
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
  </div>
</div>
```

{: .warning }

> 거터가 없을경우
> `.g-0`

---

{: .mb-10}

## spacing (여백)

### 여백의 종류

{: .no_toc}

**m/p**

- <span class="text-red-300">m</span> : Margin
- <span class="text-red-300">p</span> : Padding

### 여백의 방향

{: .no_toc}

**t , b , l , r ,x , y**

- <span class="text-red-300">t</span> : top
- <span class="text-red-300">b</span> : bottom
- <span class="text-red-300">l</span> : left
- <span class="text-red-300">r</span> : right
- <span class="text-red-300">s</span> : Start -> left , right
- <span class="text-red-300">e</span> : End -> top , bottom

### 여백의 크기

{: .no_toc}

**0, 1, 2, 3, 4, 5, auto**

- <span class="text-red-300">0</span> : 0
- <span class="text-red-300">1</span> : .25rem( font-size가 16px이면, 4px) 크기
- <span class="text-red-300">2</span> : .5rem( font-size가 16px이면, 8px) 크기
- <span class="text-red-300">3</span> : 1rem( font-size가 16px이면, 16px) 크기
- <span class="text-red-300">4</span> : 1.5rem( font-size가 16px이면, 24px) 크기
- <span class="text-red-300">5</span> : 3rem( font-size가 16px이면, 48px) 크기
- <span class="text-red-300">auto</span> : auto

**n1, n2, n3, n4, n5**

- <span class="text-red-300">n</span> : negative을 의미
- <span class="text-red-300">n1</span> : -.25rem( font-size가 16px이면, -4px) 크기
- <span class="text-red-300">n2</span> : -.5rem( font-size가 16px이면, -8px) 크기
- <span class="text-red-300">n3</span> : -1rem( font-size가 16px이면, -16px) 크기
- <span class="text-red-300">n4</span> : -1.5rem( font-size가 16px이면, -24px) 크기
- <span class="text-red-300">n5</span> : -3rem( font-size가 16px이면, -48px) 크기
