import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";

export default function validPath(
    n: number,
    edges: number[][],
    source: number,
    destination: number,
): boolean {
    if (source === destination) return true;
    if (edges.length === 0) return false;
    const nodes = new Set(Array(n).keys());
    if (!nodes.has(destination) || !nodes.has(source)) return false;
    const uf = new UnionFind();

    for (const [a, b] of edges) {
        uf.union(a, b);
    }
    return uf.find(destination) === uf.find(source);
}
