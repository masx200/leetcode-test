import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";
function findRedundantConnection(edges: number[][]): number[] {
    const uf = new UnionFind();
    const n = edges.length;

    for (let i = 0; i < n; i++) {
        const edge = edges[i];
        const node1 = edge[0],
            node2 = edge[1];
        if (uf.find(node1) != uf.find(node2)) {
            uf.union(node1, node2);
        } else {
            return edge;
        }
    }
    return [0];
}

export default findRedundantConnection;
