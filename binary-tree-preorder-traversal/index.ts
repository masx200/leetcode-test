import { TreeNode } from '../binary-tree-inorder-traversal/TreeNode.ts';

export default function preorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    const res: number[] = [];
    preorder(root, (a) => res.push(a));
    return res;
}
function preorder(root: TreeNode | null, output: (a: number) => void) {
    if (!root) return;
    output(root.val);
    preorder(root.left, output);

    preorder(root.right, output);
}
