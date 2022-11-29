export default function findJudge(n: number, trust: number[][]): number {
    const inDegrees = new Array<number>(n + 1).fill(0);
    const outDegrees = new Array<number>(n + 1).fill(0);
    for (const edge of trust) {
        const x = edge[0],
            y = edge[1];
        ++inDegrees[y];
        ++outDegrees[x];
    }
    for (let i = 1; i <= n; ++i) {
        if (inDegrees[i] === n - 1 && outDegrees[i] === 0) {
            return i;
        }
    }
    return -1;
}
