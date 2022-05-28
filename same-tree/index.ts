import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function isSameTree(
    p: TreeNode | null | undefined,
    q: TreeNode | null | undefined,
): boolean {
    return p === q ? true : p?.val === q?.val && isSameTree(p?.left, q?.left) &&
        isSameTree(p?.right, q?.right);
}
