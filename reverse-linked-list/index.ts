import { ListNode } from "./ListNode.ts";

export default function reverse_Linked_List(
    head: ListNode | null
): ListNode | null {
    let ans = null;
    let x = head;
    while (x != null) {
        ans = new ListNode(x.val, ans);
        x = x.next;
    }
    return ans;
}
