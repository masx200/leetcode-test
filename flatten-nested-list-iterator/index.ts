import { NestedInteger } from "../mini-parser/NestedInteger.ts";

export function* NestedIntegerIterator(
    nestedList: NestedInteger[]
): Generator<number | null, void, unknown> {
    for (const nestedInteger of nestedList) {
        if (nestedInteger.isInteger()) {
            yield nestedInteger.getInteger();
        } else {
            yield* NestedIntegerIterator(nestedInteger.getList());
        }
    }
}
class NestedIterator {
    #list: NestedInteger[];
    #iterator: Generator<number | null, void, unknown>;
    #done = false;
    #value = 0;

    constructor(nestedList: NestedInteger[]) {
        this.#list = nestedList;
        const iterator = NestedIntegerIterator(nestedList);
        this.#iterator = iterator;
        this.#update_result();
    }

    #update_result() {
        const iterator = this.#iterator;
        const result = iterator.next();
        const { done, value } = result;

        this.#done = Boolean(done);
        this.#value = Number(value);
    }

    hasNext(): boolean {
        if (this.#list.length === 0) return false;

        return !this.#done;
    }

    next(): number {
        if (this.#list.length === 0) return 0;
        const value = this.#value;
        this.#update_result();

        return value;
    }
}

export default NestedIterator;
