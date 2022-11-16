export default function canPartition(nums: number[]): boolean {
    const sum: number = nums.reduce((pre, cur) => pre + cur);
    if (sum % 2 === 1) return false;
    const bagSize: number = sum / 2;
    const goodsNum: number = nums.length;
    const dp: number[] = new Array(bagSize + 1).fill(0);
    for (let i = 0; i < goodsNum; i++) {
        for (let j = bagSize; j >= nums[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
        }
    }
    return dp[bagSize] === bagSize;
}
