export default function subsets(nums: number[]): number[][] {
    const ans: number[][] = [];

    for (let i = 0; i < 2 ** nums.length; i++) {
        const temp : number[]= [];
        for (
            const [j, v] of (
                Array.from(i.toString(2)).reverse().entries()
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
