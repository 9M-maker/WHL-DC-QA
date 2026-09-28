/*
 * 船隊行政作業手冊 — 本機問答搜尋
 * 搭配 manual-qa-data.js 使用。
 *
 * HTML 中只需要放置：
 *   <div id="manualQa"></div>
 *
 * 載入順序：
 *   1. manual-qa-data.js
 *   2. manual-qa.js
 *
 * 本程式不連線、不呼叫 API；所有比對都在瀏覽器本機完成。
 */

(() => {
  "use strict";

  const CONFIG = {
    mountId: "manualQa",
    maxResults: 6,
    candidateLimit: 40,
    keyLines: 5,
    minScore: 14,
    fallbackPages: 6,
    title: "船隊行政作業手冊速查Q&A",
    description: "輸入關鍵字或完整問題，網站會從行政作業手冊中搜尋最相關內容與章節讓你查閱。",
    placeholder: "例如：離船要提前多久申請？",
    note: "本問答內容依船隊行政作業手冊整理，僅供快速查詢，詳細內容還請參閱船端資料夾本文；如與最新公司通告、僱傭契約或正式規章不同，仍以最新正式文件為準。",
    examples: [
      "離船要提前多久申請？",
      "大副的職責有哪些？",
      "伙委可以由誰擔任？",
      "船上電腦故障怎麼報修？"
    ]
  };

  const ALIAS_GROUPS = [
    ["離船", "下船", "卸職", "遣返", "terminate employment"],
    ["上船", "報到", "接任", "到船", "take over", "take-over"],
    ["交接", "handover", "hand over", "hand-over"],
    ["船長", "master", "captain"],
    ["大副", "chief officer", "chief mate", "c/o"],
    ["二副", "second officer", "2/o", "2nd officer"],
    ["三副", "third officer", "3/o", "3rd officer"],
    ["輪機長", "chief engineer", "c/e"],
    ["大管", "大管輪", "first engineer", "1/e", "1st engineer"],
    ["二管", "二管輪", "second engineer", "2/e", "2nd engineer"],
    ["三管", "三管輪", "third engineer", "3/e", "3rd engineer"],
    ["水手長", "bosun", "boatswain"],
    ["幹練水手", "ab", "able seaman", "able-bodied seaman","水手"],
    ["實習生", "駕實生", "輪實生", "cadet"],
    ["伙委", "伙食委員", "伙食團"],
    ["薪資", "薪津", "薪水", "工資", "salary", "wage"],
    ["獎金", "bonus", "津貼", "allowance"],
    ["加班", "超時", "延長工作", "overtime"],
    ["休息", "休息時數", "rest hours", "work rest"],
    ["離船申請", "下船申請", "terminate employment application"],
    ["醫療", "看診", "看醫生", "就醫", "medical", "clinic", "hospital"],
    ["體檢", "健康檢查", "medical examination"],
    ["性騷擾", "sexual harassment"],
    ["霸凌", "職場霸凌", "bullying"],
    ["申訴", "投訴", "complaint"],
    ["紀律", "違紀", "懲戒", "discipline"],
    ["晉升", "升職", "promotion"],
    ["訓練", "教育訓練", "training"],
    ["物料", "running store", "store", "rs"],
    ["燃料", "燃油", "bunker", "fuel", "fuel oil"],
    ["滑油", "潤滑油", "lube oil", "lubricating oil"],
    ["廢油", "油泥", "sludge"],
    ["淡水", "fresh water"],
    ["危險品", "dangerous goods", "dg", "imdg"],
    ["貨櫃", "container"],
    ["冷凍櫃", "冷櫃", "reefer", "reefer container"],
    ["壓艙水", "ballast water", "bwts"],
    ["油料紀錄簿", "oil record book", "orb"],
    ["垃圾紀錄簿", "garbage record book"],
    ["生活污水", "sewage", "stp"],
    ["網路", "網路系統", "internet"],
    ["星鏈", "starlink"],
    ["衛星通訊", "vsat", "fbb", "inmarsat"],
    ["電腦", "computer", "資訊設備", "it設備"],
    ["報修", "維修", "repair", "maintenance"],
    ["印表機", "printer"],
    ["fms", "fleet management system"],
    ["電子海圖", "ecdis", "electronic chart"],
    ["gmdss", "全球海上遇險及安全系統"],
    ["brm", "bridge resource management", "駕駛台資源管理"],
    ["erm", "engine resource management", "機艙資源管理"]
  ];

  const STOP_WORDS = new Set([
    "請問", "請", "問", "我", "我們", "船員", "公司", "手冊", "行政作業手冊",
    "的", "了", "嗎", "呢", "是", "有", "要", "需要", "可以", "可否", "是否",
    "怎麼", "如何", "什麼", "哪些", "哪個", "哪裡", "多久", "幾天", "規定", "內容",
    "相關", "辦法", "程序", "說明", "關於", "如果", "如果是", "時", "時候"
  ]);

  function normalize(value) {
    return String(value ?? "")
      .normalize("NFKC")
      .toLowerCase()
      .replace(/[\u200B-\u200D\uFEFF]/g, "")
      .replace(/[，。；：！？、,.!?;:()（）\[\]【】{}「」『』<>《》“”‘’'"\\/_—–-]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function compact(value) {
    return normalize(value).replace(/\s+/g, "");
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function unique(values) {
    return [...new Set(values.filter(Boolean))];
  }

  function expandAliases(query) {
    const nq = normalize(query);
    const cq = compact(query);
    const expanded = [];

    ALIAS_GROUPS.forEach(group => {
      const matched = group.some(term => {
        const nt = normalize(term);
        const ct = compact(term);
        return (nt && nq.includes(nt)) || (ct && cq.includes(ct));
      });

      if (matched) expanded.push(...group);
    });

    return unique(expanded.map(normalize));
  }

  function buildTerms(query) {
    const nq = normalize(query);
    const terms = [];

    // 原始完整問句，對完全命中很重要。
    if (nq) terms.push(nq);

    // 以常見問句與標點切割。
    const pieces = nq
      .replace(/(請問|請|想知道|我要查|我想查|有沒有|是否|可以|可否|怎麼|如何|什麼|哪些|哪個|哪裡|多久|幾天|規定|內容|辦法|程序)/g, " ")
      .split(/\s+/)
      .map(x => x.trim())
      .filter(x => x.length >= 2 && !STOP_WORDS.has(x));

    terms.push(...pieces);
    terms.push(...expandAliases(query));

    // 保留問句中的數字，時間、金額、天數常是關鍵。
    const numbers = String(query).match(/\d+(?:\.\d+)?/g) || [];
    terms.push(...numbers);

    // 英文縮寫，例如 FMS、GMDSS、ECDIS、PSC。
    const acronyms = String(query).match(/[A-Za-z][A-Za-z0-9/-]{1,}/g) || [];
    terms.push(...acronyms.map(normalize));

    return unique(terms)
      .map(t => t.trim())
      .filter(t => t.length >= 2 && !STOP_WORDS.has(t));
  }

  function makeEntryIndex(entry) {
    const keywords = Array.isArray(entry.keywords) ? entry.keywords : [];
    return {
      question: normalize(entry.question),
      questionCompact: compact(entry.question),
      answer: normalize(entry.answer),
      answerCompact: compact(entry.answer),
      chapter: normalize(entry.chapter),
      section: normalize(entry.section),
      source: normalize(entry.source),
      keywords: keywords.map(normalize),
      keywordsCompact: keywords.map(compact),
      all: normalize([
        entry.question,
        entry.answer,
        entry.chapter,
        entry.section,
        entry.source,
        ...keywords
      ].join(" ")),
      allCompact: compact([
        entry.question,
        entry.answer,
        entry.chapter,
        entry.section,
        entry.source,
        ...keywords
      ].join(" "))
    };
  }

  let entryIndex = null;
  let pageIndex = null;

  function ensureIndexes() {
    if (!entryIndex) {
      entryIndex = MANUAL_QA.map(entry => ({
        entry,
        idx: makeEntryIndex(entry)
      }));
    }

    if (!pageIndex) {
      pageIndex = MANUAL_PAGES.map(page => ({
        page,
        text: normalize(page.text),
        textCompact: compact(page.text),
        chapter: normalize(page.chapter)
      }));
    }
  }

  function scoreEntry(entry, idx, query, terms) {
    const nq = normalize(query);
    const cq = compact(query);
    let score = 0;
    let matchedTerms = 0;

    if (!nq) return 0;

    // 完整問句／片語命中。
    if (idx.question === nq) score += 180;
    else if (idx.question.includes(nq)) score += 95;

    if (idx.answer.includes(nq)) score += 80;
    if (idx.allCompact.includes(cq) && cq.length >= 3) score += 32;

    // 關鍵字完全相同或包含完整問句。
    if (idx.keywords.some(k => k === nq)) score += 150;
    else if (idx.keywords.some(k => k.includes(nq) || nq.includes(k))) score += 70;

    terms.forEach(term => {
      const nt = normalize(term);
      const ct = compact(term);
      if (!nt || nt.length < 2) return;

      let termMatched = false;

      if (idx.keywords.some(k => k === nt)) {
        score += 38;
        termMatched = true;
      } else if (idx.keywords.some(k => k.includes(nt) || nt.includes(k))) {
        score += 25;
        termMatched = true;
      }

      if (idx.question.includes(nt) || idx.questionCompact.includes(ct)) {
        score += 20;
        termMatched = true;
      }

      if (idx.section.includes(nt)) {
        score += 18;
        termMatched = true;
      }

      if (idx.chapter.includes(nt)) {
        score += 12;
        termMatched = true;
      }

      if (idx.answer.includes(nt) || idx.answerCompact.includes(ct)) {
        score += 16;
        termMatched = true;
      }

      if (idx.source.includes(nt)) {
        score += 5;
        termMatched = true;
      }

      if (termMatched) matchedTerms += 1;
    });

    // 查詢中的主要詞越多同時命中，排序越前面。
    if (terms.length > 0) {
      const ratio = matchedTerms / terms.length;
      if (ratio >= 0.9) score += 55;
      else if (ratio >= 0.65) score += 34;
      else if (ratio >= 0.4) score += 16;
    }

    // 問句若帶有明確數字，答案含相同數字時加權。
    const nums = String(query).match(/\d+(?:\.\d+)?/g) || [];
    nums.forEach(num => {
      if (String(entry.answer || "").includes(num)) score += 22;
    });

    // 避免目錄、標題等極短資料壓過真正內容。
    const answerLength = String(entry.answer || "").trim().length;
    if (entry.chapterNo == null) score -= 10;
    if (answerLength < 12) score -= 8;

    return score;
  }

  function dedupeResults(results) {
    const seen = new Set();
    const output = [];

    for (const item of results) {
      const e = item.entry;
      const key = compact(`${e.chapter}|${e.section}|${e.answer}`);
      if (!key || seen.has(key)) continue;
      seen.add(key);
      output.push(item);
    }

    return output;
  }

  function confidenceLabel(score) {
    if (score >= 150) return "高度相關";
    if (score >= 80) return "相關";
    return "可能相關";
  }

  function searchEntries(query) {
    ensureIndexes();
    const terms = buildTerms(query);

    const ranked = entryIndex
      .map(({ entry, idx }) => ({
        entry,
        score: scoreEntry(entry, idx, query, terms)
      }))
      .filter(item => item.score >= CONFIG.minScore)
      .sort((a, b) => b.score - a.score);

    return dedupeResults(ranked).slice(0, CONFIG.maxResults);
  }

  function pageScore(pageItem, query, terms) {
    const nq = normalize(query);
    const cq = compact(query);
    let score = 0;
    let matches = 0;

    if (pageItem.text.includes(nq)) score += 60;
    if (cq.length >= 3 && pageItem.textCompact.includes(cq)) score += 35;

    terms.forEach(term => {
      const nt = normalize(term);
      const ct = compact(term);
      if (!nt) return;

      if (pageItem.text.includes(nt) || pageItem.textCompact.includes(ct)) {
        score += 12;
        matches += 1;
      }
      if (pageItem.chapter.includes(nt)) score += 8;
    });

    if (terms.length && matches / terms.length >= 0.6) score += 20;
    return score;
  }

  function makeExcerpt(text, query, terms, maxLength = 420) {
    const raw = String(text || "").replace(/\s+/g, " ").trim();
    if (raw.length <= maxLength) return raw;

    const needles = unique([normalize(query), ...terms])
      .filter(x => x.length >= 2)
      .sort((a, b) => b.length - a.length);

    const normalizedRaw = normalize(raw);
    let hit = -1;

    for (const needle of needles) {
      hit = normalizedRaw.indexOf(needle);
      if (hit >= 0) break;
    }

    if (hit < 0) return `${raw.slice(0, maxLength)}…`;

    const start = Math.max(0, hit - Math.floor(maxLength * 0.28));
    const end = Math.min(raw.length, start + maxLength);
    return `${start > 0 ? "…" : ""}${raw.slice(start, end)}${end < raw.length ? "…" : ""}`;
  }

  function searchPages(query) {
    ensureIndexes();
    const terms = buildTerms(query);

    return pageIndex
      .map(item => ({
        page: item.page,
        score: pageScore(item, query, terms)
      }))
      .filter(item => item.score >= 12)
      .sort((a, b) => b.score - a.score)
      .slice(0, CONFIG.fallbackPages)
      .map(item => ({
        ...item,
        excerpt: makeExcerpt(item.page.text, query, terms)
      }));
  }

  function createMarkup() {
    return `
      <section class="manual-qa-box" aria-labelledby="manualQaTitle">
        <div class="manual-qa-heading">
          <div class="manual-qa-icon" aria-hidden="true">🔎</div>
          <div>
            <h2 id="manualQaTitle">${escapeHtml(CONFIG.title)}</h2>
            <p>${escapeHtml(CONFIG.description)}</p>
          </div>
        </div>

        <form class="manual-qa-form" id="manualQaForm" role="search">
          <label class="manual-qa-label" for="manualQaInput">詢問行政作業手冊</label>
          <div class="manual-qa-input-row">
            <input
              id="manualQaInput"
              class="manual-qa-input"
              type="search"
              autocomplete="off"
              enterkeyhint="search"
              placeholder="${escapeHtml(CONFIG.placeholder)}"
              aria-describedby="manualQaHelp"
            >
            <button class="manual-qa-submit" type="submit">查詢</button>
          </div>
          <div id="manualQaHelp" class="manual-qa-help">可輸入完整問題，也可以只輸入「離船」、「伙委」、「FMS」、「Starlink」等關鍵字。</div>
        </form>

        <div class="manual-qa-examples" aria-label="常用查詢">
          <span class="manual-qa-examples-title">常用查詢：</span>
          ${CONFIG.examples.map(q => `<button type="button" class="manual-qa-example" data-query="${escapeHtml(q)}">${escapeHtml(q)}</button>`).join("")}
        </div>

        <div class="manual-qa-status" id="manualQaStatus" aria-live="polite"></div>
        <div class="manual-qa-results" id="manualQaResults"></div>

        <div class="manual-qa-note">
          <strong>NOTE：</strong>${escapeHtml(CONFIG.note)}
        </div>
      </section>
    `;
  }

  function splitKeySentences(text) {
    const raw = String(text || "")
      .replace(/\s+/g, " ")
      .trim();

    if (!raw) return [];

    return raw
      .split(/(?<=[。！？；;])\s*/g)
      .map(x => x.trim())
      .filter(x => x.length >= 8);
  }

  function sentenceScore(sentence, item, terms) {
    const ns = normalize(sentence);
    const cs = compact(sentence);
    let score = item.score * 0.55;
    let hits = 0;

    terms.forEach(term => {
      const nt = normalize(term);
      const ct = compact(term);
      if (!nt) return;

      if (ns.includes(nt) || cs.includes(ct)) {
        score += 24;
        hits += 1;
      }
    });

    const section = normalize(item.entry.section || "");
    terms.forEach(term => {
      const nt = normalize(term);
      if (nt && section.includes(nt)) score += 8;
    });

    // 過短的標題句或過長的大段落稍微降權。
    if (sentence.length < 14) score -= 12;
    if (sentence.length > 260) score -= 6;

    if (terms.length && hits / terms.length >= 0.5) score += 18;

    return score;
  }

  function buildBestChapter(query) {
    ensureIndexes();
    const terms = buildTerms(query);

    const ranked = dedupeResults(
      entryIndex
        .map(({ entry, idx }) => ({
          entry,
          score: scoreEntry(entry, idx, query, terms)
        }))
        .filter(item => item.score >= CONFIG.minScore)
        .sort((a, b) => b.score - a.score)
    )
      .filter(item => {
        const answer = String(item.entry.answer || "").trim();
        return item.entry.type !== "heading" && answer.length >= 8;
      })
      .slice(0, CONFIG.candidateLimit);

    if (!ranked.length) return null;

    const groups = new Map();

    ranked.forEach(item => {
      const chapter = item.entry.chapter || "船隊行政作業手冊";

      if (!groups.has(chapter)) {
        groups.set(chapter, {
          chapter,
          items: [],
          score: 0,
          topScore: 0
        });
      }

      const group = groups.get(chapter);
      group.items.push(item);
      group.topScore = Math.max(group.topScore, item.score);
    });

    groups.forEach(group => {
      const sorted = [...group.items].sort((a, b) => b.score - a.score);

      // 最佳單筆最重要；同章還有其他命中時再加分。
      group.score = sorted[0].score;
      sorted.slice(1, 6).forEach((item, i) => {
        group.score += item.score * (i === 0 ? 0.35 : 0.18);
      });
    });

    const best = [...groups.values()]
      .sort((a, b) => b.score - a.score)[0];

    const sentenceCandidates = [];

    best.items.forEach(item => {
      splitKeySentences(item.entry.answer).forEach(sentence => {
        sentenceCandidates.push({
          sentence,
          item,
          score: sentenceScore(sentence, item, terms)
        });
      });
    });

    sentenceCandidates.sort((a, b) => b.score - a.score);

    const seen = new Set();
    const keyLines = [];

    for (const candidate of sentenceCandidates) {
      const key = compact(candidate.sentence);
      if (!key || seen.has(key)) continue;

      // 避免同一句只是多了序號或少數空格而重複出現。
      const duplicate = keyLines.some(line => {
        const existing = compact(line.sentence);
        return existing.includes(key) || key.includes(existing);
      });
      if (duplicate) continue;

      seen.add(key);
      keyLines.push(candidate);

      if (keyLines.length >= CONFIG.keyLines) break;
    }

    // 萬一切句後太少，至少保留最高相關答案。
    if (!keyLines.length && best.items[0]) {
      keyLines.push({
        sentence: String(best.items[0].entry.answer || "").trim(),
        item: best.items[0],
        score: best.items[0].score
      });
    }

    return {
      chapter: best.chapter,
      score: best.score,
      topScore: best.topScore,
      keyLines
    };
  }

  function bestChapterHtml(result) {
    const sourceLabels = unique(
      result.keyLines.map(line => {
        const e = line.item.entry;
        const section = e.section || "";
        const pageLabel = e.manualPage
          ? `手冊頁 ${e.manualPage}`
          : (e.pdfPage ? `PDF 第 ${e.pdfPage} 頁` : "");

        return [section, pageLabel].filter(Boolean).join("／");
      })
    );

    return `
      <article class="manual-qa-result">
        <div class="manual-qa-result-top">
          <span class="manual-qa-relevance">${confidenceLabel(result.topScore)}</span>
        </div>

        <h3>${escapeHtml(result.chapter)}</h3>

        <div class="manual-qa-answer">
          ${result.keyLines.map(line => `
            <div style="margin:0 0 10px;">
              • ${escapeHtml(line.sentence)}
            </div>
          `).join("")}
        </div>

        ${sourceLabels.length ? `
          <div class="manual-qa-source">
            <span>相關位置：${escapeHtml(sourceLabels.join("、"))}</span>
          </div>
        ` : ""}
      </article>
    `;
  }

  function fallbackChapterResult(query) {
    const pages = searchPages(query);
    if (!pages.length) return null;

    const grouped = new Map();

    pages.forEach(item => {
      const chapter = item.page.chapter || "船隊行政作業手冊";
      if (!grouped.has(chapter)) grouped.set(chapter, []);
      grouped.get(chapter).push(item);
    });

    const [chapter, items] = [...grouped.entries()]
      .sort((a, b) => {
        const scoreA = a[1].reduce((sum, x) => sum + x.score, 0);
        const scoreB = b[1].reduce((sum, x) => sum + x.score, 0);
        return scoreB - scoreA;
      })[0];

    return {
      chapter,
      items: items.slice(0, 3)
    };
  }

  function fallbackChapterHtml(result) {
    const locations = unique(result.items.map(item => {
      const p = item.page;
      return p.manualPage
        ? `手冊頁 ${p.manualPage}`
        : `PDF 第 ${p.pdfPage} 頁`;
    }));

    return `
      <article class="manual-qa-result manual-qa-result-fallback">
        <div class="manual-qa-result-top">
          <span class="manual-qa-relevance">全文搜尋</span>
        </div>

        <h3>${escapeHtml(result.chapter)}</h3>

        <div class="manual-qa-answer">
          ${result.items.map(item => `
            <div style="margin:0 0 10px;">
              • ${escapeHtml(item.excerpt)}
            </div>
          `).join("")}
        </div>

        <div class="manual-qa-source">
          <span>相關位置：${escapeHtml(locations.join("、"))}</span>
        </div>
      </article>
    `;
  }

  function renderSearch(query, refs) {
    const q = String(query || "").trim();
    const { input, status, results } = refs;

    if (q.length < 2) {
      status.textContent = "請至少輸入 2 個字或一個有效關鍵字。";
      results.innerHTML = "";
      return;
    }

    input.value = q;

    const bestChapter = buildBestChapter(q);

    if (bestChapter) {
      status.textContent = "已找到最相關章節與關鍵內容。";
      results.innerHTML = bestChapterHtml(bestChapter);
      return;
    }

    const fallback = fallbackChapterResult(q);

    if (fallback) {
      status.textContent = "未找到明確問答項目，以下顯示手冊全文中最相關章節與段落。";
      results.innerHTML = fallbackChapterHtml(fallback);
      return;
    }

    status.textContent = "目前沒有找到相符內容。可改用較短的關鍵字，例如「離船」、「伙委」、「燃料」、「電腦報修」。";
    results.innerHTML = "";
  }

  function initManualQa() {
    const mount = document.getElementById(CONFIG.mountId);
    if (!mount) {
      console.warn(`[manual-qa] 找不到 #${CONFIG.mountId}，請在 HTML 中加入 <div id="${CONFIG.mountId}"></div>。`);
      return;
    }

    if (typeof MANUAL_QA === "undefined" || typeof MANUAL_PAGES === "undefined") {
      mount.innerHTML = `<div class="manual-qa-error">行政作業手冊資料庫尚未載入。請確認 manual-qa-data.js 載入順序在 manual-qa.js 之前。</div>`;
      return;
    }

    mount.innerHTML = createMarkup();

    const form = mount.querySelector("#manualQaForm");
    const input = mount.querySelector("#manualQaInput");
    const status = mount.querySelector("#manualQaStatus");
    const results = mount.querySelector("#manualQaResults");
    const refs = { input, status, results };

    form.addEventListener("submit", event => {
      event.preventDefault();
      renderSearch(input.value, refs);
    });

    mount.querySelectorAll(".manual-qa-example").forEach(button => {
      button.addEventListener("click", () => {
        const query = button.dataset.query || button.textContent;
        renderSearch(query, refs);
        input.focus();
      });
    });

    // 對外保留簡單 API，之後若要從別的按鈕觸發查詢可直接使用。
    window.ManualQA = {
      search: query => searchEntries(query),
      searchPages: query => searchPages(query),
      bestChapter: query => buildBestChapter(query),
      ask: query => renderSearch(query, refs),
      focus: () => input.focus()
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initManualQa, { once: true });
  } else {
    initManualQa();
  }
})();
