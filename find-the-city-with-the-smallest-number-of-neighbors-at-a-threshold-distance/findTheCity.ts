import { BinaryHeap } from "https://deno.land/std@0.173.0/collections/binary_heap.ts";

export default function findTheCity(
    n: number,
    edges: number[][],
    distanceThreshold: number,
): number {
    const dc: [number, number][][] = new Array(n).fill(0).map(() => []);
    const has: number[][] = Array(n)
        .fill(0)
        .map(() => Array(n).fill(distanceThreshold + 1));
    const heap = new BinaryHeap<[number, number, number]>(
        (a, b) => a[0] - b[0],
    );

    for (const [from, to, weight] of edges) {
        if (weight <= distanceThreshold) {
            dc[from].push([to, weight]);
            dc[to].push([from, weight]);
            heap.push([weight, from, to]);
            has[from][to] = has[to][from] = weight;
        }
    }
    for (let i = 0; i < n; i++) has[i][i] = 0;

    while (!heap.isEmpty()) {
        const [x, a, b] = heap.pop() as [number, number, number];

        loop(b, x, a);
        loop(a, x, b);
    }
    let minx = -1,
        mnum = n + 1;

    for (let x = n - 1; x >= 0; x--) {
        const tep = has[x].filter((i) => i <= distanceThreshold).length;
        if (tep < mnum) {
            minx = x;
            mnum = tep;
        }
    }
    return minx;

    function loop(b: number, x: number, a: number) {
        for (const [i, j] of dc[b]) {
            const r = j + x;
            if (r < has[i][a]) {
                heap.push([r, i, a]);
                has[i][a] = has[a][i] = r;
            }
        }
    }
}
