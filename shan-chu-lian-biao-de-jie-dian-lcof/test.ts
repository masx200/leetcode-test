import deleteNode from "./index.ts";
import { ArrayToListNode } from "../reverse-linked-list/ArrayToListNode.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
Deno.test("shan-chu-lian-biao-de-jie-dian-lcof", () => {
    assertEquals(
        ArrayToListNode([4, 1, 9, 5, 5, 5, 10]),
        deleteNode(ArrayToListNode([4, 5, 1, 9, 5, 5, 5, 10]), 5),
    );
});
Deno.test("shan-chu-lian-biao-de-jie-dian-lcof", () => {
    assertEquals(
        ArrayToListNode([4, 1, 9]),
        deleteNode(ArrayToListNode([4, 5, 1, 9]), 5),
    );
});
Deno.test("shan-chu-lian-biao-de-jie-dian-lcof", () => {
    assertEquals(
        ArrayToListNode([4, 5, 9]),
        deleteNode(ArrayToListNode([4, 5, 1, 9]), 1),
    );
});
