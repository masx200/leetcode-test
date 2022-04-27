import search from "../binary-search/index.ts";

export default function searchMatrix(
    matrix: number[][],
    target: number,
): boolean {
    const index = search(matrix.flat(), target);
    return index >= 0 ? true : false;
}
