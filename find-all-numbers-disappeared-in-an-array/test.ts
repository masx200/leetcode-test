import { find_all_numbers_disappeared_in_an_array } from "../mod.ts";
import { assertEquals } from "../deps.ts";

Deno.test("find-all-numbers-disappeared-in-an-array", () => {
    const examples: {
        input: Parameters<typeof find_all_numbers_disappeared_in_an_array>[0];
        output: ReturnType<typeof find_all_numbers_disappeared_in_an_array>;
    }[] = [
        { input: [4, 3, 2, 7, 8, 2, 3, 1], output: [5, 6] },
        { input: [1, 1], output: [2] },
        { input: [10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11], output: [] },
    ];
    examples.forEach(({ input, output }) => {
        assertEquals(output, find_all_numbers_disappeared_in_an_array(input));
    });
});

