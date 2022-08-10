import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default function convertBST(root: TreeNode | null): TreeNode | null {
    let pre = 0;
    let cur: TreeNode | null | undefined = root;
    const stack: (TreeNode | null | undefined)[] = [];
    while (cur || stack.length !== 0) {
        while (cur) {
            stack.push(cur);
            cur = cur.right;
        }
        cur = stack.pop();
        if (cur) {
            cur.val += pre;
            pre = cur.val;
            cur = cur?.left;
        }
    }
    return root;
}
