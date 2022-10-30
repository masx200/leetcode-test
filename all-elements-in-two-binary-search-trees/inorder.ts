import { TreeNode } from '../binary-tree-inorder-traversal/TreeNode.ts';

export function inorder(node: TreeNode | null, res: number[]) {
    if (node) {
        inorder(node.left, res);
        res.push(node.val);
        inorder(node.right, res);
    }
}
