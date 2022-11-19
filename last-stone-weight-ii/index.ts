function lastStoneWeightII(stones: number[]): number {
    const sum: number = stones.reduce((a: number, b: number): number => a + b);
    const target: number = Math.floor(sum / 2);
    const n: number = stones.length;
    // dp[j]表示容量（总数和）为j的背包所能装下的数（下标[0, i]之间任意取）的总和（<= 容量）的最大值
    const dp: number[] = new Array(target + 1).fill(0);
    for (let i: number = 0; i < n; i++) {
        for (let j: number = target; j >= stones[i]; j--) {
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
        }
    }
    return sum - dp[target] - dp[target];
}
export default lastStoneWeightII;
