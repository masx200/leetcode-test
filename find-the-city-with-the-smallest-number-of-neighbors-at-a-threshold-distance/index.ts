export default function findTheCity(
    n: number,
    edges: number[][],
    distanceThreshold: number,
): number {
    const dp: number[][] = Array(n)
        .fill(0)
        .map(() => Array(n).fill(Infinity));
    for (const [from, to, weight] of edges) {
        dp[from][to] = weight;
        dp[to][from] = weight;
    }
    for (let k = 0; k < n; k++) {
        for (let u = 0; u < n; u++) {
            for (let v = 0; v < n; v++) {
                dp[u][v] = Math.min(dp[u][v], dp[u][k] + dp[k][v]);
            }
        }
    }
    let ans = -1;
    let min_nb = Infinity;
    for (let u = 0; u < n; ++u) {
        let nb = 0;
        for (let v = 0; v < n; ++v) {
            if (v != u && dp[u][v] <= distanceThreshold) ++nb;
        }
        if (nb <= min_nb) {
            min_nb = nb;
            ans = u;
        }
    }

    return ans;
}
