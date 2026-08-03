import{TILE,W,H,COLORS}from'./const.js';
export function draw(ctx,p,cam,level,enemies,coins,state,score){
ctx.fillStyle=COLORS.sky;ctx.fillRect(0,0,W,H);
const ox=-cam.x,oy=-cam.y;
// ground with checker
for(let tx=0;tx<100;tx++){
const t=level.tiles[tx];
if(!t||!t.solid)continue;
const x=tx*TILE+ox,y=t.y*TILE+oy;
if(t.type===1){ctx.fillStyle=COLORS.grass;ctx.fillRect(x,y,TILE,TILE);ctx.fillStyle='#654321';ctx.fillRect(x,y,TILE-2,4)}
else{ctx.fillStyle=COLORS.brick;ctx.fillRect(x,y,TILE,TILE)}
}
// coins
for(let c of coins){if(c.collected)continue;ctx.fillStyle=COLORS.coin;ctx.fillRect(c.x+ox-5,c.y+oy-5,10,10)}
// enemies
for(let e of enemies){if(!e.alive)continue;ctx.fillStyle=COLORS.goomba;ctx.fillRect(e.x+ox,e.y+oy,e.w,e.h)
ctx.fillStyle='#fff';ctx.fillRect(e.x+ox+5,e.y+oy+5,6,6);ctx.fillRect(e.x+ox+19,e.y+oy+5,6,6)}
// mario
ctx.fillStyle=COLORS.mario;ctx.fillRect(p.x+ox,p.y+oy,p.w,p.h);
ctx.fillStyle='#fcbcb4';ctx.fillRect(p.x+ox+4,p.y+oy+4,20,18);
ctx.fillStyle='#000';ctx.fillRect(p.x+ox+8,p.y+oy+8,5,5);ctx.fillRect(p.x+ox+17,p.y+oy+8,5,5);
// hat
ctx.fillStyle='#e81414';ctx.fillRect(p.x+ox+2,p.y+oy-4,p.w-4,8);
// HUD
ctx.fillStyle='#fff';ctx.font='bold 18px monospace';
ctx.fillText('Score: '+score,10,25);ctx.fillText('Coins: '+coins,10,50);
if(state==='dead'){ctx.fillStyle='#000';ctx.font='bold 36px monospace';ctx.fillText('GAME OVER',200,220)}
if(state==='win'){ctx.fillStyle='#ff0';ctx.font='bold 36px monospace';ctx.fillText('YOU WIN!',220,220)}
if(state==='menu'){ctx.fillStyle='#fff';ctx.font='bold 24px monospace';ctx.fillText('SUPER MARIO',240,180);ctx.fillText('Press SPACE to start',200,240)}
}