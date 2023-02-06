---
layout: default
title: 02-부트스트랩사용하기
parent: 07-Bootstrap
grand_parent: Miscellaneous
has_children: true
tags: [부트스트랩 ,bootstrap ]
---
 
---

 1. TOC
{:toc}

---

 
# 관련링크

🔗[v4]({{'https://getbootstrap.com/docs/4.1/getting-started/introduction/'| relative_url}} ){: .anc}

🔗[v3]({{'http://bootstrapk.com/'| relative_url}} ){: .anc}

🔗[v5-grid 설명]({{'https://getbootstrap.com/docs/5.3/layout/grid/#grid-options'| relative_url}} ){: .anc}

---
{: .mb-10}
 
# Grid(그리드)

{: .warning .title }
>   그리드란? 디자인을 효율적으로 하기위한 방법중 하나
>   화면을 일정한 크기의 사각형으로 분할하여 콘텐츠를 배치하면
>   가독성있고 세련된 디자인을 쉽게 제작할수 있다

🔗[머티리얼디자인3의 그리드 설명]({{'https://m3.material.io/foundations/adaptive-design/large-screens/overview#aa2f873e-5e49-479c-8dbf-78efccfec07e'| relative_url}} ){: .anc}
    ![]({{'https://lh3.googleusercontent.com/qixknS5-RIlW4BccfVNAzkhu8-Bap-plL7rDI8fWA_6TCJgaDsGB5ZY2zmaedWbiEf7GPdch84CbM9kpITiLAGkGaLvwZ9JoLjt3232N2Uo=s0'| relative_url}} )


{: .note }
> 부트스트랩의 그리드 시스템은 <span class="text-blue-000">컨테이너 > 행 > 열</span> 단위로 레이아웃을 구성한다.
>
> 부트스트랩의 그리드 시스템은 6단계로 화면을 분기한다.
>

## Container(컨테이너)

> 콘텐츠 박스를 구성하는큰 단위로 6단계의 분기점이 있다.

|              | Extra Small <br>  <576px  | Small <br>  ≥576px| Medium <br>  ≥768px| Large<br>  ≥992px| X-Large <br>  ≥1200px| XX-Large ≥1400px|
|:-------------|:------------------|:------|:------|:------|:------|:------|
|.container			|100%		|540px|	720px	|960px	|1140px	|1320px|
|.container-sm	|	100%	|540px|	720px	|960px	|1140px	|1320px|
|.container-md	|	100%	|100%	|720px	|960px	|1140px	|1320px|
|.container-lg	|	100%	|100%	|100%		|960px	|1140px	|1320px|
|.container-xl	|	100%	|100%	|100%		|100%		|1140px	|1320px|
|.container-xxl	|100%		|100%	|100%		|100%		|100%		|1320px|
|.container-fluid|100%	|100%	|100%		|100%		|100%		|100%|


---
{: .mb-10}
 

## col (레이아웃 규칙)

{: .note }
>부트스트랩은 1행(.row)이 12개의 열(.col)로 구성
>화면크기마다 정해진 클래스를 부여해서 반응형 페이지 쉽게 완성할수 있음
>

### 사용법
{: .no_toc}

1. .container 를 쓰면 미디어쿼리부터 전부 맞춰짐
2. 약속된 접두사를 쓰면 레이아웃이 만들어짐
    + 접두사 예시 : `.row` , `.col`, `.col-xd` ...
    + <span class="text-red-300">col-화면크기-숫자</span>:  지정한 화면 크기에서 col이 몇칸을 차지할것인지 설정
    + <span class="text-red-300">col-sm-숫자</span>: 576px 이하면 세로배치  (휴대폰)
    + <span class="text-red-300">col-md-숫자</span>: 768px 이하면 세로배치
    + <span class="text-red-300">col-lg-숫자</span>: 992px 이하면 세로배치
    + <span class="text-red-300">col-xl-숫자</span>: 1200px 이하면 세로배치
3. 구조는 `.container>.row>.col*12`  가 기본
4. `.row` 에 `.col` 은 총 12개까지 들어갈수 있음
    + ![]({{'/assets/img/bootstrap1.png'| relative_url}} )
5.<span class="text-red-300">full-width</span>레이아웃을 만들때는 `.container-fluid` 사용


---
{: .mb-10}
 
## 거터

{: .note }
> 😀 컬럼 사이의 여백
> ver 5에 추가된 속성
> 컬럼사이의 여백으로 최대 **`1.5rem` (`24px`)  이다**
>

### 세로거터
{: .no_toc}

{: .important }
> `.gx-*` 를 추가한다.
>
> `container px-4` 가 있을 경우 보다 큰값으로 `gx-5` 넣어야 한다.
>

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
> 접두사에 `.gy-` 를  사용 하고 부모`.row` 에`.overflow-hidden `를 추가한다
>


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
>
> 거터가 없을경우 
> `.g-0`
>


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