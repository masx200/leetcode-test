export default function findMaxK(nums: number[]): number {
    const set = new Set(nums);
    let ans = -1;
    for (const v of nums) {
        if (set.has(-v)) {
            ans = Math.max(ans, Math.abs(v));
        }
    }

    return ans;
}
