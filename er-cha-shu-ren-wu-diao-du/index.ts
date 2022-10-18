import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

function minimalExecTime(root: TreeNode | null) {
    const res = execTime(root);
    return res[0];
}

function execTime(node: TreeNode | null): [number, number] {
    if (node == null) {
        // [0]执行完当前节点最小耗时，[1]当前node为根的时间串行之和
        return [0, 0];
    }
    // 获取左右子树的值
    const leftTime = execTime(node.left);
    const rightTime = execTime(node.right);
    // 左右子树节点之和
    const sum = leftTime[1] + rightTime[1];
    // 当前节点执行完的最小消耗时间
    const minTime = Math.max(Math.max(leftTime[0], rightTime[0]), sum / 2) +
        node.val;
    return [minTime, sum + node.val];
}
export default minimalExecTime;
