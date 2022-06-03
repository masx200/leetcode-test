import inorderTraversal from "../binary-tree-inorder-traversal/index.ts";
import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import twoSum from "../two-sum-ii-input-array-is-sorted/index.ts";

export default function findTarget(root: TreeNode | null, k: number): boolean {
    const list = inorderTraversal(root);
    return twoSum(list, k)[0] >= 1;
}
