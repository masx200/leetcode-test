import { reverseInOrderIterator } from "../dinner-plate-stacks/reverseInOrderIterator.ts";
import { InOrderIterator } from "./InOrderIterator.ts";
import { MultiRedBlackTree } from "./MultiRedBlackTree.ts";

class MKAverage {
    total = 0;
    m: number;
    k: number;
    queue = new Array<number>();
    count = 0;

    tree = new MultiRedBlackTree<number>((a, b) => a - b);
    constructor(m: number, k: number) {
        this.m = m;
        this.k = k;
    }

    addElement(num: number) {
        const willBeDelete = this.queue[0];
        this.queue.shift();

        this.queue.push(num);

        this.total -= willBeDelete;
        this.tree.remove(willBeDelete);
        this.tree.insert(num);
        this.total += num;
        this.count++;
    }

    calculateMKAverage(): number {
        if (this.count < this.m) return -1;

        let ret = this.total;
        const root = this.tree.getRoot();
        if (!root) throw Error("null root");
        let k = this.k;

        for (const node of InOrderIterator(root)) {
            const min = Math.min(k, node.count);
            ret -= node.value * min;
            k -= min;
            if (k === 0) break;
        }
        for (const node of reverseInOrderIterator(root)) {
            const min = Math.min(k, node.count);
            ret -= node.value * min;
            k -= min;
            if (k === 0) break;
        }
        return Math.floor(ret / (this.m - this.k * 2));
    }
}
export default MKAverage;
