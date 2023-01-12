function countEval(s: string, result: number): number {
    const n = s.length;
    // 创建三维数组
    const dp: number[][][] = new Array(n)
        .fill(0)
        .map(() => new Array(n).fill(0).map(() => new Array(2).fill(0)));
    // 初始化basecase s[i] 为 1,则 dp[i][i][1] = 1, dp[i][i][0] = 0
    for (let i = 0; i < n; i += 2) {
        let tmp = 0;
        if (s[i] == "1") tmp = 1;
        dp[i][i][0] = 1 - tmp;
        dp[i][i][1] = tmp;
    }

    // 从0开始，每次+2
    for (let step = 0; step < n; step += 2) {
        // 计算 i - （i+step） 的情况， j 为中间间隔点 s[j] 为符号
        for (let i = 0; i + step < n; i += 2) {
            for (let j = i + 1; j < i + step; j += 2) {
                const left0 = dp[i][j - 1][0],
                    left1 = dp[i][j - 1][1];
                const right0 = dp[j + 1][i + step][0],
                    right1 = dp[j + 1][i + step][1];
                if (s[j] == "&") {
                    dp[i][i + step][0] += left0 * (right0 + right1) +
                        left1 * right0;
                    dp[i][i + step][1] += left1 * right1;
                } else if (s[j] == "|") {
                    dp[i][i + step][0] += left0 * right0;
                    dp[i][i + step][1] += left0 * right1 +
                        left1 * (right0 + right1);
                } else {
                    //s[j]=='^'
                    dp[i][i + step][0] += left0 * right0 + left1 * right1;
                    dp[i][i + step][1] += left0 * right1 + left1 * right0;
                }
            }
        }
    }
    return dp[0][n - 1][result];
}
export default countEval;
