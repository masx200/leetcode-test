import { RedBlackNode } from "https://deno.land/std@0.173.0/collections/red_black_node.ts";

export class MultiRedBlackNode<T> extends RedBlackNode<T> {
    count = 1;

    left: MultiRedBlackNode<T> | null = null;
    right: MultiRedBlackNode<T> | null = null;
    constructor(public parent: MultiRedBlackNode<T> | null, public value: T) {
        super(parent, value);
    }
}
