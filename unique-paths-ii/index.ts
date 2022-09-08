function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    if (obstacleGrid[0][0] === 1) return 0;
    const m = obstacleGrid.length,
        n = obstacleGrid[0].length;
    if (obstacleGrid[m - 1][n - 1] === 1) return 0;

    const f: number[] = Array(n).fill(0);
    f[0] = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                f[j] = 0;
            } else if (j >= 1 && obstacleGrid[i][j - 1] === 0) {
                f[j] = f[j] + f[j - 1];
            }
        }
    }
    return f[f.length - 1];
}
export default uniquePathsWithObstacles;
