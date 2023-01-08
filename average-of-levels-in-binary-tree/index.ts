import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { sum } from "../richest-customer-wealth/sum.ts";

export default function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) return [];
    const current: TreeNode[] = [root];
    const result: number[] = [];

    level(current, (r) => result.push(r));
    return result;
    // return levelOrder(root).map(v=>sum(v)/v.length)
}

function level(nodes: TreeNode[], output: (r: number) => void) {
    if (nodes.length === 0) return;

    const values = nodes.map((n) => n.val);
    output(sum(values) / values.length);

    level(
        nodes
            .map((n) => [n.left, n.right].filter(Boolean) as TreeNode[])
            .flat(),
        output
    );
}
