import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";
export default function hasValidPath(grid: number[][]): boolean {
    const uf = new UnionFind<string>();
    const row = grid.length, col = grid[0].length;
    const m = row, n = col;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == 1 || grid[i][j] == 4 || grid[i][j] == 6) {
                if (
                    j + 1 < col &&
                    (grid[i][j + 1] == 1 || grid[i][j + 1] == 3 ||
                        grid[i][j + 1] == 5)
                ) uf.union(JSON.stringify([i, j]), JSON.stringify([i, j + 1]));
            }
            if (grid[i][j] == 2 || grid[i][j] == 3 || grid[i][j] == 4) {
                if (
                    i + 1 < row &&
                    (grid[i + 1][j] == 2 || grid[i + 1][j] == 5 ||
                        grid[i + 1][j] == 6)
                ) uf.union(JSON.stringify([i, j]), JSON.stringify([i + 1, j]));
            }
        }
    }
    return uf.connected(JSON.stringify([0, 0]), JSON.stringify([m - 1, n - 1]));
}
