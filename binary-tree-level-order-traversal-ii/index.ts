import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { level } from "./level.ts";

export default function levelOrderBottom(root: TreeNode | null): number[][] {
    if (!root) return [];
    const current: TreeNode[] = [root];
    const result: number[][] = [];

    level(current, (r) => result.push(r));
    return result.reverse();
}
