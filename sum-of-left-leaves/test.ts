import { assertEquals } from "asserts";

import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import sumOfLeftLeaves from "./index.ts";

Deno.test("sum-of-left-leaves", () => {
    assertEquals(0, sumOfLeftLeaves(null));
    assertEquals(0, sumOfLeftLeaves(new TreeNode(1)));
    assertEquals(
        24,
        sumOfLeftLeaves({
            val: 3,
            left: { val: 9, left: null, right: null },
            right: {
                val: 20,
                left: { val: 15, left: null, right: null },
                right: { val: 7, left: null, right: null },
            },
        }),
    );
});
