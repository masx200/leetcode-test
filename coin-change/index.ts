export default function coinChange(coins: number[], amount: number): number {
    if (amount === 0) return 0;
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const c of coins) {
            if (i - c >= 0) {
                dp[i] = Math.min(dp[i], dp[i - c] + 1);
            }
        }
    }
    return Number.isFinite(dp[amount]) ? dp[amount] : -1;
}
