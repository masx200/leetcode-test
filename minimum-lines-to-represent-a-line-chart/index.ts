export default function minimumLines(stockPrices: number[][]): number {
    const n = stockPrices.length;
    if (n <= 2) {
        return n - 1;
    }
    stockPrices.sort((a, b) => a[0] - b[0]);
    let res = 1;
    for (let i = 2; i < n; ++i) {
        // 遍历相邻点对，并判断线段是否可以合并
        const dx0 = BigInt(stockPrices[i - 1][0] - stockPrices[i - 2][0]);
        const dy0 = BigInt(stockPrices[i - 1][1] - stockPrices[i - 2][1]);
        const dx1 = BigInt(stockPrices[i][0] - stockPrices[i - 1][0]);
        const dy1 = BigInt(stockPrices[i][1] - stockPrices[i - 1][1]);
        if (dx0 * dy1 != dy0 * dx1) {
            ++res;
        }
    }
    return res;
}
