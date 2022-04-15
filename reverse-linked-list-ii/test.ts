import { assertEquals } from "../deps.ts";
import {
    ArrayToListNode,
    ListNodeToArray,
    reverse_linked_list_ii,
} from "../mod.ts";

Deno.test("reverse_linked_list_ii", () => {
    const examples: {
        input: [Array<number>, number, number];

        output: Array<number>;
    }[] = [
        { input: [[1, 2, 3, 4, 5], 2, 4], output: [1, 4, 3, 2, 5] },
        { input: [[5], 1, 1], output: [5] },
        { input: [[3, 5], 1, 1], output: [3, 5] },
        { input: [[3, 5], 1, 2], output: [5, 3] },
        { input: [[1, 2, 3], 1, 3], output: [3, 2, 1] },
        { input: [[1, 2, 3, 4, 5], 3, 4], output: [1, 2, 4, 3, 5] },
    ];
    examples.forEach(({ input, output }) => {
        assertEquals(
            output,
            ListNodeToArray(
                reverse_linked_list_ii(
                    ArrayToListNode(input[0]),
                    input[1],
                    input[2],
                ),
            ),
        );
    });
});
