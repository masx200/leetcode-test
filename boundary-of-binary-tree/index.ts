import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
export default function boundaryOfBinaryTree(root: TreeNode): number[] {
    const ans: number[] = [];
    if (!root) return [];
    ans.push(root.val);
    dfs(root.left, -1);
    dfs(root.right, 1);
    return ans;
    function dfs(root: TreeNode | null, dir: number) {
        if (!root) return;
        if (dir == -1) { //左边界
            ans.push(root.val); //前序遍历
            if (root.left) {
                dfs(root.left, -1); //有左节点，进入左节点找
                dfs(root.right, 0); //舍弃右节点
            } else {
                dfs(root.right, -1); //没有左节点，当成左边界
            }
        } else if (dir == 1) { //右边界
            // ans.push(root.val);//写这里错了
            if (root.right) {
                dfs(root.left, 0);
                dfs(root.right, 1);
            } else {
                dfs(root.left, 1);
            }
            ans.push(root.val); //应该是后序遍历
        } //dir==0，非左右边界，找叶子节点
        else {
            if (!root.left && !root.right) {
                ans.push(root.val);
            }
            dfs(root.left, 0);
            dfs(root.right, 0);
        }
    }
}
