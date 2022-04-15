import { assertEquals } from "../deps.ts";
import { ArrayToListNode, ListNodeToArray } from "../mod.ts";
import mergeTwoLists from "./index.ts";
Deno.test("merge-two-lists", () => {
    const examples: {
        input: [Array<number>, Array<number>];
        output: Array<number>;
    }[] = [
        {
            input: [
                [1, 2, 4],
                [1, 3, 4],
            ],
            output: [1, 1, 2, 3, 4, 4],
        },
        {
            input: [
                [],
                [],
            ],
            output: [],
        },
        {
            input: [
                [],
                [0],
            ],
            output: [0],
        },
    ];
    examples.forEach(({ input, output }) => {
        assertEquals(
            output,
            ListNodeToArray(
                mergeTwoLists(
                    ArrayToListNode(input[0]),
                    ArrayToListNode(input[1]),
                ),
            ),
        );
    });
});
