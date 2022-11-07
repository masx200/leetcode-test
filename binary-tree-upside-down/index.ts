import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function upsideDownBinaryTree(
    root: TreeNode | null,
): TreeNode | null {
    if (root == null) {
        return root;
    }

    let current: TreeNode | null = root;
    let prev: TreeNode | null = null;
    let next: TreeNode | null = null;
    let tmp: TreeNode | null = null;

    while (current != null) {
        next = current.left;
        current.left = tmp;
        tmp = current.right;
        current.right = prev;
        prev = current;
        current = next;
    }

    return prev;
}
