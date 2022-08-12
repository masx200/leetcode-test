import { combinations } from "../deps.ts";

class CombinationIterator {
    #res: IteratorResult<string[]>;
    #gen: Generator<string[]>;
    constructor(characters: string, combinationLength: number) {
        this.#gen = combinations(characters, combinationLength);
        this.#res = this.#gen.next();
    }

    next(): string {
        if (this.#res.done) {
            return "";
        }
        const value = this.#res.value;
        this.#res = this.#gen.next();
        return value.join("");
    }

    hasNext(): boolean {
        if (this.#res.done) {
            return false;
        }
        return true;
    }
}
export default CombinationIterator;
