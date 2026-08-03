export const keys={};
window.onkeydown=e=>keys[e.code]=true;
window.onkeyup=e=>keys[e.code]=false;
export function isKey(k){return!!keys[k];}
export function isLeft(){return isKey('ArrowLeft')||isKey('KeyA');}
export function isRight(){return isKey('ArrowRight')||isKey('KeyD');}
export function isJump(){return isKey('ArrowUp')||isKey('KeyW')||isKey('Space');}