function translateNum(num: number): number {
    const s = String(num);

    const n = s.length;

    const dp = [1, 1];

    for (let i = 2; i < n + 1; i++) {
        const o = Number(s[i - 2] + s[i - 1]);

        dp[2] = dp[1] + Number(9 < o && o < 26) * dp[0];
        dp.shift();
    }
    return dp[1];
}
export default translateNum;
