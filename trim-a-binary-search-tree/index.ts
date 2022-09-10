import { TreeNode } from "../mod.ts";
export default trimBST;
function trimBST(
    root: TreeNode | null,
    low: number,
    high: number,
): TreeNode | null {
    if (!root) return null;

    if (root.val < low) return trimBST(root.right, low, high);

    if (root.val > high) return trimBST(root.left, low, high);

    return new TreeNode(
        root.val,
        trimBST(root.left, low, high),
        trimBST(root.right, low, high),
    );
}
