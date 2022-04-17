import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

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
function postorder(root: TreeNode | null, output: (a: number) => void) {
    if (!root) {
        return;
    }

    postorder(root.left, output);

    postorder(root.right, output);
    output(root.val);
}
export default function postorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }
    const res: number[] = [];
    postorder(root, (a) => res.push(a));
    return res;
}
