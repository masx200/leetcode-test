import { ListNode } from "../reverse-linked-list/ListNode.ts";

export default function detectCycle(head: ListNode | null): ListNode | null {
    if (!head) return head;
    const cache = new Set<ListNode>();

    while (head) {
        if (cache.has(head)) {
            return head;
        } else {
            cache.add(head);
        }
        head = head.next;
    }
    return null;
}
