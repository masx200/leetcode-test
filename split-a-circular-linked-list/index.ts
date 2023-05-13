import { ListNode } from "../reverse-linked-list/ListNode.ts";
export default function splitCircularLinkedList(
    list: ListNode | null | undefined,
): Array<ListNode | null | undefined> {
    if (!list) return [];
    let a: ListNode | null | undefined = list;
    let b: ListNode | null | undefined = list;
    while (b?.next !== list && b?.next?.next !== list) {
        a = a?.next;
        b = b?.next?.next;
    }
    if (b.next !== list) {
        b = b.next;
    }
    const list2 = a?.next;
    b && (b.next = list2 ?? null);
    a && (a.next = list);
    return [list, list2];
}
