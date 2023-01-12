function getMaximumNumber(moles: number[][]): number {
    moles.sort((a, b) => a[0] - b[0]);
    let first = 0;

    let res = 0;
    while (moles.length) {
        const [t, x, y] = moles[0];

        if (t === 0) {
            if (y === 1 && x == 1) first++;
            moles.shift();
        } else break;
    }

    moles = [[0, 1, 1], ...moles];
    const len = moles.length;
    const dp = Array(len)
        .fill(0)
        .map(() => [0, 0]);
    for (let i = 1; i < len; i++) {
        const [t, x, y] = moles[i];
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
        for (let cnt = 0, j = i - 1; cnt < 10 && j >= 0; j--, cnt++) {
            if (
                Math.abs(x - moles[j][1]) + Math.abs(y - moles[j][2]) <=
                    t - moles[j][0]
            ) {
                dp[i][1] = Math.max(dp[i][1], dp[j][1] + 1);
            }
        }
        res = Math.max(res, dp[i][0], dp[i][1]);
    }
    return res + first;
}
export default getMaximumNumber;
