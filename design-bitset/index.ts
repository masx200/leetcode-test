class Bitset {
    #zeros: Set<number>;
    #ones = new Set<number>();
    constructor(public size: number) {
        this.#zeros = new Set<number>(new Array(size).keys());
    }

    fix(idx: number): void {
        this.#ones.add(idx);
        this.#zeros.delete(idx);
    }

    unfix(idx: number): void {
        this.#zeros.add(idx);
        this.#ones.delete(idx);
    }

    flip(): void {
        [this.#ones, this.#zeros] = [this.#zeros, this.#ones];
    }

    all(): boolean {
        return this.#ones.size === this.size;
    }

    one(): boolean {
        return this.#ones.size > 0;
    }

    count(): number {
        return this.#ones.size;
    }

    toString(): string {
        const bits = new Array(this.size)
            .fill(0)
            .map((_, i) => (this.#ones.has(i) ? "1" : "0"));

        return bits.join("");
    }
}
export default Bitset;
