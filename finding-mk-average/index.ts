import { BinarySearchNode } from "https://deno.land/std@0.173.0/collections/binary_search_node.ts";
import { RedBlackNode } from "https://deno.land/std@0.173.0/collections/red_black_node.ts";
import RedBlackTreeExtended from "../dinner-plate-stacks/RedBlackTree.ts";


function createRedBlackTreeExtended() {
    return new RedBlackTreeExtended<{ index: number; value: number }>((a, b) =>
        a.value === b.value ? a.index - b.index : a.value - b.value
    );
}
class MKAverage {
    s1 = createRedBlackTreeExtended();
    s2 = createRedBlackTreeExtended();
    s3 = createRedBlackTreeExtended();
    sum = 0;
    m: number;
    k: number;
    queue = new Map<
        number,
        {
            tree: RedBlackTreeExtended<{ index: number; value: number }>;
            node: RedBlackNode<{ index: number; value: number }>;
        }
    >();
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
                const sorted = this.pending
                    .map((value, index) => ({ value, index }))
                    .sort((a, b) =>
                        a.value === b.value
                            ? a.index - b.index
                            : a.value - b.value
                    );

                for (const [i, { value, index }] of sorted.entries()) {
                    if (i < this.k) {
                        const tree = this.s1;
                        const node = tree.insertGetNode({ value, index });
                        if (!node) throw Error("accident");
                        this.queue.set(index, { tree, node });
                    } else if (i < this.m - this.k) {
                        const tree = this.s2;
                        const node = tree.insertGetNode({ value, index });
                        if (!node) throw Error("accident");
                        this.queue.set(index, { tree, node });

                        this.sum += value;
                    } else {
                        const tree = this.s3;
                        const node = tree.insertGetNode({ value, index });
                        if (!node) throw Error("accident");
                        this.queue.set(index, { tree, node });
                    }
                }
                this.pending.length = 0;
            }
            return;
        } else {
            const count = this.count;

            const maxNode = this.s1.getRoot()?.findMaxNode();
            if (!maxNode) throw Error("accident");
            const max = maxNode?.value.value ?? 0;
            if (num < max) {
                const node = this.s1.insertGetNode({
                    index: count,
                    value: num,
                });
                if (!node) throw Error("accident");

                this.queue.set(count, { tree: this.s1, node });
                const newNode = this.s2.insertGetNode({
                    value: max,
                    index: maxNode.value.index,
                }) as RedBlackNode<{
                    index: number;
                    value: number;
                }>;
                this.queue.set(maxNode.value.index, {
                    tree: this.s2,
                    node: newNode,
                });
                this.sum += max;
            } else {
                const minNode = this.s3
                    .getRoot()
                    ?.findMinNode() as BinarySearchNode<{
                    index: number;
                    value: number;
                }>;
                const min = minNode?.value.value ?? 0;

                if (num > min) {
                    const node = this.s3.insertGetNode({
                        index: count,
                        value: num,
                    });
                    if (!node) throw Error("accident");

                    this.queue.set(count, { tree: this.s3, node });
                    const newNode = this.s2.insertGetNode({
                        value: max,
                        index: maxNode.value.index,
                    }) as RedBlackNode<{
                        index: number;
                        value: number;
                    }>;
                    this.queue.set(maxNode.value.index, {
                        tree: this.s2,
                        node: newNode,
                    });
                    this.sum += min;
                }
            }

            this.count++;
        }
    }

    calculateMKAverage(): number {
        if (this.count < this.m) return -1;

        return Math.floor(this.sum / (this.m - 2 * this.k));
    }
}
export default MKAverage;
