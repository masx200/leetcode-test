function evaluate(expression: string): number {}
export default evaluate;
export type Expression =
    | LetExpression
    | NumericLiteral
    | AddExpression
    | MultExpression;
export interface NumericLiteral {
    type: "NumericLiteral";
    value: number;
}
export interface AddExpression {
    type: "AddExpression";
    left: Expression;
    right: Expression;
}
export interface MultExpression {
    type: "MultExpression";
    left: Expression;
    right: Expression;
}
