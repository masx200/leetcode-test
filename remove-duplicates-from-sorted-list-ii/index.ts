export default function deleteDuplicates(
    head: ListNode | null,
): ListNode | null {
    if (!head) return head;

    if (head.next && head.val === head.next.val) {
        while (head.next && head.val === head.next.val) {
            head = head.next;
        }
        return deleteDuplicates(head.next);
    } else {
        head.next = deleteDuplicates(head.next);
        return head;
    }
}
import { ListNode } from "../reverse-linked-list/ListNode.ts";