import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function kthSmallest(root: TreeNode | null, k: number): number {
    const res: number[] = [];
    // 中序遍历
    const inOrder = (root: TreeNode | null) => {
        if (!root) return;
        inOrder(root.left);
        res.push(root.val);
        if (typeof res[k - 1] === "number") {
            return;
        }
        inOrder(root.right);
    };
    inOrder(root);
    return res[k - 1];
}
