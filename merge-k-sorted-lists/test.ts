import mergeKLists from "./index.ts";
import { longlonginput } from "./longlonginput.ts";
Deno.test("merge-k-sorted-lists", () => {
    const examples = [
        {
            input: [
                [1, 4, 5],
                [1, 3, 4],
                [2, 6],
            ],
            output: [1, 1, 2, 3, 4, 4, 5, 6],
        },
        {
            input: [],
            output: [],
        },
        {
            input: [[]],
            output: [],
        },
        {
            input: longlonginput,
            output: longlonginput.flat().sort((a, b) => a - b),
        },
    ];
    examples.forEach(({ input, output }) => {
        assertEquals(
            output,
            ListNodeToArray(mergeKLists(input.map((a) => ArrayToListNode(a)))),
        );
    });
});
import { assertEquals } from "../deps.ts";
import { ArrayToListNode, ListNodeToArray } from "../mod.ts";
