/* Design prototype behavior only: layout, language toggle, step flows, small interactions. No data is stored. */
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const NAV=[["visits.html","My visits","visits","میری وزٹس"],["timeline.html","Timeline","timeline","ٹائم لائن"],["reminders.html","Reminders","reminders","یاد دہانیاں"],["share.html","Share","share","شیئر"],["account.html","Account","account","اکاؤنٹ"]];
document.head.insertAdjacentHTML("beforeend",'<link href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Noto+Nastaliq+Urdu:wght@400;700&display=swap" rel="stylesheet">');
const b=document.body,nodes=[...b.children].filter(n=>n.tagName!=="SCRIPT");
if(b.dataset.layout==="auth"){
  const w=document.createElement("div");w.className="auth";
  w.innerHTML='<div class="auth-photo"></div><div class="auth-tint"></div><header class="auth-top"><a class="brand" href="index.html">IlajKhana</a><button class="lang" type="button">اردو</button></header><div class="auth-body"></div><a class="logo-badge" href="index.html" aria-label="IlajKhana"><img src="assets/logo.png" alt=""></a>';
  $(".auth-body",w).append(...nodes);b.prepend(w);
}else if(b.dataset.layout==="app"){
  const a=b.dataset.active,w=document.createElement("div");
  w.innerHTML='<header class="app-top"><a class="app-brand" href="visits.html"><img src="assets/logo.png" alt="" width="32" height="32"><span>IlajKhana</span></a><nav class="app-nav">'+NAV.map(n=>`<a href="${n[0]}" data-ur="${n[3]}"${n[2]===a?" aria-current=page":""}>${n[1]}</a>`).join("")+'</nav><button class="lang" type="button">اردو</button></header>';
  const m=document.createElement("main");m.className="app-main";m.append(...nodes);w.append(m);b.prepend(w);
}
/* Language toggle: swaps any element that has data-ur, flips direction. Full Urdu text comes with development. */
let ur=false;
$$(".lang").forEach(l=>l.onclick=()=>{ur=!ur;document.documentElement.lang=ur?"ur":"en";document.documentElement.dir=ur?"rtl":"ltr";
  $$("[data-ur]").forEach(e=>{if(!e.dataset.en)e.dataset.en=e.textContent;e.textContent=ur?e.dataset.ur:e.dataset.en});$$(".lang").forEach(x=>x.textContent=ur?"English":"اردو")});
/* Step flows (signup, login): any [data-go="id"] button shows that step */
const steps=$$(".step");
function go(id){steps.forEach(s=>s.classList.toggle("on",s.id===id));const n=steps.findIndex(s=>s.id===id)+1,tot=+($(".progress")||{}).dataset?.total||0,bar=$(".progress"),cnt=$(".step-count");
  if(bar){const show=!id.startsWith("done");bar.classList.toggle("hidden",!show);cnt&&cnt.classList.toggle("hidden",!show);if(show){$("i",bar).style.width=n/tot*100+"%";cnt&&(cnt.textContent=`Step ${n} of ${tot}`)}}scrollTo(0,0)}
if(steps.length){go(steps[0].id);$$("[data-go]").forEach(e=>e.addEventListener("click",ev=>{ev.preventDefault();go(e.dataset.go);if(e.dataset.go==="s2")count()}))}
let t;function count(){clearInterval(t);let n=60;const r=$("[data-countdown]");if(!r)return;r.disabled=true;t=setInterval(()=>{r.textContent=--n>0?`Resend code in ${n}s`:"Resend code";if(n<=0){clearInterval(t);r.disabled=false}},1000)}
/* Small interactions */
$$("[data-toggle]").forEach(e=>e.onclick=()=>$(e.dataset.toggle).classList.toggle("hidden"));
$$(".rx").forEach(e=>e.onclick=()=>e.classList.toggle("zoom"));
$$(".chips").forEach(g=>g.onclick=ev=>{const c=ev.target.closest("button");if(!c)return;if(g.dataset.multi==null)$$("button",g).forEach(x=>x.classList.remove("on"));c.classList.toggle("on",g.dataset.multi==null||!c.classList.contains("on"))});
$$("input[type=file]").forEach(i=>i.onchange=()=>{const f=i.files[0],p=$(i.dataset.preview);if(f&&p){p.innerHTML=`<img src="${URL.createObjectURL(f)}" alt="" style="max-width:100%;border-radius:12px">`;p.classList.remove("hidden")}});
$$("[data-show]").forEach(e=>e.onclick=()=>{$(e.dataset.show).classList.remove("hidden");if(e.dataset.hide)$(e.dataset.hide).classList.add("hidden")});
$$(".qr").forEach(q=>{let s=7,h="";const F=[[0,0],[14,0],[0,14]],fin=(x,y)=>F.some(([a,c])=>{const u=x-a,v=y-c;return u>=0&&u<7&&v>=0&&v<7&&(u%6==0||v%6==0||(u>1&&u<5&&v>1&&v<5))}),gap=(x,y)=>F.some(([a,c])=>x>=a-1&&x<a+8&&y>=c-1&&y<c+8);
  for(let y=0;y<21;y++)for(let x=0;x<21;x++){s=(s*1103515245+12345)&0x7fffffff;h+=`<b class="${fin(x,y)||(!gap(x,y)&&s%3==0)?"k":""}"></b>`}q.innerHTML=h;q.setAttribute("aria-label","QR code placeholder")});
