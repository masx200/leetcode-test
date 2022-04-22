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
export default function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    const current: TreeNode[] = [root];
    const result: number[][] = [];

    level(current, (r) => result.push(r));
    result.forEach((v, i) => {
        if (i % 2) {
            v.reverse();
        }
    });
    return result;
}
function level(nodes: TreeNode[], output: (r: number[]) => void) {
    if (nodes.length === 0) return;

    output(nodes.map((n) => n.val));

    level(
        nodes.map((n) => [n.left, n.right].filter(Boolean) as TreeNode[])
            .flat(),
        output,
    );
}
