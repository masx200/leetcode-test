/** 定义一个区间树节点接口*/
export interface SegmentTree {
    start: number;
    end: number;
    value: number;
    children: SegmentTree[];
}
/**创建一个区间树节点的方法 */
export function SegmentTree(
    start = Number.MIN_SAFE_INTEGER,
    end = Number.MAX_SAFE_INTEGER,
    value = 0,
    children: SegmentTree[] = [],
): SegmentTree {
    return { start, end, value, children };
}
