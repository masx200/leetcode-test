import { ListNode } from "../reverse-linked-list/ListNode.ts";

export function getEndOfList(list1: ListNode): ListNode {
    while (true) {
        if (list1.next) {
            list1 = list1.next;
            continue;
        } else {
            return list1;
        }
    }
}
