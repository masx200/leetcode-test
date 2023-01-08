const compare = (a: number, b: number): number => a - b;
export default function totalCost(
    costs: number[],
    k: number,
    candidates: number
): number {
    const n = costs.length;
    let ans = 0;
    if (candidates * 2 < n) {
        const pre = BinaryHeap.from(costs.slice(0, candidates), { compare });
        const suf = BinaryHeap.from(costs.slice(-candidates), { compare });

        for (let i = candidates, j = n - 1 - candidates; k > 0 && i <= j; k--) {
            if ((pre.peek() ?? 0) <= (suf.peek() ?? 0)) {
                ans += pre.peek() ?? 0;
                pre.pop();
                pre.push(costs[i]);
                i++;
            } else {
                ans += suf.peek() ?? 0;
                suf.pop();
                suf.push(costs[j]);
                j--;
            }
        }

        costs = [...pre.drain(), ...suf.drain()];
    }

    costs.sort(compare);
    return ans + costs.slice(0, k).reduce((p, c) => p + c, 0);
}
import { BinaryHeap } from "https://deno.land/std@0.171.0/collections/binary_heap.ts";
