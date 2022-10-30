import { TreeNode } from '../binary-tree-inorder-traversal/TreeNode.ts';

export default function deleteNode(
    root: TreeNode | null,
    key: number,
): TreeNode | null {
    if (!root) return null;

    if (root.val > key) {
        root.left = deleteNode(root.left, key);
        return root;
    }
    if (root.val < key) {
        root.right = deleteNode(root.right, key);
        return root;
    }
    if (!root.left && !root.right) return null;
    if (!root.left) {
        return root.right;
    }
    if (!root.right) {
        return root.left;
    }

    let right = root.right;

    while (right.left) {
        right = right.left;
    }
    right.left = root.left;
    return root.right;
}
