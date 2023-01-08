import { TreeNode } from "../mod.ts";

export default function addOneRow(
    root: TreeNode | null,
    val: number,
    depth: number
): TreeNode | null {
    if (!root || !depth) return null;

    if (depth === 1) return new TreeNode(val, root);

    if (depth === 2) {
        return new TreeNode(
            root.val,
            new TreeNode(val, root.left),
            new TreeNode(val, null, root.right)
        );
    }

    return new TreeNode(
        root.val,
        addOneRow(root.left, val, depth - 1),
        addOneRow(root.right, val, depth - 1)
    );
}
