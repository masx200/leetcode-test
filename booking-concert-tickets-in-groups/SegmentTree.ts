import { TreeNode } from "./TreeNode.ts";

class SegmentTree<T> {
    #root: TreeNode<T>;
    constructor(
        public start: number,
        public end: number,
        public initializer: (index: number) => T,
        public operation: (a: T, b: T) => T,
    ) {
        this.#root = new TreeNode<T>();
        this.#build(this.#root, start, end);
    }
    #build(node: TreeNode<T>, start: number, end: number) {
        if (start === end) {
            node.value = this.initializer(start);
            return;
        }
        const mid = Math.floor((start + end) / 2);
        node.left = new TreeNode<T>();
        node.right = new TreeNode<T>();
        this.#build(node.left, start, mid);
        this.#build(node.right, mid + 1, end);
        node.value = this.operation(node.left.value, node.right.value);
    }
    change(
        index: number,
        value: T,
        node: TreeNode<T> = this.#root,
        start: number = this.start,
        end: number = this.end,
    ): void {
        if (start === end) {
            node.value = value;
            return;
        }
        const mid = Math.floor((start + end) / 2);
        if (!node.left || !node.right) {
            throw Error("node.left and node.right empty");
        }
        if (index <= mid) {
            this.change(index, value, node.left, start, mid);
        } else {
            this.change(index, value, node.right, mid + 1, end);
        }
        node.value = this.operation(node.left.value, node.right.value);
    }
    query(
        left: number,
        right: number,
        node: TreeNode<T> = this.#root,
        start: number = this.start,
        end: number = this.end,
    ): T {
        if (start === left && right === end) {
            return node.value;
        }
        const mid = Math.floor((start + end) / 2);
        if (!node.left || !node.right) {
            throw Error("node.left and node.right empty");
        }
        if (right <= mid) {
            return this.query(left, right, node.left, start, mid);
        } else if (left > mid) {
            return this.query(left, right, node.right, mid + 1, end);
        } else {
            return this.operation(
                this.query(left, mid, node.left, start, mid),
                this.query(mid + 1, right, node.right, mid + 1, end),
            );
        }
    }
}
export { SegmentTree };
