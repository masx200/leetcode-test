function isToeplitzMatrix(matrix: number[][]): boolean {
    return matrix.every((a, i) =>
        a.every((v, j) => {
            if (typeof matrix[i + 1]?.[j + 1] === "undefined") return true;

            return matrix[i + 1]?.[j + 1] === v;
        })
    );
}
export default isToeplitzMatrix;
