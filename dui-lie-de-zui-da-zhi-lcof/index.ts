class MaxQueue {
    #a: number[] = [];

    #b: number[] = [];
    constructor() {}

    max_value(): number {
        if (this.#a.length === 0) return -1;

        return this.#b[0] ?? -1;
    }

    push_back(value: number): void {
        while (this.#a.length && value > this.#b[this.#b.length - 1]) {
            this.#b.pop();
        }
        this.#a.push(value);
        this.#b.push(value);
    }

    pop_front(): number {
        if (this.#a.length === 0) return -1;
        const value = this.#a[0];

        if (this.#a[0] === this.#b[0]) {
            this.#b.shift();
        }
        this.#a.shift();
        return value;
    }
}
export default MaxQueue;
