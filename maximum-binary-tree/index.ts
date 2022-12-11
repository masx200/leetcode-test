import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import insertIntoMaxTree from "../maximum-binary-tree-ii/index.ts";

export default function constructMaximumBinaryTree(
    nums: number[]
): TreeNode | null {
    return nums.reduce(
        (a: TreeNode | null, v: number) => insertIntoMaxTree(a, v),
        null
    );
}
