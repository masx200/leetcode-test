import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

function maxSumBST(root: TreeNode | null): number {
    const inf = 1 << 30;
    let ans = 0;
    function dfs(root: TreeNode | null): [boolean, number, number, number] {
        if (!root) {
            return [true, inf, -inf, 0];
        }
        const [lbst, lmi, lmx, ls] = dfs(root.left);
        const [rbst, rmi, rmx, rs] = dfs(root.right);
        if (lbst && rbst && lmx < root.val && root.val < rmi) {
            const s = ls + rs + root.val;
            ans = Math.max(ans, s);
            return [true, Math.min(lmi, root.val), Math.max(rmx, root.val), s];
        }
        return [false, 0, 0, 0];
    }
    dfs(root);
    return ans;
}

export default maxSumBST;
