export default function maxProfit(prices: number[]): number {
    if (prices.length < 2) return 0;
    let min = Infinity;
    let max = -Infinity;
    let mp = Math.max(0, max - min);
    for (const p of prices) {
        if (p < min) {
            min = p;
            max = -Infinity;
        } else {
            max = Math.max(p, max);
            mp = Math.max(mp, max - min);
        }
    }
    return mp;
}
