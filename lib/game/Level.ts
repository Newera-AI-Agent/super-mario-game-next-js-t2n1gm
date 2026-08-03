// Tile IDs: 0=air, 1=ground, 2=brick, 3=question_block, 4=pipe_top_left, 5=pipe_top_right, 6=pipe_body_left, 7=pipe_body_right, 8=coin, 9=flag_top, 10=flag_pole
// Level encoded as compact string: each char is one tile, rows separated by newlines
const LEVEL_DATA = `
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`;

// Each B = blank/air. Replace selected cells to build actual level.
// We'll decode at runtime: 'G'=ground, 'B'=blank, 'b'=brick, '?'=question, 'P'=pipe, 'C'=coin, 'F'=flag
// For now, return a procedurally generated level array.

export function generateLevel(): number[][] {
  const COLS = 100;
  const ROWS = 15;
  const tiles: number[][] = [];

  for (let row = 0; row < ROWS; row++) {
    tiles[row] = [];
    for (let col = 0; col < COLS; col++) {
      // Ground: bottom 2 rows
      if (row >= ROWS - 2) {
        tiles[row][col] = 1;
      }
      // Brick platforms
      else if (row === 9 && col >= 20 && col <= 25) tiles[row][col] = 2;
      else if (row === 9 && col >= 30 && col <= 35) tiles[row][col] = 2;
      else if (row === 7 && col >= 45 && col <= 50) tiles[row][col] = 2;
      // Question blocks
      else if (row === 9 && col === 22) tiles[row][col] = 3;
      else if (row === 7 && col === 47) tiles[row][col] = 3;
      // Pipes
      else if (row === 12 && col === 38) tiles[row][col] = 5;
      else if (row === 11 && col === 38) tiles[row][col] = 7;
      else if (row === 12 && col === 55) tiles[row][col] = 5;
      else if (row === 11 && col === 55) tiles[row][col] = 7;
      // Coins (floating)
      else if (row === 6 && col === 32) tiles[row][col] = 8;
      else if (row === 6 && col === 33) tiles[row][col] = 8;
      else if (row === 6 && col === 34) tiles[row][col] = 8;
      // Flag at end
      else if (row === 5 && col === 90) tiles[row][col] = 9;
      else if (row >= 6 && row <= 12 && col === 90) tiles[row][col] = 10;
      else tiles[row][col] = 0;
    }
  }
  return tiles;
}

export const TILE_SIZE = 40;

export function getTile(x: number, y: number, tiles: number[][]): number {
  const col = Math.floor(x / TILE_SIZE);
  const row = Math.floor(y / TILE_SIZE);
  if (row < 0 || row >= tiles.length || col < 0 || col >= tiles[0].length) return 0;
  return tiles[row][col];
}

export function isSolid(tileId: number): boolean {
  return tileId === 1 || tileId === 2 || tileId === 3 || tileId === 4 || tileId === 5 || tileId === 6 || tileId === 7 || tileId === 10;
}
