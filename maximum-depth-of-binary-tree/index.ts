import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
export default function maxDepth(root: TreeNode | null): number {
    return root == null
        ? 0
        : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
