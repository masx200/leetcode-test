import { assertEquals } from "../deps.ts";
import removeDuplicates from "./index.ts";

Deno.test("remove-duplicates-from-sorted-array", () => {
    const examples: { input: number[]; output: number[] }[] = [
        { input: [1, 1, 2], output: [1, 2] },
        { input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4], output: [0, 1, 2, 3, 4] },
        { input: [1, 1, 2, 3, 3], output: [1, 2, 3] },
        {
            input: Array.from({ length: 40000 }).map((_i, v) =>
                Math.floor(v / 2)
            ),
            output: Array.from({ length: 20000 }).map((_i, v) => v),
        },
    ];
    examples.forEach(({ input, output }) => {
        const length = removeDuplicates(input);
        assertEquals(input.slice(0, length), output);
    });
});
