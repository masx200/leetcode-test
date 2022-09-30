export default class Fancy {
    #l: number[] = [];
    #a = [0n];
    #m = [1n];
    constructor() {}

    append(val: number): void {
        this.#l.push(val);
        this.#a.push(this.#a.at(-1) as bigint);
        this.#m.push(this.#m.at(-1) as bigint);
    }

    addAll(inc: number): void {
        this.#a[this.#a.length - 1] += BigInt(inc);
    }

    multAll(m: number): void {
        this.#a[this.#a.length - 1] *= BigInt(m);
        this.#m[this.#m.length - 1] *= BigInt(m);
    }

    getIndex(idx: number): number {
        if (idx >= this.#l.length) return -1;
        const m = (this.#m.at(-1) as bigint) / this.#m[idx];
        const c = (this.#a.at(-1) as bigint) - this.#a[idx] * m;

        return Number((BigInt(this.#l[idx]) * m + c) % BigInt(1e9 + 7));
    }
}
