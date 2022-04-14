import { ListNode } from "../reverse-linked-list/ListNode.ts";

export function get_length_of_list(list: ListNode): number {
    // if (index === 0) { return list }
    const head = list;
    let pre_start = head;
    let i = 1;
    for (; true; i++) {
        if (pre_start.next) {
            pre_start = pre_start.next;
        } else {
            break;
        }
    }
    return i;
}
