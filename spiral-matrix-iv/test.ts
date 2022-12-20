import { assertEquals } from "asserts";

import { ArrayToListNode } from "../reverse-linked-list/ArrayToListNode.ts";
import spiralMatrix from "./index.ts";

Deno.test("spiral-matrix-iv", () => {
    const m = 3, n = 5, head = [3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0];
    const output = [[3, 0, 2, 6, 8], [5, 0, -1, -1, 1], [5, 2, 4, 9, 7]];
    assertEquals(output, spiralMatrix(m, n, ArrayToListNode(head)));
});
Deno.test("spiral-matrix-iv", () => {
    const m = 1, n = 4, head = [0, 1, 2];
    const output = [[0, 1, 2, -1]];
    assertEquals(output, spiralMatrix(m, n, ArrayToListNode(head)));
});
