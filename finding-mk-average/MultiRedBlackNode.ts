import { RedBlackNode } from "https://deno.land/std@0.173.0/collections/red_black_node.ts";

export class MultiRedBlackNode<T> extends RedBlackNode<T> {
    count = 0;
    declare parent: MultiRedBlackNode<T> | null;
    declare left: MultiRedBlackNode<T> | null;
    declare right: MultiRedBlackNode<T> | null;
}
