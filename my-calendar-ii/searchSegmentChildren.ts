import { SegmentTree } from "../my-calendar-iii/SegmentTree.ts";
import { searchSegmentTree } from "./searchSegmentTree.ts";

export function searchSegmentChildren(
    start: number,
    end: number,
    nodes: SegmentTree[],
): SegmentTree[] {
    const trees: SegmentTree[] = [];
    for (const child of nodes) {
        trees.push(...searchSegmentTree(start, end, child));
    }
    return trees;
}
