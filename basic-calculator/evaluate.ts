import { Expression } from "./Expression.ts";

export function evaluate(ast: Expression): number {
    if (ast.type === "NumericLiteral") {
        return ast.value;
    }
    if (ast.type === "UnaryExpression") {
        if (ast.operator === "-") {
            return -1 * evaluate(ast.argument);
        }
    }
    if (ast.type === "BinaryExpression") {
        if (ast.operator === "-") {
            return evaluate(ast.left) - evaluate(ast.right);
        }
        if (ast.operator === "*") {
            return evaluate(ast.left) * evaluate(ast.right);
        }
        if (ast.operator === "+") {
            return evaluate(ast.left) + evaluate(ast.right);
        }

        if (ast.operator === "/") {
            const num1 = evaluate(ast.left);
            const num2 = evaluate(ast.right);
            const sign = Math.sign(num2) * Math.sign(num1);
            return sign * Math.floor(Math.abs(num1) / Math.abs(num2));
            //整数除法
        }
    }
    if (ast.type === "ParenthesizedExpression") {
        return evaluate(ast.expression);
    }
    throw Error("not support expression");
}
