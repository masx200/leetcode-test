import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default sumOfLeftLeaves;

function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root) return 0;
    const sum = root.left && !root.left.left && !root.left.right
        ? root.left.val
        : 0;
    return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
}
