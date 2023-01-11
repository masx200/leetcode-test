function findRedundantDirectedConnection(edges: number[][]): number[] {
    const uf = new UnionFind();
    const parent = [...new Array(edges.length + 1).keys()];
    let confictEdge: number[] | undefined = undefined,
        circleEdge: number[] | undefined = undefined;

    for (const edge of edges) {
        if (parent[edge[1]] !== edge[1]) {
            confictEdge = edge;
        } else {
            parent[edge[1]] = edge[0];
            if (uf.find(edge[0]) !== uf.find(edge[1])) {
                uf.union(edge[0], edge[1]);
            } else {
                circleEdge = edge;
            }
        }
    }

    return confictEdge
        ? circleEdge
            ? [parent[confictEdge[1]], confictEdge[1]]
            : confictEdge
        : circleEdge ?? [];
}

export default findRedundantDirectedConnection;

import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";
