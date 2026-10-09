const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const dk=d=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
const g4=s=>s>=8.5?4:s>=7?3:s>=5.5?2:s>=4?1:0;
const W=`accomplish|v|hoàn thành|She accomplished her goal.
adequate|adj|đủ, thích hợp|The room is adequate for ten people.
appreciate|v|đánh giá cao|I appreciate your help.
benefit|n|lợi ích|Reading has many benefits.
challenge|n|thử thách|Learning a language is a challenge.
conclude|v|kết luận|They concluded the plan was safe.
consider|v|cân nhắc|Consider all the options.
contribute|v|đóng góp|Everyone contributed to the project.
efficient|adj|hiệu quả|An efficient way to study.
establish|v|thành lập|The club was established in 2020.
evidence|n|bằng chứng|There is no evidence for that.
fundamental|adj|cơ bản|Basic algebra is fundamental.
improve|v|cải thiện|I want to improve my writing.
influence|n/v|ảnh hưởng|Teachers influence students.
maintain|v|duy trì|Maintain a regular schedule.
opportunity|n|cơ hội|Don't miss this opportunity.
persuade|v|thuyết phục|He persuaded me to join.
reluctant|adj|miễn cưỡng|She was reluctant to speak.
significant|adj|đáng kể|A significant improvement.
sustain|v|duy trì, chống đỡ|Sustain your effort.`.split('\n').map(l=>{const a=l.split('|');return{w:a[0],t:a[1],v:a[2],e:a[3],k:0}});
const CS=`HK1 2025–26|Triết học Mác – Lênin|3|9.2|
HK1 2025–26|Công tác quốc phòng, an ninh|2|9.6|1
HK1 2025–26|Đường lối quốc phòng và an ninh|3|9.3|1
HK1 2025–26|Quân sự chung|2|8.7|1
HK1 2025–26|Kỹ thuật chiến đấu bộ binh|4|8.9|1
HK1 2025–26|Toán cơ sở|2|8.3|
HK1 2025–26|Tiếng Anh chuyên ngành toán|2|8.1|
HK1 2025–26|Nhập môn ngành sư phạm toán học|1|8.5|
HK2 2025–26|Pháp luật Việt Nam đại cương|2|8.0|
HK2 2025–26|Tâm lý học đại cương|2|9.1|
HK2 2025–26|Kinh tế chính trị Mác – Lênin|2|9.6|
HK2 2025–26|Giáo dục thể chất 1|1|8.0|1
HK2 2025–26|Đại số tuyến tính 1|3|7.2|
HK2 2025–26|Giải tích cổ điển 1|3|6.3|
HK3 2025–26|Nhập môn Công nghệ số và ứng dụng AI|2||
HK3 2025–26|Giáo dục học đại cương|2|8.5|
HK3 2025–26|Chủ nghĩa xã hội khoa học|2|9.1|
HK3 2025–26|Giáo dục thể chất 2 (Bơi lội)|1|9.0|1
HK3 2025–26|Đại số tuyến tính 2|2|8.4|
HK3 2025–26|Giải tích cổ điển 2|3|8.4|
HK1 2026–27|Tư tưởng Hồ Chí Minh|2||
HK1 2026–27|Giáo dục học trung học|2||
HK1 2026–27|Bóng chuyền|1||1
HK1 2026–27|Đại số đại cương|3||
HK1 2026–27|Phương pháp dạy học đại cương môn toán|3||
HK1 2026–27|Hình học afin và Oclit|3||
HK1 2026–27|Rèn luyện NVSPTX1|1||`.split('\n').map(l=>{const a=l.split('|');return{s:a[0],n:a[1],c:+a[2],sc:a[3],x:!!a[4]}});
const def=()=>({tab:'week',wk:0,tasks:[],words:W,em:'card',ci:0,fl:0,q:null,docs:[],ds:'',goals:[{n:'Sinh viên 5 tốt',i:[]},{n:'Sao tháng Giêng',i:[]},{n:'Học bổng',i:[]}],co:CS,tg:3.6});
let S;try{S=JSON.parse(localStorage.getItem('sotay1'))||def()}catch(e){S=def()}
const save=()=>{try{localStorage.setItem('sotay1',JSON.stringify(S))}catch(e){}};
const SV5T=`Đạo đức: Điểm rèn luyện từ 85/100 trở lên|Đạo đức: Không vi phạm pháp luật, quy chế, nội quy của Nhà trường|Đạo đức (ưu tiên): Đảng viên hoặc lớp bồi dưỡng nhận thức về Đảng|Đạo đức (ưu tiên): Thi tìm hiểu Mác – Lênin, tư tưởng Hồ Chí Minh từ cấp Khoa, đạt từ 60%|Đạo đức (ưu tiên): Hoạt động giáo dục đạo đức, lối sống, lòng yêu nước do Đoàn – Hội trường tổ chức|Học tập: GPA học kỳ 1 và 2 từ 2,8/4,0 trở lên|Học tập: Không có môn điểm D, F và không nợ tín chỉ (không tính học kỳ hè)|Học tập (ưu tiên): Giải học thuật, nghiệp vụ, thi chuyên ngành cấp Khoa trở lên|Học tập (ưu tiên): Nghiên cứu khoa học hoặc sáng kiến học thuật|Học tập (ưu tiên): Hoạt động Đồng hành sinh viên trong học tập|Thể lực (đạt 1): Sinh viên khỏe cấp Trường, hoặc giải Ba thể thao cấp Khoa, hoặc đội tuyển cấp Khoa|Thể lực (đạt 1): Rèn luyện định kỳ tại 1 CLB/đội thể thao, hoặc 1 hoạt động thể lực do Đoàn – Hội trường tổ chức|Tình nguyện (đạt 1): Tham gia ít nhất 4 ngày tình nguyện|Tình nguyện (đạt 1): Được khen thưởng trong hoạt động tình nguyện|Hội nhập: Hoàn thành ngoại ngữ cơ bản 1, 2 (hoặc B1) VÀ chứng chỉ ứng dụng CNTT cơ bản|Hội nhập (ưu tiên): Giải Ba trở lên cuộc thi có dùng ngoại ngữ cấp Khoa|Hội nhập (ưu tiên): Giao lưu quốc tế cấp Khoa trở lên|Hội nhập (ưu tiên): Thành viên chính thức CLB Hội Sinh viên (3 hoạt động/năm, từ 6 tháng)|Hội nhập (ưu tiên): Khen thưởng công tác Đoàn – Hội từ cấp Khoa|Hội nhập (ưu tiên): Hoạt động hội nhập do Đoàn – Hội trường tổ chức`.split('|');
const TK=['Giữ GPA tích lũy đạt mục tiêu (xem mục GPA)','Không nợ tín chỉ, không có điểm dưới C','Đủ số giờ học mục tiêu mỗi ngày','Tổng ôn cuối mỗi tuần','Tham gia nghiên cứu khoa học hoặc hội thi học thuật','Hoàn thành chứng chỉ chuẩn đầu ra đúng hạn'];
if(!S.v){S.v=2;S.tab='home';S.ev=[];S.log={};S.rf={};S.goalH=6;S.tot=130;S.cw=0;if(!S.goals[0].i.length)S.goals[0].i=SV5T.map(t=>({id:Math.random(),t,x:0}));S.goals.push({n:'Thủ khoa đầu ra',i:TK.map(t=>({id:Math.random(),t,x:0}))})}
const uid=()=>Date.now()+Math.random();
const TABS=[['home','Hôm nay'],['hab','Thói quen'],['cal','Lịch'],['week','Việc theo ngày'],['en','Tiếng Anh'],['docs','Tài liệu'],['goals','Mục tiêu'],['gpa','GPA']];
function calc(rows){let p=0,c=0,s10=0;rows.forEach(r=>{if(!r.x&&r.sc!==''&&r.sc!=null){p+=g4(+r.sc)*r.c;s10+=+r.sc*r.c;c+=r.c}});return{p,c,g:c?p/c:0,a:c?s10/c:0}}
const f2=n=>n.toFixed(2).replace('.',',');

function vWeek(){
 const d=new Date();d.setDate(d.getDate()-((d.getDay()+6)%7)+S.wk*7);
 const names=['Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7','Chủ nhật'],tk=dk(new Date());
 let end=new Date(d);end.setDate(end.getDate()+6);
 let h=`<div class="row sp" style="margin-bottom:10px"><h2 style="margin:0">${d.getDate()}/${d.getMonth()+1} – ${end.getDate()}/${end.getMonth()+1}</h2><div class="row"><button class="o" data-a="wk" data-v="-1">Tuần trước</button><button class="o" data-a="wk" data-v="0">Tuần này</button><button class="o" data-a="wk" data-v="1">Tuần sau</button></div></div><div class="grid">`;
 for(let i=0;i<7;i++){const k=dk(d),ts=S.tasks.filter(t=>t.d===k);
  h+=`<div class="card ${k===tk?'today':''}"><b>${names[i]}</b> <span class="mut">${d.getDate()}/${d.getMonth()+1}</span>`+
  ts.map(t=>`<div class="t ${t.x?'d':''}"><input type="checkbox" id="t${t.id}" ${t.x?'checked':''} data-a="tt" data-id="${t.id}"><label for="t${t.id}">${esc(t.t)}</label><button class="x" data-a="td" data-id="${t.id}" aria-label="Xóa">×</button></div>`).join('')+habDay(k)+
  `<input style="width:100%;margin-top:8px;box-sizing:border-box" placeholder="Thêm việc…" data-add="task" data-day="${k}"></div>`;
  d.setDate(d.getDate()+1)}
 return h+'</div>'}

function vEn(){
 const n=S.words.length,kn=S.words.filter(w=>w.k).length;
 let h=`<div class="row sp"><h2 style="margin:0">Từ vựng B1/B2</h2><span class="mut">${kn}/${n} từ đã thuộc</span></div><div class="bar"><i style="width:${n?kn/n*100:0}%"></i></div>
 <div class="row" style="margin:10px 0"><button class="${S.em==='card'?'b':'o'}" data-a="em" data-v="card">Thẻ ghi nhớ</button><button class="${S.em==='quiz'?'b':'o'}" data-a="em" data-v="quiz">Trắc nghiệm</button></div>`;
 if(S.em==='card'){
  const l=S.words.map((w,i)=>i).filter(i=>!S.words[i].k);
  if(!l.length)h+=`<div class="card">Bạn đã thuộc hết các từ hiện có. Thêm từ mới bên dưới để học tiếp.</div>`;
  else{const w=S.words[l[S.ci%l.length]];
   h+=`<div class="card fc" data-a="fl" tabindex="0">${S.fl?`<div class="big" style="font-size:22px">${esc(w.v)}</div><div class="mut" style="margin-top:8px"><i>${esc(w.e)}</i></div>`:`<div class="big">${esc(w.w)}</div><div class="mut">${esc(w.t)} · chạm để xem nghĩa</div>`}</div>
   <div class="row" style="margin-top:10px"><button class="b" data-a="kn" data-i="${S.words.indexOf(w)}">Đã thuộc</button><button class="o" data-a="nx">Chưa thuộc, từ tiếp theo</button></div>`}
 }else{
  if(n<2)h+='<div class="card">Cần ít nhất 2 từ để làm trắc nghiệm.</div>';
  else{if(!S.q)mkq();const q=S.q,w=S.words[q.w];
   h+=`<div class="card"><div class="mut">Chọn nghĩa đúng của</div><div class="big">${esc(w.w)}</div>`+q.o.map(i=>`<button class="o opt ${q.a!=null?(i===q.w?'ok':(i===q.a?'no':'')):''}" data-a="qa" data-i="${i}" ${q.a!=null?'disabled':''}>${esc(S.words[i].v)}</button>`).join('')+(q.a!=null?`<button class="b" data-a="qn" style="margin-top:6px">Câu tiếp theo</button>`:'')+'</div>'}
 }
 h+=`<div class="grid g2" style="margin-top:14px"><div class="card"><b>Thêm một từ</b><div class="row" style="margin-top:8px"><input id="nw" placeholder="Từ tiếng Anh" size="12"><input id="nv" placeholder="Nghĩa tiếng Việt" size="14"><button class="b" data-a="aw">Thêm</button></div></div>
 <div class="card"><b>Nhập nhiều từ</b><div class="mut">Mỗi dòng một từ, dạng: <code>word - nghĩa</code></div><textarea id="bw" rows="3" style="width:100%;box-sizing:border-box;margin:6px 0"></textarea><button class="b" data-a="bw">Nhập danh sách</button></div></div>`;
 return h}
function mkq(){const ws=S.words;let o=[],w=ws.length*Math.random()|0;o=[w];while(o.length<Math.min(4,ws.length)){const x=ws.length*Math.random()|0;if(!o.includes(x))o.push(x)}o.sort(()=>Math.random()-.5);S.q={w,o,a:null}}

function vDocs(){
 const q=S.ds.toLowerCase(),L=S.docs.filter(d=>(d.n+d.g).toLowerCase().includes(q)).sort((a,b)=>b.s-a.s);
 return `<h2>Kho tài liệu</h2><div class="card"><div class="row"><input id="dn" placeholder="Tên tài liệu" size="18"><input id="du" placeholder="Liên kết (tùy chọn)" size="18"><input id="dg" placeholder="Môn / thẻ" size="10"><button class="b" data-a="ad">Lưu</button></div></div>
 <input id="ds" placeholder="Tìm tài liệu…" value="${esc(S.ds)}" style="width:100%;box-sizing:border-box;margin:10px 0" data-add="search">
 <div class="card">${L.length?L.map(d=>`<div class="t"><button class="x" data-a="st" data-id="${d.id}" aria-label="Đánh dấu">${d.s?'★':'☆'}</button><label>${d.u?`<a href="${esc(d.u)}" target="_blank" rel="noopener">${esc(d.n)}</a>`:esc(d.n)} <span class="mut">${esc(d.g)}</span></label><button class="x" data-a="dd" data-id="${d.id}" aria-label="Xóa">×</button></div>`).join(''):'<span class="mut">Chưa có tài liệu nào. Lưu tên và liên kết (Drive, Zalo, web…) để tìm lại nhanh.</span>'}</div>`}

function vGoals(){
 return `<h2>Mục tiêu</h2><div class="grid g2">`+S.goals.map((g,gi)=>{if(gi===0)return vSv5(g,gi);const t=g.i.length,d=g.i.filter(x=>x.x).length;
  return `<div class="card"><div class="row sp"><b>${esc(g.n)}</b><span class="mut">${t?Math.round(d/t*100):0}%</span></div><div class="bar"><i style="width:${t?d/t*100:0}%"></i></div>`+
  g.i.map(x=>`<div class="t ${x.x?'d':''}"><input type="checkbox" id="g${x.id}" ${x.x?'checked':''} data-a="gt" data-g="${gi}" data-id="${x.id}"><label for="g${x.id}">${esc(x.t)}</label><button class="x" data-a="gd" data-g="${gi}" data-id="${x.id}" aria-label="Xóa">×</button></div>`).join('')+
  `<input style="width:100%;margin-top:8px;box-sizing:border-box" placeholder="Thêm tiêu chí / minh chứng…" data-add="goal" data-g="${gi}"></div>`}).join('')+'</div>'}

function vGpa(){
 const all=calc(S.co),sems=[...new Set(S.co.map(r=>r.s))];
 let un=0,pend=S.co.filter(r=>!r.x&&(r.sc===''||r.sc==null));un=pend.reduce((a,r)=>a+r.c,0);
 const need=un?(S.tg*(all.c+un)-all.p)/un:null;
 let h=`<h2>Điểm &amp; GPA</h2><div class="grid"><div class="card"><div class="mut">GPA tích lũy (hệ 4)</div><div class="big">${f2(all.g)}</div></div><div class="card"><div class="mut">Điểm TB tích lũy (hệ 10)</div><div class="big">${f2(all.a)}</div></div><div class="card"><div class="mut">Tín chỉ tính GPA</div><div class="big">${all.c}</div></div></div>
 <div class="card" style="margin:10px 0"><div class="row"><b>Mục tiêu GPA</b><input type="number" step="0.01" min="0" max="4" value="${S.tg}" data-ch="tg" style="width:80px"></div><div style="margin-top:6px">${need==null?'<span class="mut">Chưa còn môn nào để dự tính.</span>':`Còn <b>${un}</b> tín chỉ chưa có điểm. Để đạt ${f2(S.tg)}, điểm trung bình hệ 4 các môn đó cần khoảng <b>${f2(need)}</b>${need>4?' (không khả thi, hãy hạ mục tiêu)':need<=0?' (đã đạt chắc chắn)':''}.`}</div></div>`;
 sems.forEach(s=>{const rows=S.co.map((r,i)=>({...r,i})).filter(r=>r.s===s),c=calc(rows);
  h+=`<div class="card sc" style="margin-bottom:10px"><div class="row sp"><b>${s}</b><span class="mut">GPA kỳ: ${c.c?f2(c.g):'—'}</span></div><table><tr><th>Học phần</th><th>TC</th><th>Điểm</th><th>Hệ 4</th><th>Không tính</th></tr>`+
  rows.map(r=>`<tr><td>${esc(r.n)}</td><td>${r.c}</td><td><input type="number" step="0.1" min="0" max="10" value="${r.sc}" data-ch="sc" data-i="${r.i}" aria-label="Điểm ${esc(r.n)}"></td><td>${r.sc!==''&&!r.x?g4(+r.sc).toFixed(1):'—'}</td><td><input type="checkbox" ${r.x?'checked':''} data-ch="ex" data-i="${r.i}" aria-label="Không tính GPA"></td></tr>`).join('')+'</table></div>'});
 return h+`<div class="mut">Quy đổi: 8,5–10 = A (4,0); 7,0–8,4 = B (3,0); 5,5–6,9 = C (2,0); 4,0–5,4 = D (1,0). GDQP-AN và Giáo dục thể chất không tính. Nhập điểm tổng kết từng môn.</div>`}

const CL=[[0,'Hình học afin và Oclit','A1-206',1,2],[0,'Phương pháp dạy học đại cương môn toán','A4-102',7,9],[0,'Đại số đại cương','A1-103',10,12],[1,'Rèn luyện NVSPTX1','C1-502',1,3],[2,'Giáo dục học trung học','A4-203',7,8],[3,'Hình học afin và Oclit','B1-205',3,4],[4,'Bóng chuyền','San02',1,2],[5,'Tư tưởng Hồ Chí Minh','LMS-Zoom R03',10,12]];
const ps=n=>n<=6?420+(n-1)*50:780+(n-7)*50,hm=m=>String(m/60|0).padStart(2,'0')+':'+String(m%60).padStart(2,'0');
const evs=()=>[...S.cl.map(c=>({id:c.id,d:c.d,s:ps(c.a),e:ps(c.b)+50,t:c.t,r:(c.r?c.r+' · ':'')+'tiết '+c.a+'–'+c.b,c:1})),...S.ev.map(e=>({...e,r:'Tự học',c:0}))];
const Q=['Điều cản đường chính là con đường. — tinh thần Marcus Aurelius','Không phải sự việc làm ta rối loạn, mà là cách ta nhìn nó. — tinh thần Epictetus','Ta lo sợ trong tưởng tượng nhiều hơn là chịu khổ trong thực tế. — tinh thần Seneca','Không phải ta có quá ít thời gian, mà là ta lãng phí quá nhiều. — tinh thần Seneca','Hãy lo điều trong tầm tay, buông điều ngoài tầm tay. — tinh thần Epictetus','Đừng bàn thế nào là người tốt, hãy bắt đầu làm một người tốt. — tinh thần Marcus Aurelius','Mỗi sáng, hãy tự nhắc: hôm nay ta làm tròn phần việc của mình. — tinh thần Marcus Aurelius','Việc gì con người làm được, bạn cũng có thể làm. — tinh thần Marcus Aurelius','Muốn học giỏi, hãy chịu được cảm giác chưa giỏi. — tinh thần Epictetus','Kỷ luật hôm nay là tự do của ngày mai. — tinh thần khắc kỷ'];
const pb=(l,a,b,t)=>`<div class="pb"><div class="row sp"><span>${l}</span><span class="mut">${t}</span></div><div class="bar"><i style="width:${Math.min(100,b?a/b*100:0)}%"></i></div></div>`;
const hrs=k=>S.log[k]||0,gpr=g=>g.i.length?g.i.filter(x=>x.x).length/g.i.length*100:0;
function vHome(){
 const now=new Date(),k=dk(now),wd=(now.getDay()+6)%7,doy=Math.floor((now-new Date(now.getFullYear(),0,0))/864e5),all=calc(S.co);
 const done=S.co.filter(r=>r.sc!==''&&+r.sc>=4).reduce((a,r)=>a+r.c,0);
 let wk=0;for(let i=0;i<=wd;i++){const d=new Date(now);d.setDate(d.getDate()-wd+i);wk+=hrs(dk(d))}
 let st=0;for(let i=0;i<60;i++){const d=new Date(now);d.setDate(d.getDate()-i);if(hrs(dk(d))>=S.goalH)st++;else if(i>0)break}
 const gs=s=>{const r=calc(S.co.filter(x=>x.s===s));return r.c?r.g:0},g1=gs('HK1 2025–26'),g2=gs('HK2 2025–26');
 const cls=evs().filter(e=>e.d===wd).sort((a,b)=>a.s-b.s),ts=S.tasks.filter(t=>t.d===k);
 return `<div class="card"><p class="q">${esc(Q[doy%Q.length])}</p><p class="mut" style="margin:8px 0 0">Tôi là <b style="color:var(--ac)">${esc(S.hab.who||'…')}</b>.</p></div>
 <div class="grid g2" style="margin-top:10px"><div class="card"><h2>Đích đến: Thủ khoa đầu ra</h2>${pb('GPA tích lũy',all.g,S.tg,f2(all.g)+' / '+f2(S.tg))}${pb('Tín chỉ đã đạt',done,S.tot,done+' / '+S.tot)}${pb('Lộ trình Thủ khoa',gpr(S.goals[3]),100,Math.round(gpr(S.goals[3]))+'%')}${pb('Sinh viên 5 tốt',sv5(S.goals[0]).ok,5,sv5(S.goals[0]).ok+' / 5 tiêu chí')}<div class="mut">Học tập tốt: GPA HK1 ${f2(g1)}, HK2 ${f2(g2)} ${g1>=2.8&&g2>=2.8?'đạt':'chưa đạt'} yêu cầu 2,80. Tổng tín chỉ chương trình: <input type="number" value="${S.tot}" data-ch="tot" style="width:70px"></div></div>
 <div class="card"><h2>Giờ học hôm nay</h2>${pb('Hôm nay',hrs(k),S.goalH,hrs(k)+' / '+S.goalH+' giờ')}${pb('Tuần này',wk,S.goalH*7,wk+' / '+S.goalH*7+' giờ')}<div class="row"><button class="b" data-a="hl" data-v="0.5">+30 phút</button><button class="o" data-a="hl" data-v="-0.5">−30 phút</button><span class="mut">Mục tiêu/ngày <input type="number" step="0.5" min="1" max="16" value="${S.goalH}" data-ch="gh" style="width:60px"> giờ</span></div><div class="mut" style="margin-top:8px">Chuỗi ngày đạt mục tiêu: <b>${st}</b></div></div></div>
 <div class="grid g2" style="margin-top:10px"><div class="card"><h2>Lịch hôm nay</h2>${cls.length?cls.map(e=>`<div class="t"><label><b>${hm(e.s)}–${hm(e.e)}</b> ${esc(e.t)} <span class="mut">${esc(e.r)}</span></label></div>`).join(''):'<span class="mut">Không có tiết học. Dành thời gian cho khung tự học.</span>'}</div>
 <div class="card"><h2>Việc cần làm</h2>${ts.map(t=>`<div class="t ${t.x?'d':''}"><input type="checkbox" id="t${t.id}" ${t.x?'checked':''} data-a="tt" data-id="${t.id}"><label for="t${t.id}">${esc(t.t)}</label><button class="x" data-a="td" data-id="${t.id}" aria-label="Xóa">×</button></div>`).join('')}<input style="width:100%;margin-top:8px;box-sizing:border-box" placeholder="Một việc nhỏ, làm ngay hôm nay…" data-add="task" data-day="${k}"></div></div>
 ${habHome(k)}<div class="card" style="margin-top:10px"><h2>Tổng kết buổi tối</h2><div class="mut">Hôm nay mình làm tốt điều gì? Chưa tốt ở đâu? Ngày mai sửa một điều gì?</div><textarea data-ch="rf" data-day="${k}" rows="3" style="width:100%;box-sizing:border-box;margin-top:6px">${esc(S.rf[k]||'')}</textarea></div>`}
function vCal(){
 const d=new Date();d.setDate(d.getDate()-((d.getDay()+6)%7)+S.cw*7);const tk=dk(new Date()),E=evs(),N=['T2','T3','T4','T5','T6','T7','CN'],e7=new Date(d);e7.setDate(d.getDate()+6),nw=new Date(),nm=nw.getHours()*60+nw.getMinutes();
 let hd='<div class="dh"></div>',bd='<div>'+Array.from({length:16},(_,i)=>`<div class="hl">${i+6}:00</div>`).join('')+'</div>';
 for(let i=0;i<7;i++){const k=dk(d);hd+=`<div class="dh">${N[i]}<br><b class="${k===tk?'t0':''}">${d.getDate()}</b></div>`;
  bd+=`<div class="col">`+E.filter(e=>e.d===i).map(e=>`<div class="ev ${e.c?'':'s'}" style="top:${(e.s-360)*44/60}px;height:${(e.e-e.s)*44/60-2}px"><b>${esc(e.t)}</b><br>${hm(e.s)}–${hm(e.e)}<br>${esc(e.r)}<button class="x" data-a="${e.c?'dc':'de'}" data-id="${e.id}" aria-label="Xóa">×</button></div>`).join('')+(k===tk&&nm>=360&&nm<=1320?`<div class="now" style="top:${(nm-360)*44/60}px"></div>`:'')+'</div>';d.setDate(d.getDate()+1)}
 return `<div class="row sp" style="margin-bottom:10px"><h2 style="margin:0">Lịch học</h2><div class="row"><button class="o" data-a="cw" data-v="-1">‹</button><button class="o" data-a="cw" data-v="0">Hôm nay</button><button class="o" data-a="cw" data-v="1">›</button></div></div><div class="card sc2" style="padding:0"><div class="cal">${hd}${bd}</div></div>
 <div class="card" style="margin-top:10px"><b>Thêm khung tự học (lặp hằng tuần)</b><div class="row" style="margin-top:8px"><input id="et" placeholder="Tên, ví dụ: Ôn Giải tích" size="16"><select id="ed">${N.map((n,i)=>`<option value="${i}">${n}</option>`).join('')}</select><input id="es" type="time" value="19:00"><input id="ee" type="time" value="21:00"><button class="b" data-a="ae">Thêm</button></div><div class="mut" style="margin-top:6px">Giờ các tiết là ước tính (tiết 1 bắt đầu 7:00, mỗi tiết 50 phút, tiết 7 bắt đầu 13:00). Thời khóa biểu lặp lại mỗi tuần.</div></div>${vCl()}`}
function render(){
 $('#nav').innerHTML=TABS.map(t=>`<button class="${S.tab===t[0]?'on':''}" data-a="tab" data-v="${t[0]}">${t[1]}</button>`).join('');
 $('#app').innerHTML={home:vHome,hab:vHab,cal:vCal,week:vWeek,en:vEn,docs:vDocs,goals:vGoals,gpa:vGpa}[S.tab]();save()}
const val=id=>($('#'+id).value||'').trim();
const A={
 tab:d=>{S.tab=d.v},wk:d=>{S.wk=d.v==='0'?0:S.wk+ +d.v},cw:d=>{S.cw=d.v==='0'?0:S.cw+ +d.v},hl:d=>{const k=dk(new Date());S.log[k]=Math.max(0,(S.log[k]||0)+ +d.v)},de:d=>{S.ev=S.ev.filter(e=>e.id!=d.id)},ae:()=>{const t=val('et'),p=id=>{const a=$('#'+id).value.split(':');return +a[0]*60+ +a[1]},s=p('es'),e=p('ee');if(t&&e>s)S.ev.push({id:Math.random(),t,d:+$('#ed').value,s,e})},
 tt:d=>{const t=S.tasks.find(t=>t.id==d.id);t.x=!t.x},td:d=>{S.tasks=S.tasks.filter(t=>t.id!=d.id)},
 em:d=>{S.em=d.v;S.q=null},fl:()=>{S.fl=S.fl?0:1},nx:()=>{S.ci++;S.fl=0},kn:d=>{S.words[+d.i].k=1;S.fl=0},
 qa:d=>{S.q.a=+d.i;if(+d.i===S.q.w)S.words[S.q.w].k=1},qn:()=>{S.q=null},
 aw:()=>{const w=val('nw'),v=val('nv');if(w&&v)S.words.push({w,t:'',v,e:'',k:0})},
 bw:()=>{val('bw').split('\n').forEach(l=>{const a=l.split(/\s+[-–—]\s+/);if(a.length>1&&a[0].trim())S.words.push({w:a[0].trim(),t:'',v:a.slice(1).join(' - ').trim(),e:'',k:0})})},
 ad:()=>{const n=val('dn');if(n)S.docs.push({id:uid(),n,u:val('du'),g:val('dg'),s:0})},
 st:d=>{const x=S.docs.find(x=>x.id==d.id);x.s=x.s?0:1},dd:d=>{S.docs=S.docs.filter(x=>x.id!=d.id)},
 gt:d=>{const x=S.goals[+d.g].i.find(x=>x.id==d.id);x.x=!x.x},gd:d=>{S.goals[+d.g].i=S.goals[+d.g].i.filter(x=>x.id!=d.id)}};
document.addEventListener('click',e=>{const t=e.target.closest('[data-a]');if(!t||t.tagName==='INPUT'&&t.type!=='checkbox')return;
 if(t.type==='checkbox')return;A[t.dataset.a](t.dataset);render()});
document.addEventListener('change',e=>{const t=e.target,d=t.dataset;
 if(d.a&&t.type==='checkbox'){A[d.a](d);render();return}
 if(d.ch==='sc'){S.co[+d.i].sc=t.value===''?'':Math.min(10,Math.max(0,+t.value))}
 else if(d.ch==='ex'){S.co[+d.i].x=t.checked}
 else if(d.ch==='tg'){S.tg=Math.min(4,Math.max(0,+t.value||0))}
 else if(d.ch==='rf'){S.rf[d.day]=t.value}else if(d.ch==='gh'){S.goalH=Math.min(16,Math.max(1,+t.value||6))}else if(d.ch==='tot'){S.tot=Math.max(1,+t.value||130)}else return;render()});
document.addEventListener('keydown',e=>{if(e.key!=='Enter'&&!(e.key===' '&&e.target.dataset.a==='fl'))return;const t=e.target,d=t.dataset;
 if(d.a==='fl'){e.preventDefault();S.fl=S.fl?0:1;render();return}
 const v=(t.value||'').trim();if(!v)return;
 if(d.add==='task')S.tasks.push({id:uid(),t:v,d:d.day,x:0});
 else if(d.add==='goal')S.goals[+d.g].i.push({id:uid(),t:v,x:0});
 else return;render()});
document.addEventListener('input',e=>{if(e.target.dataset.add==='search'){S.ds=e.target.value;const p=e.target.selectionStart;render();const i=$('#ds');i.focus();i.setSelectionRange(p,p)}});

// ===== Thói quen (Atomic Habits) – dùng chung dữ liệu & tuần với "Việc theo ngày" =====
if(!S.hab){const m=new Date();m.setDate(m.getDate()-((m.getDay()+6)%7));const pl={};[0,2,4].forEach(i=>{const x=new Date(m);x.setDate(m.getDate()+i);pl[dk(x)]=1});
 S.hab={who:'một người học đều đặn mỗi ngày',sel:null,ps:[{id:uid(),name:'Tài liệu học tập lớp 9',ts:[{id:uid(),name:'Xây dựng khung sườn',after:'uống xong cà phê sáng',time:'7:00',place:'bàn học',reward:'nghe một bài nhạc yêu thích',two:'mở file và viết tiêu đề chương 1',plan:pl}]}]}}
const HD=['T2','T3','T4','T5','T6','T7','CN'],hAll=()=>S.hab.ps.flatMap(p=>p.ts),hFind=id=>hAll().find(t=>t.id==id);
function hStat(t){const T=dk(new Date()),ks=Object.keys(t.plan).filter(k=>t.plan[k]&&k<=T).sort();let c=0,i=ks.length-1;if(i>=0&&ks[i]===T&&t.plan[T]!==2)i--;for(;i>=0&&t.plan[ks[i]]===2;i--)c++;const pa=ks.filter(k=>k<T);let m=0;for(let j=pa.length-1;j>=0&&t.plan[pa[j]]!==2;j--)m++;return{c,m,n:Object.values(t.plan).filter(v=>v===2).length}}
const hNote=t=>{const s=hStat(t);return s.m>=2?`<div class="note">Bạn đã lỡ ${s.m} lần liên tiếp. Đừng lỡ thêm: hôm nay chỉ cần làm bản 2 phút — “${esc(t.two||t.name)}”.</div>`:s.m===1?'<div class="note">Lỡ một lần thì không sao. Quy tắc: không bao giờ lỡ hai lần liền.</div>':s.c?`<div class="note g">Chuỗi ${s.c} lần liên tiếp. Giữ nhịp, đừng làm đứt chuỗi.</div>`:''};
const hSum=t=>`Sau khi <b>${esc(t.after||'…')}</b>, lúc <b>${esc(t.time||'…')}</b> tại <b>${esc(t.place||'…')}</b>, tôi sẽ <b>${esc(t.name)}</b>.`;
const hRow=(t,k)=>{const v=t.plan[k],s=hStat(t);return `<div class="t ${v===2?'d':''}"><input type="checkbox" id="h${t.id}${k}" ${v===2?'checked':''} data-a="hc" data-id="${t.id}" data-k="${k}"><label for="h${t.id}${k}">${esc(t.name)}${s.c>1?`<span class="chip">chuỗi ${s.c}</span>`:''}<br><span class="mut">${hSum(t)}${t.two?' Bản 2 phút: '+esc(t.two)+'.':''}</span></label></div>`};
const habDay=k=>hAll().filter(t=>t.plan[k]).map(t=>hRow(t,k)).join('');
function habHome(k){const L=hAll().filter(t=>t.plan[k]);
 return `<div class="card" style="margin-top:10px"><div class="row sp"><h2>Thói quen hôm nay</h2><button class="o" data-a="tab" data-v="hab">Thiết kế thói quen</button></div>${L.length?L.map(t=>hRow(t,k)).join('')+L.map(t=>hNote(t)).join(''):'<span class="mut">Chưa chọn thói quen nào cho hôm nay. Vào tab Thói quen, chọn ngày cho một việc.</span>'}</div>`}
function vHab(){
 const H=S.hab,T=dk(new Date()),d0=new Date();d0.setDate(d0.getDate()-((d0.getDay()+6)%7)+S.wk*7);
 const days=[...Array(7)].map((_,i)=>{const x=new Date(d0);x.setDate(d0.getDate()+i);return x}),f=x=>x.getDate()+'/'+(x.getMonth()+1),rows=hAll();
 let pl=0,dn=0;rows.forEach(t=>days.forEach(x=>{const v=t.plan[dk(x)];if(v){pl++;if(v===2)dn++}}));
 const t=hFind(H.sel)||rows[0];if(t)H.sel=t.id;
 let h=`<div class="row sp" style="margin-bottom:6px"><h2 style="margin:0">${f(days[0])} – ${f(days[6])}</h2><div class="row"><button class="o" data-a="wk" data-v="-1">Tuần trước</button><button class="o" data-a="wk" data-v="0">Tuần này</button><button class="o" data-a="wk" data-v="1">Tuần sau</button></div></div>
 <div class="row" style="margin-bottom:22px"><div class="bar" style="flex:1"><i style="width:${pl?dn/pl*100:0}%"></i></div><span class="mut">${dn}/${pl} · ${pl?Math.round(dn/pl*100):0}%</span></div><div class="cols"><section><p class="lab cap">Dự án</p>`;
 h+=H.ps.map(p=>`<div class="card pc"><div class="ph"><input value="${esc(p.name)}" data-hn="${p.id}" aria-label="Tên dự án"><button class="x" data-a="hdp" data-id="${p.id}" aria-label="Xóa dự án">×</button></div>${p.ts.map(x=>{const s=hStat(x),n=days.filter(d=>x.plan[dk(d)]).length;return `<div class="task ${x.id==H.sel?'sel':''}" data-a="hsel" data-id="${x.id}" tabindex="0" role="button"><span class="n">${esc(x.name)}</span>${s.c>1?`<span class="chip">chuỗi ${s.c}</span>`:''}<span class="chip pl">${n} ngày</span></div>`}).join('')}<div class="add"><span>+</span><input placeholder="thêm việc, nhấn Enter" data-hnt="${p.id}" aria-label="Thêm việc mới"></div></div>`).join('')+'<button class="dash" data-a="hap">+ Thêm dự án</button></section><section>';
 h+=`<div class="card idc"><span class="lab">Danh tính của bạn</span><h3>Mỗi việc làm xong là một phiếu bầu cho con người bạn muốn trở thành.</h3><input value="${esc(H.who)}" data-hwho placeholder="một người…" aria-label="Danh tính"><p class="mut" style="margin:0">Tôi là <b id="hwho">${esc(H.who||'…')}</b>. Đến nay bạn đã bỏ <span class="votes">${rows.reduce((a,x)=>a+hStat(x).n,0)} phiếu</span> cho điều đó.</p></div><p class="lab cap">Tuần này</p><div class="card hg">`;
 if(!rows.length)h+='<div class="empty">Thêm một việc ở cột trái, rồi chọn những ngày bạn sẽ làm.</div>';
 else{h+=`<table><tr><th></th>${days.map((d,i)=>`<th class="${dk(d)===T?'td':''}">${HD[i]}<br>${d.getDate()}</th>`).join('')}</tr>`+rows.map(x=>`<tr><td class="nm">${esc(x.name)}<small>${x.time?esc(x.time)+(x.place?' · '+esc(x.place):''):'chưa đặt giờ'}</small></td>${days.map(d=>{const k=dk(d),v=x.plan[k]||0;return `<td><button class="cell ${v===2?'d':v?'p':''} ${k===T?'tt':''}" data-a="hcell" data-id="${x.id}" data-k="${k}" aria-label="${esc(x.name)} ${HD[days.indexOf(d)]}">${v===2?'✓':v?'•':''}</button></td>`}).join('')}</tr>`).join('')+'</table><p class="mut" style="margin:10px 0 0;font-size:14px">Bấm một ô: chọn ngày → đánh dấu xong → bỏ chọn.</p>'+(t?hNote(t):'')}
 h+='</div>';
 if(t)h+=`<p class="lab cap">Thiết kế thói quen: ${esc(t.name)}</p><div class="card laws">`+[
  ['1','Làm cho nó rõ ràng','Một kế hoạch cụ thể về thời gian và nơi chốn.',`<span>Sau khi</span><input data-hf="after" value="${esc(t.after)}" placeholder="uống cà phê"><span>, lúc</span><input data-hf="time" value="${esc(t.time)}" placeholder="7:00" style="max-width:80px"><span>, tại</span><input data-hf="place" value="${esc(t.place)}" placeholder="bàn học">`],
  ['2','Làm cho nó hấp dẫn','Gắn việc cần làm với một việc bạn thích.',`<span>Làm xong tôi sẽ</span><input data-hf="reward" value="${esc(t.reward)}" placeholder="nghe nhạc yêu thích">`],
  ['3','Làm cho nó dễ dàng','Một phiên bản chưa đến 2 phút, nhỏ đến mức không thể từ chối.',`<span>Bản 2 phút:</span><input data-hf="two" value="${esc(t.two)}" placeholder="mở sách và đọc một trang">`],
  ['4','Làm cho nó thỏa mãn','Tô kín ô ✓ ngay khi xong. Nhìn thấy chuỗi chính là phần thưởng.',`<span>${hStat(t).c} lần liên tiếp · ${hStat(t).n} lần xong tất cả</span>`]
 ].map(l=>`<div class="law"><div class="k">${l[0]}</div><div><b>${l[1]}</b><p class="hint">${l[2]}</p><div class="f">${l[3]}</div></div></div>`).join('')+`<p id="hsum" style="margin:6px 0 0;color:var(--mut)">${hSum(t)}</p><p style="margin:14px 0 0"><button class="o" data-a="hdt" data-id="${t.id}">Xóa việc này</button></p></div>`;
 return h+'</section></div>'}
Object.assign(A,{hsel:d=>{S.hab.sel=d.id},hcell:d=>{const t=hFind(d.id),v=t.plan[d.k]||0,n=d.k>dk(new Date())?(v?0:1):(v+1)%3;n?t.plan[d.k]=n:delete t.plan[d.k];S.hab.sel=d.id},hc:d=>{const t=hFind(d.id);t.plan[d.k]=t.plan[d.k]===2?1:2},hap:()=>{S.hab.ps.push({id:uid(),name:'Dự án mới',ts:[]})},hdp:d=>{S.hab.ps=S.hab.ps.filter(p=>p.id!=d.id)},hdt:d=>{S.hab.ps.forEach(p=>p.ts=p.ts.filter(t=>t.id!=d.id));S.hab.sel=null}});
document.addEventListener('input',e=>{const t=e.target,d=t.dataset;
 if(d.hn)S.hab.ps.find(p=>p.id==d.hn).name=t.value;
 else if('hwho' in d){S.hab.who=t.value;$('#hwho').textContent=t.value||'…'}
 else if(d.hf){const x=hFind(S.hab.sel);x[d.hf]=t.value;$('#hsum').innerHTML=hSum(x)}else return;save()});
document.addEventListener('keydown',e=>{const t=e.target,d=t.dataset;
 if(e.key==='Enter'&&d.hnt){const v=t.value.trim();if(!v)return;const n={id:uid(),name:v,after:'',time:'',place:'',reward:'',two:'',plan:{}};S.hab.ps.find(p=>p.id==d.hnt).ts.push(n);S.hab.sel=n.id;render();const i=document.querySelector('[data-hf=after]');if(i)i.focus()}
 else if((e.key==='Enter'||e.key===' ')&&d.a==='hsel'){e.preventDefault();A.hsel(d);render()}});

// ===== Thời khóa biểu tự thêm/bớt =====
if(!S.cl)S.cl=CL.map(c=>({id:uid(),d:c[0],t:c[1],r:c[2],a:c[3],b:c[4]}));
const DT=['Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7','Chủ nhật'];
function vCl(){const L=[...S.cl].sort((x,y)=>x.d-y.d||x.a-y.a);
 return `<div class="card" style="margin-top:10px"><b>Thời khóa biểu: thêm hoặc bớt tiết học</b><div class="row" style="margin:8px 0"><input id="ct" placeholder="Tên học phần" size="16"><input id="cr" placeholder="Phòng" size="8"><select id="cd" aria-label="Thứ">${DT.map((n,i)=>`<option value="${i}">${n}</option>`).join('')}</select><input id="ca" type="number" min="1" max="15" placeholder="Từ tiết" style="width:90px"><input id="cb" type="number" min="1" max="15" placeholder="Đến tiết" style="width:90px"><button class="b" data-a="ac">Thêm tiết học</button></div>${L.length?L.map(c=>`<div class="t"><label><b>${DT[c.d]}</b> · tiết ${c.a}–${c.b} · ${esc(c.t)} <span class="mut">${esc(c.r||'')}</span></label><button class="x" data-a="dc" data-id="${c.id}" aria-label="Xóa tiết học">×</button></div>`).join(''):'<span class="mut">Chưa có tiết học nào. Thêm tên học phần, thứ và tiết (từ 1 đến 15).</span>'}</div>`}
Object.assign(A,{dc:d=>{S.cl=S.cl.filter(c=>c.id!=d.id)},ac:()=>{const t=val('ct'),a=+$('#ca').value,b=+$('#cb').value;if(t&&a>=1&&b>=a&&b<=15)S.cl.push({id:uid(),t,r:val('cr'),d:+$('#cd').value,a,b})}});
// ===== Sinh viên 5 tốt: bắt buộc / ưu tiên / chọn 1 =====
const sv5Parse=t=>{const m=/^([^:(]+?)(?: \((ưu tiên|đạt 1)\))?: ([\s\S]*)$/.exec(t.t);return m?{c:m[1].trim(),k:m[2]==='ưu tiên'?'u':m[2]==='đạt 1'?'o':'b',r:m[3]}:{c:'Khác',k:'x',r:t.t}};
const nDone=a=>a.filter(i=>i.x).length;
function sv5(g){const G={};g.i.forEach(x=>{const p=sv5Parse(x);(G[p.c]=G[p.c]||{n:p.c,b:[],u:[],o:[],x:[]})[p.k].push({...x,r:p.r})});
 const L=Object.values(G).map(c=>{c.ok=c.n!=='Khác'&&nDone(c.b)===c.b.length&&(!c.u.length||nDone(c.u)>0)&&(!c.o.length||nDone(c.o)>0);return c});
 return{L,ok:L.filter(c=>c.ok).length}}
function vSv5(g,gi){const R=sv5(g),row=(x,tag)=>`<div class="t ${x.x?'d':''}"><input type="checkbox" id="g${x.id}" ${x.x?'checked':''} data-a="gt" data-g="${gi}" data-id="${x.id}"><label for="g${x.id}">${esc(x.r)}${tag?`<span class="chip ${tag[1]}">${tag[0]}</span>`:''}</label><button class="x" data-a="gd" data-g="${gi}" data-id="${x.id}" aria-label="Xóa">×</button></div>`;
 return `<div class="card" style="grid-column:1/-1"><div class="row sp"><b>${esc(g.n)}</b><span class="mut">${R.ok}/5 tiêu chí đạt</span></div><div class="bar"><i style="width:${R.ok/5*100}%"></i></div><p class="mut" style="margin:6px 0 12px"><b>Bắt buộc</b>: phải đạt đủ tất cả. <b>Ưu tiên</b>: cần đạt ít nhất 1 mục. <b>Chọn 1</b>: đạt một trong các mục. Một tiêu chí chỉ được tính đạt khi thỏa cả ba điều kiện áp dụng cho nó.</p><div class="grid g2">`+R.L.map(c=>`<div class="card" style="padding:14px 16px"><div class="row sp"><b>${esc(c.n)}</b>${c.n==='Khác'?'':`<span class="chip ${c.ok?'':'pl'}">${c.ok?'Đạt':'Chưa đạt'}</span>`}</div><div class="mut" style="font-size:13px;margin:2px 0 6px">${[c.b.length?'Bắt buộc '+nDone(c.b)+'/'+c.b.length:'',c.u.length?'Ưu tiên '+nDone(c.u)+'/'+c.u.length+' (cần ≥1)':'',c.o.length?'Chọn 1: '+nDone(c.o)+'/'+c.o.length+' (cần ≥1)':''].filter(Boolean).join(' · ')}</div>`+c.b.map(x=>row(x,['Bắt buộc','pl'])).join('')+c.o.map(x=>row(x,['Chọn 1',''])).join('')+c.u.map(x=>row(x,['Ưu tiên',''])).join('')+c.x.map(x=>row(x)).join('')+'</div>').join('')+`</div><input style="width:100%;margin-top:12px" placeholder="Thêm minh chứng…" data-add="goal" data-g="${gi}"></div>`}
render();
