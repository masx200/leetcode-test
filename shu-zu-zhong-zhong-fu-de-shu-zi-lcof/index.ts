export default function findRepeatNumber(nums: number[]): number {
    const cache = new Set<number>();
    for (const n of nums) {
        if (cache.has(n)) {
            return n;
        } else {
            cache.add(n);
        }
    }
    return nums[0];
}
