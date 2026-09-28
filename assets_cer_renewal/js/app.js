
const pmap = Object.fromEntries(DATA.parents.map(x=>[x.id,x]));
const cmap = Object.fromEntries(DATA.children.map(x=>[x.id,x]));
const home = document.getElementById("home");
const pv = document.getElementById("parentView");
const cv = document.getElementById("childView");
const sv = document.getElementById("searchView");
let currentParent = null;
function showOnly(el){ [home,pv,cv,sv].forEach(x=>x.classList.remove("active")); el.classList.add("active"); }
function renderParents(){
  const out = document.getElementById("parentGrid");
  out.innerHTML = "";
  DATA.parents.forEach(p=>{
    const b = document.createElement("button");
    b.className = "parent";
    b.innerHTML = `<div class="count">${p.children.length} 個子類別</div><div class="icon">${p.icon}</div><h3>${p.title}</h3><p>${p.desc}</p>`;
    b.onclick = ()=>openParent(p.id);
    out.appendChild(b);
  });
}
function openParent(id){
  currentParent = id;
  const p = pmap[id];
  showOnly(pv);
  document.getElementById("pcrumb").textContent = p.title;
  document.getElementById("ptitle").textContent = p.icon + " " + p.title;
  document.getElementById("pdesc").textContent = p.desc;
  const out = document.getElementById("childGrid");
  out.innerHTML = "";
  p.children.forEach(cid=>{
    const c = cmap[cid];
    const b = document.createElement("button");
    b.className = "child";
    b.innerHTML = `<h3>${c.title}</h3><p>${c.short}</p>`;
    b.onclick = ()=>openChild(cid);
    out.appendChild(b);
  });
  pv.scrollIntoView({behavior:"smooth", block:"start"});
}
function gallery(imgs){
  if(!imgs || !imgs.length) return "";
  return `<section class="gallerybox"><h3>文件預覽</h3><p>點圖片可放大查看。</p><div class="gallery">${
    imgs.map(([src,label]) => `<div class="doc"><h4>${label}</h4><img src="${src}" alt="${label}" data-full="${src}"><a class="doc-link" href="${src}" target="_blank" rel="noopener">另開圖片 ↗</a></div>`).join("")
  }</div></section>`;
}
function openChild(id){
  const c = cmap[id], p = pmap[c.parent];
  currentParent = p.id;
  showOnly(cv);
  document.getElementById("ccrumb").textContent = p.title + " / " + c.title;
  document.getElementById("ctitle").textContent = c.title;
  document.getElementById("cdesc").textContent = c.short;
  document.getElementById("childContent").innerHTML = `<div class="content">${c.html}</div>${gallery(c.imgs)}`;
  document.querySelectorAll("[data-full]").forEach(img => img.onclick = ()=>openModal(img.dataset.full));
  cv.scrollIntoView({behavior:"smooth", block:"start"});
}
function openModal(src){ document.getElementById("modalImg").src = src; document.getElementById("modal").classList.add("show"); }
function closeModal(){ document.getElementById("modal").classList.remove("show"); document.getElementById("modalImg").src = ""; }
document.getElementById("modalClose").onclick = closeModal;
document.getElementById("modal").onclick = e => { if(e.target.id === "modal") closeModal(); };
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });
function backParent(){ currentParent ? openParent(currentParent) : showOnly(home); }
function norm(s){ return String(s||"").toLowerCase().replace(/[臺台]/g,"台").replace(/[，。？！、；：,.;:?!()[\]{}「」『』"'／/\\\s]+/g,""); }
function score(c,q){
  const nq = norm(q), all = norm(c.title+" "+c.short+" "+(c.keywords||"")+" "+c.html.replace(/<[^>]+>/g," "));
  if(!nq) return 0;
  let s = all.includes(nq) ? 20 : 0;
  q.split(/[，。？！、；：,.;:?\s/]+/).filter(Boolean).forEach(t=>{
    const nt = norm(t);
    if(nt.length < 2) return;
    if(norm(c.title).includes(nt)) s += 10;
    if(norm(c.keywords||"").includes(nt)) s += 7;
    if(all.includes(nt)) s += 4;
  });
  return s;
}
function doSearch(){
  const q = document.getElementById("q").value.trim();
  if(!q) return;
  const arr = DATA.children.map(c=>({c,s:score(c,q)})).filter(x=>x.s>0).sort((a,b)=>b.s-a.s);
  showOnly(sv);
  document.getElementById("sdesc").textContent = `「${q}」找到 ${arr.length} 個相關子類別`;
  const out = document.getElementById("searchResults");
  out.innerHTML = "";
  if(!arr.length){
    out.innerHTML = `<div class="searchres"><p>找不到明確結果，可改試「365天」、「SBTA」、「MED TW」、「委託書」、「自行換證」。</p></div>`;
    return;
  }
  arr.forEach(x=>{
    const p = pmap[x.c.parent];
    const d = document.createElement("div");
    d.className = "searchres";
    d.innerHTML = `<h3>${x.c.title}</h3><p>${p.title}｜${x.c.short}</p>`;
    d.onclick = ()=>openChild(x.c.id);
    out.appendChild(d);
  });
}
document.getElementById("searchBtn").onclick = doSearch;
document.getElementById("q").addEventListener("keydown", e=>{ if(e.key==='Enter') doSearch(); });
document.getElementById("homeBtn").onclick = ()=>showOnly(home);
document.getElementById("backParent").onclick = backParent;
document.getElementById("searchHome").onclick = ()=>showOnly(home);
renderParents();
