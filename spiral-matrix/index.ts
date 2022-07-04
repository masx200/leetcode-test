import { left_rotate } from "./left_rotate.ts";

export default function spiralOrder(matrix: number[][]): number[] {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    const rows = matrix.length;
    const columns = matrix[0].length;
    if (rows === 1) {
        return matrix[0];
    }
    if (columns === 1) {
        return matrix.flat();
    }
    const [first, ...rest] = matrix;
    return [...first, ...spiralOrder(left_rotate(rest))];
}
