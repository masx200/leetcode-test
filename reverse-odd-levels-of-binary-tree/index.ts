import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    let depth = 0;
    level([root], (nodes) => {
        if (depth & 1) {
            nodes.map((a) => a.val).reverse().forEach((v, i) =>
                nodes[i].val = v
            );
        }
        depth++;
    });
    return root;
}
export default reverseOddLevels;
export function level(nodes: TreeNode[], output: (r: TreeNode[]) => void) {
    if (nodes.length === 0) return;

    output(nodes);

    level(
        nodes
            .map((n) => [n.left, n.right].filter(Boolean) as TreeNode[])
            .flat(),
        output,
    );
}
