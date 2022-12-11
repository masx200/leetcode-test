import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function getTargetCopy(
    original: TreeNode | null,
    cloned: TreeNode | null,
    target: TreeNode | null
): TreeNode | null {
    if (!target || !cloned) return null;
    if (target.val === cloned.val) return cloned;
    if (cloned.right) {
        const right = getTargetCopy(original, cloned.right, target);
        if (right) return right;
    }
    if (cloned.left) {
        const left = getTargetCopy(original, cloned.left, target);
        if (left) return left;
    }
    return null;
}
