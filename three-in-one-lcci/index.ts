export default class TripleInOne {
    #stack: number[];
    #size: number;
    constructor(stackSize: number) {
        this.#size = stackSize;
        this.#stack = Array<number>((stackSize + 1) * 3).fill(0);
    }

    push(stackNum: number, value: number): void {
        const stack = this.#stack;
        const size = this.#size;
        if (stack[stackNum] === size) return;
        stack[3 + stackNum * size + stack[stackNum]] = value;
        stack[stackNum]++;
    }

    pop(stackNum: number): number {
        if (this.isEmpty(stackNum)) return -1;
        const result = this.peek(stackNum);
        const stack = this.#stack;
        stack[stackNum]--;

        return result;
    }

    peek(stackNum: number): number {
        if (this.isEmpty(stackNum)) return -1;
        const stack = this.#stack;
        const size = this.#size;

        return stack[3 + stackNum * size + stack[stackNum] - 1];
    }

    isEmpty(stackNum: number): boolean {
        const stack = this.#stack;
        return stack[stackNum] === 0;
    }
}
