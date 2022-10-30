import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";

export default function hasValidPath(grid: number[][]): boolean {
    const uf = new UnionFind();
    const row = grid.length, col = grid[0].length;
    const m = row, n = col;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] == 1 || grid[i][j] == 4 || grid[i][j] == 6) {
                if (
                    j + 1 < col &&
                    (grid[i][j + 1] == 1 || grid[i][j + 1] == 3 ||
                        grid[i][j + 1] == 5)
                ) {
                    uf.union(i * col + j, i * col + j + 1);
                }
            }
            if (grid[i][j] == 2 || grid[i][j] == 3 || grid[i][j] == 4) {
                if (
                    i + 1 < row &&
                    (grid[i + 1][j] == 2 || grid[i + 1][j] == 5 ||
                        grid[i + 1][j] == 6)
                ) {
                    uf.union(i * col + j, (i + 1) * col + j);
                }
            }
        }
    }
    return uf.connected(0 * col + 0, (m - 1) * col + n - 1);
}
