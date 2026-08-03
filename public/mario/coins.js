import{TILE}from'./const.js';
export function createCoins(level){
const c=[];
for(let i=0;i<25;i++)c.push({x:250+i*150,y:level*TILE-80,collected:0});
return c;
}
export function checkCoin(p,c){
let got=0;
for(let cc of c){if(!cc.collected&&Math.abs(p.x+p.w/2-cc.x)<20&&Math.abs(p.y+p.h/2-cc.y)<20){cc.collected=1;got++}}
return got;
}