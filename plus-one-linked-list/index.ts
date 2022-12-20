import po from "../plus-one/index.ts";
import { ArrayToListNode } from "../reverse-linked-list/ArrayToListNode.ts";
import { ListNode } from "../reverse-linked-list/ListNode.ts";
import { ListNodeToArray } from "../reverse-linked-list/ListNodeToArray.ts";

export default function plusOne(digits: ListNode | null): ListNode | null {
    return [digits].map(ListNodeToArray).map(po).map(ArrayToListNode)[0];
}
