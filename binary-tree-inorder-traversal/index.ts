import { TreeNode } from "./TreeNode.ts";

export default function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];
    const res: number[] = [];
    inorder(root, (a) => res.push(a));
    return res;
}
export function inorder(root: TreeNode | null, output: (a: number) => void) {
    if (!root) return;
    inorder(root.left, output);
    output(root.val);
    inorder(root.right, output);
}
