import { ListNode } from '../reverse-linked-list/ListNode.ts';
import { ListNodeToArray } from '../reverse-linked-list/ListNodeToArray.ts';

export default function reversePrint(head: ListNode | null): number[] {
    return ListNodeToArray(head).reverse();
}
