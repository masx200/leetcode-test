export default function calculateMinimumHP(dungeon: number[][]): number {
    const m = dungeon.length;
    const n = dungeon[0].length;

    const dp: number[][] = Array(m + 1).fill(0).map(() =>
        Array(n + 1).fill(Infinity)
    );

    dp[m][n - 1] = dp[m - 1][n] = 1;
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            dp[i][j] = Math.max(
                1,
                Math.min(dp[i][j + 1], dp[i + 1][j]) - dungeon[i][j],
            );
        }
    }
    return dp[0][0];
}
