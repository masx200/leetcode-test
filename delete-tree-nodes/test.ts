import { assertEquals } from "https://deno.land/std@0.166.0/testing/asserts.ts";

import deleteTreeNodes from "./index.ts";

Deno.test("delete-tree-nodes", () => {
    const nodes = 7,
        parent = [-1, 0, 0, 1, 2, 2, 2],
        value = [1, -2, 4, 0, -2, -1, -1];
    assertEquals(deleteTreeNodes(nodes, parent, value), 2);
});
Deno.test("delete-tree-nodes", () => {
    const nodes = 8,
        parent = [-1, 0, 0, 0, 0, 0, 0, 1],
        value = [1, -2, 4, 0, -2, -1, -1, 1];
    assertEquals(deleteTreeNodes(nodes, parent, value), 0);
});
Deno.test("delete-tree-nodes", () => {
    const nodes = 7,
        parent = [-1, 0, 0, 1, 2, 2, 2],
        value = [1, -2, 4, 0, -2, -1, 0];
    assertEquals(deleteTreeNodes(nodes, parent, value), 0);
});
Deno.test("delete-tree-nodes", () => {
    const nodes = 7,
        parent = [-1, 0, 0, 1, 2, 2, 2],
        value = [0, 0, 0, 0, 0, 0, 0];
    assertEquals(deleteTreeNodes(nodes, parent, value), 0);
});
