import { get_deep_next_of_list } from "../reverse-linked-list-ii/get_deep_next_of_list.ts";
import reverse_Linked_List from "../reverse-linked-list/index.ts";
import { ListNode } from "../reverse-linked-list/ListNode.ts";
import { get_end_of_list } from "./get_end_of_list.ts";
import { greater_equal_length_of_list } from "./greater_equal_length_of_list.ts";

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (k <= 1) return head;
    if (!head) return null;
    if (greater_equal_length_of_list(head, k)) {
        const res = new ListNode(0, head);
        const end = get_deep_next_of_list(head, k - 1);

        const next = end.next;

        end.next = null;
        res.next = reverse_Linked_List(head);
        if (res.next) {
            get_end_of_list(res.next).next = reverseKGroup(next, k);
        }
        return res.next;
    } else {
        return head;
    }
}
export default reverseKGroup;
