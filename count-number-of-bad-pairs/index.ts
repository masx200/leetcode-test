function countBadPairs(nums: number[]): number {
    const n = nums.length;
    const cnt = new Map<number, number>();
    for (const [i, num] of nums.entries()) {
        cnt.set(num - i, (cnt.get(num - i) ?? 0) + 1);
    }
    const ans = Array.from(cnt.values()).reduce(
        (a, v) => a + Math.floor((v * (v - 1)) / 2),
        0,
    );
    return Math.floor((n * (n - 1)) / 2) - ans;
}
export default countBadPairs;
