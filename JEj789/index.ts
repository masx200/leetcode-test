function minCost(costs: number[][]): number {
    const n = costs.length;

    let dp = costs[0];

    for (let i = 1; i < n; i++) {
        const dp2: typeof dp = [];
        for (let j = 0; j < 3; j++) {
            const min = Math.min(dp[(j + 1) % 3], dp[(j + 2) % 3]);
            dp2.push(min + costs[i][j]);
        }
        dp = dp2;
    }

    return Math.min(...dp);
}
export default minCost;
