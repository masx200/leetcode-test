import { Expression } from "./Expression.ts";
import { Token } from "./Token.ts";

export function buildNumericLiteralExpression(token: Token) {
    if (typeof token !== "number") {
        throw Error("accident token type");
    }
    const current_expression: Expression = {
        type: "NumericLiteral",
        value: token,
    };
    return current_expression;
}
