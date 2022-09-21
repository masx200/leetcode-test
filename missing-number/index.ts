export default function missingNumber(nums: number[]): number {
    const n: number = nums.length;
    let total: number = Math.floor(n * (n + 1) / 2);

    for (let i = 0; i < n; i++) {
        total -= nums[i];
    }
    return total;
}
