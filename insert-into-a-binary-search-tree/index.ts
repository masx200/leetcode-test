import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function insertIntoBST(
    root: TreeNode | null,
    val: number
): TreeNode | null {
    if (root === null) return { val, left: null, right: null };
    if (root.val > val) root.left = insertIntoBST(root.left, val);
    else if (root.val < val) root.right = insertIntoBST(root.right, val);
    return root;
}
