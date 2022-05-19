/**
 Do not return anything, modify nums in-place instead.
 */
export default function sortColors(nums: number[]): void {
    const store = Array(3).fill(0);

    for (const v of nums) {
        store[v]++;
    }

    nums.length = 0;

    for (const [k, v] of store.entries()) {
        nums.push(...Array(v).fill(k));
    }
}
