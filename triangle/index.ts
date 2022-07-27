export default function minimumTotal(triangle: number[][]): number {
    const bottom = triangle[triangle.length - 1];

    let dp = bottom;

    for (let i = dp.length - 2; i >= 0; i--) {
        dp = dp.map((v, j, a) => {
            return Math.min(v, a[j + 1]) + triangle[i][j];
        });
        dp.length--;
    }
    return dp[0];
}
