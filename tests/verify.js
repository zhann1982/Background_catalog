(async()=>{
 const results=[],assert=(ok,message)=>{if(!ok)throw Error(message)};
 assert(BACKGROUNDS.length===160,'160 backgrounds');assert(new Set(BACKGROUNDS.map(b=>b.id)).size===160,'Unique addresses');
 for(const cat of CATEGORIES)assert(BACKGROUNDS.filter(b=>b.category===cat.id).length===20,'20 per category');
 for(const item of BACKGROUNDS){
  const settings={colors:['#a4ed7b','#ff83c4','#162232'],speed:1.4,density:130};
  const code=buildCode(item,settings,false);
  let error=null;const iframe=document.createElement('iframe');
  const errors=[];
  try{
   await new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(Error('load timeout')),4000);iframe.onload=()=>{clearTimeout(timer);resolve()};iframe.srcdoc=code.full.replace('<head>','<head><script>window.errors=[];window.addEventListener("error",e=>window.errors.push(e.message));<\/script>');document.querySelector('#frame').replaceChildren(iframe)});
   await new Promise(resolve=>setTimeout(resolve,item.tech==='Canvas'?90:10));
   const doc=iframe.contentDocument, win=iframe.contentWindow;
   assert(win.errors.length===0,win.errors.join('; '));
   assert(!code.full.match(/src=|@import|https?:\/\//),'No external requests');
   if(item.tech==='CSS'){
    const el=doc.querySelector('.background'),style=win.getComputedStyle(el);
    assert(style.backgroundImage!=='none','CSS background parsed');
    assert(style.position==='absolute','Positioning');
    const rules=[...doc.styleSheets[0].cssRules];assert(rules.some(r=>r.style?.background),'Background declaration accepted');
   }else{
    const canvas=doc.querySelector('canvas'),ctx=canvas.getContext('2d'),pixels=ctx.getImageData(0,0,canvas.width,canvas.height).data;
    const colors=new Set();for(let k=0;k<pixels.length;k+=16)colors.add(pixels[k]+','+pixels[k+1]+','+pixels[k+2]);
    assert(colors.size>1,'Canvas draws more than a solid fill');
    win.eval('background.setPaused(true)');
    const before=canvas.toDataURL();await new Promise(r=>setTimeout(r,35));assert(canvas.toDataURL()===before,'Pause stops drawing');
    win.eval('background.update({colors:["#ff0000","#00ff00","#000011"],speed:0.5,density:60})');assert(canvas.toDataURL()!==before,'Custom settings redraw');
    win.eval('background.destroy()');
   }
   results.push({id:item.id,pass:true});
  }catch(e){results.push({id:item.id,pass:false,error:e.message})}
  iframe.remove();document.querySelector('#status').textContent=`${results.length} / 160 verified`;
 }
 const failures=results.filter(r=>!r.pass),passed=results.length-failures.length;
 document.querySelector('#status').textContent=`${passed}/160 PASS — ${failures.length} failures`;
 document.querySelector('#status').className=failures.length?'fail':'pass';
 document.querySelector('#result').textContent=JSON.stringify({total:160,passed,failures,checks:['8 × 20 entries','unique IDs','80 CSS backgrounds parsed','80 Canvas exports render','standalone code without requests','custom colors, speed and density','Canvas pause and destruction']},null,2);
})();
