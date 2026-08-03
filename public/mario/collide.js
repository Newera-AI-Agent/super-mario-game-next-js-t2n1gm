import{TILE,G,JF,MAXVX}from'./const.js';
import{tileAt}from'./physics.js';
export function updatePlayer(p,lvl,keys){
let ax=0;if(keys.left)ax=-1;if(keys.right)ax=1;
p.vx+=ax*0.5;p.vx*=0.88;
p.vx=Math.max(-MAXVX,Math.min(MAXVX,p.vx));
p.vy+=G;p.x+=p.vx;p.y+=p.vy;
p.onGround=false;
const t=tileAt(p.x+p.w/2,p.y+p.h,lvl);
if(t&&t.solid){p.y=t.y*TILE-p.h;p.vy=0;p.onGround=true;}
}