import { ListNode as Node } from "../reverse-linked-list/ListNode.ts";

/**
 * Definition for node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     constructor(val?: number, next?: Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.next = (next===undefined ? null : next);
 *     }
 * }
 */

export default function insert(
    head: Node | null,
    insertVal: number,
): Node | null {
    if (!head) {
        const node = new Node(insertVal);
        node.next = node;
        return node;
    }
    const node = new Node(insertVal);

    let cur = head;
    while (cur.next !== head) {
        const nextval = cur.next?.val;
        if (typeof nextval == "undefined") {
            throw Error("none next node");
        }
        if (cur.val <= insertVal && nextval >= insertVal) {
            break;
        }
        if (cur.val > nextval) {
            if (nextval >= insertVal) {
                break;
            } else if (cur.val <= insertVal) {
                break;
            }
        }
        if (cur.next) {
            cur = cur.next;
        } else {
            throw Error("none next node");
        }
    }
    node.next = cur.next;
    cur.next = node;
    return head;
}
