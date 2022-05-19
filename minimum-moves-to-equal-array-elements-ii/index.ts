export default function minMoves2(nums: number[]): number {
    nums.sort((a, b) => a - b);
    const n = nums.length;

    const x = nums[Math.floor(n / 2)];

    return nums.map((a) => Math.abs(a - x)).reduce((a, v) => a + v, 0);
}
