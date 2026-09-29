const assert=require('node:assert/strict');
const {BACKGROUNDS,CATEGORIES}=require('../catalog.js');
const {buildCode,cssBackground}=require('../engine.js');
assert.equal(BACKGROUNDS.length,160);assert.equal(new Set(BACKGROUNDS.map(x=>x.id)).size,160);
for(const cat of CATEGORIES)assert.equal(BACKGROUNDS.filter(x=>x.category===cat.id).length,20);
for(const item of BACKGROUNDS){
 assert.ok(item.name.en&&item.name.ru&&item.description.en&&item.description.ru);
 const s={colors:['#123456','#abcdef','#090909'],speed:1.7,density:140};
 const code=buildCode(item,s,true);assert.ok(code.full.startsWith('<!doctype html>'));
 assert.ok(!code.full.includes('undefined'));assert.ok(!code.full.includes('NaN'));
 if(item.tech==='Canvas'){new Function(code.js);assert.ok(code.js.includes('"speed": 1.7'));assert.ok(code.js.includes('"density": 140'));assert.ok(code.js.includes('"paused": true'))}
 else {assert.ok(cssBackground(item,s).includes('background:'));if(item.animated)assert.ok(code.css.includes('animation-play-state: paused'))}
}
console.log('PASS: 160 bilingual entries, 8 categories, unique addresses, standalone export syntax and custom settings.');
