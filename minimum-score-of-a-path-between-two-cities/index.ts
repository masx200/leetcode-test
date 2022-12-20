import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";

function minScore(_n: number, roads: number[][]): number {
    const uf = new UnionFind();

    for (const [a, b] of roads) {
        uf.union(a, b);
    }
    let ans = Infinity;

    for (const [i, _, d] of roads) {
        if (uf.connected(1, i)) {
            ans = Math.min(ans, d);
        }
    }
    return ans;
}
export default minScore;
