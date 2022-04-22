import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { bigint_max } from "./bigint_max.ts";
import { bigint_min } from "./bigint_min.ts";

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
export default function widthOfBinaryTree(root: TreeNode | null): number {
    if (!root) return 0;
    let current: Map<bigint, TreeNode> = new Map([[BigInt(0), root]]);

    //内存溢出

    let max_width = 1;

    while (true) {
        //内存溢出

        const latest: Map<bigint, TreeNode> = new Map();
        current.forEach((value, key) => {
            const left = value?.left;
            const right = value?.right;
            if (left) {
                latest.set(BigInt(key * 2n), left);
            }
            if (right) {
                latest.set(BigInt(key * 2n + 1n), right);
            }
        });

        if (latest.size) {
            // console.log(latest)
            current = latest;

            max_width = Math.max(
                max_width,
                Number(
                    1n + bigint_max(...latest.keys()) -
                        bigint_min(...latest.keys()),
                ),
            );
        } else break;
    }

    return (max_width);
}
