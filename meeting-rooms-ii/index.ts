export default function minMeetingRooms(intervals: number[][]): number {
    const n = intervals.length;
    const sl: number[] = [];
    const el: number[] = [];

    for (let i = 0; i < n; i++) {
        const interval = intervals[i];
        sl.push(interval[0]);

        el.push(interval[1]);
    }

    sl.sort((a, b) => a - b);
    el.sort((a, b) => a - b);

    let i = 0,
        j = 0,
        res = 0,
        m = 0;

    while (i < n) {
        if (sl[i] < el[j]) {
            m++;
            i++;
        } else {
            m--;
            j++;
        }
        res = Math.max(res, m);
    }
    return res;
}
