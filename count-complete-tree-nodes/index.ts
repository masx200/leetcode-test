import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function countNodes(root: TreeNode | null): number {
    if (root === null) return 0;
    let left = 0,
        right = 0;
    let curNode: TreeNode | null = root;
    while (curNode !== null) {
        left++;
        curNode = curNode.left;
    }
    curNode = root;
    while (curNode !== null) {
        right++;
        curNode = curNode.right;
    }
    if (left === right) {
        return 2 ** left - 1;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
}
