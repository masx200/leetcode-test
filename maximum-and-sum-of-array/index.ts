const { pow, max, floor } = Math;
function maximumANDSum(nums: number[], numSlots: number): number {
    const n = nums.length;
    nums.unshift(0);
    const m = pow(3, numSlots);
    const dp: number[][] = Array(n + 1)
        .fill(0)
        .map(() => Array(m).fill(-Infinity));
    dp[0][0] = 0;

    let ret = 0;

    for (let state = 1; state < m; state++) {
        let i = 0;
        let temp = state;
        while (temp > 0) {
            i += temp % 3;
            temp /= 3;
            temp = floor(temp);
        }
        if (i > n) continue;

        for (let j = 0; j < numSlots; j++) {
            if (filled(state, j) >= 1) {
                dp[i][state] = max(
                    dp[i][state],
                    dp[i - 1][state - pow(3, j)] + (nums[i] & (j + 1))
                );
            }
        }
        if (i == n) {
            ret = max(ret, dp[i][state]);
        }
    }

    return ret;
}
function filled(state: number, k: number) {
    for (let i = 0; i < k; i++) {
        state /= 3;
        state = floor(state);
    }
    return state % 3;
}
export default maximumANDSum;
