import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { level } from "../binary-tree-level-order-traversal-ii/level.ts";

export default function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    const current: TreeNode[] = [root];
    const result: number[][] = [];

    level(current, (r) => result.push(r));
    result.forEach((v, i) => {
        if (i % 2) {
            v.reverse();
        }
    });
    return result;
}
