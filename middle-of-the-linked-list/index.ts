import { ListNode } from "../reverse-linked-list/ListNode.ts";

export default function middleNode(head: ListNode | null): ListNode | null {
    if (!head) return head;
    if (!head.next) return head;
    let slow: null | ListNode = head;
    let fast: null | ListNode = head;
    while (fast && fast.next && slow) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
