import { assertEquals } from "../deps.ts";
export default function calculate(s: string): number {
    const tokens = tokenize(s);
    console.log(tokens);
    const ast = create_expression(tokens);
    console.log(ast);
    return calculate_expression(ast);
}
Deno.test("calculate-expression", () => {
    assertEquals(
        -199 + 5998,
        calculate_expression({
            type: "BinaryExpression",
            operator: "+",
            left: {
                operator: "-",
                type: "UnaryExpression",
                argument: { type: "NumericLiteral", value: 199 },
            },
            right: {
                type: "NumericLiteral",
                value: 5998,
            },
        }),
    );
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
Deno.test("simple-expression", () => {
    assertEquals(create_expression(["-", 199, "+", 5998]), {
        type: "BinaryExpression",
        operator: "+",
        left: {
            operator: "-",
            type: "UnaryExpression",
            argument: { type: "NumericLiteral", value: 199 },
        },
        right: {
            type: "NumericLiteral",
            value: 5998,
        },
    });
});

Deno.test("simple-calculate", () => {
    assertEquals(calculate("-199+5998"), -199 + 5998);
});

Deno.test("Parenthesized-calculate", () => {
    assertEquals(calculate("-(-199+5998)+87"), -(-199 + 5998) + 87);
});
function calculate_expression(ast: Expression): number {
    if (ast.type === "NumericLiteral") {
        return ast.value;
    }
    if (ast.type === "UnaryExpression") {
        if (ast.operator === "-") {
            return -1 * calculate_expression(ast.argument);
        }
    }
    if (ast.type === "BinaryExpression") {
        if (ast.operator === "-") {
            return (
                calculate_expression(ast.left) - calculate_expression(ast.right)
            );
        }
        if (ast.operator === "*") {
            return (
                calculate_expression(ast.left) * calculate_expression(ast.right)
            );
        }
        if (ast.operator === "+") {
            return (
                calculate_expression(ast.left) + calculate_expression(ast.right)
            );
        }

        if (ast.operator === "/") {
            return (
                calculate_expression(ast.left) / calculate_expression(ast.right)
            );
        }
    }
    if (ast.type === "ParenthesizedExpression") {
        return calculate_expression(ast.expression);
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
    if (stack.length !== 1) throw Error("parentheses mismatch");
    return tokens;
}

function create_expression(tokens: Tokens): Expression {
    throw Error("not implemented");
}
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
