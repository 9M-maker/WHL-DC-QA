# 修改速查表

| 想改什麼 | 要改哪個檔案 |
|---|---|
| 規定文字、金額、電話、承辦人 | `assets/js/data.js` |
| 首頁 10 個大分類 | `assets/js/data.js` |
| 搜尋用關鍵字 | `assets/js/data.js` 的 `keywords` |
| Q&A 同義詞，例如「報帳=報銷」 | `assets/js/qa-config.js` |
| 附件 JPG | `assets/docs/contract/`、`assets/docs/medical/` |
| 附件頁數／標題／路徑 | `assets/js/data.js` 的 `attachments` |
| 顏色、字體、卡片大小 | `assets/css/styles.css` |
| 首頁固定文案 | `index.html` |
| 搜尋 / Q&A 演算法 | `assets/js/app.js`（通常不要動） |

## 修改後最重要的檢查

1. 網頁能正常開啟。
2. 10 個分類都能點，且「契約撰寫要點」與「體檢注意事項」能顯示 JPG 預覽。
3. 搜尋「護照」、「高鐵」、「勞健保」、「TOEIC」有結果。
4. Q&A 測試：「國外下船護照多久寄回？」。
5. 手機畫面沒有跑版。


## 更新附件最快方式

如果新版附件頁數沒有改變：

1. 將新版 PDF 需要保留的頁面轉成 JPG。
2. 契約附件依序命名為 `contract-01.jpg`、`contract-02.jpg`、`contract-03.jpg`。
3. 體檢附件命名為 `medical-01.jpg`。
4. 直接覆蓋 `assets/docs/` 中的同名檔案即可，不需要改 JavaScript。

如果頁數有改變，再到 `assets/js/data.js` 修改該分類的 `attachments` 陣列。
