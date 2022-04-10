import { assertStrictEquals } from "../deps.ts";
import { climbing_stairs, climbing_stairs_bigint } from "../mod.ts";

Deno.test("climbing-stairs", () => {
    const examples: {
        input: number;
        output: ReturnType<typeof climbing_stairs>;
    }[] = [
        { input: 10, output: 89 },
        { input: 1, output: 1 },
        { input: 2, output: 2 },
        { input: 3, output: 3 },
        { input: 45, output: 1836311903 },
        { input: 44, output: 1134903170 },
        { input: 46, output: 1134903170 + 1836311903 },
        { input: 99, output: 354224848179261915075n },
    ];
    examples.forEach(({ input, output }) => {
        assertStrictEquals(climbing_stairs(input), output);
    });
});
Deno.test("climbing_stairs_bigint", () => {
    const examples: {
        input: Parameters<typeof climbing_stairs_bigint>[0];
        output: ReturnType<typeof climbing_stairs_bigint>;
    }[] = [
        { input: 10n, output: 89n },
        { input: 1n, output: 1n },
        { input: 2n, output: 2n },
        { input: 3n, output: 3n },
        { input: 45n, output: 1836311903n },
        { input: 44n, output: 1134903170n },
        { input: 46n, output: 1134903170n + 1836311903n },
        { input: 99n, output: 354224848179261915075n },
    ];
    examples.forEach(({ input, output }) => {
        assertStrictEquals(climbing_stairs_bigint(input), output);
    });
});
