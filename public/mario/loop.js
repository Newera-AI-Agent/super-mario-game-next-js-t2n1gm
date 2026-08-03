import{updatePlayer}from'./collide.js';
import{updateEnemies}from'./enemies.js';
import{checkCoin}from'./coins.js';
import{renderGame}from'./render.js';
let raf;
export function start(p,lvl,es,cs,sc,st,fr,cam,ctx){
function tick(){
if(st.v!=='playing'){raf=requestAnimationFrame(tick);return;}
const keys=window.gk||{};
updatePlayer(p,lvl,keys);
cam.x=p.x-400;cam.y=0;
updateEnemies(es,p,cam);
sc.v+=checkCoin(p,cs)*100;
renderGame(ctx,p,lvl,es,cs,cam,sc.v,fr.v,st.v);
fr.v++;
raf=requestAnimationFrame(tick);
}
raf=requestAnimationFrame(tick);
}