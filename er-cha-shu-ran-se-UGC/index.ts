import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

function maxValue(root: TreeNode | null, k: number): number {
    return Math.max(...dfs(root, k));
}
function dfs(root: TreeNode | null, k: number): number[] {
    const ans = Array<number>(k + 1).fill(0);
    if (!root) return ans;

    const left = dfs(root.left, k);
    const right = dfs(root.right, k);

    ans.fill(left[k] + right[k]);

    for (let i = 1; i <= k; i++) {
        let temp = -Infinity;
        for (let j = 0; j <= i - 1; j++) {
            temp = Math.max(temp, left[j] + right[i - 1 - j]);
        }
        ans[i] = Math.max(ans[i], temp + root.val);
    }

    return ans;
}
export default maxValue;
