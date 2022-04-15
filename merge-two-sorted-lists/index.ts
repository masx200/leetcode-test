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

import { ListNode } from "../reverse-linked-list/ListNode.ts";
/* RangeError: Maximum call stack size exceeded */
export default function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null,
): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;

    const first = Math.min(list1.val, list2.val);
    const next = list1.val < list2.val
        ? mergeTwoLists(list1.next, list2)
        : mergeTwoLists(list2.next, list1);
    const result = new ListNode(first, next);

    return result;
}
