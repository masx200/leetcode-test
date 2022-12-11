import { PriorityQueue } from "../kth-largest-element-in-a-stream/PriorityQueue.ts";

function minRefuelStops(
    target: number,
    startFuel: number,
    stations: number[][],
): number {
    const pq = PriorityQueue<number>((a, b) => b - a);

    let ans = 0;
    let fuel = startFuel;
    let prev = 0;
    const n = stations.length;
    for (let i = 0; i <= n; i++) {
        const curr = i < n ? stations[i][0] : target;
        fuel -= curr - prev;
        while (fuel < 0 && !pq.isEmpty()) {
            fuel += pq.head() ?? 0;
            pq.shift();
            ans++;
        }
        if (fuel < 0) {
            return -1;
        }
        if (i < n) {
            pq.offer(stations[i][1]);

            prev = curr;
        }
    }
    return ans;
}
export default minRefuelStops;
