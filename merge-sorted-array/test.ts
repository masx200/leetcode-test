import { assertEquals } from "../deps.ts";
import merge_Sorted_Array from "./index.ts";
Deno.test("merge-sorted-array", () => {
    const examples: {
        input: Parameters<typeof merge_Sorted_Array>;
        output: Parameters<typeof merge_Sorted_Array>[0];
    }[] = [
        {
            input: [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3],
            output: [1, 2, 2, 3, 5, 6],
        },
        { input: [[1], 1, [], 0], output: [1] },
        { input: [[0], 0, [1], 1], output: [1] },
    ];
    examples.forEach(({ input, output }) => {
        merge_Sorted_Array(...input);
        assertEquals(output, input[0]);
    });
});
