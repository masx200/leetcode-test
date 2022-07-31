import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { level } from "../binary-tree-level-order-traversal-ii/level.ts";

function maxLevelSum(root: TreeNode | null): number {
    if (!root) return 0;
    const current: TreeNode[] = [root];
    const result: number[] = [];

    level(current, (r) => result.push(r.reduce((a, b) => a + b)));

    const sums = result;

    const max_entries = Array.from(sums.entries()).reduceRight((a, v) =>
        a[1] > v[1] ? a : v
    );
    return max_entries[0] + 1;
}

export default maxLevelSum;
