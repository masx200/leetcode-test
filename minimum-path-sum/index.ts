import memoize from "https://cdn.skypack.dev/lodash@4.17.21/memoize?dts";
function minPathSum(grid: number[][]): number {
    const m = grid.length,
        n = grid[0].length;
    const dp = memoize(
        (i: number, j: number): number => {
            if (i == 0 && j === 0) {
                return grid[i][j];
            }
            if (i === 0) return grid[i][j] + dp(i, j - 1);
            if (j === 0) return grid[i][j] + dp(i - 1, j);

            return grid[i][j] + Math.min(dp(i - 1, j), dp(i, j - 1));
        },
        (i, j) => i * n + j
    );
    return dp(m - 1, n - 1);
}
export default minPathSum;
