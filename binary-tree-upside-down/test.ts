import { assertEquals } from "asserts";
import { TreeNodeLeetCodeFromJSON } from "../utils/TreeNodeLeetCodeParse.ts";
import upsideDownBinaryTree from "./index.ts";
Deno.test("binary-tree-upside-down", () => {
    assertEquals(
        upsideDownBinaryTree(TreeNodeLeetCodeFromJSON([1, 2, 3, 4, 5])),
        TreeNodeLeetCodeFromJSON([4, 5, 2, null, null, 3, 1])
    );
});
