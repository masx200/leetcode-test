import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default recoverTree;
function recoverTree(root: TreeNode | null): void {
    if (!root) return;

    const iterator = InOrderIterator(root);
    const [first, second] = findTwoSwapped(iterator);
    swap(first, second);
}

export function* InOrderIterator(root: TreeNode | null): Generator<TreeNode> {
    if (!root) return;
    yield* InOrderIterator(root.left);
    yield root;
    yield* InOrderIterator(root.right);
}
function findTwoSwapped(nodes: Generator<TreeNode, any, unknown>): TreeNode[] {
    let x: TreeNode | null = null,
        y: TreeNode | null = null,
        root: TreeNode | null = null,
        pred: TreeNode | null = null;
    for (const node of nodes) {
        root = node;
        if (pred !== null && root.val < pred.val) {
            y = root;
            if (x === null) {
                x = pred;
            } else break;
        }
        pred = root;
        root = root.right;
    }
    if (x === null || y === null) throw Error("accident");
    return [x, y];
}

function swap(x: TreeNode, y: TreeNode) {
    [x.val, y.val] = [y.val, x.val];
}
