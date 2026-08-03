export interface Vector2 {
  x: number;
  y: number;
}

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type Direction = "left" | "right";

export type GameState = "menu" | "playing" | "paused" | "dead" | "win";
