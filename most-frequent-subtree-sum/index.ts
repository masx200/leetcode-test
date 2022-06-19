import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function findFrequentTreeSum(root: TreeNode | null): number[] {
    const sum_to_count = new Map<number, number>();

    sum(root);
    let max = 0;
    function sum(root: TreeNode | null): number {
        if (!root) return 0;

        const result = root.val + sum(root.left) + sum(root.right);
        const count = (sum_to_count.get(result) ?? 0) + 1;

        sum_to_count.set(result, count);
        max = Math.max(max, count);
        return result;
    }

    return [...sum_to_count.entries()]
        .filter(([_key, value]) => value === max)
        .map((a) => a[0]);
}
