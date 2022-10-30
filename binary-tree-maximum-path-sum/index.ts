import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

function maxPathSum(root: TreeNode | null): number {
    let maxSum = Number.MIN_SAFE_INTEGER; // 最大路径和

    dfs(root, (a) => maxSum = Math.max(maxSum, a)); // 递归的入口

    return maxSum;
}
export default maxPathSum;
function dfs(root: TreeNode | null, o: (a: number) => void): number {
    if (root == null) { // 遍历到null节点，收益0
        return 0;
    }
    const left = dfs(root.left, o); // 左子树提供的最大路径和
    const right = dfs(root.right, o); // 右子树提供的最大路径和

    const innerMaxSum = left + root.val + right; // 当前子树内部的最大路径和

    // 挑战最大纪录
    o(innerMaxSum);
    const outputMaxSum = root.val + Math.max(0, left, right); // 当前子树对外提供的最大和

    // 如果对外提供的路径和为负，直接返回0。否则正常返回
    return outputMaxSum < 0 ? 0 : outputMaxSum;
}
