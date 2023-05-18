import { assertEquals } from "asserts";
import findRedundantDirectedConnection from "./index.ts";

Deno.test("redundant-connection-ii", () => {
    const edges = [
            [1, 2],
            [1, 3],
            [2, 3],
        ],
        OUTPUT = [2, 3];

    assertEquals(findRedundantDirectedConnection(edges), OUTPUT);
});
Deno.test("redundant-connection-ii", () => {
    const edges = [
            [1, 2],
            [2, 3],
            [3, 4],
            [4, 1],
            [1, 5],
        ],
        OUTPUT = [4, 1];

    assertEquals(findRedundantDirectedConnection(edges), OUTPUT);
});
