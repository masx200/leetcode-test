function numDistinct(s: string, t: string): number {
    const m = t.length;
    const n = s.length;

    let res = 0;

    if (n < m) return res;

    if (m === n) return s === t ? 1 : 0;

    const dp: number[][] = [];

    for (let i = 0; i <= m; i++) {
        dp[i] = [0];
    }

    for (let j = 0; j <= n; j++) {
        dp[0][j] = 1;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] =
                s[j - 1] === t[i - 1]
                    ? dp[i - 1][j - 1] + dp[i][j - 1]
                    : dp[i][j - 1];
        }
    }

    return dp[m][n] || 0;
}
export default numDistinct;
