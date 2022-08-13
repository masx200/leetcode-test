import deleteNode from "./index.ts";
import { ArrayToListNode } from "../reverse-linked-list/ArrayToListNode.ts";
import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
Deno.test("remove-linked-list-elements", () => {
    assertEquals(
        ArrayToListNode([4, 1, 9, 10]),
        deleteNode(ArrayToListNode([4, 5, 1, 9, 5, 5, 5, 10]), 5),
    );
});
Deno.test("remove-linked-list-elements", () => {
    assertEquals(
        ArrayToListNode([1, 2, 3, 4, 5]),
        deleteNode(ArrayToListNode([1, 2, 6, 3, 4, 5, 6]), 6),
    );
});
Deno.test("remove-linked-list-elements", () => {
    assertEquals(
        ArrayToListNode([]),
        deleteNode(ArrayToListNode([]), 1),
    );
});
Deno.test("remove-linked-list-elements", () => {
    assertEquals(
        ArrayToListNode([]),
        deleteNode(ArrayToListNode([7, 7, 7, 7]), 7),
    );
});
