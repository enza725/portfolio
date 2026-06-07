/*------------------------------------
------------ HTMLの読み込み ------------
-------------------------------------*/
async function getHtmlFile(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
  console.log(html)
}

async function loadPart() {
  await getHtmlFile('left-div', 'html/left-aside.html');
  await getHtmlFile('right-div', 'html/right-container.html');
}
loadPart();

/*------------------------------------
------------ navの選択処理 -------------
-------------------------------------*/
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
  document.getElementById('r-index-num').textContent = navNums[id];
  document.getElementById('r-index-title').textContent = navNames[id];
}

/*------------------------------------
----------- テーマの設定処理 ------------
-------------------------------------*/
function setTheme(t, btn) {
  document.documentElement.setAttribute('data-theme', t);
  document.querySelectorAll('.l-aside-theme-btn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
} 
