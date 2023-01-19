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
        this.queue.push(num);

        this.tree.insert(num);
        this.total += num;
        this.count++;
        // debugger;
        // console.log("addElement", num);
        const root = this.tree.getRoot();
        if (!root) throw Error("null root");
        // {
        // console.log(root);
        // const temp: [number, number][] = [];
        // for (const node of InOrderIterator(root)) {
        //     temp.push([node.value, this.tree.getCount(node.value)]);
        // }
        // console.log(JSON.stringify(temp));
        // }
        if (this.queue.length === this.m + 1) {
            const willBeDelete: number = this.queue[0];
            this.queue.shift();
            // console.log("deleteElement", willBeDelete);
            this.total -= willBeDelete;
            this.tree.remove(willBeDelete);
            const root = this.tree.getRoot();
            if (!root) throw Error("null root");
            // {
            //     console.log(root);
            //     const temp: [number, number][] = [];
            //     for (const node of InOrderIterator(root)) {
            //         temp.push([node.value, this.tree.getCount(node.value)]);
            //     }
            //     console.log(JSON.stringify(temp));
            // }
        }
    }

    calculateMKAverage(): number {
        if (this.count < this.m) return -1;

        let ret = this.total;
        const root = this.tree.getRoot();
        if (!root) throw Error("null root");
        // console.log("calculateMKAverage");
        // {
        //     console.log(root);
        //     const temp: [number, number][] = [];
        //     for (const node of InOrderIterator(root)) {
        //         temp.push([node.value, this.tree.getCount(node.value)]);
        //     }
        //     console.log(JSON.stringify(temp));
        // }

        // console.log(root)
        let k = this.k;

        for (const node of InOrderIterator(root)) {
            // console.log(node)
            const min = Math.min(k, this.tree.getCount(node.value));
            ret -= node.value * min;
            k -= min;
            if (k === 0) break;
        }
        k = this.k;
        for (const node of reverseInOrderIterator(root)) {
            // debugger;
            const min = Math.min(k, this.tree.getCount(node.value));
            ret -= node.value * min;
            k -= min;
            if (k === 0) break;
        }
        // console.log(ret)
        // debugger;
        return Math.floor(ret / (this.m - this.k * 2));
    }
}
export default MKAverage;
