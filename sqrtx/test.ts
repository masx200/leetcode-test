import { assertAlmostEquals, assertEquals } from "../deps.ts";
import { sqrt_x, SqrtNumber } from "../mod.ts";
Deno.test("sqrt-x", () => {
    const examples: {
        input: Parameters<typeof sqrt_x>[0];
        output: ReturnType<typeof sqrt_x>;
    }[] = [
        { input: 0, output: 0 },
        { input: 1, output: 1 },
        { input: 4, output: 2 },
        { input: 8, output: 2 },
        { input: 9, output: 3 },
        { input: 2, output: 1 },
        { input: 3, output: 1 },
        { input: 5, output: 2 },
        { input: 6, output: 2 },
        { input: 7, output: 2 },
        { input: 10, output: 3 },
        { input: 11, output: 3 },
        { input: 12, output: 3 },
        { input: 13, output: 3 },
        { input: 14, output: 3 },
        { input: 15, output: 3 },
        { input: 16, output: 4 },
        { input: 17, output: 4 },
    ];
    examples.forEach(({ input, output }) => {
        assertEquals(output, sqrt_x(input));
    });
});

Deno.test("SqrtNumber", () => {
    const examples: {
        input: Parameters<typeof SqrtNumber>[0];
        output: ReturnType<typeof SqrtNumber>;
    }[] = [
        { input: 0, output: 0 },
        { input: 1, output: 1 },
        { input: 4, output: 2 },
        { input: 8, output: 2.8284271247461903 },
        { input: 9, output: 3 },
        { input: 2, output: 1.4142135623730951 },
        { input: 3, output: 1.7320508075688772 },
        { input: 5, output: 2.23606797749979 },
        { input: 6, output: 2.449489742783178 },
        { input: 7, output: 2.6457513110645907 },
        { input: 10, output: 3.1622776601683795 },
        { input: 11, output: 3.3166247903554 },
        { input: 12, output: 3.4641016151377544 },
        { input: 13, output: 3.605551275463989 },
        { input: 14, output: 3.7416573867739413 },
        { input: 15, output: 3.872983346207417 },
        { input: 16, output: 4 },
        { input: 17, output: 4.123105625617661 },
    ];
    examples.forEach(({ input, output }) => {
        assertAlmostEquals(output, SqrtNumber(input, 1e-10));
    });
});
