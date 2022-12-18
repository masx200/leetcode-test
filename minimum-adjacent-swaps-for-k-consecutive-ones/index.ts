function minMoves(nums: number[], k: number): number {
    const g: number[] = [];
    const preSum: number[] = [];
    preSum.push(0);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            g.push(i - g.length);
            preSum.push(preSum[preSum.length - 1] + g[g.length - 1]);
        }
    }
    const m = g.length;
    let res = Number.MAX_VALUE;
    for (let i = 0; i <= m - k; i++) {
        const mid = i + Math.floor(k / 2);
        const r = g[mid];
        res = Math.min(
            res,
            (1 - (k % 2)) * r +
                (preSum[i + k] - preSum[mid + 1]) -
                (preSum[mid] - preSum[i]),
        );
    }
    return res;
}
export default minMoves;
