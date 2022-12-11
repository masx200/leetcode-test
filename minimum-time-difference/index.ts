export default function findMinDifference(timePoints: string[]): number {
    const n = timePoints.length;
    if (n > 1440) {
        return 0;
    }
    timePoints.sort();
    let ans = Number.MAX_VALUE;
    const t0Minutes = getMinutes(timePoints[0]);
    let preMinutes = t0Minutes;
    for (let i = 1; i < n; ++i) {
        const minutes = getMinutes(timePoints[i]);
        ans = Math.min(ans, minutes - preMinutes); // 相邻时间的时间差
        preMinutes = minutes;
    }
    ans = Math.min(ans, t0Minutes + 1440 - preMinutes); // 首尾时间的时间差
    return ans;
}

function getMinutes(t: string) {
    const a = t.split("").map(Number);
    return (a[0] * 10 + a[1]) * 60 + a[3] * 10 + a[4];
}
