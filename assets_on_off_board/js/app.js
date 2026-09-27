/**
 * 網頁互動邏輯
 * 一般內容更新不需要修改此檔。
 */

const byId = Object.fromEntries(topics.map(t=>[t.id,t]));
const categoriesEl = document.getElementById("categories");
const homeView = document.getElementById("homeView");
const detailView = document.getElementById("detailView");
const searchView = document.getElementById("searchView");

categories.forEach(c=>{
  const el=document.createElement("button");
  el.className="category-card";
  const topicCount=(c.topicIds || []).length;
  const attachmentCount=(c.attachments || []).length;
  const countText=attachmentCount
    ? `${topicCount} 項 · 附件 ${attachmentCount} 頁`
    : `${topicCount} 項`;
  el.innerHTML=`
    <div class="category-count">${countText}</div>
    <div class="category-icon">${c.icon}</div>
    <h3>${c.title}</h3>
    <p>${c.desc}</p>`;
  el.addEventListener("click",()=>openCategory(c.id));
  categoriesEl.appendChild(el);
});

function attachmentGallery(c){
  const files=c.attachments || [];
  if(!files.length) return null;

  const section=document.createElement("section");
  section.className="attachment-section";
  section.innerHTML=`
    <div class="attachment-heading">
      <div>
        <div class="attachment-kicker">附件預覽</div>
        <h3>直接查看文件</h3>
        <p>點擊圖片可開啟原尺寸 JPG，手機也可雙指放大。</p>
      </div>
      <div class="attachment-pages">${files.length} 頁</div>
    </div>
    <div class="attachment-gallery"></div>`;

  const gallery=section.querySelector(".attachment-gallery");
  files.forEach((file,index)=>{
    const figure=document.createElement("figure");
    figure.className="attachment-page";
    figure.innerHTML=`
      <a href="${file.src}" target="_blank" rel="noopener" aria-label="開啟 ${file.label || `第 ${index+1} 頁`} 原尺寸">
        <img src="${file.src}" alt="${file.label || `附件第 ${index+1} 頁`}" loading="lazy" decoding="async">
      </a>
      <figcaption>
        <span>${file.label || `第 ${index+1} 頁`}</span>
        <a href="${file.src}" target="_blank" rel="noopener">開啟原尺寸 ↗</a>
      </figcaption>`;
    gallery.appendChild(figure);
  });
  return section;
}

function topicCard(t, open=false){
  const el=document.createElement("article");
  el.className="topic"+(open?" open":"");
  el.innerHTML=`
    <button type="button">
      <div>
        <div class="topic-name">${t.title}</div>
        <div class="topic-source">${t.source}</div>
      </div>
      <div class="chev">⌄</div>
    </button>
    <div class="topic-body">${t.html}</div>`;
  el.querySelector("button").addEventListener("click",()=>el.classList.toggle("open"));
  return el;
}

function openCategory(id){
  const c=categories.find(x=>x.id===id);
  if(!c)return;
  homeView.style.display="none";
  searchView.classList.remove("active");
  detailView.classList.add("active");
  document.getElementById("detailBreadcrumb").textContent=c.title;
  document.getElementById("detailTitle").textContent=c.icon+" "+c.title;
  document.getElementById("detailDesc").textContent=c.desc;
  const list=document.getElementById("topicList");
  list.innerHTML="";
  const attachments=attachmentGallery(c);
  if(attachments) list.appendChild(attachments);
  (c.topicIds || []).forEach(tid=>{
    if(byId[tid]) list.appendChild(topicCard(byId[tid]));
  });
  detailView.scrollIntoView({behavior:"smooth",block:"start"});
}

function goHome(){
  detailView.classList.remove("active");
  searchView.classList.remove("active");
  homeView.style.display="block";
  window.scrollTo({top:0,behavior:"smooth"});
}
document.getElementById("backBtn").addEventListener("click",goHome);
document.getElementById("searchBackBtn").addEventListener("click",goHome);

function normalizeText(s){
  return String(s || "")
    .toLowerCase()
    .replace(/[臺台]/g,"台")
    .replace(/[–—－]/g,"-")
    .replace(/[％]/g,"%")
    .replace(/[，。？！、；：,.;:?!()[\]{}「」『』"'／/\\\s]+/g,"")
    .trim();
}

function plainTopic(t){
  return (t.title+" "+t.keywords+" "+t.html.replace(/<[^>]+>/g," "))
    .replace(/&nbsp;/g," ")
    .replace(/&amp;/g,"&");
}

function expandQuery(q){
  const raw = q.toLowerCase();
  const norm = normalizeText(raw);
  const terms = new Set();

  // Original chunks
  raw.split(/[，。？！、；：,.;:?\s/]+/)
    .map(x=>x.trim())
    .filter(x=>x && !stopWords.has(x))
    .forEach(x=>terms.add(x));

  // Detect synonyms and add the full group.
  for(const group of synonymGroups){
    const hit = group.some(term => norm.includes(normalizeText(term)));
    if(hit) group.forEach(term=>terms.add(term.toLowerCase()));
  }

  // Add useful Chinese 2–4 character fragments for natural questions.
  const chinese = raw.match(/[\u4e00-\u9fff]+/g) || [];
  for(const part of chinese){
    const cleaned = [...part].join("");
    for(let n=2;n<=4;n++){
      for(let i=0;i<=cleaned.length-n;i++){
        const gram = cleaned.slice(i,i+n);
        if(!stopWords.has(gram)) terms.add(gram);
      }
    }
  }

  return [...terms].filter(x=>normalizeText(x).length>=2);
}

function diceSimilarity(a,b){
  a=normalizeText(a); b=normalizeText(b);
  if(a===b) return 1;
  if(a.length<2 || b.length<2) return 0;
  const pairs = s => {
    const m=new Map();
    for(let i=0;i<s.length-1;i++){
      const p=s.slice(i,i+2); m.set(p,(m.get(p)||0)+1);
    }
    return m;
  };
  const A=pairs(a), B=pairs(b);
  let overlap=0, totalA=0, totalB=0;
  A.forEach(v=>totalA+=v); B.forEach(v=>totalB+=v);
  A.forEach((v,k)=>{ if(B.has(k)) overlap += Math.min(v,B.get(k)); });
  return (2*overlap)/(totalA+totalB || 1);
}

function scoreTopic(t,q){
  const raw = q.toLowerCase().trim();
  if(!raw) return 0;

  const title = t.title.toLowerCase();
  const keywords = t.keywords.toLowerCase();
  const body = plainTopic(t).toLowerCase();
  const nTitle=normalizeText(title), nKeys=normalizeText(keywords), nBody=normalizeText(body), nQ=normalizeText(raw);

  let score=0;

  // Whole-question / phrase match.
  if(nTitle.includes(nQ)) score += 45;
  if(nKeys.includes(nQ)) score += 34;
  if(nBody.includes(nQ)) score += 24;

  const terms = expandQuery(raw);
  for(const term of terms){
    const nt=normalizeText(term);
    if(!nt) continue;
    if(nTitle.includes(nt)) score += 12;
    if(nKeys.includes(nt)) score += 9;
    if(nBody.includes(nt)) score += 4;

    // Fuzzy matching catches slightly different wording / typos.
    const simTitle=diceSimilarity(nt,nTitle);
    const simKeys=diceSimilarity(nt,nKeys);
    if(simTitle>=0.48) score += Math.round(simTitle*7);
    if(simKeys>=0.45) score += Math.round(simKeys*5);
  }

  // Question-intent boost (deadline / amount / contact / documents etc.).
  for(const rule of intentRules){
    if(rule.words.some(w=>nQ.includes(normalizeText(w)))){
      const combined=nTitle+nKeys+nBody;
      for(const clue of rule.boost){
        if(combined.includes(normalizeText(clue))) score += 3;
      }
    }
  }

  // Strong semantic combinations.
  const combos = [
    [["國外","下船"],["國外下船","登機證","船員手冊","護照"]],
    [["高鐵","報銷"],["高鐵","電子購票證明","統編"]],
    [["請假","多久"],["請假","45天"]],
    [["病假","下船"],["病假","unfit"]],
    [["勞健保","外輪"],["外輪","工會","投保"]],
    [["勞健保","國輪"],["國輪","上船","下船"]],
    [["多益","獎勵"],["TOEIC","860","USD300"]],
    [["英文","補助"],["線上學習","80%","20000"]],
    [["結婚","補助"],["結婚賀儀","6000"]],
    [["喪葬","補助"],["喪葬補助","5000"]],
    [["代理","電話"],["代理行","手機","辦公室"]],
    [["尿檢","報銷"],["尿液","V802"]],
    [["體檢","報銷"],["體檢費","2000"]],
    [["黃熱病","換證"],["黃熱病","換證","全額"]]
  ];
  for(const [needles,boostTerms] of combos){
    if(needles.every(x=>nQ.includes(normalizeText(x)))){
      const combined=nTitle+nKeys+nBody;
      if(boostTerms.some(x=>combined.includes(normalizeText(x)))) score += 25;
    }
  }
  return score;
}

function topicSentences(t){
  const tmp=document.createElement("div");
  tmp.innerHTML=t.html;
  const text=tmp.innerText.replace(/\n+/g," ").replace(/\s+/g," ").trim();
  return text.split(/(?<=[。；])/).map(x=>x.trim()).filter(Boolean);
}

function bestSnippet(t,q){
  const terms=expandQuery(q);
  const sentences=topicSentences(t);
  if(!sentences.length) return plainTopic(t);
  const ranked=sentences.map(s=>{
    const ns=normalizeText(s);
    let sc=0;
    terms.forEach(term=>{
      const nt=normalizeText(term);
      if(nt && ns.includes(nt)) sc+=4;
    });
    const nq=normalizeText(q);
    if(nq && ns.includes(nq)) sc+=8;
    return {s,sc};
  }).sort((a,b)=>b.sc-a.sc);

  const selected=ranked.filter(x=>x.sc>0).slice(0,3);
  if(!selected.length) return sentences.slice(0,2).join(" ");
  return selected.map(x=>x.s).join(" ");
}

function confidenceLabel(best,second){
  if(!best || best.score<=0) return "";
  const gap=best.score-(second?.score||0);
  if(best.score>=55 && gap>=12) return "高度相關";
  if(best.score>=30) return "相關";
  return "可能相關";
}

function runSearch(){
  const q=document.getElementById("searchInput").value.trim();
  if(!q)return;
  const ranked=topics.map(t=>({t,score:scoreTopic(t,q)}))
    .filter(x=>x.score>4).sort((a,b)=>b.score-a.score);
  homeView.style.display="none";
  detailView.classList.remove("active");
  searchView.classList.add("active");
  document.getElementById("searchSummary").textContent=`「${q}」找到 ${ranked.length} 個相關主題`;
  const out=document.getElementById("searchResults");
  out.innerHTML="";
  if(!ranked.length){
    out.innerHTML=`<div class="no-result">找不到明確結果。可以直接用完整句子搜尋，例如「國外下船護照多久要寄回」或「高鐵可以報銷嗎」。</div>`;
  }else{
    ranked.slice(0,10).forEach((x,i)=>out.appendChild(topicCard(x.t,i===0)));
  }
  searchView.scrollIntoView({behavior:"smooth",block:"start"});
}

document.getElementById("searchBtn").addEventListener("click",runSearch);
document.getElementById("searchInput").addEventListener("keydown",e=>{if(e.key==="Enter")runSearch()});

document.getElementById("openAllBtn").addEventListener("click",()=>{
  homeView.style.display="none";
  searchView.classList.remove("active");
  detailView.classList.add("active");
  document.getElementById("detailBreadcrumb").textContent="全部主題";
  document.getElementById("detailTitle").textContent="📚 全部主題";
  document.getElementById("detailDesc").textContent="一次瀏覽附件中的所有內容。";
  const list=document.getElementById("topicList");
  list.innerHTML="";
  topics.forEach(t=>list.appendChild(topicCard(t)));
  detailView.scrollIntoView({behavior:"smooth",block:"start"});
});

function ask(){
  const q=document.getElementById("question").value.trim();
  const ans=document.getElementById("answer");
  if(!q){ans.textContent="請先輸入問題。";return}

  const ranked=topics.map(t=>({t,score:scoreTopic(t,q)}))
    .filter(x=>x.score>0)
    .sort((a,b)=>b.score-a.score);

  if(!ranked[0] || ranked[0].score<8){
    ans.innerHTML=`目前找不到夠明確的對應內容。<br><small>可以改問：「國外下船後護照多久要寄回？」、「高鐵電子票怎麼報銷？」或「外輪有勞健保嗎？」</small>`;
    return;
  }

  const best=ranked[0];
  const second=ranked[1];
  const snippet=bestSnippet(best.t,q);
  const related=ranked.slice(1,4).filter(x=>x.score >= Math.max(10,best.score*0.35));

  ans.innerHTML=`
    <div class="qa-confidence">${confidenceLabel(best,second)}</div>
    <div class="qa-answer-title">${best.t.title}</div>
    <div class="qa-answer-text">${snippet}</div>
    <div style="margin-top:9px"><small>${best.t.source}</small></div>
    ${related.length ? `
      <div class="qa-related">
        <div class="qa-related-title">可能也相關</div>
        ${related.map(x=>`<button type="button" data-topic="${x.t.id}">${x.t.title}</button>`).join("")}
      </div>` : ""}
  `;

  ans.querySelectorAll("[data-topic]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const t=byId[btn.dataset.topic];
      homeView.style.display="none";
      searchView.classList.remove("active");
      detailView.classList.add("active");
      document.getElementById("detailBreadcrumb").textContent="Q&A 相關主題";
      document.getElementById("detailTitle").textContent="🔎 "+t.title;
      document.getElementById("detailDesc").textContent="從 Q&A 延伸查看完整規定。";
      const list=document.getElementById("topicList");
      list.innerHTML="";
      list.appendChild(topicCard(t,true));
      detailView.scrollIntoView({behavior:"smooth",block:"start"});
    });
  });
}

document.getElementById("askBtn").addEventListener("click",ask);
document.getElementById("question").addEventListener("keydown",e=>{if(e.key==="Enter")ask()});
