function parseNumeric(expression: string): Expression {
    return { type: "NumericLiteral", value: Number(expression) };
}

function evaluate(expression: string): number {
    const ast = parse(expression);
    return calculate(ast);
}
function parse(expression: string): Expression {
    if (expression.length === 0) {
        throw new Error("Empty expression");
    }

    if (/^\d+$/g.test(expression)) return parseNumeric(expression);
    if (expression.startsWith("(add") && expression.endsWith(")")) {
        return parseAdd(expression);
    }
    if (expression.startsWith("(mult") && expression.endsWith(")")) {
        return parseMult(expression);
    }
    if (expression.startsWith("(let") && expression.endsWith(")")) {
        return parseLet(expression);
    }
    throw new Error("Unsupported expression");
}

function parseLet(expression: string): Expression {
    const content = expression.slice(4, -1);
}

function calculate(expression: Expression): number {}
export type Expression =
    | LetExpression
    | NumericLiteral
    | AddExpression
    | MultExpression;
export class ScopeList {
    constructor(
        public readonly variables: Map<string, number> = new Map(),
        public parent: ScopeList | null | undefined = null
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

function parseAdd(expression: string): Expression {
    const content = expression.slice(4, -1);
}

function parseMult(expression: string): Expression {
    const content = expression.slice(5, -1);
}
