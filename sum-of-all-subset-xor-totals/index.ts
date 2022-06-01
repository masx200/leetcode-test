export default function subsetXORSum(nums: number[]): number {
    return nums.reduce((a, v) => a | v, 0) * Math.pow(2, nums.length - 1);
}
