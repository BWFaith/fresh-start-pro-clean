const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
addEventListener('scroll',()=>$('header').classList.toggle('sc',scrollY>40));
$('.burger')?.addEventListener('click',()=>$('nav>ul').classList.toggle('open'));
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});$$('.rv').forEach(e=>io.observe(e));
$$('[data-c]').forEach(el=>{const t=+el.dataset.c,s=el.dataset.s||'';new IntersectionObserver((a,o)=>{if(a[0].isIntersecting){let n=0;const k=setInterval(()=>{n+=Math.ceil(t/50);if(n>=t){n=t;clearInterval(k)}el.textContent=n+s},30);o.disconnect()}}).observe(el)});
$$('.ba').forEach(b=>b.querySelector('input').addEventListener('input',e=>b.style.setProperty('--p',e.target.value+'%')));
const cv=$('.hero canvas');if(cv){const c=cv.getContext('2d');let W,H,P=[];const rs=()=>{W=cv.width=cv.offsetWidth;H=cv.height=cv.offsetHeight};rs();addEventListener('resize',rs);
for(let i=0;i<70;i++)P.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2+.4,v:Math.random()*.4+.1,a:Math.random()*6});
(function f(){c.clearRect(0,0,W,H);P.forEach(p=>{p.y-=p.v;p.a+=.03;if(p.y<-5){p.y=H+5;p.x=Math.random()*W}c.globalAlpha=.25+.5*Math.abs(Math.sin(p.a));c.fillStyle='#e6c97a';c.beginPath();c.arc(p.x,p.y,p.r,0,7);c.fill()});requestAnimationFrame(f)})()}
const F=$('#bform');if(F){const C=window.FSPC,v=n=>F.elements[n].value;let last={rows:[],tot:0};
const calc=()=>{const t=v('type'),bd=+v('beds'),ba=+v('baths'),sq=+v('sqft')||0,r=C.rates;let rows=[],sub=0;
 if(t==='commercial'){sub=Math.max(r.commercial.min,sq*r.commercial.sqft);rows.push(['Commercial ('+sq+' sq ft)',sub])}
 else if(t==='move'){const h=r.move.base+bd*r.move.bed+ba*r.move.bath;sub=h*r.move.hourly;rows.push(['Est. '+h.toFixed(1)+' hrs x $'+r.move.hourly,sub])}
 else{const x=r[t];sub=x.base+bd*x.bed+ba*x.bath;rows.push([t==='deep'?'Deep clean':'Standard clean',sub])}
 $$('.ad:checked').forEach(a=>{sub+=C.addons[a.value];rows.push([a.dataset.n,C.addons[a.value]])});
 const d=(t==='move'||t==='deep')?0:C.freq[v('freq')],ds=sub*d;if(ds)rows.push(['Recurring discount',-ds]);
 const net=sub-ds,tx=net*C.tax,tot=net+tx;rows.push(['HST (13%)',tx]);last={rows,tot};
 $('#rows').innerHTML=rows.map(r=>`<tr><td>${r[0]}</td><td>${r[1]<0?'-':''}$${Math.abs(r[1]).toFixed(2)}</td></tr>`).join('');$('#tot').textContent='$'+tot.toFixed(2)};
F.addEventListener('input',calc);calc();
F.addEventListener('submit',async e=>{e.preventDefault();const m=$('#msg');m.style.display='block';m.textContent='Sending your quote...';
 const p={name:v('name'),email:v('email'),phone:v('phone'),address:v('address'),date:v('date'),time:v('time'),service:v('type'),frequency:v('freq'),notes:v('notes'),
 addons:$$('.ad:checked').map(a=>a.dataset.n).join(', ')||'None',quote:last.rows.map(r=>r[0]+': $'+r[1].toFixed(2)).join('\n'),total:'$'+last.tot.toFixed(2),owner_email:C.ownerEmail};
 try{if(C.emailjs.publicKey.startsWith('YOUR'))throw 0;emailjs.init(C.emailjs.publicKey);
  await emailjs.send(C.emailjs.serviceId,C.emailjs.templateId,{...p,to_email:p.email});
  await emailjs.send(C.emailjs.serviceId,C.emailjs.templateId,{...p,to_email:C.ownerEmail});
  m.textContent='Thank you! Your quote has been emailed to you and our team has received a copy. We will confirm your booking shortly.';F.reset();calc()}
 catch(err){m.textContent='Email service not connected yet - opening your email app instead.';
  location.href='mailto:'+C.ownerEmail+'?cc='+p.email+'&subject='+encodeURIComponent('Booking request - '+p.name)+'&body='+encodeURIComponent(Object.entries(p).map(([k,v])=>k+': '+v).join('\n'))}})}

const sl=$$('.slides .s');if(sl.length){let i=0;setInterval(()=>{sl[i].classList.remove('on');i=(i+1)%sl.length;sl[i].classList.add('on')},5500);
 addEventListener('mousemove',e=>{$('.slides').style.transform=`translate(${(e.clientX/innerWidth-.5)*-24}px,${(e.clientY/innerHeight-.5)*-16}px)`})}
if(matchMedia('(pointer:fine)').matches){const d=document.createElement('div'),r=document.createElement('div');d.className='cur';r.className='cur2';document.body.append(d,r);let x=0,y=0,rx=0,ry=0,t=0;
 addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;d.style.left=x+'px';d.style.top=y+'px';const n=Date.now();if(n-t>70){t=n;const s=document.createElement('span');s.className='sp';s.textContent='✦';s.style.left=x+'px';s.style.top=y+'px';document.body.append(s);setTimeout(()=>s.remove(),900)}});
 (function f(){rx+=(x-rx)*.15;ry+=(y-ry)*.15;r.style.left=rx+'px';r.style.top=ry+'px';requestAnimationFrame(f)})();
 document.addEventListener('mouseover',e=>r.classList.toggle('h',!!e.target.closest('a,button,.ba,summary,label')))}
