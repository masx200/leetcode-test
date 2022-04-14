import { ListNode } from "./ListNode.ts";

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
