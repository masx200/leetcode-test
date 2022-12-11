export default function removeCoveredIntervals(intervals: number[][]): number {
    intervals.sort((a, b) => (a[0] == b[0] ? b[1] - a[1] : a[0] - b[0]));
    let deleted = 0,
        pre = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][1] <= pre) deleted++;
        else pre = intervals[i][1];
    }
    return intervals.length - deleted;
}
