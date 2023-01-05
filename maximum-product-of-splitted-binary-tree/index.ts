import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function maxProduct(root: TreeNode | null): number {
    if (!root) return 0;
    const subs: number[] = [];
    const sum = maxTree(root, (a) => subs.push(a));
    const result = subs.reduce((a, v) => Math.max(a, v * (sum - v)), 0);

    return result % (1e9 + 7);
}

function maxTree(root: TreeNode | null, output?: (a: number) => void): number {
    if (!root) return output?.(0), 0;
    const all =
        maxTree(root.left, output) + maxTree(root.right, output) + root.val;
    return output?.(all), all;
}
