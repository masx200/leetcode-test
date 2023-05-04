import { assertEquals } from "asserts";

import findRedundantDirectedConnection from "./index.ts";

Deno.test("redundant-connection-ii", () => {
    const edges = [
            [1, 2],
            [1, 3],
            [2, 3],
        ],
        输出 = [2, 3];

    assertEquals(findRedundantDirectedConnection(edges), 输出);
});
Deno.test("redundant-connection-ii", () => {
    const edges = [
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 1],
            [1, 5],
        ],
        输出 = [4, 1];

    assertEquals(findRedundantDirectedConnection(edges), 输出);
});
