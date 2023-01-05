export default function numDupDigitsAtMostN(n: number): number {
    const s = String(n),
        dp: number[][] = Array.from({ length: s.length }, () =>
            Array(1 << 10).fill(-1)
        );

    /**
     * @param {number} i 从第i开始填数字
     * @param {number} mask 用位数据存储已填数字的集合
     * @param {boolean} isLimit 表示前面的数字是否已和n对应, 决定本次的上限是 s[i] 还是 9
     * @param {boolean} isNum 表示前面是否已填; 如果是，就代表当前不会是前导0了, 后续可以从0开始; 如果不是，那么可以跳过; 主要调节初始化和后续填值的不同
     * @return {number} 返回从i开始填的数字结果;  记忆化结果dp[i][mask] 如果已经不是-1 代表已经计算过
     */
    function f(
        i: number,
        mask: number,
        isLimit: boolean,
        isNum: boolean
    ): number {
        // 这次已经终点, 如果填过, 次数+1
        if (i === s.length) return isNum ? 1 : 0;

        // 如果不受限且本次安全且填过 直接返回
        if (!isLimit && isNum && dp[i][mask] >= 0) return dp[i][mask];
        // 没有缓存 从0开始计算本次
        let res = 0;
        // 如果前面跳过没填 那么本次也跳过; 因为这样不可能达到上界,isLimit变为false
        if (!isNum) res = f(i + 1, mask, false, false);
        // d 是尝试要在当前位放置的数字, up代表数字的上界是多少
        for (let d = isNum ? 0 : 1, up = isLimit ? +s[i] : 9; d <= up; ++d) {
            // 如果mask记录里 没有这个数字  那就往下算 并计入结果; 下次的isLimit的前提是 本次已经被isLimit 且达到上限
            if (((mask >> d) & 1) === 0) {
                res += f(i + 1, mask | (1 << d), isLimit && d === up, true);
            }
        }
        // 如果自由不受限 且填过 计入cache
        if (!isLimit && isNum) dp[i][mask] = res;

        return res;
    }
    // 从第0位开始, mask也是空, 受限, 前面没填过
    return n - f(0, 0, true, false);
}
