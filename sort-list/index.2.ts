import mergeTwoLists from "../merge-two-sorted-lists/index.ts";
import { get_length_of_list } from "../reverse-linked-list-ii/get_length_of_list.ts";
import { ListNode } from "../reverse-linked-list/ListNode.ts";

const sortList = function (head: ListNode | null) {
    if (head === null) {
        return head;
    }
    const length = get_length_of_list(head);
    const dummyHead = new ListNode(0, head);
    for (let subLength = 1; subLength < length; subLength <<= 1) {
        let prev = dummyHead,
            curr = dummyHead.next;
        while (curr !== null) {
            const head1 = curr;
            for (let i = 1; i < subLength && curr.next !== null; i++) {
                curr = curr.next;
            }
            //    curr= get_deep_next_of_list(curr,subLength-1)
            const head2 = curr.next;
            curr.next = null;
            curr = head2;
            for (
                let i = 1;
                i < subLength && curr != null && curr.next !== null;
                i++
            ) {
                curr = curr.next;
            }
            //  curr= get_deep_next_of_list(curr,subLength-1)
            let next = null;
            if (curr !== null) {
                next = curr.next;
                curr.next = null;
            }
            const merged = mergeTwoLists(head1, head2);
            prev.next = merged;
            while (prev.next !== null) {
                prev = prev.next;
            }
            curr = next;
        }
    }
    return dummyHead.next;
};
export default sortList;
