import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";
import { reverseInOrderIterator } from "./reverseInOrderIterator.ts";

function kthLargest(root: TreeNode | null, k: number): number {
    let i = 1;
    for (const v of reverseInOrderIterator(root)) {
        if (i === k) return v;
        i++;
    }
    throw Error("unreachable");
}
export default kthLargest;
