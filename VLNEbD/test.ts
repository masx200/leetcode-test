import { assertEquals } from "asserts";
import { ArrayToListNode } from "../reverse-linked-list/ArrayToListNode.ts";
import reContruct from "./index.ts";
import { ListNodeToArray } from "../reverse-linked-list/ListNodeToArray.ts";
Deno.test("reContruct", () => {
    assertEquals(
        [[1, 4, 3, 6], [5, 7, 9, 9, 1], [2, 4], []].map(ArrayToListNode).map(
            reContruct,
        ).map(ListNodeToArray),
        [[1, 3], [5, 7, 9, 9, 1], [], []],
    );
});
