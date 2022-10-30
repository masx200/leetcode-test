import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

class BSTIterator {
    #root: TreeNode | null | undefined;
    #stack: TreeNode[] = [];
    #cur: TreeNode | null | undefined;
    constructor(root: TreeNode | null) {
        this.#root = root;
        this.#cur = root;
    }

    next(): number {
        if (!this.#root) {
            return -Infinity;
        }
        while (this.#cur) {
            this.#stack.push(this.#cur);
            this.#cur = this.#cur.left;
        }
        const cur = this.#stack.pop();
        const ret = cur?.val;
        this.#cur = cur?.right;

        return ret ?? Infinity;
    }

    hasNext(): boolean {
        if (!this.#root) {
            return false;
        }
        return !!(this.#stack.length || this.#cur);
    }
}

export default BSTIterator;
