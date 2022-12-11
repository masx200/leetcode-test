import { ListNode } from "../reverse-linked-list/ListNode.ts";

export function ArrayToCircularLinkedList(
    array: Array<number>
): ListNode | null {
    if (array.length === 0) {
        return null;
    }
    const head = new ListNode(array[0]);
    let cur = head;
    for (let i = 1; i < array.length; i++) {
        cur.next = new ListNode(array[i]);
        cur = cur.next;
    }
    cur.next = head;
    return head;
}
