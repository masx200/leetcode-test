import { ListNode } from "../reverse-linked-list/ListNode.ts";

export default function deleteDuplicates(
    head: ListNode | null,
): ListNode | null {
    if (!head) return head;

    const result = new ListNode(head.val);
    let current = result;
    while (head) {
        if (head.val !== current.val) {
            current.next = new ListNode(head.val);
            current = current.next;
        }

        head = head.next;
    }

    return result;
}
