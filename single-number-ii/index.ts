export default function singleNumber(nums: number[]): number {
    const once = new Set<number>();
    const twice = new Set<number>();
    for (const n of nums) {
        if (once.has(n)) {
            twice.add(n);
        } else {
            once.add(n);
        }
    }
    twice.forEach((n) => once.delete(n));
    return [...once.keys()][0];
}
