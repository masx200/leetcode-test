import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { ListNode } from "../reverse-linked-list/ListNode.ts";

function dfs(rt: TreeNode | null, head: ListNode | null): boolean {
    if (head == null) {
        return true;
    }
    if (rt == null) {
        return false;
    }
    if (rt.val != head.val) {
        return false;
    }
    return dfs(rt.left, head.next) || dfs(rt.right, head.next);
}

export default function isSubPath(
    head: ListNode | null,
    root: TreeNode | null
): boolean {
    if (root == null) return !!0;
    return (
        dfs(root, head) ||
        isSubPath(head, root.left) ||
        isSubPath(head, root.right)
    );
}
