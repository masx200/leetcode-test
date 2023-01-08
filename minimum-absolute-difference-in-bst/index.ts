import inorderTraversal from "../binary-tree-inorder-traversal/index.ts";
import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function getMinimumDifference(root: TreeNode | null): number {
    const nums = inorderTraversal(root);

    return Math.min(
        ...nums.map((v, i, a) => Math.abs((a[i + 1] ?? Infinity) - v))
    );
}
