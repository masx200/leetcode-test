import { PriorityQueue } from "./PriorityQueue.ts";

interface KthLargest {
    add(val: number): number;
}
const KthLargest: (k: number, nums: number[]) => KthLargest = function (
    k,
    nums,
) {
    //ιεΊζε
    const minheap = PriorityQueue<number>((a, b) => -a + b, nums);
    //
    // for (const n of nums) {
    //     minheap.offer(n);
    // }
    //Array.from(nums).sort((a, b) => -a + b)

    function add(val: number): number {
        minheap.offer(val);
        // minheap.sort((a, b) => -a + b)
        while (minheap.length() > k) {
            minheap.pop();
        }
        if (minheap.length()) {
            const tail = minheap.tail();
            if (typeof tail !== "undefined") {
                return tail;
            }
        }
        throw Error("pop empty heap");
    }
    return { add };
};
export default KthLargest;
