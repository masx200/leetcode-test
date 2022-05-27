export default function subsets(nums: number[]): number[][] {
    const ans = [];

    for (let i = 0; i < 2 ** nums.length; i++) {
        const temp = [];
        for (
            const [j, v] of Array.prototype.entries.call(
                Array.from(i.toString(2)).reverse(),
            )
        ) {
            if (v === "1") {
                temp.push(nums[j]);
            }
        }
        ans.push(temp);
    }
    return ans;
}
