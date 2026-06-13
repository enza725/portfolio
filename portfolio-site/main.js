/* =================== 初期化 =================== */
async function init() {
  await loadPart();

  document.getElementById('r-mb-burger').addEventListener('click', () => {
    burgerBtnClick();
  });

  sendMail();
}

init();

/* =============== HTMLの読み込み =============== */
async function getHtmlFile(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

async function loadPart() {
  await getHtmlFile('left-div', 'html/left-aside.html');
  await getHtmlFile('right-div', 'html/right-container.html');
}

/* ============= ナビリストの選択処理 ============= */
const navNums = {
  about: '01',
  skills: '02',
  projects: '03',
  contact: '04'
};

const navNames = {
  about: 'About Me',
  skills: 'Skills',
  projects: 'Projects',
  contact: 'Contact'
};

function navSelect(id, el) {
  document.querySelectorAll('.r-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.l-aside-ni').forEach(n => n.classList.remove('active'));
  document.getElementById('r-panel-'+id).classList.add('active');
  el.classList.add('active');

  let rightContent = document.querySelector('.r-content');
  if ( rightContent.className.includes('hide') ) burgerBtnClick();
}

/* =============== テーマの選択処理 =============== */
function setTheme(t, btn) {
  document.documentElement.setAttribute('data-theme', t);
  document.querySelectorAll('.l-aside-theme-btn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
} 


/* ======== ハンバーガーボタンのクリック処理 ======== */
function burgerBtnClick() {
  let burgerBtn = document.getElementById('r-mb-burger');
  burgerBtn.classList.toggle('click');
  asideDivToggle();
}

function asideDivToggle() {
  let [leftAside, rightDiv, rightTop, rightContent] = [
    document.getElementById('left-div'),
    document.getElementById('right-div'),
    document.querySelector('.r-top-div'),
    document.querySelector('.r-content')
  ];
  
  leftAside.classList.toggle('show-left');  
  rightDiv.classList.toggle('hide-right');
  rightTop.classList.toggle('hide-right');
  rightContent.classList.toggle('hide-right');
}

/* ============= メール送信 ============= */
function sendMail() {
  emailjs.init({
    publicKey: "vzCo4P84GdDa4CZoO",
  });

  const form = document.querySelector(".r-contact-form");
  form.addEventListener("submit", async function(e) {
    e.preventDefault();  
    try {
      await emailjs.sendForm(
        "service_j5b99ct",
        "template_nwxc4yu",
        this
      );
      alert("送信成功！");
      form.reset();

    } catch (err) {
      alert("送信失敗！");
      console.error(err);
    }
  });
}