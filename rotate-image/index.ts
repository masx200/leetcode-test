/**
 Do not return anything, modify matrix in-place instead.
 */

import { zip } from "../deps.ts";

function rotate(matrix: number[][]): void {
    const n = matrix.length;
    if (n <= 1) return;
    zip(...matrix).forEach((a, i) => {
        matrix[i] = a.reverse() as number[];
    });
}
export default rotate;
