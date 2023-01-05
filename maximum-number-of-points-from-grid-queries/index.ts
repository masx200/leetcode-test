import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";

const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];
function maxPoints(grid: number[][], queries: number[]): number[] {
    const m = grid.length,
        n = grid[0].length,
        mn = m * n;

    const uf = new UnionFind();

    const a: number[][] = new Array(mn).fill(0).map(() => Array(3).fill(0));
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) a[i * n + j] = [grid[i][j], i, j];
    }

    a.sort((a, b) => a[0] - b[0]);

    const k = queries.length;

    const id = [...queries.keys()];

    id.sort((a, b) => queries[a] - queries[b]);

    const ans = Array<number>(k).fill(0);
    let j = 0;

    for (const i of id) {
        const q = queries[i];
        for (; j < mn && a[j][0] < q; ++j) {
            const x = a[j][1],
                y = a[j][2];
            // 枚举周围四个格子，值小于 q 才可以合并
            for (const d of dirs) {
                const x2 = x + d[0],
                    y2 = y + d[1];
                if (
                    0 <= x2 &&
                    x2 < m &&
                    0 <= y2 &&
                    y2 < n &&
                    grid[x2][y2] < q
                ) {
                    uf.union(x * n + y, x2 * n + y2); // 把坐标压缩成一维的编号
                }
            }
        }
        if (grid[0][0] < q) ans[i] = uf.size(0);
    }
    return ans;
}
export default maxPoints;
