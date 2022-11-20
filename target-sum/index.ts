function findTargetSumWays(nums: number[], target: number): number {
    // 把数组分成两个组合left, right.left + right = sum, left - right = target.
    const sum: number = nums.reduce((a: number, b: number): number => a + b);
    if ((sum + target) % 2 || Math.abs(target) > sum) return 0;
    const left: number = (sum + target) / 2;

    // 将问题转化为装满容量为left的背包有多少种方法
    // dp[i]表示装满容量为i的背包有多少种方法
    const dp: number[] = new Array(left + 1).fill(0);
    dp[0] = 1; // 装满容量为0的背包有1种方法（什么也不装）
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = left; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]];
        }
    }
    return dp[left];
}
export default findTargetSumWays;
