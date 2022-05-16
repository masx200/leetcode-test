function searchMatrix(matrix: number[][], target: number): boolean {
    if (matrix.length === 0) return false;
    if (matrix[0].length === 0) return false;
    const min = matrix[0][0];
    const max = matrix.at(-1)?.at(-1);
    if (target === min) return true;
    if (target === max) return true;
    if (target < min) {
        return false;
    }
    if (typeof max === "number" && target > max) {
        return false;
    }
    const m = matrix.length,
        n = matrix[0].length;
    let x = 0,
        y = n - 1;
    while (x < m && y >= 0) {
        if (matrix[x][y] == target) {
            return true;
        }
        if (matrix[x][y] > target) {
            --y;
        } else {
            ++x;
        }
    }

    return false;
}
export default searchMatrix;
