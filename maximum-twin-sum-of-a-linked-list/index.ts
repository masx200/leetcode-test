import { ListNode } from "../mod.ts";

export default function pairSum(head: ListNode | null): number {
    if (!head) return 0;
    let left = head;
    let right = head;
    const node_to_prev = new WeakMap<ListNode, null | ListNode>();

    let sum = 0;

    while (right) {
        if (right.next) {
            node_to_prev.set(right.next, right);
            right = right.next;
        } else {
            break;
        }
    }

    while (left !== right) {
        sum = Math.max(sum, left.val + right.val);
        if (left.next) {
            left = left.next;
        } else {
            break;
        }
        const prev = node_to_prev.get(right);
        if (prev) {
            right = prev;
        } else {
            break;
        }
    }
    return sum;
}
