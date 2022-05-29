export default function calculate(s: string): number {
    const tokens = tokenize(s);
    console.log(tokens);
    const ast = create_expression(tokens);
    console.log(ast);
    return calculate_expression(ast);
}
export function calculate_expression(ast: Expression): number {
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
            //整数除法
            return Math.floor(
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

export function tokenize(s: string): Tokens {
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

export function create_expression(tokens: Tokens): Expression {
    throw Error("not implemented");
}
type State =
    | "initial"
    | "unary-operator"
    | "parentheses"
    | "number"
    | "binary-operator";
const valid_end_states = ["parentheses", "number"];
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
