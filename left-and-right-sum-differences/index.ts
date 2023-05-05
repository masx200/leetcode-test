export default function leftRigthDifference(nums: number[]): number[] {
    const sum = nums.reduce((a, c) => a + c, 0);

    for (let i = 0, ls = 0; i < nums.length; i++) {
        ls += nums[i];
        nums[i] = Math.abs(ls - nums[i] - (sum - ls));
    }

    return nums;
}
