import { Expression } from './Expression.ts';

export interface BinaryExpression {
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
