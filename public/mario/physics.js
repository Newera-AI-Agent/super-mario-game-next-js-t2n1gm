import{TILE}from'./const.js';
export function tileAt(x,y,lvl){
const tx=Math.floor(x/TILE);
const ty=Math.floor(y/TILE);
if(tx<0||tx>=100)return null;
return lvl.tiles[tx]||null;
}
export function rectHit(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;}