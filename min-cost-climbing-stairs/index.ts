function minCostClimbingStairs(cost: number[]): number {
    const dp: number[] = Array(cost.length + 2).fill(0);
    for (const [i, c] of [0, ...cost, 0].entries()) {
        dp[i] = i <= 2 ? c : Math.min(dp[i - 2], dp[i - 1]) + c;
    }
    //@ts-ignore
    return dp.at(-1);
}
export default minCostClimbingStairs;
