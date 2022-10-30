import { BinaryExpression } from './BinaryExpression.ts';
import { buildNumericLiteralExpression } from './buildNumericLiteralExpression.ts';
import { buildParenthesizedExpression } from './buildParenthesizedExpression.ts';
import { Expression } from './Expression.ts';
import { ExpressionOperator } from './ExpressionOperator.ts';
import { ExpressionType } from './ExpressionType.ts';
import { getTokenType } from './getTokenType.ts';
import { State } from './State.ts';
import { Tokens } from './Tokens.ts';
import { TokenType } from './TokenType.ts';
import { transform } from './transform.ts';
import { UnaryExpression } from './UnaryExpression.ts';
import { valid_end_states } from './valid_end_states.ts';

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
                    //优先级更高
                    const left = pendingleft[pendingleft.length - 1];

                    if (
                        left.type === "BinaryExpression" &&
                        ["*", "/"].includes(operator) &&
                        ["+", "-"].includes(left.operator)
                    ) {
                        left.right = {
                            type: "BinaryExpression",
                            operator: operator as BinaryExpression["operator"],
                            left: left.right,
                            right: current_expression,
                        };
                    } else {
                        pendingleft.pop();
                        pendingleft.push({
                            operator: operator as BinaryExpression["operator"],
                            type: "BinaryExpression",
                            left,
                            right: current_expression,
                        });
                    }
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
