export default function setZeroes(matrix: number[][]): void {
    const m = matrix.length;
    const zerorows: number[] = [];
    const zerocols: number[] = [];
    matrix.forEach((a, i) => {
        a.forEach((v, j) => {
            if (v === 0) {
                zerorows.push(i);
                zerocols.push(j);
            }
        });
    });

    zerorows.forEach((r) => {
        matrix[r].fill(0);
    });
    zerocols.forEach((c) => {
        for (let i = 0; i < m; i++) {
            matrix[i][c] = 0;
        }
    });
}
