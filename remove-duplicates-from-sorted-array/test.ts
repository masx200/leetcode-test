import removeDuplicates from "./index.ts";
import { assertEquals } from "../deps.ts";
Deno.test("remove-duplicates-from-sorted-array", () => {
    const examples: { input: number[]; output: number[] }[] = [
        { input: [1, 1, 2], output: [1, 2] },
        { output: [0, 1, 2, 3, 4], input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4] },
        {
            output: Array.from({ length: 20000 }).map((_i, v) => v),
            input: Array.from({ length: 40000 }).map((_i, v) =>
                Math.floor(v / 2)
            ),
        },
    ];
    examples.forEach(({ input, output }) => {
        const length = removeDuplicates(input);
        assertEquals(input.slice(0, length), output);
    });
});
