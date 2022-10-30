import { TreeNode } from '../mod.ts';

export default function pruneTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    const left = pruneTree(root.left);
    const right = pruneTree(root.right);
    if (root.val === 0 && !left && !right) return null;

    return new TreeNode(root.val, left, right);
}
