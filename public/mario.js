// Mario game - canvas game engine
const TILE=32,W=800,H=450;
const canvas=document.getElementById('game');
const ctx=canvas.getContext('2d');
canvas.width=W;canvas.height=H;

const key={};window.onkeydown=e=>key[e.code]=true;window.onkeyup=e=>key[e.code]=false;
let player={x:100,y:350,w:28,h:40,vx:0,vy:0,onGround:false,dir:1,frame:0};
let cam={x:0,y:0};let score=0;let coins=0;let lives=3;let state='playing';
const G=0.6,JF=12,SP=4,MAXVX=5;

const lvl={tiles:[],enemies:[],coinTiles:[],width:100,h:15};
for(let i=0;i<100;i++)lvl.tiles[i]={solid:false,type:0};
// platforms
const plats=[[5,10,8],[20,9,6],[35,8,7],[50,10,5],[65,9,8],[80,8,10],[90,7,5]];
for(let p of plats)for(let i=p[0];i<p[0]+p[2];i++)lvl.tiles[i]={solid:true,type:2};
// ground
for(let i=0;i<20;i++)lvl.tiles[i]={solid:true,type:1};
for(let i=25;i<45;i++)lvl.tiles[i]={solid:true,type:1};
for(let i=50;i<75;i++)lvl.tiles[i]={solid:true,type:1};
for(let i=78;i<100;i++)lvl.tiles[i]={solid:true,type:1};

// enemies
const enemies=[{x:400,y:lvl.h*TILE-40,w:30,h:30,vx:-1,vy:0,alive:true}];
for(let i=0;i<15;i++)enemies.push({x:700+i*200,y:lvl.h*TILE-40,w:30,h:30,vx:-1,vy:0,alive:true});
// coins
const coinList=[];
for(let i=0;i<20;i++)coinList.push({x:300+i*80,y:lvl.h*TILE-90,collected:false});

function tileAt(x,y){const tx=Math.floor(x/TILE);const ty=Math.floor(y/TILE);if(tx<0||tx>=lvl.width)return null;return lvl.tiles[tx]||null;}
function rectsOverlap(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;}
