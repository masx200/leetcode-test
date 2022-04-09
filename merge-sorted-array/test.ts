import { assertEquals } from "../deps.ts";
import { mergeSortedArray } from "../mod.ts";
Deno.test("merge-sorted-array", () => {
    const examples: {
        input: Parameters<typeof mergeSortedArray>;
        output: Parameters<typeof mergeSortedArray>[0];
    }[] = [
        {
            input: [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3],
            output: [1, 2, 2, 3, 5, 6],
        },
        { input: [[1], 1, [], 0], output: [1] },
        { input: [[0], 0, [1], 1], output: [1] },
    ];
    examples.forEach(({ input, output }) => {
        mergeSortedArray(...input);
        assertEquals(output, input[0]);
    });
});
