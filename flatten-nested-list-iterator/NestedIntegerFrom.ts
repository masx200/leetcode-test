import { NestedInteger } from "../mini-parser/NestedInteger.ts";
import { NestedArray } from "./NestedArray.ts";

export function NestedIntegerFrom(array: NestedArray | number): NestedInteger {
    if (typeof array === "number") {
        return new NestedInteger(array);
    }
    const nestedInteger = new NestedInteger();

    for (const value of array) {
        if (typeof value === "number") {
            nestedInteger.add(new NestedInteger(value));
        } else if (Array.isArray(value)) {
            nestedInteger.add(NestedIntegerFrom(value));
        } else throw Error("invalid input type");
    }
    return nestedInteger;
}
