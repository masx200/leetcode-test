import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";
function numberOfGoodPaths(vals: number[], edges: number[][]): number {
    const n = vals.length;
    const cnt = new Map<number, number[]>();

    for (const [i, v] of vals.entries()) {
        const arr = cnt.get(v) ?? [];
        arr.push(i);
        cnt.set(v, arr);
    }
    edges.sort((a, b) =>
        Math.max(vals[a[0]], vals[a[1]]) - Math.max(vals[b[0]], vals[b[1]])
    );
    const uf = new UnionFind();
    let ans = n;
    let j = 0;

    for (const [val, vec] of [...cnt.entries()].sort((a, b) => a[0] - b[0])) {
        while (
            j < edges.length && vals[edges[j][0]] <= val &&
            vals[edges[j][1]] <= val
        ) {
            uf.union(edges[j][0], edges[j][1]);
            j++;
        }

        const count = new Map<number, number>();

        for (const v of vec) {
            const key = uf.find(v);
            count.set(key, (count.get(key) ?? 0) + 1);
        }

        ans += [...count.values()].reduce(
            (p, c) => p + Math.floor(c * (c - 1) / 2),
            0,
        );
    }
    return ans;
}
export default numberOfGoodPaths;
