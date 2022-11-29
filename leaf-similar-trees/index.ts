import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const seq1: number[] = [];
    if (root1) {
        dfs(root1, seq1);
    }

    const seq2: number[] = [];
    if (root2) {
        dfs(root2, seq2);
    }
    return seq1.toString() === seq2.toString();
}

function dfs(node: TreeNode, seq: number[]) {
    if (!node.left && !node.right) {
        seq.push(node.val);
    } else {
        if (node.left) {
            dfs(node.left, seq);
        }
        if (node.right) {
            dfs(node.right, seq);
        }
    }
}
export default leafSimilar;
