import { ListNode } from "./ListNode.ts";

export function ArrayToListNode(array: Array<number>): ListNode | null {
    if (array.length === 0) {
        return null;
    }
    const list = new ListNode(array[0]);
    array.slice(1).reduce((p, v) => {
        const l = new ListNode(v);
        p.next = l;
        return l;
    }, list);
    return list;
}
