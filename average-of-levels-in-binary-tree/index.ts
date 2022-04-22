import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { sum } from "../richest-customer-wealth/sum.ts";

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
export default function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) return [];
    const current: TreeNode[] = [root];
    const result: number[] = [];

    level(current, (r) => result.push(r));
    return result;
    // return levelOrder(root).map(v=>sum(v)/v.length)
}
// function sum(a: Array<number>) {
//     // return a.reduce((p, v) => p + v, 0);
//     let r = 0;
//     for (const v of a) {
//         r += v;
//     }
//     return r;
// }

function level(nodes: TreeNode[], output: (r: number) => void) {
    if (nodes.length === 0) return;

    const values = nodes.map((n) => n.val);
    output(sum(values) / values.length);

    level(
        nodes.map((n) => [n.left, n.right].filter(Boolean) as TreeNode[])
            .flat(),
        output,
    );
}
