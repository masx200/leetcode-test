import { assertEquals } from "../deps.ts";
import partition from "./index.ts";
import { ListNode } from "../reverse-linked-list/ListNode.ts";
import { ArrayToListNode } from "../reverse-linked-list/ArrayToListNode.ts";

Deno.test("partition-list-lcci", () => {
    assertEquals(partition(null, 0), null);
    assertEquals(
        partition(ArrayToListNode([1, 4, 3, 2, 5, 2]), 3),
        ArrayToListNode([1, 2, 2, 4, 3, 5]),
    );
    assertEquals(
        partition(new ListNode(2, new ListNode(1)), 2),
        new ListNode(1, new ListNode(2)),
    );
});
