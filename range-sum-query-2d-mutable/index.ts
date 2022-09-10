export default class NumMatrix {
    #m: number;
    #n: number;
    #tree: number[][];
    #nums: number[][];
    constructor(matrix: number[][]) {
        const m = matrix.length;
        const n = matrix[0].length;
        this.#m = m;
        this.#n = n;
        this.#tree = new Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
        this.#nums = new Array(m).fill(0).map(() => Array(n).fill(0));

        matrix.forEach((a, i) => a.forEach((v, j) => this.update(i, j, v)));
    }

    update(row: number, col: number, val: number) {
        const delta = val - this.#nums[row][col];
        this.#nums[row][col] = val;
        for (let i = row + 1; i <= this.#m; i += lowbit(i)) {
            for (let j = col + 1; j <= this.#n; j += lowbit(j)) {
                this.#tree[i][j] += delta;
            }
        }
    }
    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        return (
            this.#sum(row2 + 1, col2 + 1) +
            this.#sum(row1, col1) -
            this.#sum(row1, col2 + 1) -
            this.#sum(row2 + 1, col1)
        );
    }
    #sum(row: number, col: number) {
        let sum = 0;
        for (let i = row; i > 0; i -= lowbit(i)) {
            for (let j = col; j > 0; j -= lowbit(j)) {
                sum += this.#tree[i][j];
            }
        }
        return sum;
    }
}
export function lowbit(a: number) {
    return a & -a;
}
