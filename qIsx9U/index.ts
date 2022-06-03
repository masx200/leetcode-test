export default class MovingAverage {
    #queue: number[];
    #size: number;
    #sum: number;
    constructor(size: number) {
        if (size < 1) throw Error("size invalid");
        this.#queue = [];
        this.#size = size;
        this.#sum = 0;
    }

    next(val: number): number {
        this.#queue.push(val);
        this.#sum += val;

        while (this.#queue.length > this.#size) {
            const first = this.#queue.shift();
            if (first) {
                this.#sum -= first;
            }
        }

        return this.#sum / this.#queue.length;
    }
}
