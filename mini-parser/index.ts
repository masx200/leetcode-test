// This is the interface that allows for creating nested lists.

import { NestedInteger } from "./NestedInteger.ts";

const deserializeArray = function (s: string): NestedInteger {
    if (s[0] !== "[") {
        return new NestedInteger(parseInt(s));
    }
    const stack = [];
    let num = 0;
    let negative = false;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === "-") {
            negative = true;
        } else if (isDigit(c)) {
            num = num * 10 + Number(s[i]);
        } else if (c === "[") {
            stack.push(new NestedInteger());
        } else if (c === "," || c === "]") {
            if (isDigit(s[i - 1])) {
                if (negative) {
                    num *= -1;
                }
                stack[stack.length - 1].add(new NestedInteger(num));
            }
            num = 0;
            negative = false;
            if (c === "]" && stack.length > 1) {
                const ni = stack.pop() as NestedInteger;
                stack[stack.length - 1].add(ni);
            }
        }
    }
    if (stack.length >= 1) {
        return stack.pop() as NestedInteger;
    } else {
        throw Error("accident");
    }
};

export default function deserialize(s: string): NestedInteger {
    if (s.startsWith("[")) {
        return deserializeArray(s);
    } else {
        return new NestedInteger(Number(s));
    }
}

const nums = Array.from({
    length: 10,
}).map((_v, i) => String(i));
const isDigit = (ch: string) => {
    return nums.includes(ch);
};
// console.log(deserialize("[123,[456,[789]]]"))
// console.log(deserialize("123456789"))
