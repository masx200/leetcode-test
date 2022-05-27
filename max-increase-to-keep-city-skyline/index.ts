export default function maxIncreaseKeepingSkyline(grid: number[][]): number {
    const n = grid.length;
    const row_max = Array(n).fill(0);
    const col_max = Array(n).fill(0);

    grid.forEach((a, i) => {
        a.forEach((v, j) => {
            row_max[i] = Math.max(row_max[i], v);
            col_max[j] = Math.max(col_max[j], v);
        });
    });
    let ans = 0;
    grid.forEach((a, i) => {
        a.forEach((v, j) => {
            ans += Math.min(row_max[i], col_max[j]) - v;
        });
    });
    return ans;
}
