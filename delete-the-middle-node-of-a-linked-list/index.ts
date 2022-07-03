import { ListNode } from "../mod.ts";

export default function deleteMiddle(head: ListNode | null): ListNode | null {
    const dummy = new ListNode();
    dummy.next = head;
    let slow: ListNode | null = dummy;
    let fast: ListNode | null = dummy;
    while (fast && fast.next && slow && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if (slow) {
        slow.next = slow.next?.next ?? null;
    }
    return dummy.next;
}
