export default class Vector2D {
    #gen: Generator<number, void, unknown>;
    #result: IteratorResult<number, void>;
    constructor(v: number[][]) {
        this.#gen = Vector2DGenerator(v);
        this.#result = this.#gen.next();
    }
    hasNext() {
        return !this.#result.done;
    }
    next() {
        const res = Number(this.#result.value);
        this.#result = this.#gen.next();
        return res;
    }
}
export function* Vector2DGenerator(v: number[][]) {
    for (const a of v) {
        for (const b of a) {
            yield b;
        }
    }
}
