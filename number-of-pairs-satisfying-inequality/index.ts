import { BinaryIndexTree } from "../rank-from-stream-lcci/BinaryIndexTree.ts";
export default function numberOfPairs(
    nums1: number[],
    nums2: number[],
    diff: number
): number {
    for (const [i, x] of nums2.entries()) {
        nums1[i] -= x;
    }
    const b = Array.from(nums1).sort((a, b) => a - b);
    let ans = 0;
    const t = new BinaryIndexTree(nums1.length);
    for (const x of nums1) {
        ans += t.query(lowerBound(b, x + diff + 1));
        t.update(lowerBound(b, x) + 1, +1);
    }
    return ans;
}
export function lowerBound(a: number[], x: number) {
    let left = 0,
        right = a.length;
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (a[mid] < x) left = mid + 1;
        else right = mid;
    }
    return left;
}
