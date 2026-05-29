const nums  = {about:'01',skills:'02',projects:'03',contact:'04'};
const names = {about:'About Me',skills:'Skills',projects:'Projects',contact:'Contact'};

function go(id, el) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ni').forEach(n => n.classList.remove('active'));
  document.getElementById('panel-'+id).classList.add('active');
  el.classList.add('active');
  document.getElementById('cn').textContent = nums[id];
  document.getElementById('cj').textContent = names[id];
}

function setTheme(t, btn) {
  document.documentElement.setAttribute('data-theme', t);
  document.querySelectorAll('.tbtn').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
}