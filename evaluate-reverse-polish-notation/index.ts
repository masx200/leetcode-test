export default function evalRPN(tokens: string[]): number {
    const stack: (string | number)[] = [];

    for (const char of tokens) {
        if (isNumber(char)) {
            stack.push(Number(char));
        } else {
            const num2 = stack.pop();
            const num1 = stack.pop();
            if (typeof num2 !== "number") {
                throw Error("number expected");
            }
            if (typeof num1 !== "number") {
                throw Error("number expected");
            }
            if (char === "+") {
                stack.push(num1 + num2);
            } else if (char === "-") {
                stack.push(num1 - num2);
            } else if (char === "*") {
                stack.push(num1 * num2);
            } else if (char === "/") {
                const sign = Math.sign(num2) * Math.sign(num1);
                stack.push(sign * Math.floor(Math.abs(num1) / Math.abs(num2)));
            } else throw Error("unknown operator:" + char);
        }
    }
    return Number(stack[0]);
}
export function isNumber(token: string) {
    return /\d+/g.test(token);
}
