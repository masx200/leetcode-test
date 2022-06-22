import { searchSegmentTree } from "../mod.ts";
import { SegmentTree } from "../my-calendar-iii/SegmentTree.ts";

export default class RangeModule {
    #root: SegmentTree = SegmentTree(
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
        0
    );

    addRange(left: number, right: number): void {
        const nodes = searchSegmentTree(left, right - 1, this.#root);
        for (const node of nodes) {
            node.value = 1;
        }
    }

    queryRange(left: number, right: number): boolean {
        const nodes = searchSegmentTree(left, right - 1, this.#root);
        return nodes.every((node) => node.value === 1);
    }

    removeRange(left: number, right: number): void {
        const nodes = searchSegmentTree(left, right - 1, this.#root);
        for (const node of nodes) {
            node.value = 0;
        }
    }
}
