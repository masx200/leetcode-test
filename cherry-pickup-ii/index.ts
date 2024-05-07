function cherryPickup(grid: number[][]): number {
    const cache = new Map<string, number>();
    const n = grid[0].length;
    return dfsCache(grid, cache, 0, 0, n - 1);
}
function getValue(grid: number[][], i: number, j1: number, j2: number): number {
    return j1 !== j2 ? grid[i][j1] + grid[i][j2] : grid[i][j1];
}
function dfs(
    grid: number[][],
    cache: Map<string, number>,
    i: number,
    j1: number,
    j2: number,
): number {
    const m = grid.length;
    const n = grid[0].length;
    if (i === m - 1) return getValue(grid, i, j1, j2);

    let best = 0;
    for (const dj1 of [j1 - 1, j1, j1 + 1].filter((it) => it >= 0 && it < n)) {
        for (
            const dj2 of [j2 - 1, j2, j2 + 1].filter((it) => it >= 0 && it < n)
        ) {
            best = Math.max(best, dfsCache(grid, cache, i + 1, dj1, dj2));
        }
    }
    return best + getValue(grid, i, j1, j2);
}
function dfsCache(
    grid: number[][],
    cache: Map<string, number>,
    x: number,
    y: number,
    q: number,
): number {
    const key = `[${x},${y},${q}]`;
    if (cache.has(key)) return cache.get(key)!;

    const result = dfs(grid, cache, x, y, q);
    cache.set(key, result);
    return result;
}
export default cherryPickup;
