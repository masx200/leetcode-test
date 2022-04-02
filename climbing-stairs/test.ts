import { assertStrictEquals } from "../deps.ts";
import { climbStairs } from "../mod.ts";

Deno.test("climbing-stairs", () => {
    const examples: { input: number; output: number }[] = [
        { input: 10, output: 89 },
        { input: 1, output: 1 },
        { input: 2, output: 2 },
        { input: 3, output: 3 },
    ];
    examples.forEach(({ input, output }) => {
        assertStrictEquals(climbStairs(input), output);
    });
});
