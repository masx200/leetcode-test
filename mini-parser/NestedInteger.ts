import { NestedIntegerType } from "./NestedIntegerType.ts";

export type NestedIntegerJSON = number | Array<NestedIntegerJSON>;
export class NestedInteger extends Array<NestedInteger> {
    constructor(value?: number) {
        super();
        if (typeof value === "number") {
            this.#value = value;
            this.#type = NestedIntegerType.integer;
        } else {
            this.#type = NestedIntegerType.array;
            this.#value = 0;
        }
        this.length = 0;
    }
    toJSON(): NestedIntegerJSON {
        if (this.isInteger()) {
            return this.#value;
        } else {
            return this.getList().map((a) => a.toJSON());
        }
    }
    [k: number]: NestedInteger;

    valueOf() {
        return this.#value;
    }
    [Symbol.iterator]() {
        return Array.prototype[Symbol.iterator].call(this);
    }
    #value: number;
    #type: NestedIntegerType;

    isInteger(): boolean {
        return this.#type === NestedIntegerType.integer;
    }

    getInteger(): number | null {
        if (this.isInteger()) {
            return this.#value;
        } else {
            return null;
        }
    }

    setInteger(value: number) {
        if (this.isInteger()) {
            this.#value = value;
        } else {
            throw Error("not integer can not set");
        }
    }

    add(elem: NestedInteger) {
        if (this.#type === NestedIntegerType.array) {
            Array.prototype.push.call(this, elem);
        } else {
            throw Error("not array can not add");
        }
    }

    getList(): NestedInteger[] {
        return Array.from(this);
    }
}
