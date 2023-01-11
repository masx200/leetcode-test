import { ArrayToListNode } from "../reverse-linked-list/ArrayToListNode.ts";
import { ListNode } from "../reverse-linked-list/ListNode.ts";
import { ListNodeToArray } from "../reverse-linked-list/ListNodeToArray.ts";

export default function partition(
    head: ListNode | null,
    x: number
): ListNode | null {
    if (!head) return head;
    if (!head.next) return head;
    const array = ListNodeToArray(head);
    const small = array.filter((a) => a < x);
    const big = array.filter((a) => a >= x);
    return ArrayToListNode([...small, ...big]);
}
// function ListNodeToArray(list: ListNode | null): Array<number> {
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
// function ArrayToListNode(array: Array<number>): ListNode | null {
//     if (array.length === 0) {
//         return null;
//     }
//     const list = new ListNode(array[0]);
//     let cur = list;
//     for (let i = 1; i < array.length; i++) {
//         const v = array[i];
//         const l = new ListNode(v);
//         cur.next = l;
//         cur = cur.next;
//     }
//     // array.slice(1).reduce((p, v) => {
//     //     const l = new ListNode(v);
//     //     p.next = l;
//     //     return l;
//     // }, list);
//     return list;
// }
