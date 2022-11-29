export default function thirdMax(nums: number[]): number {
    nums = [...new Set(nums)].sort((a, b) => -a + b);
    return nums[2] ?? nums[0];
}
