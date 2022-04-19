import { ListNode } from "../reverse-linked-list/ListNode.ts";

export function get_deep_next_of_list(list: ListNode, index: number): ListNode {
    if (index === 0) return list;
    const head = list;
    let start = head;
    for (let i = 0; i < index; i++) {
        if (start.next) {
            start = start.next;
        } else {
            throw Error("out of bounds:" + index);
        }
    }
    return start;
}
