import { BinarySearchTreeNode } from "../deps.ts";

export function traversal_bst_range<K extends string | number = number>(
    node: BinarySearchTreeNode<K> | null | undefined,
    low: number,
    high: number,
    callback: (key: K) => void,
) {
    if (!node) return;

    const value = node.getValue();
    if (value <= high && value >= low) {
        callback(value);
    }
    if (value > low) {
        traversal_bst_range(node.getLeft(), low, high, callback);
    }
    if (value < high) {
        traversal_bst_range(node.getRight(), low, high, callback);
    }
}
