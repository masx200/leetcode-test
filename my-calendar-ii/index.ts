import { SegmentTree } from "../my-calendar-iii/SegmentTree.ts";
import { searchSegmentTree } from "./searchSegmentTree.ts";

export default class MyCalendarTwo {
    #root: SegmentTree = SegmentTree(
        Number.MIN_SAFE_INTEGER,
        Number.MAX_SAFE_INTEGER,
    );
    // #result = 0;

    #increase(nodes: SegmentTree[]): boolean {
        for (const node of nodes) {
            if (node.value >= 2) return false;
        }
        for (const node of nodes) {
            node.value += 1;
            // this.#result = Math.max(this.#result, node.value);
        }
        return true;
    }
    book(start: number, end: number): boolean {
        const nodes = searchSegmentTree(start, end - 1, this.#root);

        return this.#increase(nodes);
    }
}
