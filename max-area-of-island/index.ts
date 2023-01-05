export default function maxAreaOfIsland(grid: number[][]): number {
    const m = grid.length;
    if (m === 0) return 0;
    const n = grid[0].length;
    if (n === 0) return 0;
    return Math.max(...getIslandsAreas(grid), 0);
}
function getIslandsAreas(grid: number[][]): number[] {
    const m = grid.length;
    if (m === 0) return [];
    const n = grid[0].length;
    if (n === 0) return [];

    const cache = new Set<number>();

    const islandareas: Array<number> = [];

    for (let r = 0; r < m; ++r) {
        for (let c = 0; c < n; ++c) {
            if (cache.has(unique_id(r, c, n))) {
                continue;
            }
            if (grid[r][c] == 1) {
                // ++num_islands;
                let islandarea = 0;
                dfs(grid, r, c, cache, () => islandarea++);
                islandareas.push(islandarea);
            }
        }
    }
    // console.log(islands)
    return islandareas;
}

function dfs(
    grid: number[][],
    r: number,
    c: number,
    cache: Set<number>,
    output: () => void
): void {
    const m = grid.length;
    if (m === 0) return;
    const n = grid[0].length;
    if (n === 0) return;

    if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] == 0) {
        return;
    }
    const id = unique_id(r, c, n);
    if (cache.has(id)) {
        return;
    }
    cache.add(id);
    output();
    dfs(grid, r - 1, c, cache, output);
    dfs(grid, r + 1, c, cache, output);
    dfs(grid, r, c - 1, cache, output);
    dfs(grid, r, c + 1, cache, output);
}
function unique_id(r: number, c: number, n: number): number {
    const a = c + r * n;
    // console.log(c, r, n, a)
    return a;
}
