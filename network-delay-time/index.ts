import { Heap } from "npm:@datastructures-js/heap@4.3.1";

export default function networkDelayTime(
    times: number[][],
    n: number,
    k: number,
): number {
    const pq = new Heap<[number, number]>((a, b) => a[1] - b[1]);
    const edge = new Map<number, [number, number][]>();

    for (const [u, v, w] of times) {
        const arr = edge.get(u) ?? [];
        arr.push([v, w]);
        edge.set(u, arr);
    }
    const dist = new Map<number, number>();

    pq.insert([k, 0]);
    while (!pq.isEmpty()) {
        const [c, d] = pq.pop();
        if (dist.has(c)) continue;
        dist.set(c, d);
        if (dist.size === n) break;
        for (const [v, w] of edge.get(c) ?? []) {
            pq.insert([v, w + d]);
        }
    }
    return dist.size === n ? Math.max(...dist.values()) : -1;
}
