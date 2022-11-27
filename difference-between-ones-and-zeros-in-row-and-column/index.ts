export default function onesMinusZeros(grid: number[][]): number[][] {
    const r = Array<number>(grid.length).fill(0);
    const c = Array<number>(grid[0].length).fill(0);

    for (const [i, row] of grid.entries()) {
        for (const [j, x] of row.entries()) {
            r[i] += x * 2 - 1;
            c[j] += x * 2 - 1;
        }
    }

    for (const [i, x] of r.entries()) {
        for (const [j, y] of c.entries()) {
            grid[i][j] = x + y;
        }
    }
    return grid;
}
