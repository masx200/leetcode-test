import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export function ArrayToCircularDoublyTreeList(
    array: Array<number>,
): TreeNode | null {
    if (array.length === 0) {
        return null;
    }
    const head = new TreeNode(array[0]);
    let cur = head;
    for (let i = 1; i < array.length; i++) {
        cur.right = new TreeNode(array[i], cur);
        cur = cur.right;
    }
    head.left = cur;
    cur.right = head;

    return head;
}
