import { assertEquals } from "asserts";
import { TreeNodeLeetCodeFromJSON } from "../utils/TreeNodeLeetCodeParse.ts";
import findMode from "./index.ts";
Deno.test("find-mode-in-binary-search-tree", () => {
    assertEquals(
        [[1, null, 2, 2], [0], [300, 23, 2222, 22, 111, 303]]
            .map((a) => findMode(TreeNodeLeetCodeFromJSON(a)))
            .map((a) => new Set(a)),
        [[2], [0], [303, 2222, 111, 22, 23, 300]].map((a) => new Set(a)),
    );
});
