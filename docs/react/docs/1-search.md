---
title: 1-search
layout: default
parent: react
tags: [select,search]
---

---

1. TOC
{:toc}

---

## 참고링크
{: .no_toc}

🔗[완성코드]({{'https://codesandbox.io/s/exciting-glade-eyxz7y?file=/src/Search.js:62-327'| relative_url}} ){: .anc}


---


# 01-컴포넌트 생성

1. search.js 파일생성

2. React 모듈을 임포트 한다.

3. data 를 입력한다

4. 컴포넌트를 내보낸다
```js

import React from 'react';

const data = [
  {
    id: "0",
    title: "title 1",
    main_category: "cat 1"
  },
  {
    id: "1",
    title: "title 2",
    main_category: "cat 2"
  },
  {
    id: "2",
    title: "title 3 ",
    main_category: "cat 3 "
  }
];

const Search = () => {
  return (
    <div>
      Search
    </div>
  )
}
export default Search;
```

## 02 useState 작성

컴포넌
{: .box .bg-white-100}

```js
const Search = () => {
  const [datas, setDatas] = React.useState(data);
  return (
    <div>
      {datas && datas.map((item, key) => (
        <div className="blog-item">
          {item.title && (
            <h3>
              {item.title}
            </h3>
          )}
        </div>
      ))}
    </div>
  )
}
export default Search;
```