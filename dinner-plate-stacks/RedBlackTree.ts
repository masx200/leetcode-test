import {
    Direction,
    RedBlackNode,
} from "https://deno.land/std@0.179.0/collections/red_black_node.ts";
import { RedBlackTree } from "https://deno.land/std@0.179.0/collections/red_black_tree.ts";

export default class RedBlackTreeExtended<T> extends RedBlackTree<T> {
    insertGetNode(value: T): RedBlackNode<T> | null {
        let node = this.insertNode(
            RedBlackNode,
            value,
        ) as RedBlackNode<T> | null;
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

    getRoot(): RedBlackNode<T> | null {
        return this.root;
    }
    removeTreeNode(removeNode: RedBlackNode<T>) {
        const successorNode: RedBlackNode<T> | null = (
            !removeNode.left || !removeNode.right
                ? removeNode
                : removeNode.findSuccessorNode()!
        ) as RedBlackNode<T>;
        const replacementNode: RedBlackNode<T> | null = successorNode.left ??
            successorNode.right;
        if (replacementNode) replacementNode.parent = successorNode.parent;

        if (!successorNode.parent) {
            this.root = replacementNode;
        } else {
            successorNode.parent[successorNode.directionFromParent()!] =
                replacementNode;
        }

        if (successorNode !== removeNode) {
            removeNode.value = successorNode.value;
            removeNode = successorNode;
        }
        this._size--;
        const node = removeNode;
        if (node && !node.red) {
            this.removeFixup(node.parent, node.left ?? node.right);
        }
        return;
    }
}
