import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function hasPathSum(
    root: TreeNode | null,
    targetSum: number,
): boolean {
    if (!root) {
        return false;
    }

    if (root.val == targetSum && !root.left && !root.right) return true;

    return (
        hasPathSum(root.left, targetSum - root.val) ||
        hasPathSum(root.right, targetSum - root.val)
    );
}
