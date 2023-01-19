import RedBlackTreeExtended from "../dinner-plate-stacks/RedBlackTree.ts";
import { MultiRedBlackNode } from "./MultiRedBlackNode.ts";

export class MultiRedBlackTree<T> extends RedBlackTreeExtended<T> {
    root: MultiRedBlackNode<T> | null = null;
    getRoot(): MultiRedBlackNode<T> | null {
        return this.root;
    }
}
