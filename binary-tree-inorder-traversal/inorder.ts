import { TreeNode } from './TreeNode.ts';

export function inorder(root: TreeNode | null, output: (a: number) => void) {
    if (!root) return;
    inorder(root.left, output);
    output(root.val);
    inorder(root.right, output);
}
