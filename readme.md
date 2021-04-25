# Hahow Quality Engineer 徵才小專案

這是一個小型的徵才專案，會需要你使用熟悉的框架與語言來實作 API & UI 的驗證

> Cypress + JavaScript

> $(npm bin)/cypress run --record --key d5c30a59-a71a-4f30-bc2f-086570ac076c

> ![0-0](/doc/0-0.gif)

> test result report https://dashboard.cypress.io/projects/o2iucm/runs/1/overview

## 細部需求

### API

- URL: https://swapi.dev/
- 相關的限制可以參考網站文件

#### Goal

- 請設計一個 API 自動化程式並且驗證:
  - 有多少不同種族的人出現在第六部？
  > ![1-1](/doc/1-1.png)
  - 請依據電影集數去排序電影名字？
  > ![1-2](/doc/1-2.png)
  - 請幫我挑出電影裡所有的車輛，馬力超過１０００的。
  > ![1-3](/doc/1-3.png)

#### 加分建議

- 程式的可讀性與可維護性
> ![0-1](/doc/0-1.png)

> ![0-2](/doc/0-2.png)
- 任何你覺得很酷的事情
> ![0-3](/doc/0-3.png)

>  環境變數集中管理

> 帳號密碼等敏感資訊使用 [git-crypt](https://github.com/AGWA/git-crypt) 進行加密，就可安心放在 Git 上，解密用的 key 放在 local
- 利用 GraphQL 實作相同題目
  - URL: https://graphql.org/swapi-graphql
> ![2-1](/doc/2-1.png)

> ![2-2](/doc/2-2.png)

> ![2-3](/doc/2-3.png)

### UI

- URL: https://github.com/hahow/hahow-recruit

#### Goal

- 請設計一個 UI 自動化程式並且驗證:
  - 此專案裡有幾個合作者，並且分別列出他們的名字
  > ![3-1](/doc/3-1.png)
  - 請進入到 frontend.md 並且查看 "Wireframe" 的圖片是否存在
  > ![3-2](/doc/3-2.png)
  - 最後一個 commit 的人是誰
  > ![3-3](/doc/3-3.png)
