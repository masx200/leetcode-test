import { assertEquals } from "../deps.ts";
import { ArrayToListNode, ListNode, ListNodeToArray } from "../mod.ts";
import reverse_Linked_List from "./index.ts";
Deno.test("ArrayToListNode", () => {
    assertEquals(ArrayToListNode([]), null);
    assertEquals(
        ListNodeToArray(ArrayToListNode([1, 3, 5, 5, 1, 6, 3, 6, 1])),
        [1, 3, 5, 5, 1, 6, 3, 6, 1],
    );
});
Deno.test("ListNodeToArray", () => {
    assertEquals(ListNodeToArray(new ListNode(5, null)), [5]);
    assertEquals(ListNodeToArray(null), []);
    assertEquals(ListNodeToArray(new ListNode(5, new ListNode(10))), [5, 10]);
    assertEquals(
        ListNodeToArray(new ListNode(5, new ListNode(10, new ListNode(100)))),
        [5, 10, 100],
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
