export default function rob(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    const dp = [0, 0];

    for (const num of nums) {
        dp.push(Math.max(num + dp[0], dp[1]));
        dp.shift();
    }

    return dp[1];
}
