(()=>{
 const queued=new Map(),errors=[];let next=1,resize,intersection,hidden=false;
 window.requestAnimationFrame=fn=>{const id=next++;queued.set(id,fn);return id};window.cancelAnimationFrame=id=>queued.delete(id);
 window.ResizeObserver=class{constructor(fn){resize=fn}observe(){}disconnect(){}};
 window.IntersectionObserver=class{constructor(fn){intersection=fn}observe(){}disconnect(){}};
 Object.defineProperty(document,'hidden',{configurable:true,get:()=>hidden});
 const motion={matches:false,addEventListener(t,fn){this.listener=fn},removeEventListener(){this.listener=null}};
 window.matchMedia=()=>motion;
 const flush=time=>{const batch=[...queued.values()];queued.clear();batch.forEach(fn=>fn(time))};
 const check=(ok,message)=>{if(!ok)throw Error(message)};
 let passed=0;
 for(const item of BACKGROUNDS.filter(b=>b.tech==='Canvas')){
  try{
   const canvas=document.querySelector('canvas'),config={g:item.g,i:item.i,colors:[...item.colors],speed:1.5,density:100};
   const runtime=canvasRuntime(canvas,config);check(queued.size===1,'One scheduled frame');
   const before=canvas.toDataURL();for(let k=0;k<35;k++)flush(1000+k*50);check(canvas.toDataURL()!==before,'Animation changes pixels');
   runtime.setPaused(true);check(queued.size===0,'Pause cancels frame');runtime.setPaused(false);check(queued.size===1,'Resume schedules frame');
   intersection([{isIntersecting:false}]);check(queued.size===0,'Offscreen stops');intersection([{isIntersecting:true}]);check(queued.size===1,'Visible resumes');
   hidden=true;document.dispatchEvent(new Event('visibilitychange'));check(queued.size===0,'Hidden document stops');hidden=false;document.dispatchEvent(new Event('visibilitychange'));
   motion.matches=true;motion.listener();check(queued.size===0,'Reduced motion stops');motion.matches=false;motion.listener();check(queued.size===1,'Preference change resumes');
   runtime.update({speed:.5,density:180,colors:['#abcdef','#aabbcc','#030303']});resize();runtime.destroy();check(queued.size===0,'Destroy cancels frame');
   check(motion.listener===null,'Destroy removes media listener');passed++;
  }catch(e){errors.push({id:item.id,error:e.message});queued.clear()}
 }
 document.querySelector('#result').textContent=JSON.stringify({passed,total:80,errors,checks:['Pixels change over time','One RAF per active scene','Pause/resume','Offscreen suspension','Background-tab suspension','Reduced-motion changes','Resize and custom settings','Destroy cancels RAF and listeners']},null,2);
})();
