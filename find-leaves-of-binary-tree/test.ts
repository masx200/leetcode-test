import { assertEquals } from "asserts";
import { TreeNodeLeetCodeFromJSON } from "../utils/TreeNodeLeetCodeParse.ts";
import findLeaves from "./index.ts";
Deno.test("find-leaves-of-binary-tree", () => {
    assertEquals(
        [[4, 5, 3], [2], [1]],
        findLeaves(TreeNodeLeetCodeFromJSON([1, 2, 3, 4, 5])),
    );
});
