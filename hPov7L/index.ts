import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function largestValues(root: TreeNode | null): number[] {
    if (!root) return [];
    const current: TreeNode[] = [root];
    const result: number[] = [];

    level(current, (r) => result.push(r));
    return result;
}

function level(nodes: TreeNode[], output: (r: number) => void) {
    if (nodes.length === 0) return;

    const values = nodes.map((n) => n.val);
    output(Math.max(...values));

    level(
        nodes
            .map((n) => [n.left, n.right].filter(Boolean) as TreeNode[])
            .flat(),
        output
    );
}
