import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";
export default function possibleBipartition(
    n: number,
    dislikes: number[][],
): boolean {
    const uf = new UnionFind();

    const e = Array<Array<number>>(n + 1);

    for (const [a, b] of dislikes) {
        e[a] ??= [];
        e[b] ??= [];
        e[a].push(b);
        e[b].push(a);
    }

    for (const i of Object.keys(e)) {
        for (const d of e[Number(i)]) {
            uf.union(d, e[Number(i)][0]);
            if (uf.connected(d, Number(i))) return false;
        }
    }

    return true;
}
