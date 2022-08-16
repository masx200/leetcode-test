import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";

import { TreeNode } from "../mod.ts";
import buildTree from "./index.ts";
Deno.test("construct-binary-tree-from-preorder-and-inorder-traversal", () => {
    assertEquals(
        buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]),
        new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7)),
        ),
    );
});
Deno.test("construct-binary-tree-from-preorder-and-inorder-traversal", () => {
    assertEquals(buildTree([-1], [-1]), new TreeNode(-1));
});
