function maxProfit(prices: number[], fee: number): number {
    const n = prices.length;
    let buy = prices[0] + fee;
    let profit = 0;
    for (let i = 1; i < n; i++) {
        if (prices[i] + fee < buy) {
            buy = prices[i] + fee;
        } else if (prices[i] > buy) {
            profit += prices[i] - buy;
            buy = prices[i];
        }
    }
    return profit;
}
export default maxProfit;
