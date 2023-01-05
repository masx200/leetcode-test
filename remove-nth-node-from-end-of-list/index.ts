import { ListNode } from "../reverse-linked-list/ListNode.ts";

export default function removeNthFromEnd(
    head: ListNode | null,
    n: number
): ListNode | null {
    if (!head) return head;
    const nodes: ListNode[] = [];

    let cur: ListNode | null = head;
    while (cur) {
        nodes.push(cur);
        cur = cur.next;
    }

    if (nodes.length < n) {
        return null;
    }

    if (nodes.length === n) {
        return nodes[1] || null;
    }
    if (nodes.length > n) {
        const pre = nodes[nodes.length - n - 1];
        const succ = nodes[nodes.length - n + 1];

        if (pre) {
            pre.next = succ || null;
        }
    }
    return head;
}
