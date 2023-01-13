export default function reachableNodes(
    edges: number[][],
    maxMoves: number,
    n: number,
): number {
    const adList: [number, number][][] = Array(n)
        .fill(0)
        .map(() => []);

    for (const [u, v, c] of edges) {
        adList[u].push([v, c]);
        adList[v].push([u, c]);
    }

    const used = new Map<string, number>();
    const visited: boolean[] = Array(n).fill(false);
    let reachableNodes = 0;

    const pq = new BinaryHeap<[number, number]>((a, b) => a[0] - b[0]);
    pq.push([0, 0]);

    while (!pq.isEmpty() && (pq.peek() as [number, number])[0] <= maxMoves) {
        const [step, u] = pq.pop() as [number, number];
        if (visited[u]) {
            continue;
        }
        visited[u] = true;
        reachableNodes++;

        for (const [v, c] of adList[u]) {
            if (c + step + 1 <= maxMoves && !visited[v]) {
                pq.push([c + step + 1, v]);
            }
            used.set(JSON.stringify([u, v]), Math.min(c, maxMoves - step));
        }
    }

    for (const [u, v, c] of edges) {
        reachableNodes += Math.min(
            c,
            (used.get(JSON.stringify([u, v])) ?? 0) +
                (used.get(JSON.stringify([v, u])) ?? 0),
        );
    }
    return reachableNodes;
}
import { BinaryHeap } from "https://deno.land/std@0.172.0/collections/binary_heap.ts";
