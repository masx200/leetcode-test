import { TreeNode } from '../binary-tree-inorder-traversal/TreeNode.ts';

export default function isCompleteTree(root: TreeNode | null): boolean {
    if (!root) return false;
    const queue: Array<TreeNode | null> = [];
    queue.push(root);
    let isFindNull = false;
    while (queue.length) {
        const node = queue.shift();

        if (!node) {
            isFindNull = true;
        } else {
            if (isFindNull) return false;
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    return true;
}
