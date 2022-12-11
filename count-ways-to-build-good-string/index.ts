function countGoodStrings(
    low: number,
    high: number,
    zero: number,
    one: number
): number {
    const dp: number[] = Array(high + 1).fill(0);
    dp[0] = 1;
    const mod = 1e9 + 7;
    let ans = 0;
    for (let i = 0; i <= high; i++) {
        if (i >= zero) dp[i] += dp[i - zero];
        if (i >= one) dp[i] += dp[i - one];
        dp[i] %= mod;
        if (i >= low) ans = (ans + dp[i]) % mod;
    }
    return ans;
}
export default countGoodStrings;
