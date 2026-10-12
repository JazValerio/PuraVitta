const $=id=>document.getElementById(id),fmt=n=>'₡'+Math.round(n).toLocaleString('es-CR');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');if(e.target.querySelector('[data-n]'))count(e.target);io.unobserve(e.target)}}),{threshold:.2});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
function count(r){r.querySelectorAll('[data-n]').forEach(b=>{const t=+b.dataset.n,s=performance.now();(function f(n){const p=Math.min((n-s)/1400,1);b.textContent=Math.round(t*(1-Math.pow(1-p,3)));p<1&&requestAnimationFrame(f)})(s)})}
const pods=document.querySelectorAll('[data-p]'),pt=document.querySelector('.petals');let tk=0;
addEventListener('scroll',()=>{if(tk)return;tk=1;requestAnimationFrame(()=>{const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
$('bar').style.width=(y/h*100)+'%';pods.forEach(p=>p.style.setProperty('--ty',y*p.dataset.p+'px'));
document.querySelectorAll('.petals').forEach(p=>p.style.transform='rotate('+y*.08+'deg)');tk=0})},{passive:true});
let q=3;
function calc(){const sb=q*32000,d=q>=10?.1:q>=5?.05:0,ds=sb*d,international=$('destino').value==='internacional',env=international?null:(sb-ds)>150000?0:+$('zona').value,iv=(sb-ds+(env||0))*.13;
$('qt').textContent=q;$('kg').textContent=q*2+' kg de cobertura';$('sb').textContent=fmt(sb);$('dl').textContent='Descuento'+(d?' '+d*100+'%':'');
$('ds').textContent=d?'−'+fmt(ds):'₡0';$('en').textContent=international?'Por cotizar':env?fmt(env):'Gratis';$('iv').textContent=fmt(iv);$('tt').textContent=fmt(sb-ds+(env||0)+iv)+(international?' + envío por cotizar':'');$('zona-cr-wrap').hidden=international;$('envio-internacional').hidden=!international;$('envio-cr').hidden=international;$('ok').classList.remove('on')}
$('mn').onclick=()=>{q=Math.max(1,q-1);calc()};$('pl').onclick=()=>{q=Math.min(50,q+1);calc()};$('zona').onchange=calc;$('destino').onchange=calc;
$('go').onclick=()=>{const o=$('ok'),international=$('destino').value==='internacional',message='Quiero cotizar '+q+' bloques de 2 kg'+(international?' con envío internacional.':'.');o.innerHTML='<b class="s">¡Pedido simulado!</b><br>N.º PV-'+(1000+Math.floor(Math.random()*9000))+' · '+q+' bloque'+(q>1?'s':'')+' · '+$('tt').textContent+'.<br>No se hizo ningún cobro. <a id="cotizar" href="#contacto">Contáctanos para cerrarlo</a>.';$('cotizar').onclick=()=>{$('ms').value=message};o.classList.add('on')};
$('fm').onsubmit=e=>{e.preventDefault();const o=$('fok');o.innerHTML='<b class="s">¡Gracias, '+$('nm').value+'!</b><br>Recibimos tu mensaje. Te escribiremos pronto.';o.classList.add('on');e.target.reset()};
calc();
