export default function findCenter(edges: number[][]): number {
    // const n = edges.length;

    // const degrees: Map<number, number> = new Map();

    // for (const [u, v] of edges) {
    //     degrees.set(u, 1 + (degrees.get(u) ?? 0));
    //     degrees.set(v, 1 + (degrees.get(v) ?? 0));
    // }

    // for (const [node, count] of degrees.entries()) {
    //     if (count === n - 1) return node;
    // }
    // return -1;
    if (edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]) {
        return edges[0][0];
    }
    return edges[0][1];
}
