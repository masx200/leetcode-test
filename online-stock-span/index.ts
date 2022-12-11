export default class StockSpanner {
    #stk: Array<[number, number]>; // 单调递增栈
    #pos: number; // 记录当前时间
    constructor() {
        this.#stk = [];
        this.#pos = -1;
        this.#stk.push([-1, Infinity]);
    }

    next(price: number): number {
        this.#pos++;
        while (
            this.#stk.length &&
            this.#stk[this.#stk.length - 1][1] <= price
        ) {
            this.#stk.pop();
        }
        const res = this.#pos - this.#stk[this.#stk.length - 1][0];
        this.#stk.push([this.#pos, price]);
        return res;
    }
}
