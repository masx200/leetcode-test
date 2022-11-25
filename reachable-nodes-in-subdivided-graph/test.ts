import { assertEquals } from "asserts";
import reachableNodes from "./index.ts";
Deno.test("reachable-nodes-in-subdivided-graph", () => {
    const edges = [
            [0, 1, 10],
            [0, 2, 1],
            [1, 2, 2],
        ],
        maxMoves = 6,
        n = 3;
    assertEquals(reachableNodes(edges, maxMoves, n), 13);
});
