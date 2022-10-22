export default function partitionDisjoint(nums: number[]): number {
    const n = nums.length;
    let leftMax = nums[0],
        leftPos = 0,
        curMax = nums[0];
    for (let i = 1; i < n - 1; i++) {
        curMax = Math.max(curMax, nums[i]);
        if (nums[i] < leftMax) {
            leftMax = curMax;
            leftPos = i;
        }
    }
    return leftPos + 1;
}
