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
