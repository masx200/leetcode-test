import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";

export default countComponents;
function countComponents(n: number, edges: number[][]) {
    const uf = new UnionFind();
    for (const [a, b] of edges) {
        uf.union(a, b);
    }
    return [...Array(n).keys()].filter((a) => uf.find(a) === a).length;
}
