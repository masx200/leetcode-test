export default class Solution {
    #arr: number[];
    #rects: number[][];

    constructor(rects: number[][]) {
        this.#arr = [0];
        this.#rects = rects;
        for (const rect of rects) {
            const [a, b, x, y] = rect;
            this.#arr.push(
                this.#arr[this.#arr.length - 1] + (x - a + 1) * (y - b + 1)
            );
        }
    }
    pick() {
        let k = Math.floor(Math.random() * this.#arr[this.#arr.length - 1]);
        const rectIndex = this.#binarySearch(this.#arr, k + 1) - 1;
        k -= this.#arr[rectIndex];
        const rect = this.#rects[rectIndex];
        const [a, b, , y] = rect;
        const col = y - b + 1;
        const da = Math.floor(k / col);
        const db = k - col * da;
        return [a + da, b + db];
    }
    #binarySearch(arr: number[], target: number) {
        let low = 0;
        let high = arr.length - 1;
        while (low <= high) {
            const mid = Math.floor((high + low) / 2);
            const num = arr[mid];
            if (num === target) {
                return mid;
            } else if (num > target) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }
}
