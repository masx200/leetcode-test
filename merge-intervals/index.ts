export default function merge(intervals: number[][]): number[][] {
    if (intervals.length == 0) {
        return [];
    }
    intervals.sort((a, b) => a[0] - b[0]);
    const merged: number[][] = [];

    for (const interval of intervals) {
        if (merged.length === 0 || merged.slice(-1)[0][1] < interval[0]) {
            merged.push(interval);
        } else {
            merged[merged.length - 1][1] = Math.max(
                merged[merged.length - 1][1],
                interval[1],
            );
        }
    }

    return merged;
}
