import { searchSegmentLeaf } from "../mod.ts";
import { SegmentTree } from "../my-calendar-iii/SegmentTree.ts";

export default class RangeModule {
    #root: SegmentTree = SegmentTree(
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
        0
    );

    addRange(left: number, right: number): void {
        const nodes = searchSegmentLeaf(left, right - 1, this.#root);
        for (const node of nodes) {
            node.value = 1;
        }
    }

    queryRange(left: number, right: number): boolean {
        // const nodes = searchSegmentLeaf(left, right - 1, this.#root);
        // return nodes.every((node) => node.value === 1);
        return isRangeTracked(left, right, this.#root);
    }

    removeRange(left: number, right: number): void {
        const nodes = searchSegmentLeaf(left, right - 1, this.#root);
        for (const node of nodes) {
            node.value = 0;
        }
    }
}
function isRangeTracked(
    left: number,
    right: number,
    node: SegmentTree
): boolean {
    if (node.children.length) {
        return node.children.every((node) => isRangeTracked(left, right, node));
    } else {
        if (left <= node.start && right >= node.end) {
            return node.value === 1;
        } else {
            return true;
        }
    }
}
