import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

function distributeCoins(root: TreeNode | null): number {
    let ans = 0;
    function dfs(node: TreeNode | null): number {
        if (node === null) {
            return 0;
        }
        const d = dfs(node.left) + dfs(node.right) + node.val - 1;
        ans += Math.abs(d);
        return d;
    }
    dfs(root);
    return ans;
}
export default distributeCoins;
