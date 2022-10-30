import { TreeNode } from '../binary-tree-inorder-traversal/TreeNode.ts';

export default function isBalanced(root: TreeNode | null): boolean {
    return height(root) >= 0;
}
function height(root: TreeNode | null): number {
    if (!root) return 0;
    const leftHeight = height(root.left);
    const rightHeight = height(root.right);
    if (
        leftHeight === -1 ||
        rightHeight == -1 ||
        Math.abs(leftHeight - rightHeight) > 1
    ) {
        return -1;
    } else {
        return Math.max(leftHeight, rightHeight) + 1;
    }
}
