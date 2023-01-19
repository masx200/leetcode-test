import { RedBlackNode } from "https://deno.land/std@0.173.0/collections/red_black_node.ts";
import RedBlackTreeExtended from "../dinner-plate-stacks/RedBlackTree.ts";

class MKAverage {
    m1 = new Map<number, number>();
    m2 = new Map<number, number>();
    m3 = new Map<number, number>();

    s1 = new RedBlackTreeExtended<number>((a, b) => a - b);

    s2 = new RedBlackTreeExtended<number>((a, b) => a - b);
    s3 = new RedBlackTreeExtended<number>((a, b) => a - b);
    sum = 0;
    m: number;
    k: number;
    queue = new Array<number>();
    count = 0;
    pending: number[] = [];

    constructor(m: number, k: number) {
        this.m = m;
        this.k = k;
    }

    addElement(num: number) {
        if (this.count < this.m) {
            this.pending.push(num);
            this.count++;

            if (this.pending.length === this.m) {
                this.queue.push(...this.pending);
                const sorted = this.pending.slice().sort((a, b) => a - b);

                for (const [i, value] of sorted.entries()) {
                    if (i < this.k) {
                        const tree = this.s1;

                        if ((this.m1.get(value) ?? 0) === 0) {
                            tree.insertGetNode(value);
                        }
                        this.m1.set(value, 1 + (this.m1.get(value) ?? 0));
                    } else if (i < this.m - this.k) {
                        const tree = this.s2;
                        if ((this.m2.get(value) ?? 0) === 0) {
                            tree.insertGetNode(value);
                        }
                        this.m2.set(value, 1 + (this.m2.get(value) ?? 0));
                        this.sum += value;
                    } else {
                        const tree = this.s3;
                        if ((this.m3.get(value) ?? 0) === 0) {
                            tree.insertGetNode(value);
                        }
                        this.m3.set(value, 1 + (this.m3.get(value) ?? 0));
                    }
                }

                this.pending.length = 0;
            }
            return;
        } else {
            const maxNode = this.s1
                .getRoot()
                ?.findMaxNode() as RedBlackNode<number>;
            if (!maxNode) throw Error("accident");
            const max = maxNode?.value ?? 0;
            if (num < max) {
                const value = num;
                if ((this.m1.get(value) ?? 0) === 0) this.s1.insertGetNode(num);
                this.m1.set(value, (this.m1.get(value) ?? 0) + 1);
                const max = this.s1.max() ?? 0;
                if ((this.m2.get(max) ?? 0) === 0) this.s2.insertGetNode(max);
                this.m2.set(max, (this.m2.get(max) ?? 0) + 1);
                this.sum += max;

                this.m1.set(max, (this.m1.get(max) ?? 0) - 1);
                if ((this.m1.get(max) ?? 0) <= 0) {
                    this.s1.removeTreeNode(maxNode);
                }
            } else {
                const minNode = this.s3
                    .getRoot()
                    ?.findMinNode() as RedBlackNode<number>;
                const min = minNode?.value ?? 0;

                if (num > min) {
                    const value = num;
                    if ((this.m3.get(value) ?? 0) === 0) {
                        this.s3.insertGetNode(num);
                    }
                    this.m3.set(value, (this.m3.get(value) ?? 0) + 1);

                    const min = this.s3.min() ?? 0;
                    if ((this.m2.get(value) ?? 0) === 0) {
                        this.s2.insertGetNode(min);
                    }
                    this.m2.set(value, (this.m2.get(value) ?? 0) + 1);
                    this.sum += min;

                    this.m3.set(min, (this.m3.get(min) ?? 0) - 1);
                    if ((this.m3.get(min) ?? 0) <= 0) {
                        this.s3.removeTreeNode(minNode);
                    }
                } else {
                    this.sum += num;
                    const value = num;
                    if ((this.m2.get(value) ?? 0) === 0) {
                        this.s2.insertGetNode(num);
                    }
                    this.m2.set(value, (this.m2.get(value) ?? 0) + 1);
                }
            }
            const first = this.queue[0];
            if (!first) throw Error("accident");

            if ((this.m1.get(first) ?? 0) > 0) {
                this.m1.set(first, (this.m1.get(first) ?? 0) - 1);
                if ((this.m1.get(first) ?? 0) <= 0) this.s1.remove(first);
                const min = this.s2.min() ?? 0;
                if ((this.m1.get(min) ?? 0) === 0) this.s1.insertGetNode(min);
                this.m1.set(min, (this.m1.get(min) ?? 0) + 1);
                this.m2.set(min, (this.m2.get(min) ?? 0) - 1);

                this.sum -= min;
                if ((this.m2.get(min) ?? 0) <= 0) this.s2.remove(min);
            } else if ((this.m3.get(first) ?? 0) > 0) {
                this.m3.set(first, (this.m3.get(first) ?? 0) - 1);
                if ((this.m3.get(first) ?? 0) <= 0) this.s3.remove(first);
                const max = this.s2.max() ?? 0;
                if ((this.m3.get(max) ?? 0) === 0) this.s3.insertGetNode(max);
                this.sum -= max;

                this.m3.set(max, (this.m3.get(max) ?? 0) + 1);
                this.m2.set(max, (this.m2.get(max) ?? 0) - 1);

                if ((this.m2.get(max) ?? 0) <= 0) this.s2.remove(max);
            } else {
                this.m2.set(first, (this.m2.get(first) ?? 0) - 1);
                if ((this.m2.get(first) ?? 0) <= 0) this.s2.remove(first);
                this.sum -= first;
            }
            this.queue.shift();
            this.count++;
            this.queue.push(num);
        }
        // console.log(this);
    }

    calculateMKAverage(): number {
        if (this.count < this.m) return -1;
        // console.log(this);
        return Math.floor(this.sum / (this.m - 2 * this.k));
    }
}
export default MKAverage;
