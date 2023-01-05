import { NestedInteger } from "./NestedInteger.ts";

function deserializeArray(s: string): NestedInteger {
    if (s[0] !== "[") {
        return new NestedInteger(parseInt(s));
    }
    const stack: NestedInteger[] = [];
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
}

export default function deserialize(s: string): NestedInteger {
    if (s.startsWith("[")) {
        return deserializeArray(s);
    } else {
        return new NestedInteger(Number(s));
    }
}

const nums = new Set(
    Array.from({
        length: 10,
    }).map((_v, i) => String(i)),
);
function isDigit(ch: string) {
    return nums.has(ch);
}
