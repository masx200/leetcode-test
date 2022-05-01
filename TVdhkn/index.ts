export default function subsets(nums: number[]): number[][] {
    const ans = [];
    const n = nums.length;
    for (let mask = 0; mask < 2 ** n; ++mask) {
        const t = [];
        for (let i = 0; i < n; ++i) {
            if (mask & (2 ** i)) {
                t.push(nums[i]);
            }
        }
        ans.push(t);
    }
    return ans;
}
