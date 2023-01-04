export default hitBricks;
function hitBricks(grid: number[][], hits: number[][]): number[] {
    const m = grid.length,
        n = grid[0].length;
    function dfs(x: number, y: number): number {
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] !== 1) return 0;
        grid[x][y] = 2;
        return (
            1 + dfs(x + 1, y) + dfs(x - 1, y) + dfs(x, y + 1) + dfs(x, y - 1)
        );
    }

    function isStable(x: number, y: number) {
        if (x === 0) return true;
        if (x - 1 >= 0 && grid[x - 1][y] === 2) return true;
        if (x + 1 < m && grid[x + 1][y] === 2) return true;
        if (y + 1 < n && grid[x][y + 1] === 2) return true;
        if (y - 1 >= 0 && grid[x][y - 1] === 2) return true;
        return false;
    }

    // 先遍历打击点 断开所有打击后不稳定的链接
    for (const [x, y] of hits) {
        grid[x][y]--;
    }
    // 遍历 顶部链接点 标记打击后的稳定点
    for (let i = 0; i < n; i++) {
        dfs(0, i);
    }

    const res: number[] = new Array(hits.length).fill(0);
    // 从后向前遍历 打击点
    for (let i = hits.length - 1; i >= 0; i--) {
        const [x, y] = hits[i];
        // 还原 打击前的状态
        grid[x][y]++;
        // 如果 打击点 不与稳定点相连 或 打击点不是砖 那么 打击当前点 不会掉落砖
        if (!isStable(x, y) || grid[x][y] === 0) {
            res[i] = 0;
        } else {
            // 如果 打击点与稳定点相连 并且是 砖
            // 那么 dfs当前点 即 标记 当前点链接的点为稳定点 并返回个数 个数去掉当前打击点就是掉落的砖
            res[i] = dfs(x, y) - 1;
        }
    }
    return res;
}
