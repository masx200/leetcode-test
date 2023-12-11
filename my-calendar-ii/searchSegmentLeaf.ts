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

        if (node.children.length === 3) {
            //如果有三个子节点,则把更靠近的中间的节点保留,剩下的节点放另一边下面的子节点中
            const mid = Math.round((node.start + node.end) / 2);

            // console.log(node);

            if (
                Math.abs(mid - node.children[0].end) <
                    Math.abs(mid - node.children[2].start)
            ) {
                const left = node.children[0];
                const right = SegmentTree(
                    node.children[1].start,
                    node.children[2].end,
                    node.value,
                    [node.children[1], node.children[2]],
                );
                node.children = [left, right];
            } else {
                const left = SegmentTree(
                    node.children[0].start,
                    node.children[1].end,
                    node.value,
                    [node.children[0], node.children[1]],
                );
                const right = node.children[2];
                node.children = [left, right];
            }
            // console.log(node);
        }
    }
    if (node.children.length) {
        each?.(node);
        return searchSegmentChildren(start, end, node.children, options);
    }

    return [];
}
