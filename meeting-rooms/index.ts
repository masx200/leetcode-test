export default function canAttendMeetings(intervals: number[][]): boolean {
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i + 1 < intervals.length; i++) {
        if (intervals[i][1] > intervals[i + 1][0]) {
            return false;
        }
    }

    return true;
}
