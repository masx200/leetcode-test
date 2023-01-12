import { ListNode } from "../reverse-linked-list/ListNode.ts";

export default function numComponents(
    head: ListNode | null,
    nums: number[],
): number {
    const numsSet = new Set<number>();
    for (const num of nums) {
        numsSet.add(num);
    }
    let inSet = false;
    let res = 0;
    while (head) {
        if (numsSet.has(head.val)) {
            if (!inSet) {
                inSet = true;
                res++;
            }
        } else {
            inSet = false;
        }
        head = head.next;
    }
    return res;
}
