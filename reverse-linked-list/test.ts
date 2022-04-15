import { assertEquals } from "../deps.ts";
import {
    ArrayToListNode,
    ListNode,
    ListNodeToArray,
    reverse_Linked_List,
} from "../mod.ts";
Deno.test("ListNodeToArray,ArrayToListNode", () => {
    assertEquals(
        ListNodeToArray(new ListNode(5, null)),
        ListNodeToArray({ val: 5, next: null }),
    );

    assertEquals(ArrayToListNode([]), ArrayToListNode([]));
    assertEquals(
        ArrayToListNode([1, 3, 5, 5, 1, 6, 3, 6, 1]),
        ArrayToListNode([1, 3, 5, 5, 1, 6, 3, 6, 1]),
    );
});
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

    testData.forEach(function ({ input, output }) {
        assertEquals(
            ListNodeToArray(reverse_Linked_List(ArrayToListNode(input))),
            output,
        );
        assertEquals(
            ListNodeToArray(reverse_Linked_List(ArrayToListNode(output))),
            input,
        );
    });
});
