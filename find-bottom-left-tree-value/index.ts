import { level } from "../binary-tree-level-order-traversal-ii/index.ts";
import { TreeNode } from "../mod.ts";

export default function findBottomLeftValue(root: TreeNode | null): number {
    if (!root) return 0;
    const current: TreeNode[] = [root];
    const result: number[][] = [];

    level(current, (r) => {
        result.length = 0;
        result.push(r);
    });
    return result[result.length - 1][0];
}
