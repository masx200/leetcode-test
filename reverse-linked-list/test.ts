import { assert, equal } from "../deps.ts";
import {
    ArrayToListNode,
    ListNodeToArray,
    reverse_Linked_List,
} from "../mod.ts";

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
                    ListNodeToArray(
                        reverse_Linked_List(ArrayToListNode(input)),
                    ),
                    output,
                ) &&
                equal(
                    ListNodeToArray(
                        reverse_Linked_List(ArrayToListNode(output)),
                    ),
                    input,
                ),
        ),
    );
});
