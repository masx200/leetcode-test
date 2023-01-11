import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function pathSum(root: TreeNode | null, sum: number): number {
    function dfs(
        root: TreeNode | null,
        prefix: Map<number, number>,
        curr: number,
        sum: number
    ) {
        if (root == null) {
            return 0;
        }

        let ret = 0;
        curr += root.val;

        ret = prefix.get(curr - sum) || 0;
        prefix.set(curr, (prefix.get(curr) || 0) + 1);
        ret += dfs(root.left, prefix, curr, sum);
        ret += dfs(root.right, prefix, curr, sum);
        prefix.set(curr, (prefix.get(curr) || 0) - 1);

        return ret;
    }
    const prefix = new Map<number, number>();
    prefix.set(0, 1);
    return dfs(root, prefix, 0, sum);
}
