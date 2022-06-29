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

import { inorder } from "../binary-tree-inorder-traversal/inorder.ts";
import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
export default function increasingBST(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    const tree = new TreeNode();
    let first = true;
    let current = tree;
    inorder(root, (a) => {
        if (first) {
            tree.val = a;
            first = false;
        } else {
            current.right = new TreeNode(a);
            current = current.right;
        }
    });
    return tree;
}
