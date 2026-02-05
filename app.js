async function loadConfig(){
  const r = await fetch('./config.json', {cache:'no-store'});
  return await r.json();
}

function normAnswer(s){
  return (s||"").toString().trim().toUpperCase().normalize('NFD').replace(/\p{Diacritic}/gu,'');
}

function getState(){
  try{
    return JSON.parse(localStorage.getItem('ivryTownState')||'{}');
  }catch(e){ return {}; }
}
function setState(obj){
  localStorage.setItem('ivryTownState', JSON.stringify(obj||{}));
}
function ensureState(){
  const st = getState();
  if(!st.team){ st.team = ""; }
  if(st.p1 !== true) st.p1 = false;
  if(st.p2 !== true) st.p2 = false;
  if(st.finished !== true) st.finished = false;
  setState(st);
  return st;
}

function renderHeader(cfg){
  const st = ensureState();
  const title = document.querySelector('[data-title]');
  const sub = document.querySelector('[data-subtitle]');
  const team = document.querySelector('[data-team]');
  if(title) title.textContent = cfg.gameTitle || "Ivry Town";
  if(sub) sub.textContent = cfg.subtitle || "";
  if(team) team.textContent = st.team ? `Équipe : ${st.team}` : "Équipe : —";
  const steps = document.querySelector('[data-steps]');
  if(steps){
    steps.innerHTML = `
      <div class="step ${st.p1?'done':''}">Énigme 1</div>
      <div class="step ${st.p2?'done':''}">Énigme 2</div>
      <div class="step ${st.finished?'done':''}">Final</div>
    `;
  }
}

function requireTeamOrRedirect(){
  const st = ensureState();
  if(!st.team){
    window.location.href = './index.html';
  }
}

function showNotice(el, type, msg){
  el.className = `notice ${type||''}`;
  el.textContent = msg;
  el.hidden = false;
}

function hardReset(){
  localStorage.removeItem('ivryTownState');
  window.location.href = './index.html';
}
