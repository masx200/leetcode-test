export default function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let current = nums[0];
    let count = 1;
    const should_delete: number[] = [];
    for (const [i, n] of nums.entries()) {
        if (i === 0) continue;
        if (n === current) {
            should_delete.push(i);
        } else {
            current = n;
            count++;
        }
    }
    should_delete.forEach((i) => (nums[i] = Infinity));
    const temp = nums.filter((a) => a < Infinity);
    temp.forEach((v, i) => (nums[i] = v));
    return count;
}
