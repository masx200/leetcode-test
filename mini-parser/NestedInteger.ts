import { NestedIntegerType } from "./NestedIntegerType.ts";

export class NestedInteger {
    [k: number]: NestedInteger
    length = 0;
    //     [Symbol.iterator]() {
    //     return Array.prototype[Symbol.iterator].call(this)
    // }
    valueOf() {
        // if (this.isInteger()) {
        return this.value;
        // } else { return 0 }
    }
    [Symbol.iterator]() {
        return Array.prototype[Symbol.iterator].call(this);
    }
    // toString(): string {
    //     if (this.isInteger()) {
    //         return String(this.value)
    //     } else {
    //         return JSON.stringify(this.#array, (k, a) => {
    //             if (a instanceof NestedInteger) {
    //                 return NestedInteger.prototype.toString.call(a)
    //             }
    //             return a
    //         })
    //     }
    // }
    value: number;
    // #array: NestedInteger[] = []
    type: NestedIntegerType;
    //    If value is provided, then it holds a single integer
    //    Otherwise it holds an empty nested list
    constructor(value?: number) {
        if (typeof value === "number") {
            this.value = value;
            this.type = NestedIntegerType.interger;
        } else {
            this.type = NestedIntegerType.array;
            this.value = 0;
        }
    }

    //    Return true if this NestedInteger holds a single integer, rather than a nested list.
    isInteger(): boolean {
        return this.type === NestedIntegerType.interger;
    }

    //    Return the single integer that this NestedInteger holds, if it holds a single integer
    //    Return null if this NestedInteger holds a nested list
    getInteger(): number | null {
        if (this.isInteger()) {
            return this.value;
        } else {
            return null;
        }
    }

    //    Set this NestedInteger to hold a single integer equal to value.
    setInteger(value: number) {
        if (this.isInteger()) {
            this.value = value;
        } else {
            throw Error("not integer can not set");
        }
    }

    //    Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
    add(elem: NestedInteger) {
        if (this.type === NestedIntegerType.array) {
            // this.#array.push(elem)
            Array.prototype.push.call(this, elem);
        } else {
            throw Error("not array can not add");
        }
    }

    //    Return the nested list that this NestedInteger holds,
    //    or an empty list if this NestedInteger holds a single integer
    getList(): NestedInteger[] {
        return Array.from(this);
    }
}
