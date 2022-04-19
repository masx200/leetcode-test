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

import { ArrayToListNode } from "../reverse-linked-list/ArrayToListNode.ts";
import { ListNode } from "../reverse-linked-list/ListNode.ts";
import { ListNodeToArray } from "../reverse-linked-list/ListNodeToArray.ts";
import sortArray from "../sort-an-array/index.ts";

const sortList = function (head: ListNode | null) {
    if (head === null) {
        return head;
    }
    if (head.next === null) {
        return head;
    }
    return ArrayToListNode(sortArray(ListNodeToArray(head)));
    // let length =get_length_of_list(head)
    // const dummyHead = new ListNode(0, head);
    // for (let subLength = 1; subLength < length; subLength <<= 1) {
    //     let prev = dummyHead, curr = dummyHead.next;
    //     while (curr !== null) {
    //         let head1 = curr;
    //         for (let i = 1; i < subLength && curr.next !== null; i++) {
    //             curr = curr.next;
    //         }
    //     //    curr= get_deep_next_of_list(curr,subLength-1)
    //         let head2 = curr.next;
    //         curr.next = null;
    //         curr = head2;
    //         for (let i = 1; i < subLength && curr != null && curr.next !== null; i++) {
    //             curr = curr.next;
    //         }
    //         //  curr= get_deep_next_of_list(curr,subLength-1)
    //         let next = null;
    //         if (curr !== null) {
    //             next = curr.next;
    //             curr.next = null;
    //         }
    //         const merged = mergeTwoLists(head1, head2);
    //         prev.next = merged;
    //         while (prev.next !== null) {
    //             prev = prev.next;
    //         }
    //         curr = next;
    //     }
    // }
    // return dummyHead.next;
};
//  function mergeTwoLists(
//     list1: ListNode | null,
//     list2: ListNode | null
// ): ListNode | null {
//     if (!list1) return list2;
//     if (!list2) return list1;
//     let l1: ListNode | null = list1;
//     let l2: ListNode | null = list2;
//     const prehead = new ListNode(-1);
//     let prev = prehead;
//     while (l1 != null && l2 != null) {
//         if (l1.val <= l2.val) {
//             prev.next = l1;
//             l1 = l1.next;
//         } else {
//             prev.next = l2;
//             l2 = l2.next;
//         }
//         prev = prev.next;
//     }
//     prev.next = l1 === null ? l2 : l1;

//     return prehead.next;
// }
// function get_length_of_list(list: ListNode): number {
//     // if (index === 0) { return list }
//     const head = list;
//     let start = head;
//     let i = 1;
//     for (; true; i++) {
//         if (start.next) {
//             start = start.next;
//         } else {
//             break;
//         }
//     }
//     return i;
// }
// function sortArray(nums: number[]): number[] {
//     0 < nums.length - 1 && mergeSort(nums, 0, nums.length - 1);

//     return nums;
// }

// function mergeSort(nums: number[], left: number, right: number) {
//     if (left < right) {
//         const middle = Math.floor((left + right) / 2);

//         left < middle && mergeSort(nums, left, middle);

//         middle + 1 < right && mergeSort(nums, middle + 1, right);

//         mergeArray(nums, left, middle, middle + 1, right);
//     }
// }

// function mergeArray(
//     nums: number[],
//     left1: number,
//     right1: number,
//     left2: number,
//     right2: number,
// ) {
//     const temp: number[] = Array(right2 - left2 + right1 - left1 + 2);

//     let p1 = left1;

//     let p2 = left2;

//     let t1 = 0;

//     while (p1 <= right1 && p2 <= right2) {
//         if (nums[p1] <= nums[p2]) {
//             temp[t1] = nums[p1];

//             t1++;

//             p1++;
//         } else {
//             temp[t1] = nums[p2];

//             t1++;

//             p2++;
//         }
//     }
//     while (p1 <= right1) {
//         temp[t1] = nums[p1];

//         t1++;

//         p1++;
//     }

//     while (p2 <= right2) {
//         temp[t1] = nums[p2];

//         t1++;

//         p2++;
//     }

//     let t2 = 0;

//     let p3 = left1;

//     while (p3 <= right2) {
//         nums[p3] = temp[t2];

//         p3++;

//         t2++;
//     }
// }
// function ArrayToListNode(array: Array<number>): ListNode | null {
//     if (array.length === 0) {
//         return null;
//     }
//     const list = new ListNode(array[0]);
//     array.slice(1).reduce((p, v) => {
//         const l = new ListNode(v);
//         p.next = l;
//         return l;
//     }, list);
//     return list;
// }function ListNodeToArray(list: ListNode | null): Array<number> {
//     if (list === null) {
//         return [];
//     }
//     const array: Array<number> = [];
//     let temp: ListNode | null = list;
//     while (temp) {
//         array.push(temp.val);
//         temp = temp.next;
//     }
//     return array;
// }
// var sortList = function(head: ListNode | null,) {
//     if (head === null) {
//         return head;
//     }
//     let length =get_length_of_list(head)
//     const dummyHead = new ListNode(0, head);
//     for (let subLength = 1; subLength < length; subLength <<= 1) {
//         let prev = dummyHead, curr = dummyHead.next;
//         while (curr !== null) {
//             let head1 = curr;
//             for (let i = 1; i < subLength && curr.next !== null; i++) {
//                 curr = curr.next;
//             }
//         //    curr= get_deep_next_of_list(curr,subLength-1)
//             let head2 = curr.next;
//             curr.next = null;
//             curr = head2;
//             for (let i = 1; i < subLength && curr != null && curr.next !== null; i++) {
//                 curr = curr.next;
//             }
//             //  curr= get_deep_next_of_list(curr,subLength-1)
//             let next = null;
//             if (curr !== null) {
//                 next = curr.next;
//                 curr.next = null;
//             }
//             const merged = mergeTwoLists(head1, head2);
//             prev.next = merged;
//             while (prev.next !== null) {
//                 prev = prev.next;
//             }
//             curr = next;
//         }
//     }
//     return dummyHead.next;
// };
//  function mergeTwoLists(
//     list1: ListNode | null,
//     list2: ListNode | null
// ): ListNode | null {
//     if (!list1) return list2;
//     if (!list2) return list1;
//     let l1: ListNode | null = list1;
//     let l2: ListNode | null = list2;
//     const prehead = new ListNode(-1);
//     let prev = prehead;
//     while (l1 != null && l2 != null) {
//         if (l1.val <= l2.val) {
//             prev.next = l1;
//             l1 = l1.next;
//         } else {
//             prev.next = l2;
//             l2 = l2.next;
//         }
//         prev = prev.next;
//     }
//     prev.next = l1 === null ? l2 : l1;

//     return prehead.next;
// }
// function get_length_of_list(list: ListNode): number {
//     // if (index === 0) { return list }
//     const head = list;
//     let start = head;
//     let i = 1;
//     for (; true; i++) {
//         if (start.next) {
//             start = start.next;
//         } else {
//             break;
//         }
//     }
//     return i;
// }
// import mergeTwoLists from "../merge-two-sorted-lists/index.ts";
// import { get_length_of_list } from "../reverse-linked-list-ii/get_length_of_list.ts";
// import { ListNode } from "../reverse-linked-list/ListNode.ts";

// const sortList = function (head: ListNode | null) {
//     if (head === null) {
//         return head;
//     }
//     const length = get_length_of_list(head);
//     const dummyHead = new ListNode(0, head);
//     for (let subLength = 1; subLength < length; subLength <<= 1) {
//         let prev = dummyHead,
//             curr = dummyHead.next;
//         while (curr !== null) {
//             const head1 = curr;
//             for (let i = 1; i < subLength && curr.next !== null; i++) {
//                 curr = curr.next;
//             }
//             //    curr= get_deep_next_of_list(curr,subLength-1)
//             const head2 = curr.next;
//             curr.next = null;
//             curr = head2;
//             for (
//                 let i = 1;
//                 i < subLength && curr != null && curr.next !== null;
//                 i++
//             ) {
//                 curr = curr.next;
//             }
//             //  curr= get_deep_next_of_list(curr,subLength-1)
//             let next = null;
//             if (curr !== null) {
//                 next = curr.next;
//                 curr.next = null;
//             }
//             const merged = mergeTwoLists(head1, head2);
//             prev.next = merged;
//             while (prev.next !== null) {
//                 prev = prev.next;
//             }
//             curr = next;
//         }
//     }
//     return dummyHead.next;
// };
export default sortList;
