import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function sumRootToLeaf(root: TreeNode | null, sum = 0): number {
    return !root
        ? 0
        : (!root.left) && (!root.right)
        ? sum * 2 + root.val
        : sumRootToLeaf(root.left, sum * 2 + root.val) +
            sumRootToLeaf(root.right, sum * 2 + root.val);
}
