import reverse_Linked_List from "../reverse-linked-list/index.ts";
import { ListNode } from "../reverse-linked-list/ListNode.ts";
import { get_deep_next_of_list } from "./get_deep_next_of_list.ts";
import { get_length_of_list } from "./get_length_of_list.ts";

export default function reverseBetween(
    head: ListNode | null,
    left: number,
    right: number,
): ListNode | null {
    // const sequence=new WeakMap<ListNode,ListNode>()

    if (!head) return head;
    if (!head.next) return head;
    if (left === right) return head;

    const length = get_length_of_list(head);
    if (left === 1 && length === right) {
        return reverse_Linked_List(head);
    }

    if (left !== 1) {
        return new ListNode(
            head.val,
            reverseBetween(head.next, left - 1, right - 1),
        );
    }
    const start = get_deep_next_of_list(head, left - 1);
    const end = get_deep_next_of_list(head, right - 1);
    const succ = get_deep_next_of_list(head, right - 1).next;
    // if (right < length) {

    //     const result = reverseBetween(head, left, right - 1)
    //     if (result) {
    //         result.next = succ
    //     }
    //     return result
    // }

    //head

    const reverse = new WeakMap<ListNode, ListNode>();
    // if (left !== 1) {
    //     for (let i = 1; i < left; i++) {
    //         if (start.next) {
    //             start = start.next
    //         }
    //     }
    // }
    // console.log({ start: start.val })
    // for (let i = 1; i < right; i++) {
    //     if (end.next) {
    //         end = end.next
    //     }
    // }
    // console.log({ end: end.val })
    const pre_start = get_deep_next_of_list(head, left - 1 - 1);

    /* head
    for (let i = 1; i < left - 1; i++) {
        if (pre_start.next) {
            pre_start = pre_start.next
        }
    } */

    for (let l: null | ListNode = start; l !== end; l = l.next) {
        if (!l) break;
        // sequence.set(l,l.next)
        if (l.next) {
            // console.log([l, l.next])
            reverse.set(l.next, l);
        }
    }
    pre_start.next = end;
    start.next = succ;
    let cur = end;
    let next = reverse.get(cur);
    while (next) {
        cur.next = next;

        cur = next;
        next = reverse.get(cur);
    }
    if (left === 1) {
        return end;
    } else {
        return head;
    }
}
