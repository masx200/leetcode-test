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
export default function rangeSumBST(
    root: TreeNode | null,
    low: number,
    high: number,
): number {
    if (!root) {
        return 0;
    }
    const current: TreeNode[] = [root];
    let result = 0;
    level(current, low, high, (r) => {
        for (const n of r) {
            if (low <= n && n <= high) {
                result += n;
            }
        }
    });
    return result;
}

function level(
    nodes: TreeNode[],
    low: number,
    high: number,
    output: (r: number[]) => void,
) {
    if (nodes.length === 0) {
        return;
    }

    output(nodes.map((n) => n.val));

    level(
        nodes
            .map((n) => {
                if (n.val > high) {
                    return n.left;
                }
                if (n.val < low) {
                    return n.right;
                }
                return [n.left, n.right].filter(Boolean) as TreeNode[];
            })
            .flat()
            .filter(Boolean) as TreeNode[],
        low,
        high,
        output,
    );
}
