export default interface NumMatrix {
    sumRegion(row1: number, col1: number, row2: number, col2: number): number;
}

export default function NumMatrix(matrix: number[][]): NumMatrix {
    const m = matrix.length;
    const n = matrix[0].length;
    const sums: number[][] = Array.from({ length: m + 1 }).map(() =>
        Array(n + 1).fill(0)
    );
    matrix.forEach((a, i) =>
        a.forEach((v, j) => {
            sums[i + 1][j + 1] =
                sums[i][j + 1] + sums[i + 1][j] - sums[i][j] + v;
        })
    );
    return {
        sumRegion(
            row1: number,
            col1: number,
            row2: number,
            col2: number
        ): number {
            return (
                sums[row2 + 1][col2 + 1] -
                sums[row1][col2 + 1] -
                sums[row2 + 1][col1] +
                sums[row1][col1]
            );
        },
    };
}
