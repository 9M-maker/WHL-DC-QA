# 船員行前助手－GitHub Pages 版

這是一個純 **HTML + CSS + JavaScript** 的靜態網站，可直接部署到 GitHub Pages，不需要 Python、資料庫或伺服器。

## 專案結構

```text
crew-guide-github-pages/
├─ index.html
├─ .nojekyll
└─ assets/
   ├─ css/
   │  └─ styles.css
   └─ js/
      ├─ data.js       # 最常修改：分類與所有內容
      ├─ qa-config.js  # Q&A 同義詞、問句意圖設定
      └─ app.js        # 網頁互動邏輯，通常不用改
```

## GitHub Pages 部署

1. 在 GitHub 建立一個 repository，例如 `crew-guide`。
2. 把本資料夾內的所有檔案與 `assets` 資料夾上傳到 repository 根目錄。
3. GitHub repository → **Settings** → **Pages**。
4. `Build and deployment` 選 **Deploy from a branch**。
5. Branch 選 `main`，資料夾選 `/(root)`，按 **Save**。
6. 等待 GitHub 完成部署。網址通常會是：

```text
https://你的GitHub帳號.github.io/crew-guide/
```

如果 repository 名稱就是 `你的GitHub帳號.github.io`，網址則會是：

```text
https://你的GitHub帳號.github.io/
```

## 往後修改：只要知道這 4 個位置

### 1. 修改規定、電話、金額或新增內容

開啟：

```text
assets/js/data.js
```

每個細項長這樣：

```javascript
{
  id: "appointment",
  title: "任卸職辦理注意事項",
  source: "附件第 1 頁",
  keywords: "國外下船 登機證 船員手冊 護照",
  html: `<p>這裡放顯示內容</p>`
}
```

- `id`：不要隨意改。
- `title`：網頁上看到的細項標題。
- `source`：來源頁次。
- `keywords`：搜尋與 Q&A 判斷會使用，可多放幾種常見說法。
- `html`：真正顯示給船員看的內容。

### 2. 修改首頁 8 大分類

同樣在：

```text
assets/js/data.js
```

最上面的 `categories` 就是首頁分類。

```javascript
{
  id: "before",
  icon: "🧳",
  title: "上船前準備",
  desc: "裝備、文件、體檢、疫苗、證件效期",
  topicIds: ["equipment", "notice", "documents", "renewal"]
}
```

`topicIds` 決定此分類會顯示哪些細項。

### 3. 讓 Q&A 聽懂更多說法

開啟：

```text
assets/js/qa-config.js
```

例如原本：

```javascript
["報銷", "核銷", "請款", "申報費用"]
```

如果新進船員常說「報帳」，改成：

```javascript
["報銷", "核銷", "請款", "申報費用", "報帳"]
```

之後問「高鐵怎麼報帳」也更容易找到正確答案。

### 4. 修改顏色、字體、卡片樣式

開啟：

```text
assets/css/styles.css
```

最上方 `:root` 是主要配色：

```css
:root {
  --navy:#0e2b45;
  --teal:#2d9c95;
  --bg:#f4f8fb;
}
```

## 最簡單的更新流程

日後公司發布新版 PDF 時，建議：

1. 比對新版與舊版規定。
2. 只修改 `assets/js/data.js` 中受影響的細項。
3. 如果有新的常用說法，再補到 `assets/js/qa-config.js`。
4. Commit / Push 到 GitHub。
5. GitHub Pages 會自動更新網站。

## 本機預覽

通常直接雙擊 `index.html` 即可。若瀏覽器有限制，也可在 VS Code 安裝 Live Server 後開啟。

此專案沒有外部 JavaScript 套件，也沒有 API 金鑰，因此部署後不會產生額外 API 費用。
