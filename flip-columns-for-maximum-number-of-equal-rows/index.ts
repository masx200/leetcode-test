function maxEqualRowsAfterFlips(matrix: number[][]): number {
    const m = matrix.length,
        n = matrix[0].length;
    const map = {} as Record<string, number>;
    for (let i = 0; i < m; i++) {
        const arr = new Array(n).fill("0");
        for (let j = 0; j < n; j++) {
            // 如果 matrix[i][0] 为 1，则对该行元素进行翻转
            arr[j] = "0" + (matrix[i][j] ^ matrix[i][0]);
        }
        const s = arr.join("");
        map[s] = (map[s] || 0) + 1;
    }
    let res = 0;
    for (const key in map) {
        res = Math.max(res, map[key]);
    }
    return res;
}
export default maxEqualRowsAfterFlips;
