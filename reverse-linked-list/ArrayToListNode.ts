import { ListNode } from "./ListNode.ts";

export function ArrayToListNode(array: Array<number>): ListNode | null {
    if (array.length === 0) {
        return null;
    }
    const list = new ListNode(array[0]);
    let cur = list;
    for (let i = 1; i < array.length; i++) {
        const v = array[i];
        const l = new ListNode(v);
        cur.next = l;
        cur = cur.next;
    }
    // array.slice(1).reduce((p, v) => {
    //     const l = new ListNode(v);
    //     p.next = l;
    //     return l;
    // }, list);
    return list;
}
