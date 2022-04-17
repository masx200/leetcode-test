/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

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
