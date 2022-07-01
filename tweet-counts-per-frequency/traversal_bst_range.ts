import { BinarySearchTreeNode } from "../deps.ts";

export function traversal_bst_range<
    K extends string | number = number,
    V = number,
>(
    node: BinarySearchTreeNode<K, V> | null | undefined,
    low: number,
    high: number,
    callback: (key: K, value: V) => void,
) {
    if (!node) return;

    const value = node.getKey();
    if (value <= high && value >= low) {
        callback(value, node.getValue());
    }
    if (value > low) {
        traversal_bst_range(node.getLeft(), low, high, callback);
    }
    if (value < high) {
        traversal_bst_range(node.getRight(), low, high, callback);
    }
}
