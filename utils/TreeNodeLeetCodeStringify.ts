import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { TreeNode as TreeNodeClass } from "../deps.ts";

export function TreeNodeLeetCodeStringify(root: TreeNode | null): string {
    return JSON.stringify(TreeNodeClass.show(treeNodeCreate(root)));
}
function treeNodeCreate(t: TreeNode | null): TreeNodeClass | null {
    if (t == null) {
        return null;
    }
    const n = new TreeNodeClass();
    n.val = t.val;
    n.left = treeNodeCreate(t.left);
    n.right = treeNodeCreate(t.right);
    return n;
}
export function TreeNodeLeetCodeToJSON(root: TreeNode | null): any[] {
    return (TreeNodeClass.show(treeNodeCreate(root)));
}
