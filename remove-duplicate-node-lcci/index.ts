import { ListNode } from "../reverse-linked-list/ListNode.ts";

function removeDuplicateNodes(head: ListNode | null): ListNode | null {
    if (!head) return null;
    const occured = new Set<number>();

    occured.add(head.val);

    const result = new ListNode(head.val);
    let cur = result;

    while (head) {
        if (!occured.has(head.val)) {
            occured.add(head.val);

            cur.next = new ListNode(head.val);
            cur = cur.next;
        }
        head = head.next;
    }
    return result;
}
export default removeDuplicateNodes;
