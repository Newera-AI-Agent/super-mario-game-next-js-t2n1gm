export type InputState={left:boolean;right:boolean;jump:boolean};
export function getInput(keys:Set<string>):InputState{return{left:keys.has('ArrowLeft')||keys.has('a'),right:keys.has('ArrowRight')||keys.has('d'),jump:keys.has('ArrowUp')||keys.has('w')||keys.has(' ')};
}