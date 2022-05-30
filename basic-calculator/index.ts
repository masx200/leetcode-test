export default function calculate(s: string): number {
    const tokens = tokenize(s);
    // console.log(tokens);
    const ast = create_expression(tokens);
    // console.log(ast);
    if (!ast) return 0;
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
            const num1 = calculate_expression(ast.left);
            const num2 = calculate_expression(ast.right);
            const sign = Math.sign(num2) * Math.sign(num1);
            return sign * Math.floor(Math.abs(num1) / Math.abs(num2));
            //整数除法
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
        if (["+", "-", "/", "*"].includes(value)) {
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

export function create_expression(tokens: Tokens): Expression | undefined {
    let expression: Expression | undefined;
    let state = State.initial;
    const pendingtype: ExpressionType[] = [];
    const pendingoperator: ExpressionOperator[] = [];

    const pendingleft: Expression[] = [];
    for (const token of tokens) {
        const tokentype: TokenType =
            typeof token === "number"
                ? TokenType["number"]
                : typeof token === "string"
                ? TokenType["operator"]
                : Array.isArray(token)
                ? TokenType["parentheses"]
                : TokenType["unknown"];
        if (tokentype === TokenType.unknown) throw Error("unknown token");
        state = transform[state][tokentype] ?? State.unknown;
        if (state === State.unknown) throw Error("unknown state");
        console.log(token, tokentype, state);
        console.log(pendingtype, pendingoperator, pendingleft);
    }
    if (valid_end_states.includes(state)) {
        return expression;
    } else {
        throw new Error("unexpected end state");
    }
}
const enum State {
    "initial",
    "unary",
    "parentheses",
    "number",
    "binary",
    "unknown",
}
const valid_end_states = [State["parentheses"], State["number"]];
const enum TokenType {
    "number",
    "operator",
    "parentheses",
    "unknown",
}
const transform: Record<State, Record<TokenType, State>> = {
    [State.initial]: {
        [TokenType.operator]: State.unary,
        [TokenType.number]: State.number,
        [TokenType.parentheses]: State.parentheses,
    },
    [State.unary]: {
        [TokenType.number]: State.number,
        [TokenType.parentheses]: State.parentheses,
    },
    [State.binary]: {
        [TokenType.number]: State.number,
        [TokenType.parentheses]: State.parentheses,
    },
    [State.parentheses]: {
        [TokenType.operator]: State.unary,
    },
    [State.number]: {
        [TokenType.operator]: State.binary,
    },
} as Record<State, Record<TokenType, State>>;
type ExpressionType = Expression["type"];

type ExpressionOperator =
    | UnaryExpression["operator"]
    | BinaryExpression["operator"];
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
