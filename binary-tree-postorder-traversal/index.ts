import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

function postorder(root: TreeNode | null, output: (a: number) => void) {
    if (!root) {
        return;
    }

    postorder(root.left, output);

    postorder(root.right, output);
    output(root.val);
}
export default function postorderTraversal(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }
    const res: number[] = [];
    postorder(root, (a) => res.push(a));
    return res;
}
