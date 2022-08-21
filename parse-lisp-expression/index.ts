function parseAdd(expression: string): Expression {
    const content = expression.slice("(add ".length, -1);
    const list = parseList("(" + content + ")");
    // console.log(list);
    if (Array.isArray(list) && list.length !== 2) {
        throw Error("Invalid expression");
    }
    return buildExpression(["add", ...list]);
}
function parseLet(expression: string): Expression {
    const content = expression.slice("(let ".length, -1);
    const list = parseList("(" + content + ")");
    // console.log(list);
    if (Array.isArray(list) && list.length <3) {
        throw Error("Invalid expression");
    }
    return buildExpression(["let", ...list]);
}

function parseMult(expression: string): Expression {
    const content = expression.slice("(mult ".length, -1);
    const list = parseList("(" + content + ")");
    // console.log(list);
    if (Array.isArray(list) && list.length !== 2) {
        throw Error("Invalid expression");
    }
    return buildExpression(["mult", ...list]);
}
function buildExpression(list: string | number | ListArray): Expression {
    // console.log(list);
    if (Array.isArray(list) && list[0] === "let") {
        const variables = list.slice(1, -1).map(buildExpression);
        // console.log(variables);
        const declarations: VariableDeclarator[] = Array(variables.length / 2)
            .fill(0)
            .map((_, i) => {
                const ident = variables[i * 2];
                if (ident.type !== "Identifier") {
                    throw Error("Invalid identifier");
                }
                return {
                    type: "VariableDeclarator",
                    id: ident,
                    init: variables[i * 2 + 1],
                };
            });
        return {
            type: "LetExpression",

            declarations: declarations,
            return: {
                type: "ReturnStatement",
                argument: buildExpression(list[list.length - 1]),
            },
        };
    }
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
    // console.log(expression);
    const ast = parse(expression);
    // console.log(ast);
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
    // console.log(expression, scope);
    switch (expression.type) {
        case "Identifier":
            return getVariable(scope, expression.name);
        case "NumericLiteral":
            return expression.value;
        case "MultExpression":
            return (
                calculate(expression.left, scope) *
                calculate(expression.right, scope)
            );
        case "AddExpression":
            return (
                calculate(expression.left, scope) +
                calculate(expression.right, scope)
            );
        case "LetExpression": {
            const newScope = new ScopeList(new Map(), scope);
            expression.declarations.forEach((declaration) => {
                newScope.variables.set(
                    declaration.id.name,
                    calculate(declaration.init, newScope),
                );
            });
            return calculate(expression.return.argument, newScope);
        }
    }
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

function getVariable(scope: ScopeList, name: string): number {
    if (!scope.parent && !scope.variables.has(name)) {
        throw Error("Variable not found:" + name);
    }
    const value = scope.variables.get(name);
    if (scope.variables.has(name) && typeof value !== "undefined") {
        return value;
    }
    if (scope.parent) return getVariable(scope.parent, name);
    throw Error("Variable not found:" + name);
}
