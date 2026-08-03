export function setupTouch(canvas,keys){
const size=60;
canvas.addEventListener('touchstart',e=>{e.preventDefault();
for(let t of e.changedTouches){
const x=t.clientX-canvas.offsetLeft,y=t.clientY-canvas.offsetTop;
if(x<size&&y>canvas.height-size)keys.left=1;
if(x>canvas.width-size&&y>canvas.height-size)keys.right=1;
if(x>canvas.width-size*2&&y>canvas.height-size)keys.jump=1;
}},{passive:false});
canvas.addEventListener('touchend',e=>{
keys.left=0;keys.right=0;keys.jump=0;
});
canvas.addEventListener('touchmove',e=>{e.preventDefault();},false);
}