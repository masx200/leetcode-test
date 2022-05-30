import { assertEquals } from "../deps.ts";
import calculate, {
    calculate_expression,
    create_expression,
    tokenize,
} from "./index.ts";

Deno.test("calculate-simple-expression", () => {
    assertEquals(
        -199 + 5998,
        calculate_expression({
            type: "BinaryExpression",
            operator: "+",
            left: {
                operator: "-",
                type: "UnaryExpression",
                argument: { type: "NumericLiteral", value: 199 },
            },
            right: {
                type: "NumericLiteral",
                value: 5998,
            },
        })
    );
});
Deno.test("calculate-Parenthesized-expression", () => {
    assertEquals(
        -(-199 + 5998),
        calculate_expression({
            type: "UnaryExpression",
            operator: "-",
            argument: {
                type: "ParenthesizedExpression",
                expression: {
                    type: "BinaryExpression",
                    operator: "+",
                    left: {
                        operator: "-",
                        type: "UnaryExpression",
                        argument: { type: "NumericLiteral", value: 199 },
                    },
                    right: {
                        type: "NumericLiteral",
                        value: 5998,
                    },
                },
            },
        })
    );
});
Deno.test("simple-tokenize", () => {
    assertEquals(tokenize("-199+5998"), ["-", 199, "+", 5998]);
});
Deno.test("Parenthesized-tokenize", () => {
    assertEquals(tokenize("8+(-199+5998)+87"), [
        8,
        "+",
        ["-", 199, "+", 5998],
        "+",
        87,
    ]);
});
Deno.test("simple-expression", () => {
    assertEquals(create_expression(["-", 199, "+", 5998]), {
        type: "BinaryExpression",
        operator: "+",
        left: {
            operator: "-",
            type: "UnaryExpression",
            argument: { type: "NumericLiteral", value: 199 },
        },
        right: {
            type: "NumericLiteral",
            value: 5998,
        },
    });
});
Deno.test("Parenthesized-expression", () => {
    assertEquals(create_expression(["-", ["-", 199, "+", 5998]]), {
        operator: "-",
        type: "UnaryExpression",
        argument: {
            type: "ParenthesizedExpression",
            expression: {
                type: "BinaryExpression",
                operator: "+",
                left: {
                    operator: "-",
                    type: "UnaryExpression",
                    argument: { type: "NumericLiteral", value: 199 },
                },
                right: {
                    type: "NumericLiteral",
                    value: 5998,
                },
            },
        },
    });
});
Deno.test("simple-calculate", () => {
    assertEquals(calculate("-199+5998"), -199 + 5998);
});
Deno.test("Parenthesized-calculate", () => {
    assertEquals(calculate("-(-199+5998)+87"), -(-199 + 5998) + 87);
});
