import { SegmentTree } from "../my-calendar-iii/SegmentTree.ts";
import { searchSegmentLeaf } from "./searchSegmentLeaf.ts";

/**
 * 搜索子区间的节点的方法
 */
export function searchSegmentChildren(
    start: number,
    end: number,
    nodes: SegmentTree[],
    options: { each?(node: SegmentTree): void } = {},
): SegmentTree[] {
    const trees: SegmentTree[] = [];
    for (const child of nodes) {
        trees.push(...searchSegmentLeaf(start, end, child, options));
    }
    return trees;
}
