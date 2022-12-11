import { ListNode } from "../reverse-linked-list/ListNode.ts";

export default function getIntersectionNode(
    headA: ListNode | null,
    headB: ListNode | null
): ListNode | null {
    if (!headA) return null;
    if (!headB) return null;
    const cache = new Set<ListNode>();
    function onnode(node: ListNode) {
        if (cache.has(node)) {
            return node;
        } else {
            cache.add(node);
            return null;
        }
    }
    let ptr1: ListNode | null = headA;
    let ptr2: ListNode | null = headB;
    while (ptr2 || ptr1) {
        if (Math.random() < 0.5) {
            if (!ptr1) continue;
            const r = onnode(ptr1);
            if (r) return r;
            ptr1 = ptr1.next;
        } else {
            if (!ptr2) continue;

            const r = onnode(ptr2);
            if (r) return r;
            ptr2 = ptr2.next;
        }
    }

    return null;
}
