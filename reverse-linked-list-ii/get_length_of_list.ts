import { ListNode } from "../reverse-linked-list/ListNode.ts";

export function get_length_of_list(list: ListNode): number {
    // if (index === 0) { return list }
    const head = list;
    let start = head;
    let i = 1;
    for (; true; i++) {
        if (start.next) {
            start = start.next;
        } else {
            break;
        }
    }
    return i;
}
