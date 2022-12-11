import { ListNode } from "../mod.ts";

export default function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null
): ListNode | null {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    const node_to_prev = new WeakMap<ListNode, ListNode | null>();

    while (l1 && l1.next) {
        node_to_prev.set(l1.next, l1);
        l1 = l1.next;
    }
    // l1 = l1.next;
    while (l2 && l2.next) {
        node_to_prev.set(l2.next, l2);
        l2 = l2.next;
    }
    // l2 = l2.next;
    // console.log(l1,l2)
    let head = null;
    // let temp: ListNode | null = head;
    let p1: ListNode | null | undefined = l1;
    let p2: ListNode | null | undefined = l2;
    let carry = 0;
    while (p1 || p2 || carry) {
        if (p1) {
            carry += p1.val;
            p1 = node_to_prev.get(p1);
        }
        if (p2) {
            carry += p2.val;
            p2 = node_to_prev.get(p2);
        }
        // temp.next = new ListNode(carry % 10);
        head = new ListNode(carry % 10, head);
        carry = Math.floor(carry / 10);
    }
    return head;
}
