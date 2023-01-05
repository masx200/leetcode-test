import { ListNode } from "../mod.ts";

export default function removeZeroSumSublists(
    head: ListNode | null
): ListNode | null {
    const dummy = new ListNode(0, head);

    const map = new Map<number, ListNode>();

    for (let p: ListNode | null = dummy, sum = 0; p; p = p.next) {
        sum += p.val;
        map.set(sum, p);
    }

    for (let p: ListNode | null = dummy, sum = 0; p; p = p.next) {
        sum += p.val;
        p.next = map.get(sum)?.next ?? null;
    }

    return dummy.next;
}
