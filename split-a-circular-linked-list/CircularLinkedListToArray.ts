import { ListNode } from "../reverse-linked-list/ListNode.ts";

export function CircularLinkedListToArray(
    list: ListNode | null | undefined,
): number[] {
    if (!list) return [];
    const array = [];
    const head = list;
    let cur: ListNode | null | undefined = list;

    while (cur && cur?.next != head) {
        array.push(cur?.val);
        cur = cur?.next;
    }
    cur && array.push(cur?.val);
    return array;
}
