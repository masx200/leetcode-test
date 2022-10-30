import { inorder } from "./inorder.ts";
import { TreeNode } from "./TreeNode.ts";

export default function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    const res: number[] = [];
    inorder(root, (a) => res.push(a));
    return res;
}
