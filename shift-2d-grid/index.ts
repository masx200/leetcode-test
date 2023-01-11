import construct2DArray from "../convert-1d-array-into-2d-array/index.ts";

export default function shiftGrid(grid: number[][], k: number): number[][] {
    const m = grid.length;
    const n = grid[0].length;
    return construct2DArray(
        grid
            .flat()
            .map(
                (_, i, a) => a[(100 * a.length + a.length + (i - k)) % a.length]
            ),
        m,
        n
    );
}
