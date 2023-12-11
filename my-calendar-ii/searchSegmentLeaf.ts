import { SegmentTree } from "../my-calendar-iii/SegmentTree.ts";
import { searchSegmentChildren } from "./searchSegmentChildren.ts";

/**查找指定范围内的叶子节点的方法 */
export function searchSegmentLeaf(
    start: number,
    end: number,
    node: SegmentTree,
    options: { each?(node: SegmentTree): void } = {},
): SegmentTree[] {
    const { each } = options;
    start = Math.max(start, node.start);
    end = Math.min(end, node.end);
    if (start > end || start > node.end || end < node.start) {
        return [];
    }

    if (start <= node.start && end >= node.end) {
        each?.(node);
        if (node.children.length) {
            return searchSegmentChildren(start, end, node.children, options);
        } else {
            return [node];
        }
    }

    if (!node.children.length) {
        const points = Array.from(
            new Set([node.start, node.end + 1, start, end + 1]),
        ).sort((a, b) => a - b);
        const segments = points
            .map((v, i, a) => [v, a[i + 1] - 1])
            .slice(0, -1)
            .filter(([a, b]) => node.start <= a && node.end >= b);

        node.children = segments.map(([a, b]) => SegmentTree(a, b, node.value));
    }
    if (node.children.length) {
        each?.(node);
        return searchSegmentChildren(start, end, node.children, options);
    }

    return [];
}
