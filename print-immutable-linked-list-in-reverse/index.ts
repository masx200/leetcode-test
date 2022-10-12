import { ImmutableListNode } from "./ImmutableListNode.ts";

export default function printLinkedListInReverse(
    head: ImmutableListNode | null
) {
    if (head !== null) {
        printLinkedListInReverse(head.getNext());
        head.printValue();
    }
}
