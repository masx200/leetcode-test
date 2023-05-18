export default class ZigzagIterator {
    #generator: Generator<number, void, unknown>;
    #value: number | void;
    #done: boolean | undefined;
    constructor(v1: number[], v2: number[]) {
        this.#generator = ZigzagGenerator(v1, v2);

        const result = this.#generator.next();
        this.#value = result.value;
        this.#done = result.done;
    }

    next(): number {
        const value = this.#value;
        const result = this.#generator.next();
        this.#value = result.value;
        this.#done = result.done;
        return value ?? -Infinity;
    }
    hasNext(): boolean {
        return !this.#done;
    }
}

function* ZigzagGenerator(
    v1: number[],
    v2: number[],
): Generator<number, void, unknown> {
    if (v1.length < v2.length) {
        for (let i = 0; i < v1.length; i++) {
            yield v1[i];
            yield v2[i];
        }

        for (let i = v1.length; i < v2.length; i++) {
            yield v2[i];
        }
    } else {
        yield* ZigzagGenerator(v2, v1);
    }
}
