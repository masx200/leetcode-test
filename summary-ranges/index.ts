function summaryRanges(nums: number[]): string[] {
    const ans = Array<string>();
    let last = nums[0];
    let start = nums[0];
    for (const i of nums.keys()) {
        const num = nums[i + 1];
        if (num != last + 1) {
            if (last === start) {
                ans.push(String(last));
            } else {
                ans.push([start, last].join("->"));
            }
            start = num;
        }
        last = num;
    }
    return ans;
}
export default summaryRanges;
