function maxProfit(prices: number[]): number {
    const n = prices.length;
    let r1 = -prices[0];
    let r2 = 0;
    let r3 = 0;
    for (let i = 1; i < n; i++) {
        const newR1 = Math.max(r1, r3 - prices[i]);
        const newR2 = r1 + prices[i];
        const newR3 = Math.max(r3, r2);
        r1 = newR1;
        r2 = newR2;
        r3 = newR3;
    }
    return Math.max(r3, r2);
}
export default maxProfit;
