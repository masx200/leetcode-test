import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

function kthLargest(root: TreeNode | null, k: number): number {
    let i = 1;
    for (const v of reverseInOrderIterator(root)) {
        if (i === k) return v;
        i++;
    }
    throw Error("unreachable");
}
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
export default kthLargest;
