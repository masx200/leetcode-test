export default function maxSubArray(nums: number[]): number {
    let max = nums[0];
    const dp = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        dp[1] = Math.max(dp[0] + nums[i], nums[i]);
        max = Math.max(max, dp[1]);

        dp[0] = dp[1];
    }

    return max;
}
