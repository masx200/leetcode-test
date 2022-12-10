function maxHeight(cuboids: number[][]): number {
    const len = cuboids.length;
    // 每个元素宽、长、高递增
    for (const cube of cuboids) cube.sort((a, b) => a - b);
    // 集合整体递增
    cuboids.sort((a, b) => {
        for (let i = 0; i < 3; i++) {
            if (a[i] - b[i]) return a[i] - b[i];
        }
        return 0;
    });
    // 初始化dp
    const dp = [...Array(len)].map((_v, k) => cuboids[k][2]);
    // 枚举子序列组合
    for (let i = 1; i < len; i++) {
        const [wi, li, hi] = cuboids[i];
        for (let j = 0; j < i; j++) {
            const [wj, lj, hj] = cuboids[j];
            if (wi >= wj && li >= lj && hi >= hj) {
                dp[i] = Math.max(dp[i], dp[j] + hi);
            }
        }
    }
    return Math.max(...dp);
}
export default maxHeight;
