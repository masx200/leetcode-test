/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
export default BSTIterator;
