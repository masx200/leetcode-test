export default class Vector2D {
    #gen: Generator<number, void, unknown>;
    #result: IteratorResult<number, void>;
    constructor(v: number[][]) {
        this.#gen = (function* (v: number[][]) {
            for (const a of v) {
                for (const b of a) {
                    yield b;
                }
            }
        })(v);
        this.#result = this.#gen.next();
    }
    hasNext() {
        return !this.#result.done;
    }
    next() {
        const res = this.#result.value;
        this.#result = this.#gen.next();
        return res;
    }
}
