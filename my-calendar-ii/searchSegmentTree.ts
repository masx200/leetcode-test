import { SegmentTree } from "../my-calendar-iii/SegmentTree.ts";
import { searchSegmentChildren } from "./searchSegmentChildren.ts";

export function searchSegmentTree(
    start: number,
    end: number,
    node: SegmentTree,
): SegmentTree[] {
    start = Math.max(start, node.start);
    end = Math.min(end, node.end);
    if (start > end || start > node.end || end < node.start) {
        return [];
    }

    if (start <= node.start && end >= node.end) {
        return node.children.length
            ? searchSegmentChildren(start, end, node.children)
            : [node];
    }

    if (!node.children.length) {
        const points = Array.from(
            new Set([node.start, node.end + 1, start, end + 1]),
        ).sort((a, b) => a - b);
        const segments = points
            .map((v, i, a) => [v, a[i + 1] - 1])
            .slice(0, -1)
            .filter(([a, b]) => node.start <= a && node.end >= b);

        node.children.push(
            ...segments.map(([a, b]) => SegmentTree(a, b, node.value)),
        );
    }
    if (node.children.length) {
        return searchSegmentChildren(start, end, node.children);
    }

    return [];
}
