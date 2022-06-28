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

import { TreeNode } from "../mod.ts";

/**
 Do not return anything, modify root in-place instead.
 */
export default function flatten(root: TreeNode | null): void {
    const list: TreeNode[] = [];
    preorderTraversal(root, list);
    const size = list.length;
    for (let i = 1; i < size; i++) {
        const prev = list[i - 1];
        const curr = list[i];
        prev.left = null;
        prev.right = curr;
    }
}
function preorderTraversal(root: TreeNode | null, list: TreeNode[]) {
    if (!root) return;
    list.push(root);
    preorderTraversal(root.left, list);
    preorderTraversal(root.right, list);
}
