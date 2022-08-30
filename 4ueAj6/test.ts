import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import insert from "./index.ts";
import { ListNode as Node } from "../reverse-linked-list/ListNode.ts";
import { Array_to_circular_linked_list } from "./circular-linked-list.ts";

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
        outputs.map(Array_to_circular_linked_list),
        inputs.map(([array, insertVal]) => {
            const head = Array_to_circular_linked_list(array);
            // console.log(head);
            const result = insert(head, insertVal);
            // console.log(result);
            return result;
        }),
    );
});
