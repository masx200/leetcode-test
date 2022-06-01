import { buildExpression } from "./buildExpression.ts";
import { Expression } from "./Expression.ts";
import { Token } from "./Token.ts";

export function buildParenthesizedExpression(token: Token) {
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
