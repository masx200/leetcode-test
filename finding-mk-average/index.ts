import { Deque } from "../deps.ts";
import { reverseInOrderIterator } from "../dinner-plate-stacks/reverseInOrderIterator.ts";
import { InOrderIterator } from "./InOrderIterator.ts";
import { MultiRedBlackTree } from "./MultiRedBlackTree.ts";

class MKAverage {
    total = 0;
    m: number;
    k: number;
    queue = new Deque<number>();
    count = 0;

    tree = new MultiRedBlackTree<number>((a, b) => a - b);
    constructor(m: number, k: number) {
        this.m = m;
        this.k = k;
    }

    addElement(num: number) {
        this.queue.pushBack(num);

        this.tree.insert(num);
        this.total += num;
        this.count++;

        const root = this.tree.getRoot();
        if (!root) throw Error("null root");

        if (this.queue.size() === this.m + 1) {
            const willBeDelete: number = this.queue.front();
            this.queue.popFront();

            this.total -= willBeDelete;
            this.tree.remove(willBeDelete);
            const root = this.tree.getRoot();
            if (!root) throw Error("null root");
        }
    }

    calculateMKAverage(): number {
        if (this.count < this.m) return -1;

        let ret = this.total;
        const root = this.tree.getRoot();
        if (!root) throw Error("null root");

        let k = this.k;

        for (const node of InOrderIterator(root)) {
            const min = Math.min(k, this.tree.getCount(node.value));
            ret -= node.value * min;
            k -= min;
            if (k === 0) break;
        }
        k = this.k;
        for (const node of reverseInOrderIterator(root)) {
            const min = Math.min(k, this.tree.getCount(node.value));
            ret -= node.value * min;
            k -= min;
            if (k === 0) break;
        }

        return Math.floor(ret / (this.m - this.k * 2));
    }
}
export default MKAverage;
