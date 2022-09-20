export default function numberOfPairs(nums: number[]): number[] {
    let count = 0;
    const set = new Set<number>();
    for (const num of nums) {
        if (!set.has(num)) {
            set.add(num);
        } else {
            set.delete(num);
            count++;
        }
    }
    const remain = nums.length - 2 * count;
    const ans = [count, remain];
    return ans;
}
