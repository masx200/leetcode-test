import { searchSegmentLeaf } from "../my-calendar-ii/searchSegmentLeaf.ts";
import { SegmentTree } from "./SegmentTree.ts";

export default class MyCalendarThree {
    #root: SegmentTree = SegmentTree(
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER
    );
    #result = 0;

    #increase(nodes: SegmentTree[]) {
        for (const node of nodes) {
            node.value += 1;
            this.#result = Math.max(this.#result, node.value);
        }
    }
    book(start: number, end: number): number {
        const nodes = searchSegmentLeaf(start, end - 1, this.#root);

        this.#increase(nodes);

        return this.#result;
    }
}
