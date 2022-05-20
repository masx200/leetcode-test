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

/**
 Do not return anything, modify it in-place instead.
 */
export default function deleteNode(node: ListNode | null): void {
    if (!node) return;
    const val = node.next?.val;
    if (typeof val === "number") node.val = val;
    node.next = node.next?.next || null;
}
