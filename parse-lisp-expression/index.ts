function evaluate(expression: string): number {}

export type Expression =
    | LetExpression
    | NumericLiteral
    | AddExpression
    | MultExpression;
export class ScopeList {
    constructor(
        public readonly variables: Map<string, number> = new Map(),
        public parent: ScopeList | null | undefined = null,
    ) {}
}
export interface VariableDeclarator {
    type: "VariableDeclarator";
    id: LVal;
    init: Expression;
}
export type LVal = Identifier;
export interface LetExpression {
    type: "LetExpression";
    declarations: Array<VariableDeclarator>;
    return: ReturnStatement;
}
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
export interface ReturnStatement {
    type: "ReturnStatement";
    argument: Expression;
}
export interface Identifier {
    type: "Identifier";
    name: string;
}
export default evaluate;
