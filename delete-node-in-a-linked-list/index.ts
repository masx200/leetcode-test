import { ListNode } from '../reverse-linked-list/ListNode.ts';

export default function deleteNode(node: ListNode | null): void {
    if (!node) return;
    const val = node.next?.val;
    if (typeof val === "number") node.val = val;
    node.next = node.next?.next || null;
}
