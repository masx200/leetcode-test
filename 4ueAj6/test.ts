import { assertEquals } from "asserts";

import { ListNode as Node } from "../reverse-linked-list/ListNode.ts";
import { ArrayToCircularLinkedList } from "./ArrayToCircularLinkedList.ts";
import insert from "./index.ts";

Deno.test("insert-into-a-sorted-circular-linked-list", () => {
    const head = new Node(1);
    head.next = head;
    const node = new Node(2);
    head.next = node;
    node.next = head;
    const result = insert(head, 3);
    assertEquals(result?.val, 1);
    assertEquals(result?.next?.val, 2);
    assertEquals(result?.next?.next?.val, 3);
    assertEquals(result?.next?.next?.next?.val, 1);
});
Deno.test("insert-into-a-sorted-circular-linked-list", () => {
    const inputs: Array<[number[], number]> = [
        [[1, 2], 3],
        [[3, 4, 1], 2],
        [[], 1],
        [[1], 0],
    ];

    const outputs = [[1, 2, 3], [3, 4, 1, 2], [1], [1, 0]];

    assertEquals(
        outputs.map(ArrayToCircularLinkedList),
        inputs.map(([array, insertVal]) => {
            const head = ArrayToCircularLinkedList(array);
            // console.log(head);
            const result = insert(head, insertVal);
            // console.log(result);
            return result;
        })
    );
});
