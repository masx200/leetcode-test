import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";

export default hitBricks;
function hitBricks(grid: number[][], hits: number[][]): number[] {
    const h = grid.length;
    const w = grid[0].length;

    const uf = new UnionFind();
    const status: number[][] = grid.map((v) => v.slice());
    for (let i = 0; i < hits.length; i++) {
        status[hits[i][0]][hits[i][1]] = 0;
    }
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (status[i][j] === 1) {
                if (i === 0) {
                    uf.union(h * w, i * w + j);
                }
                if (i > 0 && status[i - 1][j] === 1) {
                    uf.union(i * w + j, (i - 1) * w + j);
                }
                if (j > 0 && status[i][j - 1] === 1) {
                    uf.union(i * w + j, i * w + j - 1);
                }
            }
        }
    }

    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    const ret: number[] = new Array(hits.length).fill(0);
    for (let i = hits.length - 1; i >= 0; i--) {
        const r = hits[i][0],
            c = hits[i][1];
        if (grid[r][c] === 0) {
            continue;
        }
        const prev = uf.size(h * w);

        if (r === 0) {
            uf.union(c, h * w);
        }
        for (const [dr, dc] of directions) {
            const nr = r + dr,
                nc = c + dc;

            if (nr >= 0 && nr < h && nc >= 0 && nc < w) {
                if (status[nr][nc] === 1) {
                    uf.union(r * w + c, nr * w + nc);
                }
            }
        }
        const size = uf.size(h * w);
        ret[i] = Math.max(0, size - prev - 1);
        status[r][c] = 1;
    }
    return ret;
}
