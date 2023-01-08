import { sum } from "../richest-customer-wealth/sum.ts";

function minOperations(nums: number[], x: number): number {
    const n = nums.length;
    const sumn = sum(nums);

    if (sumn < x) {
        return -1;
    }

    let right = 0;
    let lsum = 0,
        rsum = sumn;
    let ans = n + 1;

    for (let left = -1; left < n; ++left) {
        if (left != -1) {
            lsum += nums[left];
        }
        while (right < n && lsum + rsum > x) {
            rsum -= nums[right];
            ++right;
        }
        if (lsum + rsum === x) {
            ans = Math.min(ans, left + 1 + (n - right));
        }
    }

    return ans > n ? -1 : ans;
}
export default minOperations;
