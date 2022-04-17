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
export default function middleNode(head: ListNode | null): ListNode | null {
    if (!head) return head;
    if (!head.next) return head;
    let slow: null | ListNode = head;
    let fast: null | ListNode = head;
    while (fast && fast.next && slow) {
        slow = slow.next;
        // if (fast.next) {
        fast = fast.next.next;
        // } else {
        //     throw Error('?????')
        // }
    }
    return slow;
}
