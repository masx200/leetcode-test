function combinationSum4(nums: number[], target: number): number {
    // dp[j]是target为j的排列数
    // 可由,有i和无i推导出来
    // 有i,dp[j]+
    // 无i,dp[j-nums[i]]
    const dp: number[] = new Array(target + 1).fill(0);
    dp[0] = 1;
    for (let i = 0; i <= target; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i - nums[j] >= 0) dp[i] += dp[i - nums[j]];
        }
    }
    return dp[target];
}
export default combinationSum4;
