import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function tree2str(root: TreeNode | null): string {
    if (!root) {
        return "";
    }
    if (!root.left && !root.right) {
        return String(root.val);
    }
    if (!root.right) {
        return String(root.val) + "(" + tree2str(root.left) + ")";
    }
    return (
        String(root.val) +
        "(" +
        tree2str(root.left) +
        ")(" +
        tree2str(root.right) +
        ")"
    );
}
