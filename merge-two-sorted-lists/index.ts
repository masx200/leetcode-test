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
    list2: ListNode | null
): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;
    let l1: ListNode | null = list1;
    let l2: ListNode | null = list2;
    const prehead = new ListNode(-1);
    let prev = prehead;
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            prev.next = l1;
            l1 = l1.next;
        } else {
            prev.next = l2;
            l2 = l2.next;
        }
        prev = prev.next;
    }
    prev.next = l1 === null ? l2 : l1;

    return prehead.next;
    // const small = list1.val < list2.val;
    // const first = Math.min(list1.val, list2.val);
    // const next = list1.val < list2.val
    //     ? mergeTwoLists(list1.next, list2)
    //     : mergeTwoLists(list2.next, list1);
    // const result = new ListNode(first, next);

    // const result = small ? list1 : list2;
    // let head: ListNode | null = result;
    // let p1: ListNode | null = small ? list1.next : list1;
    // let p2: ListNode | null = small ? list2 : list2.next;
    // while (p1 && p2 && head) {
    //     if (p1.val < p2.val) {
    //         head.next = p1;
    //         p1 = p1.next;
    //     } else {
    //         head.next = p2;
    //         p2 = p2.next;
    //     }
    //     head = head.next;
    // }
    // return result;
}
