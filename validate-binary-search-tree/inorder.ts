import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { Signal } from "./index.ts";

export function inorder(
    root: TreeNode | null,
    output: (a: number) => void,
    signal?: Signal,
) {
    if (signal?.aborted) return;
    if (!root) return;
    inorder(root.left, output, signal);
    if (signal?.aborted) return;
    output(root.val);
    inorder(root.right, output, signal);
}
