export interface SegmentTree {
    start: number;
    end: number;
    value: number;
    children: SegmentTree[];
}
export function SegmentTree(
    start = 0,
    end = 0,
    value = 0,
    children: SegmentTree[] = [],
): SegmentTree {
    return { start, end, value, children };
}
