import { assertStrictEquals } from "../deps.ts";
import { climbing_stairs } from "../mod.ts";

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
