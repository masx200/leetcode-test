import { Heap } from "https://esm.sh/@datastructures-js/heap@4.1.2/src/heap.js";

export default function countPaths(n: number, roads: number[][]): number {
    const mod = 10 ** 9 + 7;
    const map: [number, number][][] = Array(n)
        .fill(0)
        .map(() => []);

    for (const [u, v, t] of roads) {
        map[u].push([v, t]);
        map[v].push([u, t]);
    }
    const dis: number[] = new Array(n).fill(Infinity);
    dis[0] = 0;
    const count: number[] = new Array(n).fill(0);
    count[0] = 1;
    const seen: boolean[] = new Array(n).fill(false);
    const pq = new Heap<[number, number]>((a, b) => a[1] - b[1]);
    pq.insert([0, 0]);
    while (pq.size()) {
        const now = pq.pop()[0];
        if (seen[now]) continue;
        seen[now] = true;

        for (const [end, time] of map[now]) {
            if (dis[now] + time < dis[end]) {
                dis[end] = dis[now] + time;

                count[end] = count[now];
                pq.push([end, dis[end]]);
            } else if (dis[now] + time === dis[end]) {
                count[end] = (count[end] + count[now]) % mod;
            }
        }
    }
    return count[n - 1];
}
