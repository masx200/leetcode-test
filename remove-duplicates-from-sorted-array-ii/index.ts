export default function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    const s = new Map<number, number>();
    nums.forEach((v) => {
        const count = Math.min(2, 1 + (s.get(v) ?? 0));

        s.set(v, count);
    });
    let index = 0;
    for (const [n, c] of s.entries()) {
        for (let i = 0; i < c; i++) {
            nums[index] = n;

            index++;
        }
    }
    const length = index;
    return length;
}
