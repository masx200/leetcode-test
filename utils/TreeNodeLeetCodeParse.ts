import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { TreeNode as TreeNodeClass } from "../deps.ts";
export function TreeNodeLeetCodeParse(s: string): TreeNode | null {
    return TreeNodeClass.create(JSON.parse(s));
}
