export default function specialArray(nums: number[]): number {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    if (nums[0] >= n) return n;
    for (let i = 1; i < n; i++) {
        if (nums[n - i] >= i && nums[n - 1 - i] < i) return i;
    }
    return -1;
}
