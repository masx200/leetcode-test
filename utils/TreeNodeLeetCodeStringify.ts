import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { TreeNode as TreeNodeClass } from "../deps.ts";
export function TreeNodeLeetCodeStringify(root: TreeNode | null): string {
    return JSON.stringify(TreeNodeClass.show(root));
}
