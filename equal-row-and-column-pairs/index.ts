function equalPairs(grid: number[][]): number {
    const n = grid.length;
    const cnt: Record<string, number> = {};

    for (const row of grid) {
        const rowStr = row.toString();
        cnt[rowStr] = (cnt[rowStr] || 0) + 1;
    }

    let res = 0;
    for (let j = 0; j < n; j++) {
        const arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(grid[i][j]);
        }
        const arrStr = arr.toString();
        if (cnt[arrStr]) {
            res += cnt[arrStr];
        }
    }

    return res;
}
export default equalPairs;
