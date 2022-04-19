import { ListNode } from "../reverse-linked-list/ListNode.ts";
import { get_end_of_list } from "./get_end_of_list.ts";
import { get_deep_next_of_list as get_deep_next_of_list } from "../reverse-linked-list-ii/get_deep_next_of_list.ts";
export default function mergeInBetween(
    list1: ListNode | null,
    a: number,
    b: number,
    list2: ListNode | null,
): ListNode | null {
    if (!list1) {
        return list1;
    }
    if (!list2) {
        return list1;
    }
    const start_of_first = list1;
    const end_of_list2 = get_end_of_list(list2);

    const end_of_first = get_deep_next_of_list(list1, a - 1);
    const start_of_third = get_deep_next_of_list(end_of_first, b - a + 2);
    end_of_first.next = list2;
    end_of_list2.next = start_of_third;
    return start_of_first;
}
