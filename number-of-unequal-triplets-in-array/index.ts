export default function unequalTriplets(nums: number[]): number {
    nums.sort((a, b) => a - b);

    let ans = 0;
    let start = 0;
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        const x = nums[i];
        if (x != nums[i + 1]) {
            ans += start * (i - start + 1) * (n - 1 - i);
            start = i + 1;
        }
    }
    return ans;
}
