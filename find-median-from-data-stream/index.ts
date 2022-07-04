import { PriorityQueue } from "../kth-largest-element-in-a-stream/PriorityQueue.ts";

class MedianFinder {
    #pq = PriorityQueue<number>((a, b) => a - b);
    constructor() {}

    addNum(num: number): void {
        this.#pq.offer(num);
    }

    findMedian(): number {
        const len = this.#pq.length();
        if (len % 2 === 0) {
            return (
                ((this.#pq.at(Math.floor(len / 2 - 1)) ?? 0) +
                    (this.#pq.at(Math.floor(len / 2)) ?? 0)) /
                2
            );
        }
        return this.#pq.at(Math.floor(len / 2)) ?? 0;
    }
}

export default MedianFinder;
