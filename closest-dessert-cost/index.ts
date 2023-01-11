function closestCost(
    baseCosts: number[],
    toppingCosts: number[],
    target: number
): number {
    const m = toppingCosts.length;
    let ret = Infinity;
    let diff = Infinity;
    for (const base of baseCosts) {
        for (let state = 0; state < Math.pow(3, m); ++state) {
            const top = topping(toppingCosts, state);
            const temp = Math.abs(base + top - target);
            if (temp === 0) return base + top;
            if (temp < diff) {
                ret = base + top;
                diff = temp;
            } else if (temp === diff && base + top < ret) {
                ret = base + top;
            }
        }
    }
    return ret;
}
export default closestCost;

function topping(toppingCosts: number[], state: number) {
    const m = toppingCosts.length;
    let top = 0;
    for (let i = 0; i < m; i++) {
        top += toppingCosts[i] * (state % 3);
        state = Math.floor(state / 3);
    }
    return top;
}
