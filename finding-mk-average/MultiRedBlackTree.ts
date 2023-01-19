import { Direction } from "https://deno.land/std@0.173.0/collections/binary_search_node.ts";
import { RedBlackNode } from "https://deno.land/std@0.173.0/collections/red_black_node.ts";
import RedBlackTreeExtended from "../dinner-plate-stacks/RedBlackTree.ts";

export class MultiRedBlackTree<T> extends RedBlackTreeExtended<T> {
    static node2count = new WeakMap<RedBlackNode<any>, number>();

    static getCount(node: RedBlackNode<any>): number {
        return MultiRedBlackTree.node2count.get(node) ?? 1;
    }
    root: RedBlackNode<T> | null = null;
    getRoot(): RedBlackNode<T> | null {
        return this.root;
    }
    findNode(value: T): RedBlackNode<T> | null {
        return super.findNode(value) as RedBlackNode<T> | null;
    }
    remove(value: T): boolean {
        const node = this.findNode(value);

        if (!node) {
            return false;
        } else {
            // node.count--;
            MultiRedBlackTree.node2count.set(
                node,
                (MultiRedBlackTree.node2count.get(node) ?? 1) - 1,
            );
            console.log("decrement", node);
            // console.trace();
            if ((MultiRedBlackTree.node2count.get(node) ?? 1) <= 0) {
                // if (node.count <= 0) {
                this.removeTreeNode(node);
            }
            return true;
        }
    }
    insert(value: T): boolean {
        const node = this.findNode(value);

        if (node) {
            // node.count++;
            MultiRedBlackTree.node2count.set(
                node,
                (MultiRedBlackTree.node2count.get(node) ?? 1) + 1,
            );
            console.log("increment", node);
            return true;
        } else {
            this.insertGetNode(value);
        }
        return true;
    }
    insertGetNode(value: T): RedBlackNode<T> | null {
        let node = this.insertNode(
            RedBlackNode,
            value,
        ) as RedBlackNode<T> | null;
        if (node) MultiRedBlackTree.node2count.set(node, 1);

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
