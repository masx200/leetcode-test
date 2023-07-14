import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

function minCameraCover(root: TreeNode | null): number {
    const dfs = (root: TreeNode | null): [number, number, number] => {
        if (!root) {
            return [Math.floor(Number.MAX_SAFE_INTEGER / 2), 0, 0];
        }
        const [la, lb, lc] = dfs(root.left);
        const [ra, rb, rc] = dfs(root.right);
        const a = lc + rc + 1;
        const b = Math.min(a, Math.min(la + rb, ra + lb));
        const c = Math.min(a, lb + rb);
        return [a, b, c];
    };

    return dfs(root)[1];
}
export default minCameraCover;
