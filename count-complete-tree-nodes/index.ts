import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function countNodes(
    root: TreeNode | null,
    leftDepth?: number,
    rightDepth?: number
): number {
    if (root === null) return 0;
    let left = 0,
        right = 0;
    let curNode: TreeNode | null = root;
    if (typeof leftDepth !== "undefined") {
        left = leftDepth;
    } else {
        while (curNode !== null) {
            left++;
            curNode = curNode.left;
        }
    }

    curNode = root;
    if (typeof rightDepth !== "undefined") {
        right = rightDepth;
    } else {
        while (curNode !== null) {
            right++;
            curNode = curNode.right;
        }
    }
    if (left === right) {
        return 2 ** left - 1;
    }
    return (
        1 +
        countNodes(root.left, left-1) +
        countNodes(root.right, undefined, right-1)
    );
}
