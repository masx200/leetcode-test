import { ListNode } from "../reverse-linked-list/ListNode.ts";

function deleteNode(head: ListNode | null, val: number): ListNode | null {
    if (!head) {
        return head;
    }
    const res = new ListNode(0);
    let ptr = res;
    let cur: ListNode | null = head;
    while (cur) {
        if (cur.val !== val) {
            ptr.next = new ListNode(cur.val);
            ptr = ptr.next;
        } else {
            ptr.next = cur.next;
            return res.next;
        }
        cur = cur.next;
    }
    return res.next;
}
export default deleteNode;
