export default function maxSubArray(nums: number[]): number {
    let max = nums[0];
    const dp = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        max = Math.max(max, dp[i]);
    }
    // const dp=nums.map((v,i,a)=>i===0?nums[0]:Math.max(v,v+(dp[i-1]||0)))
    return max;
}
