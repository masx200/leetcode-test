import inorderTraversal from "../binary-tree-inorder-traversal/index.ts";
import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { lowerBound } from "../number-of-pairs-satisfying-inequality/lowerBound.ts";

export default function getNumber(
    root: TreeNode | null,
    ops: number[][],
): number {
    const sorted = inorderTraversal(root);
    let ans = 0;
    for (let i = ops.length - 1; i >= 0; i--) {
        const [t, x, y] = ops[i];

        const start = lowerBound(sorted, x);
        const end = lowerBound(sorted, y + 1);
        if (t === 1) ans += end - start;
        sorted.splice(start, end - start);
    }
    return ans;
}
