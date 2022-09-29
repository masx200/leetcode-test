import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";
export default function regionsBySlashes(grid: string[]): number {
    const uf = new UnionFind();
    const n = grid.length;
    for (const [i, s] of grid.entries()) {
        const row = [...s];
        for (const [j, c] of row.entries()) {
            const index = 4 * (i * n + j);
            if (c === "/") {
                uf.union(index, index + 3);
                uf.union(index + 1, index + 2);
            } else if (c === "\\") {
                uf.union(index, index + 1);
                uf.union(index + 2, index + 3);
            } else {
                uf.union(index, index + 1);
                uf.union(index + 2, index + 3);
                uf.union(index + 1, index + 2);
            }
            if (j + 1 < n) {
                uf.union(index + 1, 4 * (i * n + j + 1) + 3);
            }
            if (i + 1 < n) {
                uf.union(index + 2, 4 * ((i + 1) * n + j));
            }
        }
    }
    return [...new Array(n * n * 4).keys()].reduce(
        (p, c) => p + Number(uf.find(c) === c),
        0,
    );
}
