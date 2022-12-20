import { assertEquals } from "asserts";

import countComponents from "./index.ts";

Deno.test("number-of-connected-components-in-an-undirected-graph", function () {
    const n = 5,
        edges = [
            [0, 1],
            [1, 2],
            [3, 4],
        ];
    assertEquals(2, countComponents(n, edges));
});
Deno.test("number-of-connected-components-in-an-undirected-graph", function () {
    const n = 5,
        edges = [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 4],
        ];
    assertEquals(1, countComponents(n, edges));
});
