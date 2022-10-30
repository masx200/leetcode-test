import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export function* InOrderIterator(root: TreeNode | null): Generator<number> {
    if (!root) return;
    yield* InOrderIterator(root.left);
    yield (root.val);
    yield* InOrderIterator(root.right);
}
class BSTIterator {
    #gen: Generator<number, void, unknown>;
    #result: IteratorResult<number, void>;
    #list: TreeNode | null = null;
    constructor(root: TreeNode | null) {
        this.#gen = InOrderIterator(root);
        this.#result = this.#gen.next();
    }

    next(): number {
        if (this.#list === null) {
            const value = this.#result.value;
            if (typeof value === "undefined") return Infinity;
            this.#list = new TreeNode(value);
            this.#result = this.#gen.next();
            return value;
        }
        if (this.#list?.right) {
            this.#list = this.#list.right;
            return this.#list.val;
        } else {
            const value = this.#result.value;
            if (typeof value === "undefined") return Infinity;
            this.#result = this.#gen.next();

            const node = new TreeNode(value, this.#list);
            this.#list.right = node;
            this.#list = node;
            return value;
        }
    }

    hasNext(): boolean {
        return !!(this.#list?.right || !this.#result.done);
    }
    prev(): number {
        if (this.#list?.left) this.#list = this.#list.left;
        return this.#list?.val ?? -Infinity;
    }

    hasPrev(): boolean {
        return !!(this.#list?.left);
    }
}

export default BSTIterator;
