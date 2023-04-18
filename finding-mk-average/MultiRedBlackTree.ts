import { ascend } from "https://deno.land/std@0.184.0/collections/_comparators.ts";
import { Direction } from "https://deno.land/std@0.184.0/collections/binary_search_node.ts";
import { RedBlackNode } from "https://deno.land/std@0.184.0/collections/red_black_node.ts";
import RedBlackTreeExtended from "../dinner-plate-stacks/RedBlackTree.ts";

export class MultiRedBlackTree<T> extends RedBlackTreeExtended<T> {
    #hash: (v: T) => any;
    constructor(
        compare: (a: T, b: T) => number = ascend,
        hash: (v: T) => any = (v) => v,
    ) {
        super(compare);
        this.#hash = hash;
    }
    #value2count = new Map<any, number>();

    getCount(value: T): number {
        return this.#value2count.get(this.#hash(value)) ?? 0;
    }
    setCount(value: T, count: number) {
        return this.#value2count.set(this.#hash(value), count);
    }
    hasCount(value: T) {
        return (this.#value2count.get(this.#hash(value)) ?? 0) > 0;
    }
    root: RedBlackNode<T> | null = null;
    getRoot(): RedBlackNode<T> | null {
        return this.root;
    }
    findNode(value: T): RedBlackNode<T> | null {
        return super.findNode(value) as RedBlackNode<T> | null;
    }
    remove(value: T): boolean {
        // console.log("remove", value);
        // const node = this.findNode(value);

        if (!this.hasCount(value)) {
            return false;
        } else {
            // node.count--;
            this.setCount(value, (this.getCount(value) ?? 1) - 1);
            // console.log("decrement", node);
            // console.trace();
            if ((this.getCount(value) ?? 1) <= 0) {
                // if (node.count <= 0) {
                // this.removeTreeNode(node);
                super.remove(value);
            }
            return true;
        }
    }
    insert(value: T): boolean {
        // const node = this.findNode(value);

        if (this.hasCount(value)) {
            // node.count++;
            this.setCount(value, (this.getCount(value) ?? 1) + 1);
            // console.log("increment", node);
            return true;
        } else {
            this.insertGetNode(value);
            // super.insert(value);
            this.setCount(value, 1);
        }
        return true;
    }
    insertGetNode(value: T): RedBlackNode<T> | null {
        let node = this.insertNode(
            RedBlackNode,
            value,
        ) as RedBlackNode<T> | null;
        if (node) this.setCount(value, 1);

        if (node) {
            while (node.parent?.red) {
                let parent: RedBlackNode<T> = node.parent!;
                const parentDirection: Direction = parent
                    .directionFromParent()!;
                const uncleDirection: Direction = parentDirection === "right"
                    ? "left"
                    : "right";
                const uncle: RedBlackNode<T> | null =
                    parent.parent![uncleDirection] ?? null;

                if (uncle?.red) {
                    parent.red = false;
                    uncle.red = false;
                    parent.parent!.red = true;
                    node = parent.parent!;
                } else {
                    if (node === parent[uncleDirection]) {
                        node = parent;
                        this.rotateNode(node, parentDirection);
                        parent = node.parent!;
                    }
                    parent.red = false;
                    parent.parent!.red = true;
                    this.rotateNode(parent.parent!, uncleDirection);
                }
            }
            this.root!.red = false;
        }
        return node;
    }
}
