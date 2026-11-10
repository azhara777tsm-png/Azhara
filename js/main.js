(()=>{
const still=matchMedia('(prefers-reduced-motion: reduce)').matches;
// 1) 3D tilt on cards
if(!still)document.querySelectorAll('.card-3d').forEach(c=>{
  c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.setProperty('--ry',x*12+'deg');c.style.setProperty('--rx',-y*12+'deg')});
  c.addEventListener('pointerleave',()=>{c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')});
});
// 2) Program filter
const fb=document.querySelectorAll('[data-filter]');
fb.forEach(b=>b.addEventListener('click',()=>{
  fb.forEach(x=>x.setAttribute('aria-pressed',x===b));
  document.querySelectorAll('[data-cat]').forEach(i=>{i.hidden=b.dataset.filter!=='all'&&i.dataset.cat!==b.dataset.filter});
}));
// Forms
let a=7;const q=document.getElementById('q');
if(q){const x=2+Math.floor(Math.random()*8),y=2+Math.floor(Math.random()*8);a=x+y;q.textContent=x+' + '+y}
const today=new Date().toISOString().slice(0,10);
function check(f,el){
  el.setCustomValidity('');
  if(el.name==='pw'&&el.value&&!/^(?=.*\d)(?=.*[A-Za-z]).{8,}$/.test(el.value))el.setCustomValidity('Use at least 8 characters with a letter and a number.');
  if(el.name==='pw2'&&el.value!==f.elements.pw.value)el.setCustomValidity('Passwords do not match.');
  if(el.name==='intake'&&el.value&&el.value<today)el.setCustomValidity('Choose a date in the future.');
  if(el.name==='captcha'&&+el.value!==a)el.setCustomValidity('Wrong answer. Try again.');
  const ok=el.checkValidity();
  if(el.type==='radio'){const e=document.getElementById(el.name+'Err');if(e)e.classList.toggle('d-block',!ok);return ok}
  el.classList.toggle('is-invalid',!ok);el.classList.toggle('is-valid',ok);
  const fb=el.closest('.mb-3')?.querySelector('.invalid-feedback');
  if(fb&&!ok)fb.textContent=el.validationMessage;
  return ok;
}
document.querySelectorAll('form[data-validate]').forEach(f=>{
  const els=[...f.querySelectorAll('input:not(.hp):not([type=hidden]),select,textarea')];
  els.forEach(el=>{el.addEventListener('blur',()=>check(f,el));el.addEventListener('input',()=>el.classList.contains('is-invalid')&&check(f,el));
    if(el.type==='radio'||el.type==='checkbox')el.addEventListener('change',()=>check(f,el))});
  f.addEventListener('submit',e=>{
    e.preventDefault();
    const res=els.map(el=>check(f,el)),out=document.getElementById('result');
    const bad=els.find((el,i)=>!res[i]);
    out.className='alert mt-3';out.tabIndex=-1;
    if(bad){out.classList.add('alert-danger');out.textContent='Please fix the highlighted fields and try again.';bad.focus();return}
    if(f.elements.website&&f.elements.website.value){out.classList.add('alert-danger');out.textContent='Your message could not be sent. Please try again later.';return}
    out.classList.add('alert-success');
    out.textContent=f.dataset.ok;f.reset();els.forEach(el=>el.classList.remove('is-valid','is-invalid'));out.focus();
  });
});
})();
// Hero 3D parallax
(()=>{const s=document.querySelector('.stage'),w=document.querySelector('.world');
if(!s||!w||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
document.addEventListener('pointermove',e=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;w.style.setProperty('--py',x*50+'deg');w.style.setProperty('--px',(-14-y*35)+'deg')});})();
