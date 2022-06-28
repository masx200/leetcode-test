import { ListNode, ListNodeToArray } from "../mod.ts";

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) return null;
    if (k === 0) return head;
    if (!head.next) return head;
    let array = ListNodeToArray(head);
    const length = array.length;
    k = k % length;
    if (k === 0) return head;
    array = array.map((_, i) => {
        return array[(i + length - k) % length];
    });

    let current = head;
    for (const num of array) {
        current.val = num;
        if (!current.next) return head;
        if (!current || !current.next) {
            throw Error("current is null");
        }
        current = current.next;
    }
    return head;
}
export default rotateRight;
