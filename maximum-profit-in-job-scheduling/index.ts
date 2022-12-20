import { upperBound } from "./upperBound.ts";

function jobScheduling(
    startTime: number[],
    endTime: number[],
    profit: number[],
): number {
    const jobs = startTime
        .map((v, i) => [v, endTime[i], profit[i]])
        .sort((a, b) => a[1] - b[1]);

    const n = startTime.length;
    const dp = Array<number>(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        const k = upperBound(0, i - 1, (m) => jobs[m][1] > jobs[i - 1][0]);
        dp[i] = Math.max(dp[i - 1], dp[k] + jobs[i - 1][2]);
    }

    return Math.max(...dp);
}
export default jobScheduling;
