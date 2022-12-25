import { ListNode } from "../mod.ts";

export default function reContruct(head: ListNode | null): ListNode | null {
    if (!head) return null;
    const pre = new ListNode(-1, head);
    let cur: ListNode | null | undefined = pre;
    while (cur) {
        if (cur.next && cur.next.val % 2 === 0) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }
    return pre.next;
}
