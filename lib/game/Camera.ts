import { Vector2 } from './types';
const W = 800, H = 400;
const LW = 4800;
export class Camera {
  x = 0; y = 0;
  update(tx: Vector2) {
    this.x = Math.max(0, Math.min(tx.x - W / 2, LW - W));
    this.y = Math.max(0, Math.min(tx.y - H / 2, 0));
  }
  worldToScreen(wx: number, wy: number): Vector2 {
    return { x: wx - this.x, y: wy - this.y };
  }
  dx(): number { return -this.x; }
  dy(): number { return -this.y; }
  canSkip(ox: number, oy: number, ow: number, oh: number, pw: number, ph: number): boolean {
    const sx = ox - this.x, sy = oy - this.y;
    return sx + ow < 0 || sx > pw || sy + oh < 0 || sy > ph;
  }
}
