import { assertEquals } from "../deps.ts";
import { ArrayToListNode } from "../reverse-linked-list/ArrayToListNode.ts";
import removeDuplicateNodes from "./index.ts";

Deno.test("remove-duplicate-node-lcci-1", () => {
    const input = ArrayToListNode([1, 2, 3, 3, 4, 4, 5]);
    const output = ArrayToListNode([1, 2, 3, 4, 5]);
    assertEquals(removeDuplicateNodes(input), output);
});

Deno.test("remove-duplicate-node-lcci-2", () => {
    const input = ArrayToListNode([1, 2, 3, 3, 2, 1]);
    const output = ArrayToListNode([1, 2, 3]);
    assertEquals(removeDuplicateNodes(input), output);
});

Deno.test("remove-duplicate-node-lcci-1", () => {
    const input = ArrayToListNode([1, 1, 1, 1, 2]);
    const output = ArrayToListNode([1, 2]);
    assertEquals(removeDuplicateNodes(input), output);
});
