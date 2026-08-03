import{TILE}from'./const.js';
export function createEnemies(level){
const e=[];
for(let i=0;i<10;i++)e.push({x:400+i*300,y:level*TILE-40,w:30,h:30,vx:-1,vy:0,alive:1});
return e;
}
export function updateEnemies(e,p,cam){
for(let en of e){if(!en.alive)continue;
en.x+=en.vx;en.vy+=0.3;en.y+=en.vy;
if(en.y+en.h>cam*TILE-40){en.y=cam*TILE-40-en.h;en.vy=0;}
}
}