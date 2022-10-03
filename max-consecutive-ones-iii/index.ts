export default function longestOnes(nums: number[], k: number): number {
    const n = nums.length;
    let left = 0,
        lsum = 0,
        rsum = 0;
    let ans = 0;
    for (let right = 0; right < n; ++right) {
        rsum += 1 - nums[right];
        while (lsum < rsum - k) {
            lsum += 1 - nums[left];
            ++left;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
}
