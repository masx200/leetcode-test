export default class StringIterator {
    #gen: Generator<string, void, unknown>;
    #result: IteratorResult<string, void>;
    constructor(compressedString: string) {
        this.#gen = RLEGenerator(compressedString);
        this.#result = this.#gen.next();
    }
    next() {
        const value = this.#result.value;
        if (typeof value === "undefined") return "";
        this.#result = this.#gen.next();
        return value;
    }
    hasNext() {
        return !this.#result.done;
    }
}
export function* RLEGenerator(
    encoding: string,
): Generator<string, void, unknown> {
    for (let i = 0; i < encoding.length; i += 2) {
        const count = Number(encoding[i + 1]);
        for (let j = 0; j < count; j++) {
            yield encoding[i];
        }
    }
}
