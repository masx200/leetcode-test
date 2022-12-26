function longestCommonSubsequence(text1: string, text2: string): number {
    if (!text1 || !text2) return 0;
    const len1 = text1.length,
        len2 = text2.length;
    // x,y各留一整个空行，方便计算,因为0时没法计算dp[i - 1]
    const dp: number[][] = new Array(len1 + 1)
        .fill(0)
        .map(() => new Array(len2 + 1).fill(0));
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            // 相同时，dp[i - 1][j - 1] + 1
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // 取`text1[i - 1], text2[j]`或`text1[i], text2[j - 1]`最大值
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[len1][len2];
}
export default longestCommonSubsequence;
