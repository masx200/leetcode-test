import { ListNode } from "../reverse-linked-list/ListNode.ts";

export default function removeElements(
    head: ListNode | null,
    val: number
): ListNode | null {
    if (!head) {
        return head;
    }
    const res = new ListNode(0);
    let ptr = res;
    let cur: ListNode | null = head;
    while (cur) {
        if (cur.val !== val) {
            ptr.next = new ListNode(cur.val);
            ptr = ptr.next;
        }
        cur = cur.next;
    }
    return res.next;
}
