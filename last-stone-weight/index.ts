import { PriorityQueue } from "../kth-largest-element-in-a-stream/PriorityQueue.ts";

export default function lastStoneWeight(stones: number[]): number {
    const maxheap = PriorityQueue<number>((a, b) => a - b);
    stones.forEach((stone) => maxheap.offer(stone));
    while (maxheap.length() >= 2) {
        const y = maxheap.pop();
        const x = maxheap.pop();
        if (typeof y === "number" && typeof x === "number" && x !== y) {
            maxheap.offer(y - x);
        }
    }
    return maxheap.tail() ?? 0;
}
