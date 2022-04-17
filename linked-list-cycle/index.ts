import { ListNode } from "../reverse-linked-list/ListNode.ts";

export default function hasCycle(head: ListNode | null): boolean {
    if (!head) return false;
    const cache = new Set<ListNode>();

    while (head) {
        if (cache.has(head)) {
            return true;
        } else {
            cache.add(head);
        }
        head = head.next;
    }
    return false;
}
