import { Node } from "../n-ary-tree-level-order-traversal/Node.ts";
export default function maxDepth(root: Node | null): number {
    if (!root) return 0;
    if (root.children.length === 0) {
        return 1;
    }
    return Math.max(...root.children.map((n) => maxDepth(n))) + 1;
}
