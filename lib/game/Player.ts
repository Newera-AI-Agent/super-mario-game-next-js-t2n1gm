import { Rect, Direction } from "./types";
import { GRAVITY, JUMP_FORCE, PLAYER_SPEED, TILE_SIZE } from "./constants";

export class Player {
  x: number;
  y: number;
  width: number;
  height: number;
  vx: number = 0;
  vy: number = 0;
  direction: Direction = "right";
  onGround: boolean = false;
  animFrame: number = 0;
  animTimer: number = 0;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.width = TILE_SIZE * 0.8;
    this.height = TILE_SIZE;
  }

  update(dt: number, left: boolean, right: boolean, jump: boolean, tiles: number[][]) {
    this.vx = 0;
    if (left) { this.vx = -PLAYER_SPEED; this.direction = "left"; }
    if (right) { this.vx = PLAYER_SPEED; this.direction = "right"; }
    if (jump && this.onGround) { this.vy = JUMP_FORCE; this.onGround = false; }
    this.vy += GRAVITY * dt;
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.animTimer += dt;
    if (this.animTimer > 0.1) { this.animFrame = (this.animFrame + 1) % 2; this.animTimer = 0; }
  }

  getRect(): Rect { return { x: this.x, y: this.y, width: this.width, height: this.height }; }
}
