export default function totalSteps(nums: number[]): number {
    let ans = 0;

    const n = nums.length;
    //单调递减栈
    const stk = Array<[number, number]>();
    stk.push([nums[n - 1], 0]);
    //从后往前遍历
    for (let i = n - 2; i >= 0; i--) {
        let count = 0;
        while (stk.length && nums[i] > stk[stk.length - 1][0]) {
            //count取最大值
            count = Math.max(count + 1, stk[stk.length - 1][1]);
            stk.pop();
        }
        //count取最大值
        ans = Math.max(ans, count);
        stk.push([nums[i], count]);
    }
    return ans;
}
