import{createPlayer}from'./player.js';
import{createEnemies}from'./enemies.js';
import{createCoins}from'./coins.js';
import{updatePlayer}from'./collide.js';
import{updateEnemies}from'./enemies.js';
import{checkCoin}from'./coins.js';
import{updateCamera}from'./camera.js';
import{render}from'./render.js';
import{keys}from'./input.js';
import{TILE,W,H}from'./const.js';
import{getLevel}from'./level.js';
export function initGame(canvas){
const ctx=canvas.getContext('2d');
canvas.width=W;canvas.height=H;
const level=getLevel();
const p=createPlayer();
const enemies=createEnemies(15);
const coins=createCoins(15);
let score=0,lives=3,state='playing',cCoin=0;
return{ctx,level,p,enemies,coins,score,lives,state,cCoin};
}
export function update(g){
if(g.state!=='playing')return;
updatePlayer(g.p,g.level,{left:keys.ArrowLeft||keys.KeyA,right:keys.ArrowRight||keys.KeyD,jump:keys.ArrowUp||keys.KeyW||keys.Space});
updateEnemies(g.enemies,g.p,15);
g.cCoin+=checkCoin(g.p,g.coins);
g.score=g.cCoin*100;
if(g.p.y>500){g.state='dead';g.lives--;}
}
export function draw(g){
render(g.ctx,g.p,g.enemies,g.coins,g.level,updateCamera(g.p,15),g.score,g.lives,g.state);
}