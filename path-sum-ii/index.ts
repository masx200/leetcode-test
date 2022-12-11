import { TreeNode } from "../mod.ts";

function pathSum(root: TreeNode | null, target: number): number[][] {
    const res = [] as number[][];
    if (!root) return [];
    dfs(root, target, [], (r) => res.push(r));
    return res;
}

function dfs(
    root: TreeNode,
    target: number,
    route: number[],
    output: (route: number[]) => void
) {
    if (!root.left && !root.right && target === root.val) {
        output([...route, root.val]);
        return;
    }

    root.left &&
        dfs(root.left, target - root.val, [...route, root.val], output);

    root.right &&
        dfs(root.right, target - root.val, [...route, root.val], output);
}
export default pathSum;
