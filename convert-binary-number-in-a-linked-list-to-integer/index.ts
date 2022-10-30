import { ListNode } from '../reverse-linked-list/ListNode.ts';

export default function getDecimalValue(head: ListNode | null): number {
    if (head?.val === 0) return getDecimalValue(head.next);
    if (!head) return 0;
    let ans = 0;
    while (head) {
        ans = ans * 2 + head.val;
        head = head.next;
    }
    return ans;
}
