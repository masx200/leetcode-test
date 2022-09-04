import { Heap } from "../deps.ts";

export default class MedianFinder {
    #min: Heap<number>;
    #max: Heap<number>;
    constructor() {
        this.#min = new Heap((a, b) => a - b);
        this.#max = new Heap((a, b) => b - a);
    }
    addNum(num: number) {
        const max = this.#max,
            min = this.#min;
        const m = max.size(),
            n = min.size();
        if (m == n) {
            // 两个堆数目相等:m=n
            min.insert(num);
            max.insert(min.pop());
        } else {
            // 两个堆数目不相等:m=n+1
            max.insert(num);
            min.insert(max.pop());
        }
    }
    findMedian() {
        const max = this.#max,
            min = this.#min;
        if (max.size() === min.size()) {
            return (max.top() + min.top()) / 2;
        } else {
            return max.top();
        }
    }
}
