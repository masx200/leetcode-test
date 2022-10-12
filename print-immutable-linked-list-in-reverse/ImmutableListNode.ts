export class ImmutableListNode {
    #print;
    #index = 0;
    #array: number[];
    constructor(array: Array<number>, print: (value: number) => void) {
        if (array.length === 0) throw Error("input empty array");
        this.#print = print;
        this.#array = array;
    }
    printValue() {
        this.#print(this.#array[this.#index]);
    }
    getNext(): ImmutableListNode | null {
        if (this.#index + 1 >= this.#array.length) return null;
        const next = new ImmutableListNode(this.#array, this.#print);
        next.#index = this.#index + 1;
        return next;
    }
}
