function cherryPickup(grid: number[][]): number {
    const n = grid.length;
    const cache = new Map<string, number>();
    return Math.max(0, getCherryPickupNum(cache, grid, n - 1, n - 1, n - 1));
}

function getCherryPickupNum(
    cache: Map<string, number>,
    grid: number[][],
    x: number,
    y: number,
    q: number,
): number {
    const w = x + y - q;
    if (w < 0 || x < 0 || y < 0 || q < 0) return Number.MIN_SAFE_INTEGER;

    const key = `[${x},${y},${q}]`;
    if (cache.has(key)) return cache.get(key)!;
    const cur = grid[x][y];
    const acc = x === 0 && y === 0 ? 0 : Math.max(
        x > 0 && grid[x - 1][y] === -1
            ? Number.MIN_SAFE_INTEGER
            : getCherryPickupNum(cache, grid, x - 1, y, q),
        y > 0 && grid[x][y - 1] === -1
            ? Number.MIN_SAFE_INTEGER
            : getCherryPickupNum(cache, grid, x, y - 1, q),
        getCherryPickupNum(cache, grid, x - 1, y, q - 1),
        getCherryPickupNum(cache, grid, x, y - 1, q - 1),
    );
    const result = grid[q][w] === -1
        ? Number.MIN_SAFE_INTEGER
        : cur === -1
        ? Number.MIN_SAFE_INTEGER
        : cur + acc + (x === q && y === w ? 0 : grid[q][w]);

    cache.set(key, result);
    return result;
}
export default cherryPickup;
