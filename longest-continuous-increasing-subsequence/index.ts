function findLengthOfLCIS(nums: number[]): number {
    let ans = 0;
    const n = nums.length;
    let start = 0;
    for (let i = 0; i < n; i++) {
        if (i > 0 && nums[i] <= nums[i - 1]) {
            start = i;
        }
        ans = Math.max(ans, i - start + 1);
    }
    return ans;
}
export default findLengthOfLCIS;
