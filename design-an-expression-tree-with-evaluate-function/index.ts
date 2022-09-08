export { TreeBuilder as default };
class TreeBuilder {
    buildTree(postfix: string[]): Node {
        const stack: Node[] = [];

        for (const char of postfix) {
            if (isNumber(char)) {
                stack.push(new Node(char));
            } else {
                const num2 = stack.pop();
                const num1 = stack.pop();
                if (typeof num2 == "undefined") {
                    throw Error("number expected");
                }
                if (typeof num1 == "undefined") {
                    throw Error("number expected");
                }
                if (char === "+") {
                    stack.push(new Node(char, num1, num2));
                } else if (char === "-") {
                    stack.push(new Node(char, num1, num2));
                } else if (char === "*") {
                    stack.push(new Node(char, num1, num2));
                } else if (char === "/") {
                    stack.push(new Node(char, num1, num2));
                } else throw Error("unknown operator:" + char);
            }
        }
        return stack[0];
    }
}
export class Node {
    constructor(
        public val: string = "",
        public left: Node | null = null,
        public right: Node | null = null,
    ) {}
    evaluate(): number {
        if (this.left == null && this.right == null) return Number(this.val);
        if (!(this.left && this.right)) {
            throw Error("accident");
        }
        const l = this.left.evaluate();
        const r = this.right.evaluate();

        switch (this.val) {
            case "+":
                return l + r;
            case "-":
                return l - r;
            case "*":
                return l * r;
            case "/":
                return Math.trunc(l / r);
        }
        throw Error("unknown operator:" + this.val);
    }
}
export function isNumber(token: string) {
    return /\d+/g.test(token);
}
