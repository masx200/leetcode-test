const capacity = Symbol();
const stacks = Symbol();
class StackOfPlates {
    [stacks]: number[][] = [];
    [capacity]: number;
    constructor(cap: number) {
        this[capacity] = cap;
    }

    push(val: number): void {
        if (this[capacity] <= 0) return;

        if (
            this[stacks].length === 0 ||
            this[stacks][this[stacks].length - 1].length >= this[capacity]
        ) {
            this[stacks].push([val]);
        } else {
            this[stacks][this[stacks].length - 1].push(val);
        }
    }

    pop(): number {
        if (this[capacity] <= 0) return -1;
        if (this[stacks].length === 0) return -1;

        const lastStack = this[stacks][this[stacks].length - 1];
        const val = lastStack.pop();
        if (lastStack.length === 0) {
            this[stacks].pop();
        }
        return val ?? -1;
    }

    popAt(index: number): number {
        if (this[capacity] <= 0) return -1;
        if (this[stacks].length === 0) return -1;
        const currentStack = this[stacks][index];
        if (!currentStack) {
            return -1;
        }
        const val = currentStack.pop();
        if (currentStack.length === 0) {
            this[stacks].splice(index, 1);
        }
        return val ?? -1;
    }
}
export default StackOfPlates;
