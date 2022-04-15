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

import mergeTwoLists from "../merge-two-sorted-lists/index.ts";
import { ListNode } from "../reverse-linked-list/ListNode.ts";

export default function mergeKLists(
    lists: Array<ListNode | null>,
): ListNode | null {
    const listsnotnull = lists.filter((a) => !!a) as Array<ListNode>;

    if (listsnotnull.length === 0) return null;
    if (listsnotnull.length === 1) return listsnotnull[0];
    if (listsnotnull.length === 2) {
        return mergeTwoLists(listsnotnull[0], listsnotnull[1]);
    }

    // const array: number[] = []
    // listsnotnull.forEach(ln => {
    //     let head: ListNode | null = ln
    //     while (head) {
    //         array.push(head.val)

    //         head = head.next
    //     }
    // })
    // array.sort((a, b) => a - b)
    // const result = new ListNode(array[0])
    // let head = result
    // for (let v of array.slice(1)) {
    //     head.next = new ListNode(v)
    //     head = head.next
    // }
    // return result
    if (listsnotnull.length % 2) {
        return mergeTwoLists(
            listsnotnull[0],
            mergeKLists(listsnotnull.slice(1)),
        );
    } else {
        const half = Math.floor(lists.length / 2) - 1;
        return mergeKLists([
            mergeKLists(listsnotnull.slice(0, half)),
            mergeKLists(listsnotnull.slice(half, half + 2)),
            mergeKLists(listsnotnull.slice(half + 2)),
        ]);
    }
    // else if (listsnotnull.length > 20) {
    //     // 二分治理
    //     const half = Math.floor(lists.length / 2)
    //     return mergeTwoLists(mergeKLists(lists.slice(0, half)), mergeKLists(lists.slice(half)))
    // }
    // else {

    // }
}
