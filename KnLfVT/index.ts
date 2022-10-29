import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function expandBinaryTree(
    root: TreeNode | null,
): TreeNode | null {
    return root
        ? new TreeNode(
            root.val,
            root.left ? new TreeNode(-1, expandBinaryTree(root.left)) : null,
            root.right
                ? new TreeNode(-1, null, expandBinaryTree(root.right))
                : null,
        )
        : null;
}
