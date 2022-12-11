export default busiestServers;
import { AvlTree, Heap } from "../deps.ts";

function busiestServers(
    k: number,
    arrival: number[],
    load: number[],
): number[] {
    const cnts = new Map<number, number>();
    const pq = new Heap<[number, number]>((a, b) => a[0] - b[0]);
    const free = new AvlTree<number>((a, b) => a - b);
    for (const i of Array(k).keys()) {
        free.insert(i);
    }
    let max = 0;
    for (const [i, a] of arrival.entries()) {
        const l = load[i];
        while (!pq.isEmpty() && pq.root()[0] <= a) {
            free.insert(pq.pop()[1]);
        }
        if (free.count() === 0) continue;
        const hope = i % k;

        const next = free.ceil(hope)?.getValue() ?? free.min()?.getValue() ?? 0;

        const value = (cnts.get(next) ?? 0) + 1;
        cnts.set(next, value);
        max = Math.max(value, max);

        free.remove(next);
        pq.insert([a + l, next]);
    }
    return Array.from(cnts.entries())
        .filter((a) => a[1] === max)
        .map((a) => a[0]);
}
