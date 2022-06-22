import { SegmentTree } from "../my-calendar-iii/SegmentTree.ts";
import { searchSegmentLeaf } from "./searchSegmentLeaf.ts";

export function searchSegmentChildren(
    start: number,
    end: number,
    nodes: SegmentTree[],
): SegmentTree[] {
    const trees: SegmentTree[] = [];
    for (const child of nodes) {
        trees.push(...searchSegmentLeaf(start, end, child));
    }
    return trees;
}
