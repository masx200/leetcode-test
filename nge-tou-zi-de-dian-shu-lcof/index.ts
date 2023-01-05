export default dicesProbability;
function dicesProbability(n: number): number[] {
    const res: number[] = Array(6 * n - n + 1)
        .fill(0)
        .map((_, i) => dfs(n, i + n));
    const sum = res.reduce((p, c) => p + c, 0);
    return res.map((v) => v / sum);
}
const cache: number[][] = [];

function dfs(n: number, s: number): number {
    const cached = cache[n]?.[s];
    if (typeof cached !== "undefined") return cached;

    const res: number =
        n === 0
            ? 1
            : s < n || s > 6 * n
            ? 0
            : Array(6)
                  .fill(0)
                  .reduce((p, _, i) => p + dfs(n - 1, s - (i + 1)), 0);

    cache[n] ??= [];
    cache[n][s] = res;
    return res;
}
