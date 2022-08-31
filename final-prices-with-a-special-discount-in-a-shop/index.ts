export default function finalPrices(prices: number[]): number[] {
    const n = prices.length;
    const ans: number[] = Array.from(prices);
    const stack: number[] = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] > prices[i]) {
            stack.pop();
        }

        if (stack.length) ans[i] -= stack[stack.length - 1];
        stack.push(prices[i]);
    }
    return ans;
}
