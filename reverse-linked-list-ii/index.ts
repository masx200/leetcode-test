import reverse_Linked_List from "../reverse-linked-list/index.ts";
import { ListNode } from "../reverse-linked-list/ListNode.ts";
import { get_deep_next_of_list } from "./get_deep_next_of_list.ts";
import { get_length_of_list } from "./get_length_of_list.ts";

export default function reverseBetween(
    head: ListNode | null,
    left: number,
    right: number,
): ListNode | null {
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
    const reverse = new WeakMap<ListNode, ListNode>();
    const pre_start = get_deep_next_of_list(head, left - 1 - 1);

    for (let l: null | ListNode = start; l !== end; l = l.next) {
        if (!l) break;
        if (l.next) {
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
