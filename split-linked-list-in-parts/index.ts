import { get_length_of_list } from "../mod.ts";
import { ListNode } from "../reverse-linked-list/ListNode.ts";

export default function splitListToParts(
    head: ListNode | null,
    k: number,
): Array<ListNode | null> {
    if (!head || k === 0) {
        return Array(k).fill(null);
    }

    const length = get_length_of_list(head);
    const quotient = Math.floor(length / k);

    const remainder = length % k;
    const result: Array<ListNode | null> = Array(k).fill(null);
    const sizes = Array<number>(k)
        .fill(0)
        .map((_, i) => {
            if (i < remainder) {
                return quotient + 1;
            } else {
                return quotient;
            }
        });

    let cur: ListNode | null = head;
    let index = 0;
    let partSize = 0;
    while (cur) {
        const next: ListNode | null = cur.next;

        if (partSize === 0) {
            result[index] = cur;
        }
        if (index === k - 1) return result;

        partSize++;

        if (partSize >= sizes[index]) {
            partSize = 0;
            index++;

            cur.next = null;
        }
        cur = next;
    }
    return result;
}
