import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export function* reverseInOrderIterator(
    root: TreeNode | null,
): Generator<number> {
    if (!root) {
        return;
    }
    yield* reverseInOrderIterator(root.right);
    yield root.val;
    yield* reverseInOrderIterator(root.left);
}
