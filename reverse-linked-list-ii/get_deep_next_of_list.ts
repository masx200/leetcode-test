import { ListNode } from "../reverse-linked-list/ListNode.ts";

// function reverse_Linked_List(
//     head: ListNode | null,
// ): ListNode | null {
//     let ans = null;
//     let x = head;
//     while (x != null) {
//         ans = new ListNode(x.val, ans);
//         x = x.next;
//     }
//     return ans;
// }
export function get_deep_next_of_list(list: ListNode, index: number): ListNode {
    if (index === 0) return list;
    const head = list;
    let pre_start = head;
    for (let i = 0; i < index; i++) {
        if (pre_start.next) {
            pre_start = pre_start.next;
        } else {
            throw Error("out of bounds:" + index);
        }
    }
    return pre_start;
}
