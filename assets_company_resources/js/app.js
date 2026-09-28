
const iconMap = {
  book: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5z"/>
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5A2.5 2.5 0 0 1 20 21.5z"/>
    </svg>`,
  heart: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6z"/>
    </svg>`,
  screen: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
      <path d="m10 8 5 2.5-5 2.5z"/>
    </svg>`,
  link: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.1 1.1"/>
      <path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.1-1.1"/>
    </svg>`
};

function createActionButton({label, href, type="link", fileName=""}){
  const hasHref = typeof href === "string" && href.trim() !== "";

  if(!hasHref){
    const span = document.createElement("span");
    span.className = "action-btn disabled";
    span.textContent = `${label}（尚未設定）`;
    return span;
  }

  const a = document.createElement("a");
  a.className = `action-btn ${type}`;
  a.href = href;

  if(type === "download"){
    a.download = fileName || "";
    a.textContent = "下載相關檔案";
  }else{
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = "前往外部連結 ↗";
  }

  return a;
}

function createCard(item){
  const card = document.createElement("article");
  card.className = "resource-card";

  card.innerHTML = `
    <div class="card-top">
      <span class="icon">${item.icon || "🔗"}</span>
    </div>
    <div>
      <h3>${item.title}</h3>
      <p>${item.description || ""}</p>
    </div>
    <div class="action-group"></div>
  `;

  const actionGroup = card.querySelector(".action-group");

  actionGroup.appendChild(
    createActionButton({
      label: "前往外部連結",
      href: item.url,
      type: "link"
    })
  );

  actionGroup.appendChild(
    createActionButton({
      label: "下載相關檔案",
      href: item.fileUrl,
      type: "download",
      fileName: item.fileName
    })
  );

  return card;
}

function renderResources(){
  const grid = document.getElementById("resourceGrid");
  grid.innerHTML = "";

  RESOURCE_LINKS.forEach(item=>{
    grid.appendChild(createCard(item));
  });
}

renderResources();
