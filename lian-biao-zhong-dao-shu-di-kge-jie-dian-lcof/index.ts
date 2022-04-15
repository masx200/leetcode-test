export default function getKthFromEnd(
    head: ListNode | null,
    k: number,
): ListNode | null {
    if (!head) return head;
    if (!head.next) return head;
    if (k === 0) return null;

    let fast: ListNode | null = head;
    for (let i = k; i > 0; i--) {
        if (fast) {
            fast = fast.next;
        }
    }
    if (!fast) return head;
    let slow: ListNode | null = head;
    while (fast && slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}
import { ListNode } from "../reverse-linked-list/ListNode.ts";
