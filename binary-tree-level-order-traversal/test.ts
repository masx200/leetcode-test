import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { assertEquals } from "../deps.ts";
import levelOrder from "./index.ts";

Deno.test("binary-tree-level-order-traversal", () => {
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);
    const result = levelOrder(root);
    assertEquals(result, [[3], [9, 20], [15, 7]]);

    assertEquals([[1]], levelOrder(new TreeNode(1)));
    assertEquals([], levelOrder(null));
});
