export default function hardestWorker(_n: number, logs: number[][]): number {
    let max = logs[0][1],
        res = [logs[0][0]];
    for (let i = 1; i < logs.length; i++) {
        const sub = logs[i][1] - logs[i - 1][1];
        if (sub > max) {
            res = [logs[i][0]];
            max = sub;
        } else if (sub === max) {
            res.push(logs[i][0]);
        }
    }
    return Math.min(...res);
}
