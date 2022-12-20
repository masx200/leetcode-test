import { assertEquals } from "asserts";

import { TreeNodeLeetCodeFromJSON } from "../utils/TreeNodeLeetCodeParse.ts";
import closestNodes from "./index.ts";

Deno.test("closest-nodes-queries-in-a-binary-search-tree", () => {
    const root = [
            6,
            2,
            13,
            1,
            4,
            9,
            15,
            null,
            null,
            null,
            null,
            null,
            null,
            14,
        ],
        queries = [2, 5, 16];
    const result = [
        [2, 2],
        [4, 6],
        [15, -1],
    ];
    assertEquals(closestNodes(TreeNodeLeetCodeFromJSON(root), queries), result);
});
