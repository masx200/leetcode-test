import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";
function minimumEffortPath(heights: number[][]): number {
    const edges: [number, number, number][] = [];
    const N = heights.length;
    const M = heights[0].length;
    if (N == 1 && M == 1) return 0;
    for (let i = 0; i < N; ++i) {
        for (let j = 0; j < M; ++j) {
            if (j + 1 < M) {
                edges.push([
                    Math.abs(heights[i][j] - heights[i][j + 1]),
                    i * M + j,
                    i * M + j + 1,
                ]);
            }
            if (i + 1 < N) {
                edges.push([
                    Math.abs(heights[i][j] - heights[i + 1][j]),
                    i * M + j,
                    (i + 1) * M + j,
                ]);
            }
        }
    }
    edges.sort((a, b) => a[0] - b[0]);
    const dsu = new UnionFind();
    let i = 0;
    while (dsu.find(0) != dsu.find(N * M - 1)) {
        dsu.union(edges[i][1], edges[i][2]);
        i++;
    }
    return edges[i - 1][0];
}
export default minimumEffortPath;
