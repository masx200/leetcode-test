import removeDuplicates2 from "./index.ts";
import { assertEquals } from "../deps.ts";
Deno.test("remove-duplicates-from-sorted-array-ii", () => {
    const examples: { input: number[]; output: number[] }[] = [
        { input: [1, 1, 1, 2, 2, 3], output: [1, 1, 2, 2, 3] },
        { input: [0, 0, 1, 1, 1, 1, 2, 3, 3], output: [0, 0, 1, 1, 2, 3, 3] },
    ];
    examples.forEach(({ input, output }) => {
        const length = removeDuplicates2(input);
        assertEquals(input.slice(0, length), output);
    });
});
