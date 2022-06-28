import { ArrayToListNode } from "../reverse-linked-list/ArrayToListNode.ts";
import { ListNode } from "../reverse-linked-list/ListNode.ts";
import { ListNodeToArray } from "../reverse-linked-list/ListNodeToArray.ts";
import sortArray from "../sort-an-array/index.ts";

const sortList = function (head: ListNode | null): ListNode | null {
    if (head === null) {
        return head;
    }
    if (head.next === null) {
        return head;
    }
    return ArrayToListNode(sortArray(ListNodeToArray(head)));
};
export default sortList;
