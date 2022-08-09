import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function isSymmetric(root: TreeNode | null): boolean {
    return check(root, root);
}
function check(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
        return true;
    }
    if (!p || !q) {
        return false;
    }
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
}
