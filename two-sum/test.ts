import { assertEquals } from "../deps.ts";
import { twoSum } from "../mod.ts";

Deno.test("two-sum", () => {
    const examples: {
        input: Parameters<typeof twoSum>;
        output: ReturnType<typeof twoSum>;
    }[] = [
        { input: [[3, 3], 6], output: [0, 1] },
        { input: [[2, 7, 11, 15], 9], output: [0, 1] },
        { input: [[3, 2, 4], 6], output: [1, 2] },
        { input: [Array(25).fill(0).map((_v, i) => i), 30], output: [14, 16] },
    ];
    examples.forEach(({ input, output }) => {
        assertEquals(new Set(twoSum(...input)), new Set(output));
    });
});
