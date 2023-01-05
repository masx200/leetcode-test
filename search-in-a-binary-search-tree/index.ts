import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function searchBST(
    root: TreeNode | null,
    val: number
): TreeNode | null | undefined {
    if (!root) return null;
    if (root.val > val) {
        return searchBST(root.left, val);
    } else if (root.val < val) return searchBST(root.right, val);
    if (root.val === val) return root;
    return;
}
