function minStartValue(nums: number[]): number {
    let presum = 0;
    let ans = 1;
    for (const num of nums) {
        presum += num;
        ans = Math.max(ans, 1 - presum);
    }
    return ans;
}
export default minStartValue;
