function findMaxForm(strs: string[], m: number, n: number): number {
    const dp: number[][] = new Array(m + 1)
        .fill(0)
        .map(() => new Array(n + 1).fill(0));
    const length = strs.length;
    for (let i = 0; i < length; i++) {
        const str = strs[i];
        const zeros = strs[i].split("").filter((x) => x === "0").length;
        const ones = str.length - zeros;
        for (let j = m; j >= zeros; j--) {
            for (let k = n; k >= ones; k--) {
                dp[j][k] = Math.max(dp[j][k], dp[j - zeros][k - ones] + 1);
            }
        }
    }

    return dp[m][n];
}
export default findMaxForm;
