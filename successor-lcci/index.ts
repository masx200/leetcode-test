import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

const inorderSuccessor = function (
    root: TreeNode | null,
    p: TreeNode | null,
): TreeNode | null {
    if (!root) return null;
    if (!p) return null;

    if (root.val <= p.val) {
        return inorderSuccessor(root.right, p);
    } else {
        const ans = inorderSuccessor(root.left, p);
        if (ans) return ans;
        else {
            return root;
        }
    }
};
export default inorderSuccessor;
