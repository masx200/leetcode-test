import { ListNode } from "../reverse-linked-list/ListNode.ts";

export default function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null,
): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;
    let l1: ListNode | null = list1;
    let l2: ListNode | null = list2;
    const prehead = new ListNode(-1);
    let prev = prehead;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    prev.next = l1 === null ? l2 : l1;

    return prehead.next;
}
