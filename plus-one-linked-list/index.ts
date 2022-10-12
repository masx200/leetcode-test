import { ListNode } from "../reverse-linked-list/ListNode.ts";
import po from "../plus-one/index.ts";
import { ListNodeToArray } from "../reverse-linked-list/ListNodeToArray.ts";
import { ArrayToListNode } from "../reverse-linked-list/ArrayToListNode.ts";
export default function plusOne(digits: ListNode | null): ListNode | null {
    return [digits].map(ListNodeToArray).map(po).map(ArrayToListNode)[0];
}
