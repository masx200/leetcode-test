import { PriorityQueue } from "./PriorityQueue.ts";

interface KthLargest {
    add(val: number): number;
}
function KthLargest(k: number, nums: number[]): KthLargest {
    const minheap = PriorityQueue<number>((a, b) => a - b, nums);

    function add(val: number): number {
        minheap.offer(val);

        while (minheap.length() > k) {
            minheap.shift();
        }
        if (minheap.length()) {
            const tail = minheap.head();
            if (typeof tail !== "undefined") {
                return tail;
            }
        }
        throw Error("pop empty heap");
    }
    return { add };
}
export default KthLargest;
