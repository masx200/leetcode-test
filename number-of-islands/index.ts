export default function numIslands(grid: string[][]): number {
    const m = grid.length;
    if (m === 0) return 0;
    const n = grid[0].length;
    if (n === 0) return 0;

    const cache = new Set<number>();

    let num_islands = 0;

    for (let r = 0; r < m; ++r) {
        for (let c = 0; c < n; ++c) {
            if (cache.has(unique_id(r, c, n))) {
                continue;
            }
            if (grid[r][c] == "1") {
                ++num_islands;
                dfs(grid, r, c, cache);
            }
        }
    }

    return num_islands;
}

function dfs(grid: string[][], r: number, c: number, cache: Set<number>): void {
    const m = grid.length;
    if (m === 0) return;
    const n = grid[0].length;
    if (n === 0) return;

    if (r < 0 || c < 0 || r >= m || c >= n || grid[r][c] == "0") {
        return;
    }
    const id = unique_id(r, c, n);
    if (cache.has(id)) {
        return;
    }
    cache.add(id);

    dfs(grid, r - 1, c, cache);
    dfs(grid, r + 1, c, cache);
    dfs(grid, r, c - 1, cache);
    dfs(grid, r, c + 1, cache);
}
function unique_id(r: number, c: number, n: number): number {
    const a = c + r * n;
    // console.log(c, r, n, a)
    return a;
}
// console.log(numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]
// ))
// console.log(numIslands(
//     [["1", "1", "0", "0", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "1", "0", "0"], ["0", "0", "0", "1", "1"]]
// ))
