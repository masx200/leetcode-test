export default function minSubsequence(nums: number[]): number[] {
    if (nums.length <= 1) return nums;
    const sum = nums.reduce((a, v) => a + v);
    nums.sort((a, b) => b - a);

    let cur = 0;
    for (const [index, num] of nums.entries()) {
        cur += num;
        if (cur > sum - cur) {
            return nums.slice(0, index + 1);
        }
    }
    return nums;
}
