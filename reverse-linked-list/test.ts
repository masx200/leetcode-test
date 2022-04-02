import { assert, equal } from "../deps.ts";
import { ArrayToListNode, ListNodeToArray, reverseLinkedList } from "../mod.ts";

Deno.test("reverse-linked-list", () => {
    const testData: { input: Array<number>; output: Array<number> }[] = [
        {
            input: [1, 2, 3, 4, 5],
            output: [5, 4, 3, 2, 1],
        },
        {
            input: [1, 2],
            output: [2, 1],
        },
        {
            input: [],
            output: [],
        },
    ];

    assert(
        testData.every(
            ({ input, output }) =>
                equal(
                    ListNodeToArray(reverseLinkedList(ArrayToListNode(input))),
                    output,
                ) &&
                equal(
                    ListNodeToArray(reverseLinkedList(ArrayToListNode(output))),
                    input,
                ),
        ),
    );
});
