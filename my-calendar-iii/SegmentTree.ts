export interface SegmentTree {
    start: number;
    end: number;
    value: number;
    children: SegmentTree[];
}
export function SegmentTree(
    start = Number.MIN_SAFE_INTEGER,
    end = Number.MAX_SAFE_INTEGER,
    value = 0,
    children: SegmentTree[] = [],
): SegmentTree {
    return { start, end, value, children };
}
