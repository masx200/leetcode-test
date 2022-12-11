import { assertEquals } from "asserts";
import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import boundaryOfBinaryTree from "./index.ts";
Deno.test("boundary-of-binary-tree", () => {
    assertEquals(
        boundaryOfBinaryTree({
            val: 1,
            left: null,
            right: {
                val: 2,
                left: { val: 3, left: null, right: null },
                right: { val: 4, left: null, right: null },
            },
        }),
        [1, 3, 4, 2]
    );
});
Deno.test("boundary-of-binary-tree", () => {
    assertEquals(
        boundaryOfBinaryTree(
            new TreeNode(
                1,
                new TreeNode(
                    2,
                    new TreeNode(4),
                    new TreeNode(5, new TreeNode(7), new TreeNode(8))
                ),
                new TreeNode(
                    3,
                    new TreeNode(6, new TreeNode(9), new TreeNode(10))
                )
            )
        ),
        [1, 2, 4, 7, 8, 9, 10, 6, 3]
    );
});
