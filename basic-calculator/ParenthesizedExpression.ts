import { Expression } from "./Expression.ts";

export interface ParenthesizedExpression {
    type: "ParenthesizedExpression";
    expression: Expression;
}
