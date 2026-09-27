const DATA = {
  "parents": [
    {
      "id": "taiwan",
      "icon": "🇹🇼",
      "title": "台灣適任證書（大證）申請",
      "desc": "應備資料、三份主要申請文件、自行換證說明與空白表單下載。",
      "children": [
        "tw_overview",
        "tw_coc",
        "tw_proxy",
        "tw_service",
        "tw_self",
        "tw_download"
      ]
    },
    {
      "id": "training",
      "icon": "📒",
      "title": "訓練紀錄簿撰寫注意事項",
      "desc": "從第一條船開始填寫，到滿 365 日後送審，請務必閱讀常見錯誤範例。",
      "children": [
        "tr_start",
        "tr_sign",
        "tr_final",
        "tr_fix",
        "tr_submit",
        "tr_official",
        "tr_errors"
      ]
    },
    {
      "id": "sg",
      "icon": "🇸🇬",
      "title": "新加坡證書申請注意事項",
      "desc": "應備文件、檔案命名、SBTA／IMDA 申請書與台灣證件、英文培訓證明範例。",
      "children": [
        "sg_overview",
        "sg_filename",
        "sg_sbta",
        "sg_imda",
        "sg_twdocs",
        "sg_certs",
        "sg_other",
        "sg_download"
      ]
    }
  ],
  "children": [
    {
      "id": "tw_overview",
      "parent": "taiwan",
      "title": "應備資料總覽",
      "short": "先確認訓練紀錄簿、規費、體檢、證書與照片是否齊全。",
      "keywords": "台灣 大證 換證 應備資料 1800 訓練紀錄簿 體檢 考試及格證書 照片 手冊 護照",
      "html": "<div class='scroll'><table><thead><tr><th>項目</th><th>重點</th></tr></thead><tbody><tr><td>訓練紀錄簿</td><td>可於實際滿 365 天前先寄；封面貼便利貼註明姓名與滿 365 天日期。</td></tr><tr><td>規費</td><td>新台幣 1,800 元現金：適任大證 800＋GMDSS 大證 800＋資歷證明規費 200。</td></tr><tr><td>台灣體檢表</td><td>正本 1 份，效期 1 年內；簽名欄記得簽，現職勾「航海員」。</td></tr><tr><td>航海人員考試及格證書</td><td>正本與影本各 1 份；不要提供成績單。</td></tr><tr><td>適任證書申請表</td><td>正本 2 張，依範例填寫並簽名。</td></tr><tr><td>辦理執照委託書</td><td>正本 1 張，依範例填寫並簽名。</td></tr><tr><td>船員服務經歷證明申請書</td><td>正本 1 張，正確填寫並簽名。</td></tr><tr><td>1 吋大頭照</td><td>4 張。</td></tr><tr><td>船員手冊影本</td><td>第一頁及最新資歷頁。</td></tr><tr><td>護照影本</td><td>第一頁至最後一個有出入境章頁面；目前在國輪上可不用提供。</td></tr></tbody></table></div><div class='note'>項目 2～10 建議整理在一個 L 型資料夾，連同訓練紀錄簿放入同一信封寄送。</div>",
      "imgs": [
        [
          "assets_cer_renewal/docs/taiwan/checklist.jpg",
          "應備資料檢查表"
        ]
      ]
    },
    {
      "id": "tw_coc",
      "parent": "taiwan",
      "title": "適任證書申請書",
      "short": "正本 2 張，依範例正確填寫後簽名。",
      "keywords": "適任證書 申請書 2張 正本 範例",
      "html": "<ul><li>提供正本 2 張。</li><li>請依範例正確填寫。</li><li>完成後簽名即可。</li></ul>",
      "imgs": [
        [
          "assets_cer_renewal/docs/taiwan/coc-form-sample.jpg",
          "(SAMPLE) 船員適任證書申請書"
        ]
      ]
    },
    {
      "id": "tw_proxy",
      "parent": "taiwan",
      "title": "辦理執照委託書",
      "short": "正本 1 張，依範例填寫並簽名。",
      "keywords": "委託書 辦理執照 正本 1張",
      "html": "<ul><li>提供正本 1 張。</li><li>請依範例正確填寫。</li><li>完成後簽名即可。</li></ul>",
      "imgs": [
        [
          "assets_cer_renewal/docs/taiwan/proxy-sample.jpg",
          "(SAMPLE) 辦理執照委託書"
        ]
      ]
    },
    {
      "id": "tw_service",
      "parent": "taiwan",
      "title": "船員服務經歷證明申請書",
      "short": "正本 1 張，正確填寫並簽名。",
      "keywords": "服務經歷 證明 申請書 正本",
      "html": "<ul><li>提供正本 1 張。</li><li>請正確填寫各欄位。</li><li>完成後簽名即可。</li></ul>",
      "imgs": [
        [
          "assets_cer_renewal/docs/taiwan/service-record-sample.jpg",
          "船員服務經歷證明申請書｜表單預覽"
        ]
      ]
    },
    {
      "id": "tw_self",
      "parent": "taiwan",
      "title": "自行換證",
      "short": "自行前往航港局辦理時的地點、費用與提醒。",
      "keywords": "自行換證 自行申請 台灣船副適任證書 航港局 北航 中航 南航 東航 費用",
      "html": "\n<ul>\n  <li><strong>辦理地點：</strong>請至交通部航港局各地區港務中心（北航／中航／南航／東航）自行換證。</li>\n  <li><strong>事前提醒：</strong>建議先打電話確認應備資料細節與營業時間，再前往辦理。</li>\n  <li><strong>換證費用：</strong>交通部適任證書 800 元 + GMDSS 800 元（實際金額仍請自行確認）。</li>\n  <li><strong>費用說明：</strong>自行換證的費用需由本人負擔，無法向公司報核。</li>\n  <li><strong>應備文件：</strong>請見「船員適任證書申請書」所列之項目。</li>\n</ul>\n<div class=\"note\">本區內容依你提供的「自行申請台灣船副適任證書」文件整理。</div>\n",
      "imgs": []
    },
    {
      "id": "tw_download",
      "parent": "taiwan",
      "title": "空白表單下載",
      "short": "保留正式下載網址，之後可自行填入。",
      "keywords": "空白 表單 下載",
      "html": "<div class='downloads'><div class='drow'><div><h4>適任證書申請書</h4><p>空白表單下載網址</p></div><span class='placeholder'>請自行填入連結</span></div><div class='drow'><div><h4>辦理執照委託書</h4><p>空白表單下載網址</p></div><span class='placeholder'>請自行填入連結</span></div><div class='drow'><div><h4>船員服務經歷證明申請書</h4><p>空白表單下載網址</p></div><span class='placeholder'>請自行填入連結</span></div></div>",
      "imgs": []
    },
    {
      "id": "tr_start",
      "parent": "training",
      "title": "上船前與基本填寫",
      "short": "第一條船就開始寫，依紀錄簿說明完整填寫。",
      "keywords": "第一條船 第12頁 船員名單 訓練紀錄簿",
      "html": "<ul><li>上船前先購買訓練紀錄簿，第一條船就開始填寫。</li><li>依訓練紀錄簿內說明，務必完整填寫。</li><li>第 12 頁先填妥任職過的各條船船名。</li><li>船員名單請用訂書機或加強黏貼，以免遺失。</li></ul>",
      "imgs": []
    },
    {
      "id": "tr_sign",
      "parent": "training",
      "title": "簽署、蓋章與簽署人資料",
      "short": "每頁都要蓋船章，簽署人與學員應符合規定。",
      "keywords": "船章 蓋章 簽署人 同船 同部門 C頁",
      "html": "<ul><li><strong>每一頁都需蓋船章。</strong></li><li>C 頁如寫滿，可自行影印續填，影印頁仍需蓋船章。</li><li>訓練簽署人與學員在訓練期間應服務於同一艘船舶，並依規定具相應職務資格。</li><li>簽署人員基本資料表不足時可自行添加。</li></ul>",
      "imgs": []
    },
    {
      "id": "tr_final",
      "parent": "training",
      "title": "總結報告與船長評語",
      "short": "總結報告一定要有評定意見，否則可能不受理。",
      "keywords": "總結報告 船長評語 評定意見",
      "html": "<ul><li>相關總結頁面中間請自行準備複寫紙，再交船長及公司長官填寫評語與簽名，兩頁都需蓋船章。</li><li>船長評語可包含：完成相關訓練、表現良好或令人滿意、具備合格船副能力等重點。</li><li>官方審查規定：總結報告需填寫評定意見並簽署；未填寫者不予受理。</li></ul>",
      "imgs": []
    },
    {
      "id": "tr_fix",
      "parent": "training",
      "title": "塗改、補簽與其他公司實習",
      "short": "塗改要標示；曾在其他公司實習者可能需補簽。",
      "keywords": "塗改 補簽 其他公司 非萬海 實習",
      "html": "<ul><li>所有塗改處請在側邊貼標籤並以鉛筆圈起來，需公司蓋章。</li><li>若不知道同船長官下船日，可貼標籤＋鉛筆圈起來，由公司補填。</li><li>曾在其他公司船舶實習者，若後續以萬海船員身分換證，原有簽名旁可能需由萬海船上長官補簽。</li><li>下船前請仔細檢查漏簽名或漏蓋章，避免再送回船上補辦。</li></ul>",
      "imgs": []
    },
    {
      "id": "tr_submit",
      "parent": "training",
      "title": "滿 365 日後送審",
      "short": "實習天數滿 365 日後，寄回公司審核與簽章。",
      "keywords": "365天 滿365 送審 公司 審核",
      "html": "<ul><li>實習天數滿 <strong>365 日</strong>下船後，請寄回公司審核並交長官簽名蓋章。</li><li>複寫紙請先自行裁好、釘好或貼好再寄送。</li><li>寄出前再次確認需蓋章、簽名及補填位置是否已標示清楚。</li></ul>",
      "imgs": []
    },
    {
      "id": "tr_official",
      "parent": "training",
      "title": "官方審查規定與範例",
      "short": "預覽航港局審查作業規定與 2A 操作級航行員範例。",
      "keywords": "航港局 官方 審查 2A 範例 PDF",
      "html": "<p>以下可查看官方文件的預覽；GitHub 版本中也保留原始 PDF 可直接另開。</p><div class='file-actions'><a class='file-link' href='assets/docs/training/official-review-rules.pdf' target='_blank' rel='noopener'>開啟審查作業規定 PDF ↗</a><a class='file-link' href='assets/docs/training/official-sample-book.pdf' target='_blank' rel='noopener'>開啟 2A 範例 PDF ↗</a></div>",
      "imgs": [
        [
          "assets_cer_renewal/docs/training/official-review-rules.jpg",
          "船上訓練紀錄簿審查作業規定｜第 1 頁"
        ],
        [
          "assets_cer_renewal/docs/training/official-sample-book.jpg",
          "2A 操作級航行員訓練紀錄簿範例｜第 1 頁"
        ]
      ]
    },
    {
      "id": "tr_errors",
      "parent": "training",
      "title": "錯誤範例",
      "short": "常見錯誤依編碼 1～10 排列；點選條目後才顯示 JPG 預覽。",
      "keywords": "錯誤範例 常漏資訊 1 2 3 4 5 6 7 8 9 10 簽名 船名 救生艇 絞纜機 淡水艙 夏季乾舷 日期 船長",
      "html": "\n<p>以下依附件編碼 <strong>1-10</strong> 排列。預設收合，點選項目後才會顯示 JPG 錯誤範例。</p>\n<div class=\"error-list\">\n\n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">01</span>\n        <span>沒列出簽名人姓名</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"assets/docs/training/errors/case-01.jpg\" alt=\"錯誤案例 1：沒列出簽名人姓名\" data-full=\"assets/docs/training/errors/case-01.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">02</span>\n        <span>沒有填船名</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"assets/docs/training/errors/case-02.jpg\" alt=\"錯誤案例 2：沒有填船名\" data-full=\"assets/docs/training/errors/case-02.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">03</span>\n        <span>救生艇資訊沒有填</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"assets/docs/training/errors/case-03.jpg\" alt=\"錯誤案例 3：救生艇資訊沒有填\" data-full=\"assets/docs/training/errors/case-03.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">04</span>\n        <span>救生艇類型沒有填</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"assets/docs/training/errors/case-04.jpg\" alt=\"錯誤案例 4：救生艇類型沒有填\" data-full=\"assets/docs/training/errors/case-04.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">05</span>\n        <span>絞纜機資訊漏填</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"assets/docs/training/errors/case-05.jpg\" alt=\"錯誤案例 5：絞纜機資訊漏填\" data-full=\"assets/docs/training/errors/case-05.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">06</span>\n        <span>淡水艙資訊漏填</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"assets/docs/training/errors/case-06.jpg\" alt=\"錯誤案例 6：淡水艙資訊漏填\" data-full=\"assets/docs/training/errors/case-06.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">07</span>\n        <span>夏季乾舷資訊漏填</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"assets/docs/training/errors/case-07.jpg\" alt=\"錯誤案例 7：夏季乾舷資訊漏填\" data-full=\"assets/docs/training/errors/case-07.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">08</span>\n        <span>簽名日期沒有年份</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"assets/docs/training/errors/case-08.jpg\" alt=\"錯誤案例 8：簽名日期沒有年份\" data-full=\"assets/docs/training/errors/case-08.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">09</span>\n        <span>船長簽名沒有日期</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"assets/docs/training/errors/case-09.jpg\" alt=\"錯誤案例 9：船長簽名沒有日期\" data-full=\"assets/docs/training/errors/case-09.jpg\">\n      </div>\n    </details>\n    \n    <details class=\"error-item\">\n      <summary>\n        <span class=\"error-no\">10</span>\n        <span>簽名者不是辦證當下的船長</span>\n        <span class=\"error-arrow\">⌄</span>\n      </summary>\n      <div class=\"error-preview\">\n        <p>點擊圖片可放大檢視。</p>\n        <img src=\"assets/docs/training/errors/case-10.jpg\" alt=\"錯誤案例 10：簽名者不是辦證當下的船長\" data-full=\"assets/docs/training/errors/case-10.jpg\">\n      </div>\n    </details>\n    \n</div>\n",
      "imgs": []
    },
    {
      "id": "sg_overview",
      "parent": "sg",
      "title": "應備文件總表",
      "short": "先確認台灣證件、英文培訓證明、照片與兩份申請書都齊全。",
      "keywords": "MED TW PP SMB PHOTO GMDSS COC BASIC FIRE BOAT FIRST AID ECDIS BRM SSD ARPA SBTA IMDA",
      "html": "<div class='scroll'><table><thead><tr><th>項目</th><th>指定檔名</th><th>重點</th></tr></thead><tbody><tr><td>交通部體檢表</td><td>MED TW</td><td>PDF，不超過 1000KB；正反面都需掃描，效期至少 8 個月。</td></tr><tr><td>護照</td><td>PP</td><td>PDF，不超過 1000KB；需有簽名。</td></tr><tr><td>海員手冊</td><td>SMB</td><td>PDF，不超過 1000KB；第一頁到資歷頁都需掃描。</td></tr><tr><td>大頭照</td><td>PHOTO</td><td>JPG，不超過 50KB；小於 400×514 pixels。</td></tr><tr><td>台灣證書</td><td>TW GMDSS／TW COC</td><td>PDF 或 JPG，不超過 1000KB。</td></tr><tr><td>英文培訓證明</td><td>BASIC／FIRE／BOAT／FIRST AID／ECDIS／BRM／SSD／ARPA</td><td>PDF 或 JPG，不超過 1000KB；其中 BASIC/FIRE/BOAT/FIRST AID 培訓日期需在 4 年 5 個月內。</td></tr><tr><td>Application Form-SBTA</td><td>SBTA</td><td>填妥、英文簽名、日期押填寫當日。</td></tr><tr><td>IMDA GMDSS Form</td><td>IMDA</td><td>填妥、英文簽名、日期押填寫當日。</td></tr></tbody></table></div>",
      "imgs": [
        [
          "assets_cer_renewal/docs/singapore/document-list.jpg",
          "辦理新加坡證書應備文件總表"
        ]
      ]
    },
    {
      "id": "sg_filename",
      "parent": "sg",
      "title": "檔案格式、大小與命名",
      "short": "依指定檔名存檔，並在檔名後加自己的英文名字首。",
      "keywords": "檔名 命名 格式 大小 英文名字首",
      "html": "<ul><li>依總表指定檔名，例如 MED TW、PP、SMB、BASIC、SBTA、IMDA。</li><li>附件要求在指定檔名後再加上自己的英文名字首，降低檔案混淆。</li><li>各檔案須符合 PDF/JPG 與大小限制。</li></ul>",
      "imgs": [
        [
          "assets_cer_renewal/docs/singapore/filename-rule.jpg",
          "檔名命名注意事項"
        ]
      ]
    },
    {
      "id": "sg_sbta",
      "parent": "sg",
      "title": "Application Form-SBTA",
      "short": "填妥、英文簽名，日期押填寫當日。",
      "keywords": "SBTA application form 英文簽名",
      "html": "<ul><li>依範例填妥各欄位。</li><li>英文簽名。</li><li>日期填寫當日。</li><li>指定檔名：SBTA。</li><li>PDF 或 JPG，不超過 1000KB。</li></ul>",
      "imgs": [
        [
          "assets_cer_renewal/docs/singapore/sbta-sample.jpg",
          "(SAMPLE) Application Form-SBTA"
        ]
      ]
    },
    {
      "id": "sg_imda",
      "parent": "sg",
      "title": "IMDA GMDSS Form",
      "short": "填妥、英文簽名，日期押填寫當日。",
      "keywords": "IMDA GMDSS 英文簽名",
      "html": "<ul><li>依範例填妥各欄位。</li><li>英文簽名。</li><li>日期填寫當日。</li><li>指定檔名：IMDA。</li><li>PDF 或 JPG，不超過 1000KB。</li></ul>",
      "imgs": [
        [
          "assets_cer_renewal/docs/singapore/imda-gmdss-sample.jpg",
          "(SAMPLE) IMDA GMDSS Form"
        ]
      ]
    },
    {
      "id": "sg_twdocs",
      "parent": "sg",
      "title": "台灣證件掃描要求",
      "short": "MED TW、PP、SMB 改為展開式檢視，點開後才顯示 JPG。",
      "keywords": "MED TW PP SMB 體檢 護照 海員手冊 掃描",
      "html": "\n<p>以下範例改為展開式檢視，點開後才會看到對應 JPG 預覽。</p>\n<div class=\"error-list\">\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">01</span><span>MED TW（交通部體檢表）</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\">\n      <p>體檢表正反面皆需掃描，效期至少 8 個月。</p>\n      <img src=\"assets/docs/singapore/med-tw-sample.jpg\" alt=\"MED TW 範例\" data-full=\"assets/docs/singapore/med-tw-sample.jpg\">\n    </div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">02</span><span>PP（護照）</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\">\n      <p>護照需有簽名，並符合附件要求。</p>\n      <img src=\"assets/docs/singapore/pp-sample.jpg\" alt=\"PP 範例\" data-full=\"assets/docs/singapore/pp-sample.jpg\">\n    </div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">03</span><span>SMB（海員手冊）</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\">\n      <p>海員手冊需從第一頁掃描到資歷頁。</p>\n      <img src=\"assets/docs/singapore/smb-sample.jpg\" alt=\"SMB 範例\" data-full=\"assets/docs/singapore/smb-sample.jpg\">\n    </div>\n  </details>\n</div>\n",
      "imgs": []
    },
    {
      "id": "sg_certs",
      "parent": "sg",
      "title": "台灣證書與英文培訓證明",
      "short": "TW GMDSS、TW COC 與各英文培訓證明改為展開式檢視。",
      "keywords": "TW GMDSS TW COC BASIC FIRE BOAT FIRST AID ECDIS BRM SSD ARPA",
      "html": "\n<p>以下依文件類型整理為展開式檢視，點開後才會看到對應 JPG 範例。</p>\n<div class=\"note\">BASIC／FIRE／BOAT／FIRST AID 的培訓日期須在 4 年 5 個月內；其餘仍請依附件要求送件。</div>\n<div class=\"error-list\">\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">01</span><span>TW GMDSS</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"assets/docs/singapore/tw-gmdss.jpg\" alt=\"TW GMDSS\" data-full=\"assets/docs/singapore/tw-gmdss.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">02</span><span>TW COC</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"assets/docs/singapore/tw-coc.jpg\" alt=\"TW COC\" data-full=\"assets/docs/singapore/tw-coc.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">03</span><span>BASIC</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"assets/docs/singapore/basic.jpg\" alt=\"BASIC\" data-full=\"assets/docs/singapore/basic.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">04</span><span>FIRE</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"assets/docs/singapore/fire.jpg\" alt=\"FIRE\" data-full=\"assets/docs/singapore/fire.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">05</span><span>BOAT</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"assets/docs/singapore/boat.jpg\" alt=\"BOAT\" data-full=\"assets/docs/singapore/boat.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">06</span><span>FIRST AID</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"assets/docs/singapore/first-aid.jpg\" alt=\"FIRST AID\" data-full=\"assets/docs/singapore/first-aid.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">07</span><span>ECDIS</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"assets/docs/singapore/ecdis.jpg\" alt=\"ECDIS\" data-full=\"assets/docs/singapore/ecdis.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">08</span><span>BRM</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"assets/docs/singapore/brm.jpg\" alt=\"BRM\" data-full=\"assets/docs/singapore/brm.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">09</span><span>SSD</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"assets/docs/singapore/ssd.jpg\" alt=\"SSD\" data-full=\"assets/docs/singapore/ssd.jpg\"></div>\n  </details>\n  <details class=\"error-item\">\n    <summary><span class=\"error-no\">10</span><span>ARPA</span><span class=\"error-arrow\">⌄</span></summary>\n    <div class=\"error-preview\"><img src=\"assets/docs/singapore/arpa.jpg\" alt=\"ARPA\" data-full=\"assets/docs/singapore/arpa.jpg\"></div>\n  </details>\n</div>\n",
      "imgs": []
    },
    {
      "id": "sg_other",
      "parent": "sg",
      "title": "其他申請注意事項",
      "short": "曾在非萬海船實習者需另提供船舶資料。",
      "keywords": "非萬海 實習 船名 船籍 IMO Official No",
      "html": "<ul><li>若曾在其他航商船舶實習，附件要求在 e-mail 內文另提供英文船名、船籍、IMO No.、Official No.。</li><li>每項資料存成一個檔案後，備妥整包寄送承辦端。</li><li>後續仍需等待公司及新加坡端辦理與通知。</li></ul>",
      "imgs": [
        [
          "assets_cer_renewal/docs/singapore/non-wanhai-internship.jpg",
          "曾在非萬海船實習注意事項"
        ]
      ]
    },
    {
      "id": "sg_download",
      "parent": "sg",
      "title": "空白表單下載",
      "short": "預留 SBTA 與 IMDA GMDSS 空白表單連結。",
      "keywords": "空白表單 下載 SBTA IMDA",
      "html": "<div class='downloads'><div class='drow'><div><h4>Application Form-SBTA</h4><p>空白 PDF 下載網址</p></div><span class='placeholder'>請自行填入連結</span></div><div class='drow'><div><h4>IMDA GMDSS Form</h4><p>空白 PDF 下載網址</p></div><span class='placeholder'>請自行填入連結</span></div></div>",
      "imgs": []
    }
  ]
};
