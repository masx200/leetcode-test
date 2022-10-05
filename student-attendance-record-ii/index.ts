const dp: number[][] = [];
const MOD = 1000000007;
const maxnum = 10 ** 5;
function checkRecord(n: number): number {
    if (dp.length === 0) {
        dp.push(
            ...new Array(maxnum + 1)
                .fill(0)
                .map(() => new Array(6).fill(0)),
        );
        dp.length = maxnum + 1;
        // 长度，A 的数量，结尾连续 L 的数量
        dp[0][0] = 1;
        for (let i = 1; i <= maxnum; i++) {
            // 以 P 结尾的数量
            for (let j = 0; j <= 1; j++) {
                for (let k = 0; k <= 2; k++) {
                    dp[i][j * 3] = (dp[i][j * 3] + dp[i - 1][j * 3 + k]) % MOD;
                }
            }
            // 以 A 结尾的数量
            for (let k = 0; k <= 2; k++) {
                dp[i][1 * 3] = (dp[i][1 * 3] + dp[i - 1][k]) % MOD;
            }
            // 以 L 结尾的数量
            for (let j = 0; j <= 1; j++) {
                for (let k = 1; k <= 2; k++) {
                    dp[i][j * 3 + k] =
                        (dp[i][j * 3 + k] + dp[i - 1][j * 3 + k - 1]) % MOD;
                }
            }
        }
    }

    const sum = dp[n].reduce((a, b) => a + b, 0) % MOD;
    return sum;
}
export default checkRecord;
