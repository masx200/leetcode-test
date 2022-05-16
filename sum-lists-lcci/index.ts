import { ListNode } from "../reverse-linked-list/ListNode.ts";

function addTwoNumbers(
    l1: ListNode | null,
    l2: ListNode | null,
): ListNode | null {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }

    const head = new ListNode(0);
    let temp: ListNode | null = head;
    let p1: ListNode | null = l1;
    let p2: ListNode | null = l2;
    let carry = 0;
    while (p1 || p2 || carry) {
        if (p1) {
            carry += p1.val;
            p1 = p1.next;
        }
        if (p2) {
            carry += p2.val;
            p2 = p2.next;
        }
        temp.next = new ListNode(carry % 10);
        temp = temp.next;
        carry = Math.floor(carry / 10);
    }
    return head.next;
}
export default addTwoNumbers;
