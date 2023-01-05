export default function orderOfLargestPlusSign(
    n: number,
    mines: number[][]
): number {
    const dp: number[][] = Array(n)
        .fill(0)
        .map(() => Array(n).fill(n));

    for (const [x, y] of mines) {
        dp[x][y] = 0;
    }

    for (let i = 0; i < n; i++) {
        let l = 0,
            r = 0,
            u = 0,
            d = 0;
        for (let j = 0; j < n; j++) {
            const k = n - 1 - j;

            l = dp[i][j] ? l + 1 : 0;
            dp[i][j] = Math.min(dp[i][j], l);
            u = dp[j][i] ? u + 1 : 0;
            dp[j][i] = Math.min(dp[j][i], u);
            r = dp[i][k] ? r + 1 : 0;
            dp[i][k] = Math.min(dp[i][k], r);
            d = dp[k][i] ? d + 1 : 0;
            dp[k][i] = Math.min(dp[k][i], d);
        }
    }

    return Math.max(...dp.map((a) => Math.max(...a)));
}
