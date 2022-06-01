/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

import { NestedInteger } from "../mini-parser/NestedInteger.ts";
function* NestedIntegerIterator(nestedList: NestedInteger[]) {
    nestedList = Array.from(nestedList);
    while (nestedList.length) {
        const nestedInteger = nestedList.shift();
        if (!nestedInteger) {
            return;
        }
        if (nestedInteger.isInteger()) {
            yield nestedInteger.getInteger();
        } else {
            nestedList.unshift(...nestedInteger.getList());
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

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new NestedIterator(nestedList)
 * var a: number[] = []
 * while (obj.hasNext()) a.push(obj.next());
 */
export default NestedIterator;
