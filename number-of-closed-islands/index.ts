function closedIsland(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let res = 0;
    grid.forEach((a, i) =>
        a.forEach((v, j) => {
            if (v === 0) {
                res += Number(dfs(i, j));
            }
        })
    );
    function dfs(i: number, j: number): boolean {
        if (i < 0 || j < 0 || i >= m || j >= n) {
            return false;
        }
        if (grid[i][j]) return true;
        grid[i][j] = 1;

        return [
            [i - 1, j],
            [i, j + 1],
            [i + 1, j],
            [i, j - 1],
        ]
            .map((v) => dfs(v[0], v[1]))
            .reduce((a, v) => a && v);
    }

    return res;
}
export default closedIsland;
