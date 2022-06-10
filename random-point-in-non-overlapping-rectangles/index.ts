export default class Solution {
    #rect_arrays: array_of_integer_points_for_the_rectangle[];
    #weights: number[];
    #prefix_sum: number[];
    #length: number;

    #pickRectangle(): array_of_integer_points_for_the_rectangle {
        const index = Math.floor(Math.random() * this.#length);
        let left = 0;
        let right = this.#prefix_sum.length - 1;
        while (right - left >= 1) {
            // console.log(left, right);
            const middle = Math.floor((right - left) / 2) + left;
            // console.log(middle);
            const floor = this.#prefix_sum[middle - 1] ?? 0;
            const ceil = this.#prefix_sum[middle];
            // console.log(floor, ceil);
            if (floor < index && index <= ceil) {
                return this.#rect_arrays[middle];
            } else if (index > ceil) {
                left = middle + 1;
            } else if (index <= floor) {
                right = middle;
            }
        }
        return this.#rect_arrays[left];
    }
    constructor(rects: number[][]) {
        this.#rect_arrays = rects.map(
            (rect) => new array_of_integer_points_for_the_rectangle(rect),
        );
        this.#weights = this.#rect_arrays.map((array) => array.length);
        this.#length = 0;
        this.#prefix_sum = Array.from(this.#weights);
        for (const [index, weight] of this.#weights.entries()) {
            this.#length =
                this.#prefix_sum[index] =
                    index === 0 ? weight : weight + this.#prefix_sum[index - 1];
        }
    }

    pick(): number[] {
        const rectangle = this.#pickRectangle();
        const length = rectangle.length;
        const index = Math.floor(Math.random() * length);
        return rectangle.get(index);
    }
}
class array_of_integer_points_for_the_rectangle {
    #x1: number;

    #y1: number;
    #row: number;
    #col: number;
    constructor(rect: number[]) {
        const [x1, y1, x2, y2] = rect;
        // console.log(x1, y2, x2, y1)
        this.#x1 = x1;

        this.#y1 = y1;
        this.#row = x2 - x1 + 1;
        this.#col = y2 - y1 + 1;
        // console.log(this.#row, this.#col)
        this.length = this.#row * this.#col;
    }

    readonly length: number;

    get(index: number): [number, number] {
        const row = Math.floor(index / this.#row);
        const col = Math.floor(index % this.#row);
        const x = this.#x1 + col;
        const y = this.#y1 + row;
        return [x, y];
    }
}

// const result: Record<string, number> = {};
// const solution = new Solution([
//     [-2, -2, 1, 1],
//     [2, 2, 4, 6],
// ]);
// // console.log(solution.pick());
// // console.log(solution)
// for (let i = 0; i < 921000; i++) {
//     const point = solution.pick();
//     const key = JSON.stringify(point);
//     result[key] = 1 + (result[key] ?? 0);
// }
// console.log(result);
