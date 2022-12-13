function maxProfit(prices: number[]): number {
    let ans = 0;
    const n = prices.length;
    for (let i = 1; i < n; ++i) {
        ans += Math.max(0, prices[i] - prices[i - 1]);
    }
    return ans;
}
export default maxProfit;
