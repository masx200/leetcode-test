import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import maxDepth from "../maximum-depth-of-binary-tree/index.ts";

export interface BinaryTreePosition {
    node: TreeNode;
    row: number;
    col: number;
}
function printTree(root: TreeNode | null): string[][] {
    if (!root) {
        return [];
    }

    const depth = maxDepth(root);
    const height = depth - 1;
    const m = depth;
    const n = 2 ** m - 1;
    const result: string[][] = Array(depth)
        .fill(0)
        .map(() => Array(n).fill(""));

    let cur: Array<BinaryTreePosition> = [
        { node: root, row: 0, col: Math.floor((n - 1) / 2) },
    ];
    while (cur.length) {
        const next: Array<BinaryTreePosition> = [];
        for (const { node, row, col } of cur) {
            if (node) {
                result[row][col] = node.val.toString();
                node.left &&
                    next.push({
                        node: node.left,
                        row: row + 1,
                        col: col - 2 ** (height - 1 - row),
                    });
                node.right &&
                    next.push({
                        node: node.right,
                        row: row + 1,
                        col: col + 2 ** (height - 1 - row),
                    });
            }
        }
        cur = next;
    }
    return result;
}
export default printTree;
