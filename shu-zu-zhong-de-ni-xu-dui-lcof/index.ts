import { le as lowerBound } from "https://esm.sh/@masx200/binary-search-bounds@undefined/";

import { BinaryIndexTree } from "../rank-from-stream-lcci/BinaryIndexTree.ts";

export default function reversePairs(nums: number[]): number {
    const n = nums.length;
    const tmp = Array.from(nums);
    tmp.sort((a, b) => a - b);
    for (let i = 0; i < n; ++i) {
        nums[i] = lowerBound(tmp, nums[i]) + 1;
    }
    const bit = new BinaryIndexTree(n);
    let ans = 0;
    for (let i = n - 1; i >= 0; i--) {
        ans += bit.query(nums[i] - 1);
        bit.update(nums[i], 1);
    }
    return ans;
}
