import { ListNode } from "../reverse-linked-list/ListNode.ts";
import { ListNodeToArray } from "../reverse-linked-list/ListNodeToArray.ts";

export default function isPalindrome(head: ListNode | null): boolean {
    if (!head) return true;
    if (head.next === null) {
        return true;
    }

    const vals = ListNodeToArray(head);

    const half = Math.floor(vals.length / 2);
    for (let i = 0; i <= half; i++) {
        if (vals[i] !== vals[vals.length - 1 - i]) return false;
    }
    return true;
}
