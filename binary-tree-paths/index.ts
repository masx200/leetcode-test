import { TreeNode } from '../binary-tree-inorder-traversal/TreeNode.ts';

export default function binaryTreePaths(root: TreeNode | null): string[] {
    const res: string[] = [];
    if (!root) {
        return res;
    }
    const path: number[] = [];
    dfs(root, res, path);
    return res;
}
function dfs(root: TreeNode, res: string[], path: number[]) {
    path.push(root.val);
    if (!root.left && !root.right) {
        res.push(path.join("->"));
        return;
    }

    for (const node of [root.left, root.right].filter(Boolean) as TreeNode[]) {
        dfs(node, res, path);
        path.pop();
    }
}
