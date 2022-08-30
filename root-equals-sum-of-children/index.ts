import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function checkTree(root: TreeNode | null): boolean {
    if (!root) return false;
    const [sum, left, right] = [root?.val, root?.left?.val, root?.right?.val];
    return (
        typeof left === "number" &&
        typeof right === "number" &&
        sum === left + right
    );
}
