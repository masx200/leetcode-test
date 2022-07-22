function intersectionSizeTwo(intervals: number[][]): number {
    intervals.sort((a, b) => {
        return a[1] < b[1] || (a[1] === b[1] && a[0] > b[0]) ? -1 : 1;
    });

    let last1 = -1;
    let last2 = -1;
    let res = 0;
    for (const q of intervals) {
        if (q[0] > last2) {
            last1 = q[1] - 1;
            last2 = q[1];
            res += 2;
        } else if (q[0] > last1) {
            last1 = last2;
            last2 = q[1];
            res++;
        }
    }
    return res;
}
export default intersectionSizeTwo;