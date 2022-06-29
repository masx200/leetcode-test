import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
export default function getAllElements(
    root1: TreeNode | null,
    root2: TreeNode | null,
): number[] {
    const nums1: number[] = [];
    const nums2: number[] = [];

    inorder(root1, nums1);
    inorder(root2, nums2);

    const merged = [];
    let p1 = 0,
        p2 = 0;
    while (true) {
        if (p1 === nums1.length) {
            for (let i = p2; i < nums2.length; i++) {
                merged.push(nums2[i]);
            }
            break;
        }
        if (p2 === nums2.length) {
            for (let i = p1; i < nums1.length; i++) {
                merged.push(nums1[i]);
            }
            break;
        }
        if (nums1[p1] < nums2[p2]) {
            merged.push(nums1[p1++]);
        } else {
            merged.push(nums2[p2++]);
        }
    }
    return merged;
}
const inorder = (node: TreeNode | null, res: number[]) => {
    if (node) {
        inorder(node.left, res);
        res.push(node.val);
        inorder(node.right, res);
    }
};
