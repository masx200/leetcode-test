import { RedBlackNode } from "https://deno.land/std@0.170.0/collections/red_black_node.ts";
import { RedBlackTree } from "https://deno.land/std@0.170.0/collections/red_black_tree.ts";

export default class<T> extends RedBlackTree<T> {
    getRoot() {
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
    }
}
export function* reverseInOrderIterator<
    T extends { left: T | null; right: T | null },
>(root: T | null): Generator<T> {
    if (!root) {
        return;
    }
    yield* reverseInOrderIterator(root.right);
    yield root;
    yield* reverseInOrderIterator(root.left);
}
