const array = Symbol();
import { ListNode } from "../mod.ts";

class Solution {
    [array]: number[] = [];
    constructor(head: ListNode | null) {
        while (head) {
            this[array].push(head.val);

            head = head.next;
        }
    }

    getRandom(): number {
        return this[array][Math.floor(this[array].length * Math.random())];
    }
}

export default Solution;
