export default function distinctAverages(nums: number[]): number {
    nums.sort((a, b) => a - b);
    return new Set<number>(nums.map((v, i, a) => v + a[a.length - i - 1])).size;
}
