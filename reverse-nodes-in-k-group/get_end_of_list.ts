import { ListNode } from "../reverse-linked-list/ListNode.ts";

export function get_end_of_list(list: ListNode): ListNode {
    const head = list;
    let start = head;
    while (true) {
        if (start.next) {
            start = start.next;
        } else {
            return start;
        }
    }
}
