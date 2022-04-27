export default function topKFrequent(nums: number[], k: number): number[] {
    const storage = new Map<number, number>();
    for (const num of nums) {
        storage.set(num, 1 + (storage.get(num) ?? 0));
    }
    return [...storage.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map((a) => a[0]);
}
