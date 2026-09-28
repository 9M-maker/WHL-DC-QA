function createActionButton(action){

  const hasUrl =
    typeof action.url === "string" &&
    action.url.trim() !== "";

  // 沒有設定網址
  if(!hasUrl)
    {
    const span = document.createElement("span");
    span.className = "action-btn disabled";
    span.textContent = `${action.label}（Coming Soon）`;
    return span;
    }

  // 有設定網址
  const a = document.createElement("a");
  a.className = `action-btn ${action.type || "link"}`;
  a.href = action.url;

  // 外部連結
  if(action.type === "link")
    {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = action.label;
    }

  // 瀏覽器開啟 PDF / 文件
  else if(action.type === "preview")
    {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = action.label;
    }

  // 直接下載
  else if(action.type === "download")
    {
    if(action.fileName)
      {a.download = action.fileName;}
      a.textContent = action.label;
    }

  // 沒指定 type 時，當成一般外部連結
  else
    {
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.textContent = action.label;
    }

  return a;
}

function createCard(item){
  const card = document.createElement("article");
  card.className = "resource-card";
  card.innerHTML = 
  `
    <div class="card-top">
      <span class="icon">
        ${item.icon || "🔗"}
      </span>
    </div>
    <div>
      <h3>${item.title}</h3>
      <p>${item.description || ""}</p>
    </div>
    <div class="action-group"></div>
  `;

  const actionGroup =
    card.querySelector(".action-group");

  // 自由產生任意數量按鈕
  (item.actions || []).forEach(action => 
    {actionGroup.appendChild
    (createActionButton(action));
    }
  );

  // 完全沒有 actions 時
  if(!item.actions || item.actions.length === 0){
    const empty = document.createElement("span");
    empty.className = "action-btn disabled";
    empty.textContent = "Coming Soon";
    actionGroup.appendChild(empty);
  }
  return card;
}

function renderResources(){
  const grid =
    document.getElementById("resourceGrid");
  grid.innerHTML = "";

  RESOURCE_LINKS.forEach(item => {
    grid.appendChild(
      createCard(item)
    );
  });
}

renderResources();
