export function updateCamera(p,level){
return{x:p.x-400,y:Math.min(0,p.y-200)};
}