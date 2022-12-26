export default mincostToHireWorkers;
function mincostToHireWorkers(
    quality: number[],
    wage: number[],
    k: number,
): number {
    const pairs = quality
        .map((q, i) => [q, wage[i]])
        .sort((a, b) => a[1] / a[0] - b[1] / b[0]);
    let ans = Infinity;
    let totalq = 0;
    const h = new PriorityQueue<number>((a, b) => a - b);

    for (const [i, [q, w]] of pairs.entries()) {
        totalq += q;
        h.enqueue(-q);
        if (i >= k - 1) {
            ans = Math.min(ans, (w / q) * totalq);
            totalq += h.dequeue();
        }
    }
    return ans;
}

import { PriorityQueue } from "https://esm.sh/@datastructures-js/priority-queue@6.1.4/";
