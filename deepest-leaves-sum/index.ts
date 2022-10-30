import { TreeNode } from '../binary-tree-inorder-traversal/TreeNode.ts';

export default function deepestLeavesSum(root: TreeNode | null): number {
    if (!root) return 0;
    let cur = [root];

    while (cur.length) {
        const temp: typeof cur = [];

        cur.map((n) => [n.left, n.right].filter(Boolean)).forEach((a) =>
            temp.push(...(a as TreeNode[]))
        );

        if (!temp.length) {
            return cur.reduce((a, v) => a + v.val, 0);
        }
        cur = temp;
    }
    return 0;
}
