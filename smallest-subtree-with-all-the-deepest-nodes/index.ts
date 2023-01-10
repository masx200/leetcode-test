import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import maxDepth from "../maximum-depth-of-binary-tree/index.ts";

export default function subtreeWithAllDeepest(
    root: TreeNode | null,
): TreeNode | null {
    if (root == null) {
        return null;
    }

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    if (left === right) return root;
    if (left < right) return subtreeWithAllDeepest(root.right);
    return subtreeWithAllDeepest(root.left);
}
