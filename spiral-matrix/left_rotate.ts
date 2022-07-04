import { zip } from "../deps.ts";

export function left_rotate(matrix: number[][]): number[][] {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    const rows = matrix.length;
    const columns = matrix[0].length;
    if (rows === 1 && columns === 1) return matrix;
    return zip(...matrix).reverse() as number[][];
}
