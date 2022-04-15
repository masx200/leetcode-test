import removeDuplicates2 from "./index.ts";
import { assertEquals } from "../deps.ts";
import { ArrayToListNode } from "../reverse-linked-list/ArrayToListNode.ts";
import { ListNodeToArray } from "../reverse-linked-list/ListNodeToArray.ts";
Deno.test("remove-duplicates-from-sorted-list-ii", () => {
    const examples: { input: number[]; output: number[] }[] = [
        { input: [1, 2, 3, 3, 4, 4, 5], output: [1, 2, 5] },
        { input: [1, 1, 1, 2, 3], output: [2, 3] },
    ];
    examples.forEach(({ input, output }) => {
        assertEquals(
            ListNodeToArray(removeDuplicates2(ArrayToListNode(input))),
            output
        );
    });
});
