import { assertEquals } from "../deps.ts";

function calculate(s: string): number {
    const tokens = tokenize(s);
    console.log(tokens);
    const ast = createast(tokens);
    console.log(ast);
    return calcast(ast);
}
Deno.test("simple-calculate", () => {
    assertEquals(calculate("-199+5998"), -199 + 5998);
});
Deno.test("simple-tokenize", () => {
    assertEquals(tokenize("-199+5998"), ["-", 199, "+", 5998]);
});
Deno.test("Parenthesized-tokenize", () => {
    assertEquals(tokenize("8+(-199+5998)+87"), [
        8,
        "+",
        ["-", 199, "+", 5998],
        "+",
        87,
    ]);
});
Deno.test("Parenthesized-calculate", () => {
    assertEquals(calculate("-(-199+5998)+87"), -(-199 + 5998) + 87);
});
function calcast(ast: Expression): number {
    if (ast.type === "NumericLiteral") {
        return ast.value;
    }
    if (ast.type === "UnaryExpression") {
        if (ast.operator === "-") {
            return -1 * calcast(ast.argument);
        }
    }
    if (ast.type === "BinaryExpression") {
        if (ast.operator === "-") {
            return calcast(ast.left) - calcast(ast.right);
        }
        if (ast.operator === "*") {
            return calcast(ast.left) * calcast(ast.right);
        }
        if (ast.operator === "+") {
            return calcast(ast.left) + calcast(ast.right);
        }

        if (ast.operator === "/") {
            return calcast(ast.left) / calcast(ast.right);
        }
    }
    if (ast.type === "ParenthesizedExpression") {
        return calcast(ast.expression);
    }
    throw Error("not implemented");
}
type Tokens = Array<string | number | Tokens>;

function tokenize(s: string): Tokens {
    const tokens: Tokens = [];
    const stack: Tokens[] = [tokens];
    for (let i = 0; i < s.length; i++) {
        const value = s[i];
        if (/\d/.test(value)) {
            //只处理整数
            const digits: string[] = [value];

            while (/\d/.test(s[i + 1])) {
                digits.push(s[i + 1]);
                i++;
            }

            const num = Number(digits.join(""));
            stack[stack.length - 1].push(num);
        }
        if (["+", "-"].includes(value)) {
            stack[stack.length - 1].push(value);
        }
        if (value === "(") {
            stack.push([]);
        }
        if (value === ")") {
            if (stack.length <= 0) throw Error("parentheses mismatch");
            const last = stack[stack.length - 1];
            stack.pop();
            stack[stack.length - 1].push(last);
        }
    }
    if (stack.length > 1) throw Error("parentheses mismatch");
    return tokens;
}

function createast(tokens: Tokens): Expression {}
type Expression =
    | BinaryExpression
    | NumericLiteral
    | UnaryExpression
    | ParenthesizedExpression;
interface ParenthesizedExpression {
    type: "ParenthesizedExpression";
    expression: Expression;
}
interface NumericLiteral {
    type: "NumericLiteral";
    value: number;
}
interface UnaryExpression {
    type: "UnaryExpression";
    operator: "void" | "throw" | "delete" | "!" | "+" | "-" | "~" | "typeof";
    argument: Expression;
    prefix: boolean;
}
interface BinaryExpression {
    type: "BinaryExpression";
    operator:
        | "+"
        | "-"
        | "/"
        | "%"
        | "*"
        | "**"
        | "&"
        | "|"
        | ">>"
        | ">>>"
        | "<<"
        | "^"
        | "=="
        | "==="
        | "!="
        | "!=="
        | "in"
        | "instanceof"
        | ">"
        | "<"
        | ">="
        | "<="
        | "|>";
    left: Expression;
    right: Expression;
}
