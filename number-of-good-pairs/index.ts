export default function numIdenticalPairs(nums: number[]): number {
    const cnt = new Map<number, number>();
    for (const num of nums) {
        cnt.set(num, (cnt.get(num) ?? 0) + 1);
    }
    const ans = Array.from(cnt.values()).reduce(
        (a, v) => a + Math.floor((v * (v - 1)) / 2),
        0
    );
    return ans;
}
