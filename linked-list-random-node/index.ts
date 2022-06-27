/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
const array=Symbol()
import{ListNode}from"../mod.ts"
class Solution {
    [array]:number[]=[]
    constructor(head: ListNode | null) {
while(head){
    this[array].push(head.val)
    
    head=head.next
}
    }

    getRandom(): number {
        return this[array][Math.floor(this[array].length*Math.random())]

    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

export default Solution
