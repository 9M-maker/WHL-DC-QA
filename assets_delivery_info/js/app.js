
const infoRoot = document.getElementById("mailingInfo");

// 先使用現代 Clipboard API；若瀏覽器/預覽環境不允許，
// 自動改用隱藏 textarea + execCommand('copy') 的相容方式。
async function copyToClipboard(text){
  if(navigator.clipboard && window.isSecureContext){
    try{
      await navigator.clipboard.writeText(text);
      return true;
    }catch(err){
      // 繼續使用 fallback
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  textarea.style.top = "0";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);

  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  let copied = false;
  try{
    copied = document.execCommand("copy");
  }catch(err){
    copied = false;
  }

  document.body.removeChild(textarea);
  return copied;
}

function makeCopyButton(text, label){
  const wrap = document.createElement("div");

  const btn = document.createElement("button");
  btn.className = "copy-btn";
  btn.type = "button";
  btn.textContent = label;

  const status = document.createElement("span");
  status.className = "copy-status";
  status.setAttribute("aria-live", "polite");

  btn.addEventListener("click", async ()=>{
    const copied = await copyToClipboard(text);

    if(copied){
      const original = btn.textContent;
      btn.textContent = "✓ 已複製到剪貼簿";
      btn.classList.add("copied");
      status.textContent = "";

      setTimeout(()=>{
        btn.textContent = original;
        btn.classList.remove("copied");
      }, 1600);
    }else{
      // 極少數瀏覽器完全封鎖程式化剪貼簿時，
      // 將文字選取，方便長按/複製。
      status.textContent = "瀏覽器阻擋剪貼簿權限";
    }
  });

  wrap.appendChild(btn);
  wrap.appendChild(status);
  return wrap;
}

function renderMailingInfo(){
  infoRoot.innerHTML = "";

  const addressCard = document.createElement("section");
  addressCard.className = "card";
  addressCard.innerHTML = `
    <div class="label">公司地址</div>
    <div class="address">${MAILING_DATA.companyAddress}</div>

    <div class="company-extra">

    <div>
      <strong>公司電話：</strong>
      ${MAILING_DATA.companyNumber}
    </div>

    <div>
      <strong>統一編號：</strong>
      ${MAILING_DATA.companyTaxID}
    </div>
  `;
  addressCard.appendChild(
    makeCopyButton(MAILING_DATA.companyAddress, "複製地址")
  );
  infoRoot.appendChild(addressCard);

  const recipientCard = document.createElement("section");
  recipientCard.className = "card";
  recipientCard.innerHTML = `
    <div class="label">收件人</div>
    <h2>請依部門選擇收件人</h2>
    <div class="recipient-grid" id="recipientGrid"></div>
  `;
  infoRoot.appendChild(recipientCard);

  const grid = recipientCard.querySelector("#recipientGrid");

  MAILING_DATA.recipients.forEach(person=>{
    const item = document.createElement("div");
    item.className = "recipient";

    item.innerHTML = `
      <div class="dept">${person.department}</div>
      <h3>${person.nameZh} ${person.nameEn}</h3>
      <div class="ext">分機 #${person.extension}</div>

      <div class="recipient-mail">

        <a href="mailto:${person.mail}">
        ${person.mail}
        </a>

    </div>
    `;

    const copyText =
      `${person.department}－${person.nameZh} ${person.nameEn} #${person.extension}`;

    item.appendChild(
      makeCopyButton(copyText, "複製收件人")
    );

    grid.appendChild(item);
  });
}

renderMailingInfo();
