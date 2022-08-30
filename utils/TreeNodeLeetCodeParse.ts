import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { TreeNode as TreeNodeClass } from "../deps.ts";

export function TreeNodeLeetCodeParse(s: string): TreeNode | null {
    return treeNodeNew(TreeNodeClass.create(JSON.parse(s)));
}
function treeNodeNew(t: TreeNodeClass | null): TreeNode | null {
    if (t == null) {
        return null;
    }
    const n = new TreeNode();
    n.val = t.val;
    n.left = treeNodeNew(t.left);
    n.right = treeNodeNew(t.right);
    return n;
}
export function TreeNodeLeetCodeFromJSON(s: any[]): TreeNode | null {
    return treeNodeNew(TreeNodeClass.create(s));
}
