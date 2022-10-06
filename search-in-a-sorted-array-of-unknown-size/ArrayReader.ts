export class ArrayReader {
    #array: number[];
    get(k: number): number {
        return this.#array[k] ?? 2147483647;
    }
    constructor(array: number[]) {
        this.#array = array;
    }
}
