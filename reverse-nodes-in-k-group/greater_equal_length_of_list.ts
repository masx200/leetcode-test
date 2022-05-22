import { ListNode } from "../reverse-linked-list/ListNode.ts";

export function greater_equal_length_of_list(
    list: ListNode,
    n: number,
): boolean {
    const head = list;
    let start = head;
    let i = 1;
    for (; true; i++) {
        if (i >= n) return true;
        if (start.next) {
            start = start.next;
        } else {
            break;
        }
    }
    return i >= n;
}
