export const LEVEL_W=120;
const S=0,N=1,G=2,B=3;//sky,ground,grass,brick
export const tiles=new Uint8Array(LEVEL_W*15);
for(let x=0;x<LEVEL_W;x++){const i=x*15;tiles[i+0]=G;tiles[i+1]=G;tiles[i+2]=G;for(let y=3;y<15;y++)tiles[i+y]=N;}
const pits=[[15,3],[45,4],[75,3]];
for(let[p,w]of pits)for(let x=p;x<p+w;x++)for(let y=0;y<3;y++)tiles[x*15+y]=S;
for(let x=0;x<LEVEL_W;x++){if(tiles[x*15+2]===G){tiles[x*15+2]=B;if(Math.random()<0.3)tiles[x*15+1]=B;}}