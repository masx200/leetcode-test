import { TreeNode } from '../binary-tree-inorder-traversal/TreeNode.ts';

class CBTInserter {
    #root: TreeNode | null;
    #deque: TreeNode[] = [];
    constructor(root: TreeNode | null) {
        this.#root = root;
    }

    insert(v: number): number {
        if (this.#root && this.#deque.length === 0) {
            this.#deque.push(this.#root);
            for (let i = 0; i < this.#deque.length; i++) {
                const node = this.#deque[i];

                if (node.left) {
                    this.#deque.push(node.left);
                }
                if (node.right) {
                    this.#deque.push(node.right);
                }
            }
        }
        const n = this.#deque.length;
        const parent = this.#deque[(n - 1) >> 1];
        const node = new TreeNode(v);
        if (!parent.left) {
            parent.left = node;
        } else {
            parent.right = node;
        }
        this.#deque.push(node);
        return parent.val;
    }

    get_root(): TreeNode | null {
        return this.#root;
    }
}
export default CBTInserter;
