import { ascend } from "https://deno.land/std@0.187.0/collections/binary_search_tree.ts";

import RedBlackTree from "./RedBlackTree.ts";
import { reverseInOrderIterator } from "./reverseInOrderIterator.ts";

class DinnerPlates {
    #available = new RedBlackTree<number>(ascend);
    #stacks: number[][] = [];
    constructor(public capacity: number) {}

    push(val: number): void {
        const index = this.#available.isEmpty()
            ? this.#stacks.length
            : this.#available.min() ?? 0;

        if (index === this.#stacks.length) this.#stacks.push([]);

        const s = this.#stacks[index];

        s.push(val);

        if (s.length === this.capacity) this.#available.remove(index);
        else {
            this.#available.insert(index);
        }
    }

    pop(): number {
        return this.popAtStack(this.#stacks.length - 1);
    }

    popAtStack(index: number): number {
        if (
            index < 0 ||
            index >= this.#stacks.length ||
            this.#stacks[index].length === 0
        ) {
            return -1;
        }

        const s = this.#stacks[index];

        const val = s[s.length - 1];
        s.pop();

        if (s.length === this.capacity - 1) {
            this.#available.insert(index);
        }

        for (const node of reverseInOrderIterator(this.#available.getRoot())) {
            if (
                this.#stacks.length &&
                this.#stacks[this.#stacks.length - 1].length === 0
            ) {
                this.#stacks.pop();

                this.#available.removeTreeNode(node);
            }
        }

        return val;
    }
}
export default DinnerPlates;
