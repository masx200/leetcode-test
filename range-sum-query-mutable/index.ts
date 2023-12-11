import { TreeNode } from "../binary-tree-inorder-traversal/TreeNode.ts";

export default class NumArray {
    #root = new TreeNode();
    #len: number;
    constructor(nums: number[]) {
        this.#len = nums.length;
        build(this.#root, 0, nums.length - 1, nums);
    }

    update(index: number, val: number): void {
        change(index, val, this.#root, 0, this.#len - 1);
    }

    sumRange(left: number, right: number): number {
        return query(left, right, this.#root, 0, this.#len - 1);
    }
}
export function build(
    node: TreeNode,
    start: number,
    end: number,
    nums: number[]
) {
    if (start === end) {
        node.val = nums[start];
        return;
    }
    const mid = Math.floor((start + end) / 2);
    pushdown(node);
    if (node.left) build(node.left, start, mid, nums);
    if (node.right) build(node.right, mid + 1, end, nums);
    pushup(node);
}
function pushdown(node: TreeNode) {
    if (!node.left) node.left = new TreeNode();
    if (!node.right) node.right = new TreeNode();
}

export function change(
    index: number,
    val: number,
    node: TreeNode,
    start: number,
    end: number
): void {
    if (start === end) {
        node.val = val;
        return;
    }
    const mid = Math.floor((start + end) / 2);
    if (!node.left || !node.right) {
        throw Error("node.left and node.right empty");
    }
    if (index <= mid) {
        change(index, val, node.left, start, mid);
    } else {
        change(index, val, node.right, mid + 1, end);
    }
    pushup(node);
}
function pushup(node: TreeNode) {
    node.val = (node.left?.val ?? 0) + (node.right?.val ?? 0);
}

export function query(
    left: number,
    right: number,
    node: TreeNode,
    start: number,
    end: number
): number {
    if (start === left && right === end) {
        return node.val;
    }
    const mid = Math.floor((start + end) / 2);
    if (!node.left || !node.right) {
        throw Error("node.left and node.right empty");
    }
    if (right <= mid) {
        return query(left, right, node.left, start, mid);
    } else if (left > mid) {
        return query(left, right, node.right, mid + 1, end);
    } else {
        return (
            query(left, mid, node.left, start, mid) +
            query(mid + 1, right, node.right, mid + 1, end)
        );
    }
}
