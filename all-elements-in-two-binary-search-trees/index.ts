import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { inorder } from "./inorder.ts";
import { merge_sort } from "./merge_sort.ts";

export default function getAllElements(
    root1: TreeNode | null,
    root2: TreeNode | null,
): number[] {
    const nums1: number[] = [];
    const nums2: number[] = [];

    inorder(root1, nums1);
    inorder(root2, nums2);

    const merged = merge_sort(nums1, nums2);
    return merged;
}
