import { assertEquals } from "../deps.ts";
import calculate, { buildExpression, evaluate, tokenize } from "./index.ts";

Deno.test("calculate-simple-expression", () => {
    assertEquals(
        -199 + 5998,
        evaluate({
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
        }),
    );
});
Deno.test("calculate-Parenthesized-expression", () => {
    assertEquals(
        -(-199 + 5998),
        evaluate({
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
        }),
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
    assertEquals(buildExpression(["-", 199, "+", 5998]), {
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
    assertEquals(buildExpression(["-", ["-", 199, "+", 5998]]), {
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
Deno.test("testcases-calculate", () => {
    assertEquals(calculate("1 + 1"), 2);
    assertEquals(calculate(" 2-1 + 2 "), 3);
    assertEquals(calculate("(1+(4+5+2)-3)+(6+8)"), 23);
});
