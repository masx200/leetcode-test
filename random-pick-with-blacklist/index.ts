export default class Solution {
    #array: Array<number>;
    #black: Set<number>;
    #n: number;
    constructor(n: number, blacklist: number[]) {
        this.#n = n;
        const black = new Set(blacklist);
        this.#black = black;
        this.#array = new Array<number>();
        if (
            n - blacklist.length <= 50000 &&
            (n - blacklist.length) / n <= 0.5
        ) {
            for (let i = 0; i < n; i++) {
                if (!black.has(i)) {
                    this.#array.push(i);
                }
            }
        }
    }

    pick(): number {
        if (this.#array.length) {
            const index = Math.floor(Math.random() * this.#array.length);
            return this.#array[index];
        } else {
            while (true) {
                const index = Math.floor(Math.random() * this.#n);

                if (!this.#black.has(index)) {
                    return index;
                }
            }
        }
    }
}
