function buildParenthesizedExpression(token: Token) {
    if (!Array.isArray(token)) {
        throw Error("accident token type");
    }
    const inner_expression = buildExpression(token);
    if (!inner_expression) {
        throw Error("empty expression");
    }
    const current_expression: Expression = {
        type: "ParenthesizedExpression",
        expression: inner_expression,
    };
    return current_expression;
}
function buildNumericLiteralExpression(token: Token) {
    if (typeof token !== "number") {
        throw Error("accident token type");
    }
    const current_expression: Expression = {
        type: "NumericLiteral",
        value: token,
    };
    return current_expression;
}
export default function calculate(s: string): number {
    const tokens = tokenize(s);

    const ast = buildExpression(tokens);

    return evaluate(ast);
}
export function evaluate(ast: Expression): number {
    if (ast.type === "NumericLiteral") {
        return ast.value;
    }
    if (ast.type === "UnaryExpression") {
        if (ast.operator === "-") {
            return -1 * evaluate(ast.argument);
        }
    }
    if (ast.type === "BinaryExpression") {
        if (ast.operator === "-") {
            return (
                evaluate(ast.left) - evaluate(ast.right)
            );
        }
        if (ast.operator === "*") {
            return (
                evaluate(ast.left) * evaluate(ast.right)
            );
        }
        if (ast.operator === "+") {
            return (
                evaluate(ast.left) + evaluate(ast.right)
            );
        }

        if (ast.operator === "/") {
            const num1 = evaluate(ast.left);
            const num2 = evaluate(ast.right);
            const sign = Math.sign(num2) * Math.sign(num1);
            return sign * Math.floor(Math.abs(num1) / Math.abs(num2));
            //整数除法
        }
    }
    if (ast.type === "ParenthesizedExpression") {
        return evaluate(ast.expression);
    }
    throw Error("not support expression");
}
type Token = Tokens extends (infer P)[] ? P : never;

type Tokens = Array<string | number | Tokens>;
function getTokenType(token: Token) {
    const tokentype: TokenType = typeof token === "number"
        ? TokenType["number"]
        : typeof token === "string"
        ? TokenType["operator"]
        : Array.isArray(token)
        ? TokenType["parentheses"]
        : TokenType["unknown"];
    return tokentype;
}
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
export function buildExpression(tokens: Tokens): Expression {
    if (tokens.length === 0) {
        throw Error("empty expression");
    }
    let state = State.initial;
    const pendingtype: ExpressionType[] = [];
    const pendingoperator: ExpressionOperator[] = [];

    const pendingleft: Expression[] = [];
    for (const token of tokens) {
        const tokentype: TokenType = getTokenType(token);
        if (tokentype === TokenType.unknown) throw Error("unknown token");
        state = transform[state][tokentype] ?? State.unknown;
        if (state === State.unknown) throw Error("unknown state");
        if (state === State.unary) {
            pendingtype.push("UnaryExpression");
            if (typeof token === "string") {
                pendingoperator.push(token as ExpressionOperator);
            } else {
                throw Error("accident token type");
            }
        }
        if ([State.parentheses, State.number].includes(state)) {
            const current_expression: Expression = State.number === state
                ? buildNumericLiteralExpression(token)
                : buildParenthesizedExpression(token);
            if (pendingtype.length === 0 && pendingoperator.length === 0) {
                pendingleft.push(current_expression);
            } else {
                const type = pendingtype[pendingtype.length - 1];
                pendingtype.pop();
                const operator = pendingoperator[pendingoperator.length - 1];
                pendingoperator.pop();
                if (type === "BinaryExpression") {
                    const left = pendingleft[pendingleft.length - 1];
                    pendingleft.pop();
                    pendingleft.push({
                        operator: operator as BinaryExpression["operator"],
                        type: "BinaryExpression",
                        left,
                        right: current_expression,
                    });
                }
                if (type === "UnaryExpression") {
                    pendingleft.push({
                        operator: operator as UnaryExpression["operator"],
                        type: "UnaryExpression",
                        argument: current_expression,
                    });
                }
            }
        }

        if (state === State.binary) {
            pendingtype.push("BinaryExpression");
            if (typeof token === "string") {
                pendingoperator.push(token as ExpressionOperator);
            } else {
                throw Error("accident token type");
            }
        }
    }
    if (valid_end_states.includes(state) && pendingleft.length) {
        return pendingleft[0];
    } else {
        throw new Error("unexpected end state or empty expression");
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
        [TokenType.operator]: State.binary,
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
export const OperatorPriority: Record<string, number> = {
    "+": 12,
    "-": 12,
    "*": 13,
    "/": 13,
};
