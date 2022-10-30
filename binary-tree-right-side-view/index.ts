import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import levelOrder from "../binary-tree-level-order-traversal/index.ts";

export default function rightSideView(root: TreeNode | null): number[] {
    return levelOrder(root).map((a) => a[a.length - 1]);
}
