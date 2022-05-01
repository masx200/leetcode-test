// const uniqBy=_.uniqBy
export default function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const ans = [];
    const set = new Set<string>();
    const n = nums.length;
    for (let mask = 0; mask < 2 ** n; ++mask) {
        const t = [];
        for (let i = 0; i < n; ++i) {
            if (mask & (2 ** i)) {
                t.push(nums[i]);
            }
        }

        const str = t.join(",");
        if (set.has(str)) {
            continue;
        } else {
            ans.push(t);
            set.add(str);
        }
    }
    return ans;
}
