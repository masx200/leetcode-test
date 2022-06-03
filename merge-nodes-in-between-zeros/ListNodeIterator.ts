import { ListNode } from "../reverse-linked-list/ListNode.ts";

export function* ListNodeIterator(list: ListNode | null): Generator<number> {
    if (list === null) {
        return;
    }

    let temp: ListNode | null = list;
    while (temp) {
        yield temp.val;
        temp = temp.next;
    }
    return;
}
