export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
export default function reverse_Linked_List(
    head: ListNode | null,
): ListNode | null {
    let ans = null;
    let x = head;
    while (x != null) {
        ans = new ListNode(x.val, ans);
        x = x.next;
    }
    return ans;
}

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
export function ListNodeToArray(list: ListNode | null): Array<number> {
    if (list === null) {
        return [];
    }
    const array: Array<number> = [];
    let temp: ListNode | null = list;
    while (temp) {
        array.push(temp.val);
        temp = temp.next;
    }
    return array;
}
