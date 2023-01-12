export default function maxCount(
    m: number,
    n: number,
    ops: number[][],
): number {
    return ops
        .reduce(([a, b], [v, d]) => [Math.min(a, v), Math.min(b, d)], [m, n])
        .reduce((a, v) => a * v);
}
