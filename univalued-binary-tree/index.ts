import { TreeNode } from "../mod.ts";

function isUnivalTree(root: TreeNode | null): boolean {
    if (!root) return true;
    return dfs(root, root.val);
}
function dfs(root: TreeNode | null, val: number): boolean {
    if (!root) return true;
    return root.val === val && dfs(root.left, val) && dfs(root.right, val);
}
export default isUnivalTree;
