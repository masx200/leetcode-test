import { ArrayToListNode } from "../reverse-linked-list/ArrayToListNode.ts";
import { ListNode } from "../reverse-linked-list/ListNode.ts";
import { ListNodeIterator } from "./ListNodeIterator.ts";
export default function mergeNodes(head: ListNode | null): ListNode | null {
    const result: number[] = [];
    let sum = 0;
    for (const num of ListNodeIterator(head)) {
        if (num === 0) {
            if (sum > 0) {
                result.push(sum);
            }
            sum = 0;
        } else {
            sum += num;
        }
    }
    return ArrayToListNode(result);
}
