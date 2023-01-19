import { Direction } from "https://deno.land/std@0.173.0/collections/binary_search_node.ts";
import RedBlackTreeExtended from "../dinner-plate-stacks/RedBlackTree.ts";
import { MultiRedBlackNode } from "./MultiRedBlackNode.ts";

export class MultiRedBlackTree<T> extends RedBlackTreeExtended<T> {
    root: MultiRedBlackNode<T> | null = null;
    getRoot(): MultiRedBlackNode<T> | null {
        return this.root;
    }
    findNode(value: T): MultiRedBlackNode<T> | null {
        return super.findNode(value) as MultiRedBlackNode<T> | null;
    }
    remove(value: T): boolean {
        const node = this.findNode(value);

        if (!node) {
            return false;
        } else {
            node.count--;
            if (node.count <= 0) this.removeTreeNode(node);
            return true;
        }
    }
    insert(value: T): boolean {
        const node = this.findNode(value);

        if (node) {
            node.count++;
            return true;
        } else {
            this.insertGetNode(value);
        }
        return true;
    }
    insertGetNode(value: T): MultiRedBlackNode<T> | null {
        let node = this.insertNode(
            MultiRedBlackNode,
            value,
        ) as MultiRedBlackNode<T> | null;
        if (node) {
            while (node.parent?.red) {
                let parent: MultiRedBlackNode<T> = node.parent!;
                const parentDirection: Direction = parent
                    .directionFromParent()!;
                const uncleDirection: Direction = parentDirection === "right"
                    ? "left"
                    : "right";
                const uncle: MultiRedBlackNode<T> | null =
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
