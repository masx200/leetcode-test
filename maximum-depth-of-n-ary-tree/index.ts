/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number, children?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = (children===undefined ? [] : children)
 *     }
 * }
 */

import { Node } from "../n-ary-tree-level-order-traversal/Node.ts";
export default function maxDepth(root: Node | null): number {
    if (!root) return 0;
    if (root.children.length === 0) {
        return 1;
    }
    return !root ? 0 : Math.max(...root.children.map((n) => maxDepth(n))) + 1;
}
