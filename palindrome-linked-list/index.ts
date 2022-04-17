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
import { ListNodeToArray } from "../reverse-linked-list/ListNodeToArray.ts";

export default function isPalindrome(head: ListNode | null): boolean {
    if (!head) return false;
    if (head.next === null) {
        return true;
    }

    const vals = ListNodeToArray(head);

    //   for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
    //         if (vals[i] !== vals[j]) {
    //             return false;
    //         }
    //     }
    //     return true;

    const half = Math.floor(vals.length / 2);
    for (let i = 0; i <= half; i++) {
        if (vals[i] !== vals[vals.length - 1 - i]) return false;
    }
    return true;
}

// function ListNodeToArray(head: ListNode | null){
// const r=[]
//     while(head){

//         r.push( head.val)
//         head=head.next
//     }
//     return r
// }
