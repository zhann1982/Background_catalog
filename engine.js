function cssBackground(item, settings) {
 const [a,b,c]=settings.colors, z=100/settings.density, px=n=>`${+(n*z).toFixed(2)}px`;
 const radial=(shape,stops)=>`radial-gradient(${shape},${stops})`;
 let bg='',size='auto',extra='';
 switch(item.g*10+item.i){
 case 0:bg=`radial-gradient(ellipse at 76% 28%,${a},transparent 57%),radial-gradient(ellipse at 10% 95%,${b}99,transparent 65%),${c}`;break;
 case 1:bg=`radial-gradient(at 16% 26%,${a},transparent 60%),radial-gradient(at 84% 22%,${b},transparent 58%),radial-gradient(at 54% 95%,${a}aa,transparent 60%),${c}`;break;
 case 2:bg=`linear-gradient(125deg,${c} 8%,${b} 38%,${a} 60%,${b} 79%,${c})`;break;
 case 3:bg=`conic-gradient(from 45deg at 30% 70%,${a},${c},${b},${a},${c},${a})`;break;
 case 4:bg=`radial-gradient(ellipse 100% 38% at 50% 105%,${a},${b}77 45%,transparent),linear-gradient(${c},${b}55)`;break;
 case 5:bg=`conic-gradient(from 158deg at 50% 0%,transparent 0deg,${a}aa 10deg,${b}88 30deg,transparent 43deg),${c}`;break;
 case 6:bg=`radial-gradient(circle at 60% 45%,${c} 10%,${a} 22%,${b} 32%,${c} 55%)`;break;
 case 7:bg=`linear-gradient(115deg,${c} 15%,${a} 15% 30%,${b} 30% 45%,${a}88 45% 60%,${b}88 60% 75%,${c} 75%)`;break;
 case 8:bg=`linear-gradient(90deg,transparent 20%,${a}bb 50%,transparent 80%),linear-gradient(transparent 20%,${b}dd 50%,transparent 80%),${c}`;break;
 case 9:bg=`radial-gradient(ellipse at 50% 50%,${b} 0,${a}77 23%,${c} 70%)`;break;
 case 10:bg=`linear-gradient(0deg,${c} 2px,transparent 2px),linear-gradient(90deg,${c} 2px,transparent 2px),linear-gradient(90deg,${a} 50%,${b} 50%)`;size=`${px(70)} ${px(35)},${px(70)} ${px(70)},${px(140)} ${px(70)}`;extra="background-position:0 0,0 0,35px 0;";break;
 case 11:bg=`radial-gradient(circle at 0 100%,${a} 30%,transparent 30%),radial-gradient(circle at 100% 0,${b} 35%,transparent 35%),linear-gradient(90deg,${c} 50%,${a}55 50%)`;break;
 case 12:bg=`conic-gradient(from 30deg,${a} 60deg,${b} 0 120deg,${c} 0 180deg,${a} 0 240deg,${b} 0 300deg,${c} 0)`;size=`${px(70)} ${px(120)}`;break;
 case 13:bg=`repeating-radial-gradient(circle at 30% 65%,${a} 0 ${px(3)},${c} ${px(4)} ${px(20)})`;break;
 case 14:bg=`repeating-linear-gradient(45deg,transparent 0 ${px(20)},${a}99 ${px(20)} ${px(27)},transparent ${px(27)} ${px(40)}),repeating-linear-gradient(-45deg,${c} 0 ${px(20)},${b}99 ${px(20)} ${px(27)},${c} ${px(27)} ${px(40)})`;break;
 case 15:bg=`conic-gradient(from 45deg,${a} 90deg,${c} 0 180deg,${b} 0 270deg,${c} 0)`;size=`${px(50)} ${px(80)}`;break;
 case 16:bg=`linear-gradient(${a}44 1px,transparent 1px),linear-gradient(90deg,${a}44 1px,transparent 1px),linear-gradient(${b} 1px,transparent 1px),linear-gradient(90deg,${b} 1px,${c} 1px)`;size=`${px(12)} ${px(12)},${px(12)} ${px(12)},${px(60)} ${px(60)},${px(60)} ${px(60)}`;break;
 case 17:bg=`radial-gradient(circle at 50% 0,${a} 48%,transparent 49%),${c}`;size=`${px(65)} ${px(40)}`;break;
 case 18:bg=`conic-gradient(from 0deg,${a} 0 90deg,${c} 90deg 180deg,${b} 180deg 270deg,${c} 270deg)`;size=`${px(95)} ${px(95)}`;break;
 case 19:bg=`linear-gradient(135deg,${a} 25%,transparent 25%) -20px 0,linear-gradient(225deg,${a} 25%,transparent 25%) -20px 0,linear-gradient(315deg,${b} 25%,transparent 25%),linear-gradient(45deg,${b} 25%,${c} 25%)`;size=`${px(40)} ${px(40)}`;break;
 case 20:bg=`radial-gradient(${a} 1.5px,transparent 2px),${c}`;size=`${px(20)} ${px(20)}`;break;
 case 21:bg=`linear-gradient(125deg,transparent,${c} 80%),radial-gradient(${a} 3px,${c} 3.5px)`;size=`auto,${px(14)} ${px(14)}`;break;
 case 22:bg=`linear-gradient(90deg,${a} 20%,transparent 20%) 0 0 / ${px(39)} ${px(51)},linear-gradient(90deg,${b} 15%,transparent 15%) 15px 23px / ${px(57)} ${px(31)},${c}`;extra='background-blend-mode:screen;';break;
 case 23:bg=`radial-gradient(circle,transparent 35%,${a}88 37% 40%,transparent 42%),${c}`;size=`${px(40)} ${px(40)}`;break;
 case 24:bg=`radial-gradient(ellipse 1px 5px,${a} 80%,transparent),radial-gradient(ellipse 5px 1px,${b} 80%,transparent),${c}`;size=`${px(45)} ${px(45)}`;break;
 case 25:bg=`radial-gradient(${a} 1px,transparent 1.5px) 0 0 / ${px(43)} ${px(61)},radial-gradient(${b}88 2px,transparent 2.5px) 13px 20px / ${px(71)} ${px(47)},${c}`;break;
 case 26:bg=`radial-gradient(circle,${c} 23%,${b}77 27%,${a}44 32%,${c} 37%)`;size=`${px(22)} ${px(22)}`;break;
 case 27:bg=`repeating-linear-gradient(115deg,transparent 0 ${px(20)},${a}77 ${px(21)} ${px(22)},transparent ${px(23)} ${px(40)}),${c}`;size=`${px(70)} ${px(20)}`;break;
 case 28:bg=`radial-gradient(circle at 46% 43%,${b} 0 4%,${a} 9%,${c} 22% 100%)`;size=`${px(33)} ${px(33)}`;break;
 case 29:bg=`conic-gradient(${a}44 25%,transparent 0 75%,${b}33 0) 0 0 / ${px(19)} ${px(23)},conic-gradient(transparent 75%,${a}66 0) 6px 9px / ${px(31)} ${px(41)},${c}`;break;
 case 30:bg=`radial-gradient(ellipse,${c} 21%,${a} 22%,${b} 23%,${a}55 26%,${c} 44%)`;break;
 case 31:bg=`radial-gradient(ellipse at 25% 55%,${a}77,transparent 58%),radial-gradient(ellipse at 75% 30%,${b}66,transparent 46%),radial-gradient(white 0.7px,transparent 1px),${c}`;size=`auto,auto,${px(39)} ${px(47)}`;break;
 case 32:bg=`radial-gradient(circle at 70% 35%,white 0 1%,${b} 1.5%,${a}55 8%,${c} 36%)`;break;
 case 33:bg=`radial-gradient(ellipse 70% 95% at 50% 115%,${c} 15%,${a}66 65%,${b} 70%,transparent 71%),${c}`;break;
 case 34:bg=`radial-gradient(circle,${b} 0 3%,transparent 4%),repeating-radial-gradient(circle,transparent 0 ${px(23)},${a}44 ${px(24)} ${px(25)},transparent ${px(26)} ${px(43)}),${c}`;break;
 case 35:bg=`radial-gradient(circle at 45% 45%,${c} 12%,${a}66 20%,${b}66 24%,${c} 27%)`;size=`${px(90)} ${px(73)}`;break;
 case 36:bg=`linear-gradient(145deg,transparent 40%,${a}22 46%,${b} 50%,${a}55 54%,transparent 60%),radial-gradient(ellipse,${a}88,${c} 70%)`;break;
 case 37:bg=`radial-gradient(circle at 25% 40%,white 0 .5%,${a} 1%,transparent 30%),radial-gradient(circle at 75% 60%,white 0 .5%,${b} 1%,transparent 30%),${c}`;break;
 case 38:bg=`radial-gradient(ellipse 50% 9% at center,transparent 60%,${b}99 64% 70%,transparent 75%),radial-gradient(circle,${a} 5%,${c} 25%,transparent 26%),${c}`;break;
 case 39:bg=`repeating-linear-gradient(0deg,transparent 0 ${px(7)},${c}55 ${px(8)} ${px(10)}),linear-gradient(0deg,${c} 10%,${a}88,${b},${c})`;break;
 case 40:bg=`conic-gradient(from 150deg at 50% 20%,${a}99 60deg,transparent 0) 0 0 / ${px(90)} 100%,linear-gradient(${b}66,${c})`;break;
 case 41:bg=`radial-gradient(ellipse at 50% 0%,transparent 45%,${a}88 46% 60%,${c} 61%)`;size=`${px(140)} ${px(55)}`;break;
 case 42:bg=`radial-gradient(circle at 75% 23%,${b} 8%,transparent 8.5%),radial-gradient(ellipse 110% 85% at 5% 115%,${a} 70%,transparent 71%),${c}`;break;
 case 43:bg=`linear-gradient(90deg,transparent 49%,${b}99 49% 51%,transparent 51%),repeating-linear-gradient(35deg,transparent 0 ${px(18)},${a}66 ${px(19)} ${px(20)}),${c}`;break;
 case 44:bg=`repeating-radial-gradient(ellipse at 30% 65%,${c} 0 ${px(6)},${a}88 ${px(7)} ${px(9)},${b}44 ${px(10)} ${px(13)})`;break;
 case 45:bg=`conic-gradient(from 135deg at 30% 30%,${a} 90deg,transparent 0),conic-gradient(from 135deg at 75% 50%,${b}88 90deg,transparent 0),linear-gradient(${c},${b})`;break;
 case 46:bg=`repeating-radial-gradient(ellipse at 20% 20%,transparent 0 ${px(23)},${a}66 ${px(24)} ${px(26)},transparent ${px(28)} ${px(37)}),repeating-radial-gradient(ellipse at 70% 80%,${c} 0 ${px(30)},${b}99 ${px(32)} ${px(33)},${c} ${px(36)} ${px(47)})`;break;
 case 47:bg=`radial-gradient(ellipse at 0 50%,${a} 30%,transparent 31%),radial-gradient(ellipse at 100% 50%,${a} 30%,transparent 31%),radial-gradient(ellipse at 50% 0,${b} 30%,transparent 31%),radial-gradient(ellipse at 50% 100%,${b} 30%,${c} 31%)`;size=`${px(70)} ${px(70)}`;break;
 case 48:bg=`conic-gradient(from 20deg at 25% 40%,${a}66,${b}aa,${c},${a}44,${c},${a}66)`;size=`${px(140)} ${px(190)}`;break;
 case 49:bg=`radial-gradient(ellipse at 25% 25%,${a}99 12%,transparent 14%),radial-gradient(ellipse at 75% 60%,${b}66 18%,${c} 20%)`;size=`${px(140)} ${px(100)}`;break;
 case 50:bg=`radial-gradient(circle at 25% 35%,${a} 15%,transparent 15.5%),repeating-linear-gradient(125deg,transparent 0 ${px(23)},${b}55 ${px(23)} ${px(27)}),${c}`;break;
 case 51:bg=`repeating-radial-gradient(ellipse at 80% 30%,${c} 0%,${b} 9%,${a} 10%,${c} 19%)`;break;
 case 52:bg=`linear-gradient(25deg,${a} 35%,transparent 35%),linear-gradient(145deg,${b} 45%,${c} 45%)`;break;
 case 53:bg=`repeating-radial-gradient(ellipse at 30% 50%,${a} 0 ${px(3)},${c} ${px(4)} ${px(8)})`;break;
 case 54:bg=`linear-gradient(135deg,${a} 49.8%,${c} 50.2%)`;break;
 case 55:bg=`radial-gradient(ellipse at 30% 50%,${a}ee 5%,transparent 40%),radial-gradient(ellipse at 55% 70%,${b}cc 5%,transparent 40%),${c}`;break;
 case 56:bg=`repeating-linear-gradient(135deg,${a} 0 ${px(20)},${b} ${px(20)} ${px(40)},${c} ${px(40)} ${px(60)})`;break;
 case 57:bg=`radial-gradient(circle at 35% 50%,${a}aa 25%,transparent 25.5%),radial-gradient(circle at 65% 50%,${b}aa 25%,transparent 25.5%),linear-gradient(90deg,${c} 50%,${a}33 50%)`;break;
 case 58:bg=`linear-gradient(135deg,${a} 25%,transparent 25%) -25px 0,linear-gradient(225deg,${a} 25%,transparent 25%) -25px 0,linear-gradient(315deg,${b} 25%,transparent 25%),linear-gradient(45deg,${b} 25%,${c} 25%)`;size=`${px(50)} ${px(80)}`;break;
 case 59:bg=`repeating-conic-gradient(from 20deg at 30% 80%,${a} 0deg 8deg,${b} 8deg 16deg,${c} 16deg 24deg)`;break;
 case 60:bg=`linear-gradient(${a}66 1px,transparent 2px),linear-gradient(90deg,${b}66 1px,${c} 2px)`;size=`${px(40)} ${px(40)}`;break;
 case 61:bg=`repeating-linear-gradient(0deg,${c} 0 ${px(4)},transparent ${px(4)} ${px(13)}),radial-gradient(circle at 50% 50%,${a} 0 28%,transparent 28.5%),linear-gradient(${c},${b}55)`;break;
 case 62:bg=`repeating-linear-gradient(45deg,transparent 0 ${px(13)},${a} ${px(14)} ${px(16)},transparent ${px(17)} ${px(35)}) 0 0 / ${px(50)} ${px(31)},${c}`;break;
 case 63:bg=`repeating-linear-gradient(transparent 0 2px,${c}99 2px 4px),radial-gradient(ellipse,${a}99,${c})`;break;
 case 64:bg=`linear-gradient(transparent 49%,${a} 50%,transparent 51%),linear-gradient(90deg,transparent 49%,${b} 50%,transparent 51%),radial-gradient(ellipse,${a}44,${c})`;break;
 case 65:bg=`conic-gradient(${a} 25%,${c} 0 50%,${b} 0 75%,${c} 0)`;size=`${px(64)} ${px(64)}`;extra='box-shadow:inset 0 0 100px #0008;';break;
 case 66:bg=`repeating-conic-gradient(from -15deg at 50% 100%,${a} 0 15deg,${b} 15deg 30deg,${c} 30deg 45deg)`;break;
 case 67:bg=`linear-gradient(155deg,${c} 30%,${a} 30% 40%,${b} 40% 50%,${a}88 50% 60%,${c} 60%)`;break;
 case 68:bg=`linear-gradient(${c} 0 20%,${a}88 20% 40%,${a} 40% 60%,${b} 60% 80%,${c} 80%)`;break;
 case 69:bg=`radial-gradient(ellipse,${c} 30%,${a}33)`;extra=`box-shadow:inset 0 0 0 20px ${c},inset 0 0 0 22px ${a},inset 0 0 28px 24px ${a}77,inset 0 0 0 45px ${c},inset 0 0 0 47px ${b};`;break;
 case 70:bg=`repeating-linear-gradient(3deg,transparent 0 3px,${a}15 4px 5px),repeating-linear-gradient(93deg,${c} 0 4px,${b}33 5px 6px)`;break;
 case 71:bg=`repeating-linear-gradient(0deg,transparent 0 2px,${a}33 2px 3px),repeating-linear-gradient(90deg,${c} 0 3px,${b}88 3px 4px)`;break;
 case 72:bg=`radial-gradient(${a}99 1px,${c} 1.3px)`;size=`${px(26)} ${px(26)}`;break;
 case 73:bg=`radial-gradient(ellipse at 0 100%,${a}99,${c} 65%)`;break;
 case 74:bg=`repeating-linear-gradient(90deg,${a}55 0 1px,${c} 1px ${px(15)})`;break;
 case 75:bg=`repeating-linear-gradient(0deg,transparent 0 1px,${a}44 1px 2px),linear-gradient(100deg,${a},${c},${b},${c})`;break;
 case 76:bg=`conic-gradient(${a}22 25%,transparent 0 50%,${a}22 0 75%,transparent 0),${c}`;size=`${px(36)} ${px(36)}`;break;
 case 77:bg=`radial-gradient(ellipse at 80% 100%,transparent 40%,${a}77 40.5% 46%,transparent 46.5%),${c}`;break;
 case 78:bg=`linear-gradient(45deg,transparent 49%,${b}55 50%,transparent 51%),linear-gradient(${a}44 1px,transparent 1px),linear-gradient(90deg,${a}44 1px,${c} 1px)`;size=`${px(90)} ${px(90)},${px(30)} ${px(30)},${px(30)} ${px(30)}`;break;
 case 79:bg=`conic-gradient(from 45deg,${a}44 25%,${c} 0 50%,${b}33 0 75%,${c} 0)`;size=`${px(10)} ${px(10)}`;break;
 }
 return `background:${bg};\n  ${size!=='auto'?`background-size:${size};`:''}\n  ${extra}`;
}
/* This function is deliberately self-contained: it is also the export runtime. */
function canvasRuntime(canvas, config) {
 const ctx=canvas.getContext('2d'); if(!ctx)return {destroy(){},setPaused(){},update(){}};
 let w=1,h=1,frame=0,last=0,elapsed=0,paused=!!config.paused,visible=true,dead=false;
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 const rand=n=>{const v=Math.sin(n*127.1+config.g*311.7+config.i*17.3)*43758.5453;return v-Math.floor(v)};
 const tau=Math.PI*2;
 function draw(t){
  const [a,b,c]=config.colors, g=config.g,v=config.i-10, d=config.density/100, m=Math.min(w,h);
  ctx.setTransform(canvas.width/w,0,0,canvas.height/h,0,0);ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';ctx.shadowBlur=0;ctx.fillStyle=c;ctx.fillRect(0,0,w,h);
  const line=(x1,y1,x2,y2,color=a,width=1)=>{ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke()};
  const dot=(x,y,r,color=a,alpha=1)=>{ctx.globalAlpha=alpha;ctx.fillStyle=color;ctx.beginPath();ctx.arc(x,y,Math.max(.1,r),0,tau);ctx.fill();ctx.globalAlpha=1};
  const ellipse=(x,y,rx,ry,color=a,width=1)=>{ctx.strokeStyle=color;ctx.lineWidth=width;ctx.beginPath();ctx.ellipse(x,y,Math.max(.1,rx),Math.max(.1,ry),0,0,tau);ctx.stroke()};
  const poly=(x,y,r,n,angle,color=a,fill=false)=>{ctx.beginPath();for(let k=0;k<=n;k++){let q=angle+k*tau/n;ctx.lineTo(x+Math.cos(q)*r,y+Math.sin(q)*r)}ctx.closePath();ctx.strokeStyle=color;ctx.fillStyle=color;fill?ctx.fill():ctx.stroke()};
  const glow=(x,y,r,col)=>{let gr=ctx.createRadialGradient(x,y,0,x,y,Math.max(1,r));gr.addColorStop(0,col);gr.addColorStop(1,col.slice(0,7)+'00');ctx.fillStyle=gr;ctx.fillRect(x-r,y-r,r*2,r*2)};
  const path=(count,point,col,width=1)=>{ctx.beginPath();for(let j=0;j<=count;j++){const p=point(j/count,j);j?ctx.lineTo(...p):ctx.moveTo(...p)}ctx.strokeStyle=col;ctx.lineWidth=width;ctx.stroke()};
  if(g===0){
   if(v===0){glow(w*.7,h*.2,m,a+'88');for(let k=0;k<9*d;k++)path(90,(q)=>[q*w,h*(.25+k*.06)+Math.sin(q*7+t+k*.35)*h*.13],k%2?a+'77':b+'88',m*.045)}
   if(v===1){for(let k=0;k<3;k++)glow(w*.5+Math.cos(t*.3+k*tau/3)*w*.23,h*.5+Math.sin(t*.4+k*tau/3)*h*.23,m*.7,[a,b,a][k]);}
   if(v===2){for(let k=0;k<50*d;k++){ctx.fillStyle=k%2?a:b;ctx.globalAlpha=.15+.65*(.5+.5*Math.sin(k*.14+t));ctx.fillRect(k*w/(50*d),0,w/(50*d)+1,h)}ctx.globalAlpha=1}
   if(v===3){for(let k=0;k<6;k++){ctx.beginPath();ctx.moveTo(0,h);for(let j=0;j<=100;j++){let x=j*w/100;ctx.lineTo(x,h*(.25+k*.13)+Math.sin(j*.035+t*.3+k)*h*.13)}ctx.lineTo(w,h);ctx.closePath();ctx.fillStyle=k%2?a+'99':b+'88';ctx.fill()}}
   if(v===4){const x=w*(.5+.3*Math.sin(t*.3));glow(x,h*.5,m,a);for(let k=0;k<7*d;k++)ellipse(x,h*.5,m*(.1+k*.09),m*(.1+k*.09),b+'44',m*.035)}
   if(v===5){for(let k=15;k>0;k--){const r=((k/15+t*.03)%1)*m*.8;glow(w*.5,h*.5,r,k%2?a+'22':b+'33')}dot(w*.5,h*.5,m*.05,c)}
   if(v===6){for(let k=0;k<90*d;k++)path(25,(q)=>[k*w/(90*d)+Math.sin(q*4+t+k*.1)*w*.07,q*h],k%2?a+'55':b+'66',2)}
   if(v===7){glow(w*.5,h*.5,m*.55,a);glow(w*.48,h*.5,m*.38,b);dot(w*.5+Math.sin(t*.2)*m*.08,h*.49,m*.23,c)}
   if(v===8){for(let k=0;k<36*d;k++){ctx.globalAlpha=.35;ctx.fillStyle=k%2?a:b;ctx.beginPath();ctx.moveTo(w*.3,h*.7);ctx.arc(w*.3,h*.7,w,k*tau/(36*d)+t*.1,(k+.65)*tau/(36*d)+t*.1);ctx.closePath();ctx.fill()}ctx.globalAlpha=1}
   if(v===9){const s=24/Math.sqrt(d);for(let y=0;y<h;y+=s)for(let x=0;x<w;x+=s){let u=.5+.5*Math.sin(x*.018+Math.sin(y*.025+t)+t);ctx.fillStyle=u>.5?a:b;ctx.globalAlpha=.1+u*.8;ctx.fillRect(x+1,y+1,s-2,s-2)}ctx.globalAlpha=1}
  }else if(g===1){
   ctx.lineWidth=1.3;
   if(v===0)for(let k=0;k<12*d;k++)poly(w*.5,h*.5,m*(.09+k*.033),3+k%6,t*(k%2?.1:-.1)+k*.1,k%2?a:b);
   if(v===1){let s=40/Math.sqrt(d);for(let y=s/2;y<h;y+=s)for(let x=s/2;x<w;x+=s){let r=s*(.18+.15*Math.sin(t+x*.02+y*.02));ctx.strokeStyle=a;ctx.strokeRect(x-r,y-r,r*2,r*2)}}
   if(v===2){let s=45/Math.sqrt(d);for(let y=0;y<h+s;y+=s)for(let x=0;x<w+s;x+=s)poly(x,y,s*(.35+.13*Math.sin(t+x*.01)),3,(Math.round(x/s)%2)*Math.PI/3,Math.round(y/s)%2?a:b,true)}
   if(v===3)path(700,q=>{let u=q*tau*6;return[w/2+m*.24*Math.cos(u)+m*.17*Math.cos(u*3.7+t),h/2+m*.24*Math.sin(u)-m*.17*Math.sin(u*3.7+t)]},a,1.2);
   if(v===4)for(let k=0;k<20*d;k++){ctx.save();ctx.translate(w/2,h/2);ctx.rotate(k*.065+t*.1);ctx.strokeStyle=k%2?a:b;let r=m*(.04+k*.028);ctx.strokeRect(-r,-r,r*2,r*2);ctx.restore()}
   if(v===5){let s=40/Math.sqrt(d);for(let y=0;y<h+s;y+=s*.88)for(let x=0;x<w+s;x+=s)poly(x+(Math.round(y/(s*.88))%2)*s/2,y,s*(.3+.1*Math.sin(t+x*.01+y*.01)),6,Math.PI/6,a)}
   if(v===6){let hy=h*.22;for(let k=-15;k<=15;k++)line(w/2,hy,w/2+k*w*.15,h,a+'88');for(let k=0;k<18*d;k++){let q=((k/(18*d)+t*.08)%1);let y=hy+q*q*(h-hy);line(0,y,w,y,b+'99')}}
   if(v===7)for(let k=0;k<15*d;k++){ctx.beginPath();ctx.arc(w/2,h/2,m*(.04+k*.029),t*(k%2?.3:-.2)+k,t*(k%2?.3:-.2)+k+Math.PI*1.3);ctx.strokeStyle=k%2?a:b;ctx.stroke()}
   if(v===8)for(let k=0;k<20*d;k++){let x=(k+.5)*w/(20*d),bx=x+Math.sin(t*(1+k*.014))*m*.08,y=h*.65+Math.cos(t*(1+k*.014))*m*.04;line(x,h*.1,bx,y,a+'66');dot(bx,y,4,b)}
   if(v===9){let s=65/Math.sqrt(d);for(let y=0;y<h+s;y+=s*.8)for(let x=0;x<w+s;x+=s){let k=x+y;poly(x+(rand(k)-.5)*s*.3,y+(rand(k+1)-.5)*s*.3,s*(.35+.06*Math.sin(t+k)),5+Math.floor(rand(k+2)*3),rand(k+3)*tau,a+'aa')}}
  }else if(g===2){
   const n=Math.round(70*d),points=[];
   for(let k=0;k<n;k++){
    const r=rand(k+1),s=rand(k+100),q=rand(k+200);let x=r*w,y=s*h;
    if(v===0){x=(r*w+t*(q-.5)*18+w*10)%w;y=(s*h+t*(r-.5)*18+h*10)%h;points.push([x,y]);dot(x,y,1.5,a)}
    if(v===1){x+=Math.sin(t*.4+k)*20;y+=Math.cos(t*.3+k)*15;glow(x,y,5+q*10,(k%2?a:b)+'aa');dot(x,y,1.5,b,.3+.7*Math.pow(Math.sin(t+k),2))}
    if(v===2){let ang=q*tau+t*.3,rad=((r-t*.045)%1+1)%1*m*.65;x=w/2+Math.cos(ang+rad*.012)*rad;y=h/2+Math.sin(ang+rad*.012)*rad;dot(x,y,1+q*2,k%2?a:b)}
    if(v===3){x=(x+Math.sin(t*.4+k)*20+w)%w;y=(y+t*(12+q*20))%h;dot(x,y,1+q*3,a,.3+q*.7)}
    if(v===4){x+=Math.sin(t*.5+k)*15;y=((y-t*(12+q*30))%h+h)%h;ellipse(x,y,3+q*14,3+q*14,k%2?a+'88':b+'77')}
    if(v===5){x=(x+t*(40+q*60))%(w+100)-50;y=(y+t*(25+q*40))%(h+70)-35;line(x,y,x-12-q*32,y-8-q*20,a+'aa',1+q)}
    if(v===6){let age=(r+t*.25)%1,vx=(s-.5)*w*.7;x=w/2+vx*age;y=h*.95-h*2.6*age+h*2.5*age*age;dot(x,y,2+q*2,k%2?a:b,1-age*.6)}
    if(v===7){const cols=18,rows=Math.ceil(n/cols);x=(k%cols+.5)*w/cols;y=(Math.floor(k/cols)+1)*h/(rows+1)+Math.sin(k%cols*.4+t+Math.floor(k/cols)*.5)*h*.13;dot(x,y,1+Math.floor(k/cols)*.45,k%2?a:b)}
    if(v===8){x+=Math.sin(t+k)*20;y=(y+t*(18+q*25))%h;ctx.save();ctx.translate(x,y);ctx.rotate(t+q*tau);ctx.fillStyle=k%2?a:b;ctx.fillRect(-3,-5,6*Math.cos(t+k),10);ctx.restore()}
    if(v===9){let ang=Math.atan2(y-h/2,x-w/2)+Math.sin(t*.3+Math.hypot(x-w/2,y-h/2)*.01);line(x,y,x+Math.cos(ang)*14,y+Math.sin(ang)*14,k%2?a:b,1.5)}
   }
   if(v===0)for(let j=0;j<points.length;j++)for(let k=j+1;k<points.length;k++){let distance=Math.hypot(points[j][0]-points[k][0],points[j][1]-points[k][1]);if(distance<m*.23){ctx.globalAlpha=(1-distance/(m*.23))*.4;line(...points[j],...points[k],a)}}ctx.globalAlpha=1;
  }else if(g===3){
   for(let k=0;k<90*d;k++)dot(rand(k)*w,rand(k+90)*h,rand(k+180)*1.2,b,.2+rand(k+270)*.6);
   if(v===0)for(let k=0;k<90*d;k++){let q=(rand(k)+t*.15)%1,ang=rand(k+80)*tau,r=q*q*Math.max(w,h);line(w/2+Math.cos(ang)*r,h/2+Math.sin(ang)*r,w/2+Math.cos(ang)*r*(1+.1*q),h/2+Math.sin(ang)*r*(1+.1*q),a,q*2+.2)}
   if(v===1){glow(w/2,h/2,m*.3,b+'aa');for(let k=0;k<400*d;k++){let r=rand(k)*m*.47,ang=k%3*tau/3+r*.023+t*.1+(rand(k+12)-.5)*.5;dot(w/2+Math.cos(ang)*r,h/2+Math.sin(ang)*r*.55,.6+rand(k+1)*1.5,k%2?a:b)}}
   if(v===2){glow(w/2,h/2,m*.14,b);dot(w/2,h/2,m*.025,b);for(let k=1;k<7;k++){let r=m*(.07+k*.053);ellipse(w/2,h/2,r,r*.65,a+'33');dot(w/2+Math.cos(t/(k*.6)+k)*r,h/2+Math.sin(t/(k*.6)+k)*r*.65,2+k*.7,k%2?a:b)}}
   if(v===3){glow(w/2,h/2,m*.38,a+'88');const gr=ctx.createRadialGradient(w*.46,h*.38,0,w*.56,h*.57,m*.3);gr.addColorStop(0,b);gr.addColorStop(.5,a);gr.addColorStop(1,c);dot(w/2,h/2,m*.28,gr);for(let k=0;k<12;k++)ellipse(w/2,h/2,m*.28*Math.abs(Math.sin(k*.25+t*.06)),m*.28,a+'22')}
   if(v===4){let x=w*(.2+(t*.04)% .6),y=h*.4;for(let k=55;k>=0;k--)dot(x-k*3,y+k*.7+Math.sin(k*.03)*10,Math.max(1,8-k*.12),k%2?a:b,(1-k/60)*.6);glow(x,y,28,b);dot(x,y,4,'#ffffff')}
   if(v===5){ctx.save();ctx.translate(w/2,h/2);ctx.rotate(t*.025);let ps=Array.from({length:24},(_,k)=>[(rand(k)-.5)*m*.85,(rand(k+34)-.5)*m*.85]);ps.forEach((p,k)=>{dot(...p,2,b);if(k%3!==0)line(...ps[k-1],...p,a+'77')});ctx.restore()}
   if(v===6){for(let k=0;k<400*d;k++){let r=m*(.13+rand(k)*.32),ang=rand(k+15)*tau+t*.3;dot(w/2+Math.cos(ang)*r,h/2+Math.sin(ang)*r*.3,1.2,k%2?a:b,.7)}dot(w/2,h/2,m*.13,c);glow(w/2,h/2,m*.11,a+'55')}
   if(v===7){ctx.save();ctx.translate(w/2,h/2);ctx.rotate(t*.3);for(let k=0;k<2;k++){ctx.rotate(Math.PI);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(w,-h*.13);ctx.lineTo(w,h*.13);ctx.fillStyle=a+'33';ctx.fill()}ctx.restore();glow(w/2,h/2,m*.16,b);dot(w/2,h/2,4,'#ffffff')}
   if(v===8)for(let k=0;k<65*d;k++){let ang=rand(k)*tau+t*(.05+rand(k+1)*.08),r=m*(.2+rand(k+2)*.3);poly(w/2+Math.cos(ang)*r,h/2+Math.sin(ang)*r*.6,2+rand(k+3)*8,5,t+k,k%2?a+'aa':b+'77',true)}
   if(v===9){let ps=Array.from({length:16},(_,k)=>[rand(k)*w+Math.sin(t*.2+k)*10,rand(k+41)*h]);ps.forEach((p,k)=>{glow(...p,18,a+'66');dot(...p,2,b);ps.slice(k+1).forEach(q=>{if(Math.hypot(p[0]-q[0],p[1]-q[1])<m*.55)line(...p,...q,a+'44')})})}
  }else if(g===4){
   if(v===0){for(let k=0;k<5;k++){ctx.beginPath();ctx.moveTo(0,h);for(let j=0;j<=100;j++)ctx.lineTo(j*w/100,h*(.3+k*.15)+Math.sin(j*.04+k+t*.08)*h*.13);ctx.lineTo(w,h);ctx.closePath();ctx.fillStyle=k%2?a:b;ctx.globalAlpha=.25+k*.13;ctx.fill()}ctx.globalAlpha=1}
   if(v===1)for(let k=0;k<35*d;k++)path(100,q=>[q*w,h*(k/(35*d))+Math.sin(q*10+t+k*.3)*h*.06],k%2?a+'66':b+'55');
   if(v===2)for(let k=0;k<90*d;k++){let x=rand(k)*w,len=h*(.15+rand(k+1)*.65);ctx.beginPath();ctx.moveTo(x,h);ctx.quadraticCurveTo(x+Math.sin(t+k*.1)*25,h-len*.5,x+Math.sin(t+k*.1)*40,h-len);ctx.strokeStyle=k%2?a:b;ctx.lineWidth=1+rand(k+2)*2;ctx.stroke()}
   if(v===3)for(let k=0;k<35*d;k++){let x=rand(k)*w+Math.sin(t*.4+k)*20,y=(rand(k+30)*h+t*(12+rand(k+1)*15))%(h+30)-15;ctx.save();ctx.translate(x,y);ctx.rotate(t*.2+k);ctx.beginPath();ctx.moveTo(-10,0);ctx.quadraticCurveTo(0,-12,10,0);ctx.quadraticCurveTo(0,12,-10,0);ctx.fillStyle=k%2?a:b;ctx.fill();ctx.restore()}
   if(v===4){glow(w*.6,h*.3,m,b+'33');for(let k=0;k<90*d;k++){let x=rand(k)*w,y=(rand(k+1)*h+t*(30+rand(k+2)*70))%h;line(x,y,x-2,y+10+rand(k+3)*25,a+'88',1)}}
   if(v===5)for(let k=0;k<14*d;k++){let x=rand(k)*w,y=rand(k+20)*h,r=12+8*Math.sin(t*.4+k);for(let j=0;j<6;j++)dot(x+Math.cos(j*tau/6)*r,y+Math.sin(j*tau/6)*r,r*.65,k%2?a:b,.65);dot(x,y,4,b)}
   if(v===6){glow(w*.5,h*.4,m,a+'33');let x=w*(.5+Math.sin(t*.1)*.15),y=0;for(let k=0;k<14;k++){let nx=x+(rand(k+Math.floor(t*.25))-.5)*70,ny=y+h/16;line(x,y,nx,ny,b,2);if(k%3===0)line(nx,ny,nx+35,ny+24,a+'99');x=nx;y=ny}}
   if(v===7){const branch=(x,y,len,angle,depth)=>{if(!depth)return;let nx=x+Math.cos(angle)*len,ny=y+Math.sin(angle)*len;line(x,y,nx,ny,depth%2?a:b,depth*.55);branch(nx,ny,len*.7,angle-.38+Math.sin(t*.4)*.08,depth-1);branch(nx,ny,len*.7,angle+.4+Math.sin(t*.4)*.08,depth-1)};for(let k=0;k<4;k++)branch(w*(k+.5)/4,h,h*.22,-Math.PI/2,6)}
   if(v===8)for(let k=0;k<12*d;k++){let x=(rand(k)*w+t*(3+rand(k+1)*9))%(w+m*.5)-m*.25,y=rand(k+40)*h*.8;for(let j=0;j<4;j++)glow(x+j*20,y+Math.sin(j)*10,35+rand(k)*40,k%2?a+'99':b+'99')}
   if(v===9)for(let k=0;k<9*d;k++){let q=(rand(k)+t*.12)%1;ctx.globalAlpha=1-q;ellipse(rand(k+1)*w,rand(k+10)*h,q*m*.35,q*m*.13,k%2?a:b,1.2)}ctx.globalAlpha=1;
  }else if(g===5){
   if(v===0)for(let k=0;k<45*d;k++)path(100,q=>[q*w,h*(k/(45*d))+Math.sin(q*7+t*.3+k*.13)*h*.16*Math.sin(q*Math.PI)],k%2?a+'99':b+'88');
   if(v===1)for(let k=0;k<7*d;k++)dot(w*.5+Math.sin(t*.2+k*2)*w*.3,h*.5+Math.cos(t*.3+k)*h*.25,m*(.09+rand(k)*.11),k%2?a:b,.45);
   if(v===2)for(let k=0;k<8*d;k++)path(350,q=>[w/2+Math.sin(q*tau*3+t*.2+k*.04)*w*.35,h/2+Math.sin(q*tau*2+k*.06)*h*.35],k%2?a+'77':b+'99',1);
   if(v===3)for(let k=0;k<6;k++)path(180,q=>[w*.5+Math.sin(q*tau+t*.12+k)*w*.3,h*.5+Math.cos(q*tau*2+k+t*.15)*h*.28],k%2?a+'55':b+'66',m*.055);
   if(v===4){let s=65/Math.sqrt(d);for(let y=s/2;y<h;y+=s)for(let x=s/2;x<w;x+=s)path(60,q=>{let r=s*(.3+.08*Math.sin(q*tau*3+t+x+y));return[x+Math.cos(q*tau)*r,y+Math.sin(q*tau)*r]},a,2)}
   if(v===5){ctx.save();ctx.translate(w/2,h/2);for(let k=0;k<12;k++){ctx.rotate(tau/12);poly(m*.2,0,m*(.1+.03*Math.sin(t)),3,t*.15,k%2?a+'99':b+'aa',true)}ctx.restore()}
   if(v===6)for(let k=0;k<20*d;k++)path(150,q=>[q*w,h/2+Math.sin(q*16+t+k*.08)*Math.sin(q*Math.PI)*h*.35*(k/(20*d))],k%2?a+'aa':b+'88',1.2);
   if(v===7)for(let k=0;k<20*d;k++)path(120,q=>[w/2+Math.sin(q*tau*(2+rand(k)*2)+k+t*.1)*w*.35,h/2+Math.cos(q*tau*(2+rand(k+1)*2)+k)*h*.35],k%2?a+'55':b+'66');
   if(v===8)for(let k=-12;k<=12;k++){let y=k/12,r=Math.sqrt(1-y*y)*m*.38;path(100,q=>[w/2+Math.cos(q*tau+t*.1)*r,h/2+y*m*.32+Math.sin(q*tau+t*.1)*r*.28],k%2?a:b)}
   if(v===9){ctx.save();ctx.translate(w/2,h/2);for(let j=0;j<2;j++){ctx.save();ctx.rotate((j?-.1:.1)+Math.sin(t*.15)*j*.12);for(let k=-70*d;k<=70*d;k++)line(k*6,-h,k*6,h,j?b+'66':a+'88');ctx.restore()}ctx.restore()}
  }else if(g===6){
   if(v===0){const hy=h*.52;dot(w/2,h*.33,m*.2,a);for(let k=0;k<7;k++){ctx.fillStyle=c;ctx.fillRect(w/2-m*.22,h*.32+k*m*.027,m*.44,m*.012)}for(let k=-12;k<=12;k++)line(w/2,hy,w/2+k*w*.16,h,b+'88');for(let k=0;k<15;k++){let q=(k/15+t*.12)%1;line(0,hy+q*q*h*.48,w,hy+q*q*h*.48,a+'99')}}
   if(v===1){ctx.font=`${14/Math.sqrt(d)}px monospace`;let s=18/Math.sqrt(d);for(let x=0;x<w;x+=s)for(let j=0;j<14;j++){ctx.fillStyle=j===0?b:a;ctx.globalAlpha=1-j/14;let y=(rand(x)*h+t*(20+rand(x+1)*25)-j*s+h*5)%h;ctx.fillText('01<>[]{}/*+'[Math.floor(rand(x+j+Math.floor(t))*11)],x,y)}ctx.globalAlpha=1}
   if(v===2){let n=35*d;for(let k=0;k<n;k++){let height=(.1+.75*Math.abs(Math.sin(k*.7+t)*Math.cos(k*.2+t*.6)))*h;ctx.fillStyle=k%2?a:b;ctx.fillRect(k*w/n,h-height,w/n-3,height);ctx.fillStyle=c;for(let y=h-height;y<h;y+=9)ctx.fillRect(k*w/n,y,w/n,2)}}
   if(v===3)for(let k=0;k<14*d;k++){let r=((k/(14*d)+t*.08)%1)**2*Math.max(w,h);ctx.lineWidth=2;poly(w/2,h/2,r,6,Math.PI/6,k%2?a:b)}
   if(v===4){let s=50/Math.sqrt(d);for(let y=20;y<h;y+=s)for(let x=20;x<w;x+=s)for(let j=0;j<5;j++)for(let i=0;i<5;i++){if(rand(Math.min(i,4-i)+j*3+x+y)>.45){ctx.fillStyle=Math.round(y/s)%2?a:b;ctx.fillRect(x+i*5,y+j*5+Math.sin(t+x)*3,4,4)}}}
   if(v===5){for(let k=0;k<24;k++){let x=k*w/24,height=h*(.15+rand(k)*.65);ctx.fillStyle=k%2?a+'22':b+'22';ctx.fillRect(x,h-height,w/24-2,height);for(let yy=h-height+6;yy<h;yy+=12)for(let xx=x+4;xx<x+w/24-4;xx+=9)if(rand(xx+yy+Math.floor(t*.4))>.4){ctx.fillStyle=k%2?a:b;ctx.fillRect(xx,yy,3,5)}}}
   if(v===6){for(let k=1;k<5;k++)ellipse(w/2,h/2,m*.1*k,m*.1*k,a+'66');line(w/2,0,w/2,h,a+'44');line(0,h/2,w,h/2,a+'44');let ang=t*.5;ctx.beginPath();ctx.moveTo(w/2,h/2);ctx.arc(w/2,h/2,m*.4,ang-.5,ang);ctx.closePath();ctx.fillStyle=a+'33';ctx.fill();line(w/2,h/2,w/2+Math.cos(ang)*m*.4,h/2+Math.sin(ang)*m*.4,b);for(let k=0;k<14;k++)dot(w/2+(rand(k)-.5)*m*.7,h/2+(rand(k+40)-.5)*m*.7,2,a)}
   if(v===7)for(let k=0;k<12*d;k++)path(160,q=>[q*w,h/2+Math.sin(q*12+t+k*.12)*Math.sin(q*Math.PI)*h*.35],k%2?a+'99':b+'99',1.4);
   if(v===8){for(let y=-10;y<=10;y++)for(let x=-10;x<=10;x++){let r=Math.hypot(x,y);if(r<10){let z=Math.sqrt(100-r*r);ctx.globalAlpha=.2+.8*Math.max(0,Math.sin(x*.4+t)*z/10);ctx.fillStyle=(x+y)%2?a:b;ctx.fillRect(w/2+x*m*.028,h/2+y*m*.028,m*.024,m*.024)}}ctx.globalAlpha=1}
   if(v===9)for(let k=0;k<32*d;k++){let y=rand(k)*h,x=(rand(k+30)*w+Math.sin(t*.8+k)*30+w)%w;ctx.fillStyle=k%2?a+'88':b+'99';ctx.fillRect(x,y,20+rand(k+10)*w*.4,2+rand(k+20)*7)}
  }else{
   if(v===0)for(let k=0;k<20*d;k++)path(160,q=>{let ang=q*tau,r=m*(.05+k*.027)*(1+.07*Math.sin(ang*3+t*.15));return[w*.5+Math.cos(ang)*r,h*.5+Math.sin(ang)*r*.8]},a+'77');
   if(v===1){ellipse(w/2,h/2,m*.3,m*.17,a+'77');dot(w/2+Math.cos(t*.2)*m*.3,h/2+Math.sin(t*.2)*m*.17,5,a)}
   if(v===2)for(let k=0;k<350*d;k++)dot((rand(k)*w+t*2)%w,rand(k+500)*h,.5,a,.25);
   if(v===3)for(let k=0;k<3;k++)path(120,q=>[q*w,h*(.4+k*.1)+Math.sin(q*6+t*.2+k)*h*.025],a+'88');
   if(v===4)ellipse(w/2,h/2,m*(.22+.03*Math.sin(t*.4)),m*(.22+.03*Math.sin(t*.4)),a,1.2);
   if(v===5)for(let k=0;k<50*d;k++){let x=rand(k)*w,y=(rand(k+50)*h+t*12)%h;line(x,y,x,y+5,a+'66')}
   if(v===6){for(let k=0;k<35*d;k++){path(70,q=>[q*w,k*h/(35*d)+Math.sin(q*12+t*.3+k)*3],a+'66');path(70,q=>[k*w/(35*d)+Math.cos(q*12+t*.3+k)*3,q*h],b+'99')}}
   if(v===7){line(w/2,h*.15,w/2,h*.85,a+'66');dot(w*.35,h*.5+Math.sin(t*.3)*h*.12,m*.08,a);dot(w*.65,h*.5-Math.sin(t*.3)*h*.12,m*.12,b)}
   if(v===8)for(let k=0;k<50*d;k++)dot((k+.5)*w/(50*d),h*.5+Math.sin(k*.12+t*.3)*h*.06,1.4,a);
   if(v===9)for(let k=0;k<5;k++){ctx.save();ctx.translate(w*.5,h*.5);ctx.rotate(k*.15+Math.sin(t*.1)*.04);ctx.fillStyle=k%2?a+'22':b+'55';ctx.fillRect(-w*.25+k*8,-h*.3+k*5,w*.5,h*.6);ctx.restore()}
  }
 }
 function tick(now){frame=0;if(dead||paused||!visible||document.hidden||motion.matches)return;if(last)elapsed+=Math.min(now-last,50)/1000*config.speed;last=now;draw(elapsed);frame=requestAnimationFrame(tick)}
 function sync(){cancelAnimationFrame(frame);frame=0;last=0;if(!dead&&!paused&&visible&&!document.hidden&&!motion.matches)frame=requestAnimationFrame(tick)}
 function resize(){const rect=canvas.getBoundingClientRect();w=Math.max(1,rect.width);h=Math.max(1,rect.height);const ratio=Math.min(devicePixelRatio||1,config.thumbnail?1:2);canvas.width=Math.round(w*ratio);canvas.height=Math.round(h*ratio);draw(elapsed)}
 const observer=new ResizeObserver(resize);observer.observe(canvas);
 const intersection=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync()});intersection.observe(canvas);
 document.addEventListener('visibilitychange',sync);motion.addEventListener('change',sync);resize();sync();
 return {setPaused(value){paused=value;sync()},update(value){Object.assign(config,value);draw(elapsed);sync()},destroy(){dead=true;cancelAnimationFrame(frame);observer.disconnect();intersection.disconnect();document.removeEventListener('visibilitychange',sync);motion.removeEventListener('change',sync)}};
}
// Export only the selected collection's drawing code; retain the same runtime.
function exportCanvasSource(item) {
 const source=canvasRuntime.toString();
 const markers=['  if(g===0){',...Array.from({length:6},(_,i)=>'  }else if(g==='+ (i+1) +'){'),'  }else{'];
 const start=source.indexOf(markers[0]);
 const from=source.indexOf(markers[item.g],start)+markers[item.g].length;
 const end=item.g<7?source.indexOf(markers[item.g+1],from):source.indexOf('\n  }\n }\n function tick',from);
 return source.slice(0,start)+source.slice(from,end)+source.slice(source.indexOf('\n }\n function tick',end));
}
function buildCode(item, settings, paused=false) {
 const html=item.tech==='CSS'?'<div class="background" aria-hidden="true"></div>':'<canvas class="background" aria-hidden="true"></canvas>';
 let css=`/* Put .background inside a positioned container with a height. */\n.background {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  pointer-events: none;\n}\n`;
 let js='';
 if(item.tech==='CSS'){
  css+=`.background {\n  ${cssBackground(item,settings)}\n}\n`;
  if(item.animated)css+=`.background {\n  animation: catalog-drift ${+(18/settings.speed).toFixed(2)}s ease-in-out infinite;\n  animation-play-state: ${paused?'paused':'running'};\n}\n@keyframes catalog-drift {\n  0%,100% { filter: hue-rotate(0deg) saturate(1); }\n  50% { filter: hue-rotate(22deg) saturate(1.25); }\n}\n@media (prefers-reduced-motion: reduce) {\n  .background { animation: none; }\n}\n`;
 }else js=`${exportCanvasSource(item)}\n\nconst background = canvasRuntime(document.querySelector('canvas.background'), ${JSON.stringify({g:item.g,i:item.i,...settings,paused},null,2)});\n// Call background.destroy() before removing this canvas.\n`;
 const full=`<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>${item.name.en} — Background Catalog</title>\n<style>\nhtml,body{margin:0;min-height:100%;background:${settings.colors[2]}}\nbody{position:relative;min-height:100vh;overflow:hidden}\n${css}</style>\n</head>\n<body>\n${html}\n${js?'<script>\n'+js+'<\/script>':''}\n</body>\n</html>`;
 return {html,css,js,full};
}
if(typeof module!=='undefined')module.exports={cssBackground,canvasRuntime,buildCode};
