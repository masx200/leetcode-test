import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function sumNumbers(root: TreeNode | null): number {
    return pathSum(root)
        .map((a) => Number(a.join("")))
        .reduce((p, c) => p + c, 0);
}
function pathSum(root: TreeNode | null): number[][] {
    const res = [] as number[][];
    if (!root) return [];
    dfs(root, [], (r) => res.push(r));
    return res;
}

function dfs(
    root: TreeNode,
    route: number[],
    output: (route: number[]) => void
) {
    if (!root.left && !root.right) {
        output([...route, root.val]);
        return;
    }

    root.left && dfs(root.left, [...route, root.val], output);

    root.right && dfs(root.right, [...route, root.val], output);
}
