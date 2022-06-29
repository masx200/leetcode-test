import { ListNode } from "../reverse-linked-list/ListNode.ts";

/**
 Do not return anything, modify it in-place instead.
 */
export default function deleteNode(node: ListNode | null): void {
    if (!node) return;
    const val = node.next?.val;
    if (typeof val === "number") node.val = val;
    node.next = node.next?.next || null;
}
