export default function countKDifference(nums: number[], k: number): number {
    const map = new Map<number, number>();
    return nums.reduce((a, v) => {
        const r = a + (map.get(v + k) ?? 0) + (map.get(v - k) ?? 0);
        map.set(v, 1 + (map.get(v) ?? 0));
        return r;
    }, 0);
}
