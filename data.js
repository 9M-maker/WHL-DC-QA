/**
 * 船員行前助手－內容資料
 * ========================================
 * 日後最常修改的檔案就是這一份。
 *
 * 1) categories：首頁 8 個大分類
 * 2) topics：各分類內的細項內容
 *
 * 修改文字時，請保留 id、反引號 ` 與逗號結構。
 * 新增主題時：先在 topics 新增一筆，再把它的 id 加到對應 category.topicIds。
 */

const categories = [
  {
    id:"before",
    icon:"🧳",
    title:"上船前準備",
    desc:"裝備、文件、體檢、疫苗、證件效期",
    topicIds:["equipment","notice","documents","renewal"]
  },
  {
    id:"movement",
    icon:"🛳️",
    title:"上下船與任卸職",
    desc:"護照、船員手冊、登機證、出入境",
    topicIds:["passport","appointment","agents","terminal"]
  },
  {
    id:"expense",
    icon:"🧾",
    title:"費用與交通報銷",
    desc:"體檢、住宿、高鐵、車資、交通補助",
    topicIds:["training","urine","reimbursement","transport"]
  },
  {
    id:"contact",
    icon:"📞",
    title:"承辦人與聯絡資訊",
    desc:"職級承辦、分機、港口代理聯絡",
    topicIds:["contacts","agents"]
  },
  {
    id:"insurance",
    icon:"🛡️",
    title:"勞健保與薪資",
    desc:"國輪／外輪保險、薪資與資料異動",
    topicIds:["union","insurance","salary"]
  },
  {
    id:"leave",
    icon:"📅",
    title:"請假與福利",
    desc:"請假、病假、獎助學金、禮金補助",
    topicIds:["leave","scholarship","festival","marriage","funeral","final-note"]
  },
  {
    id:"training",
    icon:"🎓",
    title:"訓練與證照",
    desc:"STCW、醫療急救、黃熱病、尿液採驗",
    topicIds:["training","documents","renewal","urine"]
  },
  {
    id:"english",
    icon:"🌐",
    title:"英語學習與 TOEIC",
    desc:"線上學習補助、檢定補助與獎勵金",
    topicIds:["english-learning","toeic"]
  }
];

const topics = [
{
 id:"equipment", title:"各職級裝備發放規定", source:"附件第 1 頁",
 keywords:"工作服 值班服 安全鞋 廚衣 裝備 船長 大廚 甲板 水手長 木匠 機艙",
 html:`<div class="table-scroll"><table>
 <thead><tr><th>項目</th><th>發放規定</th></tr></thead>
 <tbody>
 <tr><td>工作服</td><td>船長、大廚 1 件；甲板 2 件；水手長、木匠、機艙 3 件。</td></tr>
 <tr><td>值班服</td><td>1 套（長袖、短袖、長褲）。</td></tr>
 <tr><td>安全鞋</td><td>1 雙。</td></tr>
 <tr><td>廚衣</td><td>1 件（廚師服＋廚師帽）。</td></tr>
 </tbody></table></div>`
},
{
 id:"notice", title:"公司通告研讀", source:"附件第 1 頁",
 keywords:"E-LEARNING WHL FAMILY 通告 課程 在岸",
 html:`<p>在岸期間請至 <strong>E-LEARNING</strong> 網站或 <strong>WHL FAMILY</strong> 進行通告課程閱讀。</p>`
},
{
 id:"passport", title:"船員手冊及護照保管事宜", source:"附件第 1 頁",
 keywords:"船員手冊 護照 保管 離船申請單 同意回執條 任卸職",
 html:`<ol>
 <li>公司將於同仁下船且船員手冊完成任卸職手續後，主動將船員手冊及護照寄還予同仁。</li>
 <li>若同仁同意將船員手冊及護照交由公司保管，請於下船前在「離船申請單」勾選同意，或填寫「同意回執條」連同船員手冊及護照交予公司。</li>
 </ol>`
},
{
 id:"appointment", title:"任卸職辦理注意事項", source:"附件第 1 頁",
 keywords:"國內下船 國外上船 國外下船 登機證 船員手冊 護照 快速通關 出入境章 海關 任卸職",
 html:`<ol>
 <li><strong>國內下船：</strong>下船後請將手冊及護照交予台灣各港口代理行或寄回公司辦理任卸職手續。</li>
 <li><strong>國外上船：</strong>請於上船後將登機證繳交予船長，隨船帳將登機證寄回公司。</li>
 <li><strong>國外下船：</strong>請於下船 <strong>3 日內</strong>將登機證、船員手冊和護照寄回公司，以辦理任卸職。</li>
 <li><strong>國外上下船：</strong>入海關時請勿使用快速通關，務必於護照上蓋出入境章。</li>
 </ol>`
},
{
 id:"contacts", title:"職級承辦人", source:"附件第 1 頁",
 keywords:"承辦人 分機 船長 大副 二副 三副 水手長 木匠 幹練水手 乙級水手 甲板實習生 教育訓練 輪機長 大管 二管 三管 加油長 銅匠 機匠 副機匠 大廚 機艙實習生",
 html:`<p>僱傭契約、體檢表寄送及在岸期間課程報名，請洽船務部船員管理一／二／三課承辦人。</p>
 <div class="table-scroll"><table>
 <thead><tr><th>職級</th><th>承辦人</th><th>分機</th></tr></thead>
 <tbody>
 <tr><td>船長</td><td>楊依晉 先生</td><td>6861</td></tr>
 <tr><td>大副</td><td>吳淑君 小姐</td><td>6862</td></tr>
 <tr><td>二副</td><td>陳紀璇 小姐</td><td>6863</td></tr>
 <tr><td>三副</td><td>黃俊諭 先生</td><td>6864</td></tr>
 <tr><td>水手長／木匠</td><td>葉祉妤 小姐</td><td>6865</td></tr>
 <tr><td>幹練水手／乙級水手</td><td>陳淑容 小姐</td><td>6866</td></tr>
 <tr><td>甲板教育訓練</td><td>李昱欣 小姐</td><td>6868</td></tr>
 <tr><td>甲板實習生</td><td>洪家芸 小姐</td><td>6867</td></tr>
 <tr><td>輪機長</td><td>柯婉蓉 小姐</td><td>6875</td></tr>
 <tr><td>大管</td><td>吳松哲 先生</td><td>6874</td></tr>
 <tr><td>二管</td><td>陳韋翰 先生</td><td>6877</td></tr>
 <tr><td>三管</td><td>蔡嘉伃 小姐</td><td>6856</td></tr>
 <tr><td>加油長／銅匠／機匠／副機匠</td><td>楊承玫 小姐</td><td>6872</td></tr>
 <tr><td>大廚</td><td>林依雯 小姐</td><td>6873</td></tr>
 <tr><td>機艙實習生</td><td>劉 御 先生</td><td>6878</td></tr>
 <tr><td>機艙教育訓練</td><td>劉玳伶 小姐</td><td>6879</td></tr>
 </tbody></table></div>`
},
{
 id:"documents", title:"僱傭契約、體檢、黃皮書與證件效期", source:"附件第 1 頁",
 keywords:"僱傭契約 國輪 外輪 騎縫章 附錄 體檢表 黃皮書 黃熱病 疫苗 證件 證書 有效期限 一年 2吋 照片",
 html:`<ol>
 <li><strong>僱傭契約：</strong>國輪僱傭契約書 4 份、外輪僱傭契約書 2 份；依範例填寫，簽名或蓋章處加蓋私章。國輪 4 份需蓋契約騎縫章；2 張「台灣船員定期僱傭契約附錄」請簽名。</li>
 <li><strong>體檢表：</strong>請參閱「台籍船員體檢表注意事項」。</li>
 <li><strong>黃皮書：</strong>務必完成黃熱病疫苗注射，效期應為無限期。</li>
 <li><strong>證件效期：</strong>所有證件、證書、上船文件、體檢表等，有效期限皆至少一年以上，並不得在船上換發（實習生換發適任證書除外）。</li>
 <li><strong>照片：</strong>請隨身攜帶半年內 2 吋近照 4 張。</li>
 </ol>`
},
{
 id:"training", title:"STCW 與船上醫護／醫療急救複訓", source:"附件第 1 頁",
 keywords:"STCW 2010 五年 複訓 船上醫護 醫療急救 複訓費 交通費 住宿費 英文證明 11395000",
 html:`<ol>
 <li>STCW 2010 部分訓練需每五年複訓，請留意自身證書效期並主動報名複習訓練。</li>
 <li>船上醫護及醫療急救之五年複訓，可申請複訓費用、期間大眾運輸交通費、住宿費、培訓證書英文證明費用。</li>
 <li>請檢附相關單據／收據正本寄送供職級承辦人員核銷；發票需開立公司統編 <strong>11395000</strong>。</li>
 </ol>`
},
{
 id:"renewal", title:"護照／台胞證／黃熱病疫苗換證費", source:"附件第 1 頁",
 keywords:"護照 台胞證 黃熱病 疫苗 2025 3 15 換證 全額 實習生 副機匠 乙級水手 11395000",
 html:`<p>護照、台胞證、黃熱病疫苗自 <strong>2025/3/15</strong> 起更換之換證費用可全額申請；<strong>不含實習生／副機匠／乙級水手</strong>。</p>
 <p>請檢附相關單據／收據正本寄送供職級承辦人員核銷；發票需開立公司統編 <strong>11395000</strong>。</p>`
},
{
 id:"union", title:"海員工會會費代扣", source:"附件第 2 頁",
 keywords:"海員工會 工會費 代扣 余慈蕙 6871 船員管理二課",
 html:`<p>公司提供代扣海員工會會費服務，在船期間之工會費由公司按月代扣。</p>
 <p>如需申請，請向船員管理二課 <strong>余慈蕙小姐（分機 6871）</strong> 索取「代扣海員工會會費申請」。</p>`
},
{
 id:"urine", title:"尿液採驗作業", source:"附件第 2 頁",
 keywords:"尿液 採驗 毒品 國輪 上船前 指定院所 PIC V802 收據 航港局",
 html:`<ol>
 <li>依交通部航港局相關規定，公司應對所屬海運人員實施尿液毒品檢驗。</li>
 <li><strong>對象與時間：</strong>預計至國輪服務之同仁，於上船前依船員課業管 PIC 通知前往指定院所完成尿液採檢。</li>
 <li><strong>費用：</strong>上船後持正本收據向船長實報實銷，科目歸列 <strong>V802</strong>。</li>
 </ol>`
},
{
 id:"reimbursement", title:"體檢費、住宿費、報到車資報銷", source:"附件第 2 頁",
 keywords:"體檢費 MPA 2000 住宿費 三聯式 二聯式 發票 萬海航運 11395000 松江路 136 10樓 車資 計程車 飛機 高鐵 台鐵 電子購票證明 誤餐費",
 html:`<ol>
 <li><strong>體檢費：</strong>交通部制式體檢及新加坡 MPA 體檢費，憑正本收據於上船後至船長處實報實銷；公司補貼以新台幣 2,000 元為原則，實際依核定為準。</li>
 <li><strong>住宿費：</strong>因船期延誤或公司需要，可申報住宿費；有特殊狀況請先向公司提出。
 <ul><li>須為三聯式發票（收執聯及扣抵聯）或收據；二聯式發票不得報銷。</li>
 <li>抬頭：萬海航運股份有限公司；統編：11395000；地址：臺北市中山區松江路 136 號 10 樓。</li>
 <li>發票不可修改。</li></ul></li>
 <li><strong>車資：</strong>上下船車資憑搭車票或電子票證實報實銷；非經公司許可，不得以計程車資或飛機票價報銷。
 <ul><li>票根須保存正本且不可塗改。</li><li>民營車輛如統聯、和欣等須附三聯式發票及公司統編。</li>
 <li>高鐵、台鐵使用電子票證者須持電子購票證明；高鐵票證須打公司統編。</li></ul></li>
 <li><strong>不得申報誤餐費。</strong></li>
 </ol>`
},
{
 id:"transport", title:"台灣地區港口上下船交通費補助", source:"附件第 2 頁",
 keywords:"交通補助 高雄港 台中港 基隆港 台北港 松山機場 桃園機場 小港機場 計程車 基隆 高雄 台中 新竹 台南 屏東",
 html:`<p><strong>A. 大眾交通工具：</strong>實報實銷。</p>
 <p><strong>B. 異動港市區計程車補助上限：</strong></p>
 <div class="table-scroll"><table>
 <thead><tr><th>區域</th><th>港口</th><th>上限</th></tr></thead>
 <tbody>
 <tr><td>高雄地區</td><td>高雄港</td><td>NTD 350</td></tr>
 <tr><td>台中地區</td><td>台中港</td><td>NTD 700</td></tr>
 <tr><td>基隆地區</td><td>台北港</td><td>NTD 800</td></tr>
 <tr><td>基隆地區</td><td>基隆港</td><td>NTD 150</td></tr>
 <tr><td>大台北地區</td><td>台北港</td><td>NTD 600</td></tr>
 </tbody></table></div>
 <p style="margin-top:12px"><strong>C. 機場往返計程車補助上限：</strong></p>
 <div class="table-scroll"><table>
 <thead><tr><th>區域</th><th>機場</th><th>上限</th></tr></thead>
 <tbody>
 <tr><td>大台北地區</td><td>松山機場</td><td>NTD 150</td></tr>
 <tr><td>桃園地區</td><td>桃園機場</td><td>NTD 200</td></tr>
 <tr><td>大台北地區</td><td>桃園機場</td><td>NTD 1,000</td></tr>
 <tr><td>基隆地區</td><td>桃園機場</td><td>NTD 1,500</td></tr>
 <tr><td>基隆地區</td><td>松山機場</td><td>NTD 500</td></tr>
 <tr><td>台中／新竹</td><td>桃園機場</td><td>NTD 1,200</td></tr>
 <tr><td>屏東／台南</td><td>小港機場</td><td>NTD 1,100</td></tr>
 <tr><td>高雄地區</td><td>小港機場</td><td>NTD 350</td></tr>
 </tbody></table></div>
 <div class="note">非上述項目所表列的車資費用，若無事先呈報公司核可，不予核銷。船員上下船交通以大眾交通運輸工具為主。</div>`
},
{
 id:"agents", title:"各地代理行聯絡資料", source:"附件第 3 頁",
 keywords:"基隆寶昇 基隆港 台北港 台中萬海碼頭 高雄萬海碼頭 地址 電話 當值 代理 靠泊",
 html:`<p><strong>預定上船日期前 2～3 天，請主動與上船港口代理聯絡，確認船舶實際靠泊時間，並保持手機暢通。</strong></p>
 <div class="table-scroll"><table>
 <thead><tr><th>港口／單位</th><th>聯絡資料</th></tr></thead>
 <tbody>
 <tr>
  <td>台北港/基隆港 寶昇船務</td>
  <td>
    基隆市仁二路 255 號 7 樓。<br>
    基隆港：工作日上班時間 08:30～17:30 聯絡李美萍小姐，02-2424-8176 分機 833；<br>
    非上班時間緊急狀況：0975-605-161／碼頭現場 02-2428-6168。<br>
    台北港查船當值手機：0988-329860。
  </td>
</tr>
<tr>
  <td>台中港 萬海碼頭</td>
  <td>
    台中市梧棲區安仁里 9 鄰中南一路二段 757 號（台中港 34 號碼頭）。<br>
    當值手機 0937-076-058；<br>
    辦公室 04-2656-2939，分機 121、123、125、126、253。
  </td>
</tr>
<tr>
  <td>高雄港 萬海碼頭</td>
  <td>
    高雄市小港區光和路 68 號（第五貨櫃中心 79～81 號碼頭）。<br>
    查船當值手機 0932-745-134、0932-745-135；<br>
    辦公室 07-812-3342。
  </td>
</tr>
 </tbody></table></div>`
},
{
 id:"insurance", title:"勞健保加退保", source:"附件第 3 頁",
 keywords:"勞健保 國輪 下船 上船 工會 眷屬 戶口名簿 外籍 居留證 4個月 外輪 投保 服務證明 6859",
 html:`<ol>
 <li><strong>國輪下船：</strong>勞健保可於下船隔天逕向海員工會加保。</li>
 <li><strong>上國輪：</strong>公司於上船當日加保勞健保。眷屬欲依附健保，須在上船前 5 日將戶口名簿影本寄承辦人員；外籍眷屬另須符合在台連續停留滿 4 個月並檢附有效居留證影本。</li>
 <li><strong>上外輪：</strong>公司無法為同仁投保勞健保，請向海員總工會或其他工會申請加入，並依實際薪資投保對應級距。</li>
 <li><strong>服務證明：</strong>船員管理課 鄭先生（分機 6859）。</li>
 </ol>`
},
{
 id:"leave", title:"請假規定", source:"附件第 3 頁",
 keywords:"請假 契約 任期期滿 晉升訓練 適任證書 考試 喪假 事假 45天 塢修 Key man 病假 unfit for duty",
 html:`<ol>
 <li>請假種類包括契約／任期期滿、晉升訓練／適任證書考試、喪假及事假。除緊急重大傷病、喪假等特殊情況外，須於預計離船前 <strong>45 天</strong>提出。</li>
 <li>船長、大副異動必須間隔一個月；輪機長、大管異動必須間隔一個月；船長和輪機長避免 14 天內進行異動。4 Key man 應先行溝通。</li>
 <li>病假下船須於船舶靠港就醫，由醫師判定 <strong>unfit for duty on-board</strong> 才成立，否則視為個人事假。</li>
 </ol>`
},
{
 id:"terminal", title:"高雄／台中碼頭進出規定", source:"附件第 3 頁",
 keywords:"高雄 台中 碼頭 廠區 公務車 通道 小門 海事評議會 移民法 海關緝私",
 html:`<p>進出高雄／台中碼頭廠區時，務必統一搭乘碼頭公務車進出，不得私自從其他不正當通道或小門出入。</p>
 <p>違規事件可能依公司規定送海事評議會處分，並可能涉及入出國及移民法及海關緝私條例。</p>`
},
{
 id:"salary", title:"薪資發放", source:"附件第 4 頁",
 keywords:"薪資 次月10日 第一銀行 扣繳憑單 電子薪資單 2月 撫養親屬 帳戶 戶籍 地址 電話 余慈蕙 6871",
 html:`<ol>
 <li>船員當月薪資於 <strong>次月 10 日</strong>匯至船員第一銀行個人帳戶。</li>
 <li>薪資扣繳憑單：電子薪資單申請者，每年 2 月寄至電子信箱；紙本請洽承辦人。</li>
 <li>上國輪如未填寫撫養親屬申報表或人數有變動，請向船長領表填寫並寄回公司。</li>
 <li>薪資帳戶、戶籍、通訊地址、聯絡電話等如有更改，請立即以書面並簽名蓋章後通知公司。</li>
 <li>承辦人：船員管理二課 <strong>余慈蕙小姐（分機 6871）</strong>。</li>
 </ol>`
},
{
 id:"scholarship", title:"子女教育獎助學金", source:"附件第 4 頁",
 keywords:"子女 教育 獎助學金 3月 9月 6個月 成績 幼稚園 國小 國中 高中 高職 大專 大學 戶口名簿 6866",
 html:`<ol>
 <li><strong>申請月份：</strong>每年 3 月及 9 月。</li>
 <li><strong>條件：</strong>海勤資歷滿 6 個月；學業成績總平均 60 分暨操行成績 70 分以上。</li>
 <li><strong>金額：</strong>幼稚園／國小／國中每名 10,000 元；高中（職）／大專／大學每名 3,000 元。</li>
 <li><strong>文件：</strong>依就讀階段檢附成績單或學費收據等，另附戶口名簿影本；收養者附收養證明。</li>
 <li><strong>不得申請：</strong>空中大學、函授、選讀生、國外院校、國內研究所（含）以上、退休船員或成績未達標準者。</li>
 <li>承辦人：船員管理一課 <strong>陳淑容小姐（分機 6866）</strong>。</li>
 </ol>`
},
{
 id:"festival", title:"年節禮金", source:"附件第 4 頁",
 keywords:"年節 禮金 12月31日 台籍船員 續聘 離職 退休 6858",
 html:`<ol>
 <li>禮金是否發放及額度，視公司營運狀況決定。</li>
 <li>對象：每年 12 月 31 日在船之台籍船員及續聘台籍船員；發放日前離職者、退休船員不予發放。</li>
 <li>承辦人：船員管理課 <strong>廖先生（分機 6858）</strong>。</li>
 </ol>`
},
{
 id:"marriage", title:"結婚賀儀", source:"附件第 4 頁",
 keywords:"結婚 賀儀 台籍船員 3個月 6000 喜帖 結婚證書 6859",
 html:`<ol>
 <li>資格：台籍船員（不包含實習生／見習生／退休船員）；再婚者如未曾在本公司申請，可申請一次。</li>
 <li>期限：喜帖宴客日期或結婚登記日 <strong>3 個月內</strong>。</li>
 <li>禮金：<strong>6,000 元</strong>。</li>
 <li>文件：喜帖正本或結婚證書影本 1 份。</li>
 <li>承辦人：船員管理課 <strong>鄭先生（分機 6859）</strong>。</li>
 </ol>`
},
{
 id:"funeral", title:"喪葬補助", source:"附件第 4 頁",
 keywords:"喪葬 補助 3個月 5000 父母 配偶 子女 訃聞 死亡證明 6859",
 html:`<ol>
 <li>資格：台籍船員（不包含實習生／見習生／退休船員）。</li>
 <li>期限：事實發生之日起 <strong>3 個月內</strong>。</li>
 <li>給付：本人或父母、配偶、子女亡故者，奠儀 <strong>5,000 元</strong>。</li>
 <li>文件：訃聞正本或死亡證明書影本；必要時另附身分證或戶口名簿影本。</li>
 <li>承辦人：船員管理課 <strong>鄭先生（分機 6859）</strong>。</li>
 </ol>`
},
{
 id:"english-learning", title:"船員英語線上學習補助", source:"附件第 5 頁",
 keywords:"英文 英語 線上學習 補助 甲級船員 海勤年資 1年 80% 20000 30小時 陳鈺洵 6876",
 html:`<p>公司自 2025 年 9 月 1 日起實施「船員英語學習與檢定獎助計畫」，並於 2026 年起將英語能力納入晉升船長及大副之資格條件。</p>
 <ol>
 <li><strong>資格：</strong>在船及在岸之甲級船員，且海勤年資滿 1 年以上。</li>
 <li><strong>補助：</strong>學費 80%（不含教材費等），每年上限 NT$20,000；半年內須完成 30 小時線上課程。</li>
 <li><strong>申請：</strong>報名前先聯繫承辦人；上船後檢附申請單、完訓證明、付款單據（須含公司抬頭與統編）。</li>
 <li><strong>承辦：</strong>船員管理二課 陳鈺洵小姐（分機 6876；erica_chen@wanhai.com）。</li>
 <li><strong>注意：</strong>請於非當班時間完成學習。</li>
 </ol>`
},
{
 id:"toeic", title:"TOEIC 檢定補助與自主學習獎勵金", source:"附件第 5 頁",
 keywords:"TOEIC 多益 三副 860 990 USD300 V806 V105 李昱欣 6868 所得稅",
 html:`<ol>
 <li><strong>資格：</strong>甲板甲級同仁；報名檢定考試時須為三副（含）以上職級。</li>
 <li><strong>報名費補助：</strong>無最低分數限制，每人每年限申請一次。</li>
 <li><strong>獎勵金：</strong>TOEIC 860～990 分者 USD 300，每人限申請一次。</li>
 <li><strong>申請：</strong>上船後檢附申請單、成績證明、付款單據正本，向船長透過船帳申請。</li>
 <li><strong>船帳科目：</strong>英語檢定報名費 V806；自主學習獎勵金 V105。</li>
 <li><strong>承辦：</strong>船員管理三課 李昱欣小姐（分機 6868）。</li>
 <li><strong>注意：</strong>獎勵金屬個人所得，申請人應依規定申報年度所得稅。</li>
 </ol>`
},
{
 id:"final-note", title:"重要提醒", source:"附件第 4 頁",
 keywords:"重要提醒 權益 勞健保 帶上船 費用申報 福利 詳讀 簽署",
 html:`<div class="note">以上內容事關同仁權益，尤其勞健保部分；請詳閱後帶上船，以備參考費用申報及福利事項等相關規範。</div>`
}
];
