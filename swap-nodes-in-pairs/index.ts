import { ListNode } from "../reverse-linked-list/ListNode.ts";

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
export default function swapPairs(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    const res = new ListNode(0, head);
    let pre: ListNode | undefined | null = res;
    let cur: ListNode | undefined | null = pre?.next;
    let next: ListNode | undefined | null = cur?.next;
    while (pre && cur && next) {
        cur.next = next.next;
        next.next = cur;
        pre.next = next;
        pre = cur;

        cur = pre?.next;
        next = cur?.next;
    }
    return res.next;
}
