---
title: syntax-$_SESSION
layout: default
parent: PHP
tags: [session]
---

---

1. TOC
{:toc}

---

## 세션관련 명령어

| 구문                     | 의미                                |
| :----------------------- | :---------------------------------- |
| `session_start()`        | 세션시작                            |
| `$SESSION['key']="값"`   | 세션값 저장                         |
| `$SESSION['key']`        | 세션값 취득                         |
| `unset($SESSION['key'])` | 세션값 삭제                         |
| `$SESSION['key']=""`     | 세션값 취득                         |
| `session_unset();`       | 세션비움 - 세션배열의 값 모두비우기 |
| `session_destroy();`     | 세션삭제 |


🔗[link]({{'https://wikidocs.net/116888'| relative_url}} ){: .anc}