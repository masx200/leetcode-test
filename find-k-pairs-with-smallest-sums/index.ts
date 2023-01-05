function kSmallestPairs(
    nums1: number[],
    nums2: number[],
    k: number
): number[][] {
    const res: number[][] = [];
    const m = nums1.length,
        n = nums2.length;
    const pq = new Heap<[number, number]>(
        (a, b) => nums1[a[0]] + nums2[a[1]] - nums1[b[0]] - nums2[b[1]]
    );
    for (const i of Array(Math.min(k, m)).keys()) {
        pq.push([i, 0]);
    }
    while (k-- && !pq.isEmpty()) {
        const top = pq.pop();

        res.push([nums1[top[0]], nums2[top[1]]]);

        if (top[1] + 1 < n) {
            pq.push([top[0], top[1] + 1]);
        }
    }
    return res;
}
export default kSmallestPairs;

import { Heap } from "npm:@datastructures-js/heap@4.2.2";
