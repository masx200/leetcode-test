function parseAdd(expression: string): Expression {
    const content = expression.slice("(add ".length, -1);
    const list = parseList("(" + content + ")");
    console.log(list);
    if (Array.isArray(list) && list.length !== 2) {
        throw Error("Invalid expression");
    }
    return buildExpression(["add", ...list]);
}
function parseLet(expression: string): Expression {
    const content = expression.slice("(let ".length, -1);
    const list = parseList("(" + content + ")");
    console.log(list);
    if (Array.isArray(list) && list.length == 0) {
        throw Error("Invalid expression");
    }
    return buildExpression(["let", ...list]);
}

function parseMult(expression: string): Expression {
    const content = expression.slice("(mult ".length, -1);
    const list = parseList("(" + content + ")");
    console.log(list);
    if (Array.isArray(list) && list.length !== 2) {
        throw Error("Invalid expression");
    }
    return buildExpression(["mult", ...list]);
}
function buildExpression(list: string | number | ListArray): Expression {
    console.log(list);
    if (typeof list === "string") {
        return { type: "Identifier", name: list };
    }
    if (typeof list === "number") {
        return parseNumeric(list);
    }

    if (Array.isArray(list) && list.length == 0) {
        throw Error("Invalid expression");
    }
    if (Array.isArray(list) && list[0] === "mult") {
        return {
            type: "MultExpression",

            left: buildExpression(list[1]),
            right: buildExpression(list[2]),
        };
    }
    if (Array.isArray(list) && list[0] === "add") {
        return {
            type: "AddExpression",

            left: buildExpression(list[1]),
            right: buildExpression(list[2]),
        };
    }
    throw Error("Not implemented");
}
export type ListArray = Array<ListArray | string | number>;
function parseList(expression: string): ListArray {
    return JSON.parse(
        expression
            .replaceAll("(", "[")
            .replaceAll(")", "]")
            .replaceAll(" ", ",")
            .replaceAll(/[a-z]([a-z]|\d)*/g, (a) => '"' + a + '"'),
    );
}

function parseNumeric(expression: string | number): Expression {
    return { type: "NumericLiteral", value: Number(expression) };
}

function evaluate(expression: string): number {
    console.log(expression);
    const ast = parse(expression);
    console.log(ast);
    return calculate(ast, new ScopeList());
}
function parse(expression: string): Expression {
    if (expression.length === 0) {
        throw new Error("Empty expression");
    }

    if (/^\d+$/g.test(expression)) return parseNumeric(expression);
    if (expression.startsWith("(add ") && expression.endsWith(")")) {
        return parseAdd(expression);
    }
    if (expression.startsWith("(mult ") && expression.endsWith(")")) {
        return parseMult(expression);
    }
    if (expression.startsWith("(let ") && expression.endsWith(")")) {
        return parseLet(expression);
    }
    if (/^[a-z]([a-z]|\d)*$/g.test(expression)) {
        return parseIdentifier(expression);
    }
    throw new Error("Unsupported expression");
}
function parseIdentifier(expression: string): Expression {
    return { type: "Identifier", name: expression };
}

function calculate(expression: Expression, scope: ScopeList): number {
    console.log(expression, scope);
    switch (expression.type) {
        case "NumericLiteral":
            return expression.value;
    }
    throw Error("Not implemented");
}
export type Expression =
    | Identifier
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
